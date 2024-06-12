const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
app.get("/", (req, res) => {
  res.send("hello from node API");
});
mongoose
  .connect(
    "mongodb+srv://jamalbutt1232:tqp8Ej2owj4kaunJ@backenddb.qvhlzcf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Connection failed");
  });
