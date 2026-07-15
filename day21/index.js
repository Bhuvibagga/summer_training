const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Custom logging middleware
app.use((req, res, next) => {
    const currentTime = new Date().toLocaleString();
    console.log(`[${currentTime}] ${req.method} ${req.url}`);
    next();
});

let users = [];
const SECRET_KEY = "bhuvi_secret";

app.get("/", (req, res) => {
    res.send("Express Server is Running");
});

// Product routes now use MongoDB through Mongoose
app.use("/products", productRoutes);

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

// Start the server only after MongoDB connects
async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error.message);
    }
}

startServer();
