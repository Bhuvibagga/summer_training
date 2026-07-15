const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;



app.use(express.json());

app.use(cors());

app.use((req, res, next) => {

    const currentTime = new Date().toLocaleString();

    console.log(`[${currentTime}] ${req.method} ${req.url}`);

    next();

});



let products = [
    {
        id: 1,
        name: "AIRPODS",
        price: 15000
    },
    {
        id: 2,
        name: "LAPTOP",
        price: 55000
    }
];

let users = [];

const SECRET_KEY = "bhuvi_secret";



app.get("/", (req, res) => {

    res.send("Express Server is Running on Port 5000 ");

});



app.get("/products", (req, res) => {

    res.status(200).json(products);

});


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

// UPDATE PRODUCT

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

    if (name) product.name = name;

    if (price) product.price = price;

    res.status(200).json(product);

});

// DELETE PRODUCT

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



app.post("/signup", async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {

        return res.status(400).json({

            message: "All fields are required"

        });

    }

    const existingUser = users.find(

        user => user.email === email

    );

    if (existingUser) {

        return res.status(400).json({

            message: "User already exists"

        });

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {

        id: users.length + 1,

        name,

        email,

        password: hashedPassword

    };

    users.push(newUser);

    res.status(201).json({

        message: "Signup successful",

        user: {

            id: newUser.id,

            name: newUser.name,

            email: newUser.email

        }

    });

});



app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = users.find(

        user => user.email === email

    );

    if (!user) {

        return res.status(404).json({

            message: "User not found"

        });

    }

    const isMatch = await bcrypt.compare(

        password,

        user.password

    );

    if (!isMatch) {

        return res.status(401).json({

            message: "Invalid password"

        });

    }

    const token = jwt.sign(

        {

            id: user.id,

            email: user.email

        },

        SECRET_KEY,

        {

            expiresIn: "1h"

        }

    );

    res.status(200).json({

        message: "Login successful",

        token

    });

});


function verifyToken(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {

        return res.status(401).json({

            message: "Token missing"

        });

    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(

            token,

            SECRET_KEY

        );

        req.user = decoded;

        next();

    }

    catch {

        return res.status(401).json({

            message: "Invalid Token"

        });

    }

}



app.get("/profile", verifyToken, (req, res) => {

    res.status(200).json({

        message: "Welcome to the Protected Route",

        user: req.user

    });

});



app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});