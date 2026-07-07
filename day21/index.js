const express = require("express");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// In-memory data
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 60000
    },
    {
        id: 2,
        name: "Phone",
        price: 25000
    }
];

// GET ALL
app.get("/products", (req, res) => {

    res.status(200).json(products);

});

// GET BY ID
app.get("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(
        p => p.id === id
    );

    if (!product) {

        return res.status(404).json({
            message: "Product not found"
        });

    }

    res.status(200).json(product);

});

// POST
app.post("/products", (req, res) => {

    const { name, price } = req.body;

    if (!name || !price) {

        return res.status(400).json({
            message: "Name and Price required"
        });

    }

    const newProduct = {

        id: products.length + 1,
        name,
        price

    };

    products.push(newProduct);

    res.status(201).json(newProduct);

});

// PUT
app.put("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(
        p => p.id === id
    );

    if (!product) {

        return res.status(404).json({
            message: "Product not found"
        });

    }

    const { name, price } = req.body;

    product.name = name ?? product.name;
    product.price = price ?? product.price;

    res.status(200).json(product);

});

// DELETE
app.delete("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = products.findIndex(
        p => p.id === id
    );

    if (index === -1) {

        return res.status(404).json({
            message: "Product not found"
        });

    }

    products.splice(index, 1);

    res.status(200).json({
        message: "Product deleted"
    });

});

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});