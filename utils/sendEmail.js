const nodemailer = require("nodemailer");
require('dotenv').config(); 
// Configure your email credentials
const transporter = nodemailer.createTransport({
  service: "gmail", // or "hotmail", "yahoo", etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, text) => {
    try {
      await transporter.sendMail({
        from: '"Notify System" <your_email@gmail.com>',
        to,
        subject,
        text
      });
      console.log("✅ Email sent to:", to);
      return true;
    } catch (error) {
      console.error("❌ Failed to send email:", error.message);
      return false;
    }
  };
  
module.exports = {sendEmail};
