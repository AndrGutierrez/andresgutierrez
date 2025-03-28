// hooks/useWorker.js
import * as Comlink from 'comlink';

export const useWorker = (workerPath) => {
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const workerInstance = new Worker(workerPath);
    const workerApi = Comlink.wrap(workerInstance);
    setWorker(workerApi);

    return () => {
      workerInstance.terminate();
    };
  }, [workerPath]);

  return worker;
};
