const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");

const app = express();

const PORT = 8000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/userdb")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });

// User Router
app.use("/api", userRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
