const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
app.get("/", (req, res) => {
  res.send("hello from node API");
});
app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
