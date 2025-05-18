const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true },  // e.g., "email", "sms", "in-app"
  message: { type: String, required: true },
  status: { type: String, enum: ["pending", "sent", "failed"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);
