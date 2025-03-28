import * as Comlink from 'comlink';

const physics = {
  calculate(data) {
    // Heavy calculations here
    return performCalculations(data);
  }
};

Comlink.expose(physics);
