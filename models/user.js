const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },  // optional, if you send SMS
  // other fields like password, etc.
}, { timestamps: true });
module.exports = mongoose.models.User || mongoose.model("User", userSchema);