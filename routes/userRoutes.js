// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/create", async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      await User.create({ name, email, phone });
  
      const users = await User.find();
  
      res.render("dashboard", { users });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
module.exports = router;
