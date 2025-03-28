import * as Comlink from 'comlink';

const cameraWorker = {
  calculatePosition(currentPos, mousePos, lerpFactor) {
    const newX = currentPos.x + (mousePos.x - currentPos.x) * lerpFactor;
    const newY = currentPos.y + (mousePos.y - currentPos.y) * lerpFactor;
    return { x: newX, y: newY, z: currentPos.z };
  }
};

Comlink.expose(cameraWorker);
