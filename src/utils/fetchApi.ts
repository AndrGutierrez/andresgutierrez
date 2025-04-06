import { SignatureV4 } from "@aws-sdk/signature-v4";
import { Sha256 } from "@aws-crypto/sha256-js";
import { HttpRequest } from "@aws-sdk/protocol-http";

export const fetchApi = async <T = any>(route: string): Promise<T> => {
  const API_URL = process.env.API_URL;
  const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
  const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
  const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

  if (!API_URL || !AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION) {
    throw new Error('Missing required AWS configuration');
  }

  const url = new URL(`${API_URL}/${route}`);
  const request = new HttpRequest({
    hostname: url.hostname,
    path: url.pathname,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      host: url.hostname,
    },
  });

  const signer = new SignatureV4({
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
    region: AWS_REGION,
    service: "execute-api", // or your service name
    sha256: Sha256,
  });

  try {
    const signedRequest = await signer.sign(request);
    const response = await fetch(url.toString(), {
      headers: signedRequest.headers,
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json() as T;
  } catch (error) {
    console.error('Error in fetchApi:', error);
    throw error;
  }
};

export default fetchApi;
