const express = require("express");
const User = require("../model/userModel");

const router = express.Router();

// POST /api/users
router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);

        const savedUser = await user.save();

        res.status(201).json({
            message: "User added successfully",
            user: savedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding user",
            error: error.message
        });
    }
});

// GET /api/users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            message: "Users retrieved successfully",
            users: users
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving users",
            error: error.message
        });
    }
});

module.exports = router;
