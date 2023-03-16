import { parentPort } from "worker_threads";
parentPort.on("message", () => {
  let counter = 0;
  while (counter < 1e10) {
    counter++;
    if (counter === 1e10) {
      parentPort.postMessage("Hi");
    }
  }
});
