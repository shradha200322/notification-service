const Notification = require("../models/notification");
const User = require("../models/user"); 
const { sendEmail } = require("../utils/sendEmail");

async function processNotifications() {
  try {
    const pendingNotifications = await Notification.find({ status: "pending" });

    for (const notification of pendingNotifications) {
      const user = await User.findById(notification.userId);
      if (!user) {
        console.error("User not found for notification:", notification._id);
        notification.status = "failed";
        await notification.save();
        continue;
      }

      const success = await sendEmail(user.email, "Notification", notification.message);
      notification.status = success ? "sent" : "failed";
      await notification.save();
    }
  } catch (err) {
    console.error("Error processing notifications:", err);
  }
}

setInterval(processNotifications, 30000);
