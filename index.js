import express from "express";
import { Worker } from "worker_threads";

const app = express();

app.get("/", (req, res) => {
  const worker = new Worker("./worker.js");

  worker.on("message", function (message) {
    res.send(message);
  });

  worker.postMessage("start!");
});
app.get("/fast", (req, res) => {
  res.send("fast");
});
app.listen(3000, () => {
  console.log("running on 3000");
});
