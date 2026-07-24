const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products", error: error.message });
    }
});

// GET one product by id
router.get("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid product id" });
        }

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch product", error: error.message });
    }
});

// CREATE a new product
router.post("/", async (req, res) => {
    try {
        const { name, price, category, brand, stock } = req.body;

        if (!name || price === undefined || !category || !brand || stock === undefined) {
            return res.status(400).json({ message: "Name, price, category, brand, and stock are required" });
        }

        const newProduct = new Product({
            name,
            price,
            category,
            brand,
            stock,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: "Failed to create product", error: error.message });
    }
});

// UPDATE a product
router.put("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid product id" });
        }

        const { name, price, category, brand, stock } = req.body;

        if (!name && price === undefined && !category && !brand && stock === undefined) {
            return res.status(400).json({ message: "At least one valid field is required for update" });
        }

        const updateData = {};

        if (name !== undefined) updateData.name = name;
        if (price !== undefined) updateData.price = price;
        if (category !== undefined) updateData.category = category;
        if (brand !== undefined) updateData.brand = brand;
        if (stock !== undefined) updateData.stock = stock;

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
            runValidators: true,
        });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Failed to update product", error: error.message });
    }
});

// DELETE a product
router.delete("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid product id" });
        }

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete product", error: error.message });
    }
});

module.exports = router;
