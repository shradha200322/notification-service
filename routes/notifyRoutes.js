const express = require("express");
const router = express.Router();
const { sendNotification} = require("../controllers/notifyController");
const Notification = require("../models/notification");
const User = require("../models/user");
router.get("/send", (req, res) => {
  res.render("sendNotification");
});

router.get("/notify", async (req, res) => {
    const users = await User.find();  
    res.render("dashboard", { users });
  });
  

router.post("/send", sendNotification);
router.get("/:userId", async (req, res) => {
    try {
      const notifications = await Notification.find({ userId: req.params.userId }).sort({ createdAt: -1 });
      res.render("notifications", { notifications });
    } catch (err) {
      res.status(500).send("Error retrieving notifications");
    }
  });
  

module.exports = router;
