
export const fetchApi = async <T = any>(route: string): Promise<T> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) throw new Error('NEXT_PUBLIC_API_URL is not defined');

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(`${API_URL}/${route}`, requestOptions);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    return await response.json() as T;
  } catch (error) {
    console.error('Error in fetchApi:', error);
    throw error;
  }
};
