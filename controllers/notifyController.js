const Notification = require("../models/notification");
const User = require("../models/user");
const queue = require("../queue/worker");

exports.sendNotification = async (req, res) => {
    const { userId, type, message } = req.body;
    try {
      const notification = new Notification({ userId, type, message });
      await notification.save();
      res.send(`
        <h2>Notification Sent!</h2>
        <p><a href="/${userId}">View User Notifications</a></p>
      `);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error sending notification");
    }
  };
  
