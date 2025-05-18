const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");  
const notificationRoutes = require("./routes/notifyRoutes");
const app = express();        
const PORT = 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/Notify";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", notificationRoutes);
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
