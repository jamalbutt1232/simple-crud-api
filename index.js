const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
app.get("/", (req, res) => {
  res.send("hello from node API");
});
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productID = await Product.findById(id);
    res.status(200).json(productID);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.delete("/api/deleteproduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "deleted product successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/updateproducts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(product);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {}
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
