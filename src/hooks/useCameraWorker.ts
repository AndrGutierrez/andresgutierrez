import { useEffect, useState } from 'react';
import * as Comlink from 'comlink';

export const useCameraWorker = () => {
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const workerPath = new URL('../workers/camera.worker.js', import.meta.url);
    const workerInstance = new Worker(workerPath);
    const workerApi = Comlink.wrap(workerInstance);
    setWorker(workerApi);

    return () => workerInstance.terminate();
  }, []);

  return worker;
};
