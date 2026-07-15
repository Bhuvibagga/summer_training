const mongoose = require("mongoose");

// Product schema for MongoDB storage
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
        },
        price: {
            type: Number,
            required: [true, "Product price is required"],
        },
        category: {
            type: String,
            required: [true, "Product category is required"],
        },
        brand: {
            type: String,
            required: [true, "Product brand is required"],
        },
        stock: {
            type: Number,
            required: [true, "Product stock is required"],
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
