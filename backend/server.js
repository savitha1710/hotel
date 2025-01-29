// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");


// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose
//   .connect("mongodb+srv://savithaseenivasan82:Savi123@cluster0.vepay.mongodb.net/hotelbooking", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error(err));

// // Booking Schema
// const bookingSchema = new mongoose.Schema({
//   guestName: String,
//   phone: String,
//   checkInDate: String,
//   checkOutDate: String,
// });
// const Booking = mongoose.model("Booking", bookingSchema);

// // API Route to Save Booking
// app.post("/api/bookings", async (req, res) => {
//   try {
//     const newBooking = new Booking(req.body);
//     await newBooking.save();
//     res.status(201).json({ message: "Booking Confirmed!", booking: newBooking });
//   } catch (error) {
//     res.status(500).json({ message: "Error saving booking", error });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// // Connect to MongoDB
// mongoose
//   .connect("mongodb+srv://savithaseenivasan82:Savi123@cluster0.vepay.mongodb.net/hotelbooking", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error(err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });
// const User = mongoose.model("User", userSchema);

// // Booking Schema
// const bookingSchema = new mongoose.Schema({
//   guestName: String,
//   phone: String,
//   checkInDate: String,
//   checkOutDate: String,
// });
// const Booking = mongoose.model("Booking", bookingSchema);

// // 📌 **User Registration API**
// app.post("/api/register", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User already exists" });

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Error registering user", error });
//   }
// });

// // 📌 **User Login API**
// app.post("/api/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid email or password" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

//     res.status(200).json({ message: "Login successful", token, user: { id: user._id, email: user.email } });
//   } catch (error) {
//     res.status(500).json({ message: "Error logging in", error });
//   }
// });

// // 📌 **Save Booking API**
// app.post("/api/bookings", async (req, res) => {
//   try {
//     const newBooking = new Booking(req.body);
//     await newBooking.save();
//     res.status(201).json({ message: "Booking Confirmed!", booking: newBooking });
//   } catch (error) {
//     res.status(500).json({ message: "Error saving booking", error });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://savithaseenivasan82:Savi123@cluster0.vepay.mongodb.net/hotelbooking";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.error(" MongoDB Connection Error:", err));

// 📌 **User Schema**
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// 📌 **Booking Schema**
const bookingSchema = new mongoose.Schema({
  guestName: String,
  phone: String,
  checkInDate: String,
  checkOutDate: String,
});
const Booking = mongoose.model("Booking", bookingSchema);


// 📌 **User Registration API**
app.post("/api/register", async (req, res) => {




  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: " User registered successfully!" });
  } catch (error) {
    console.error(" Registration Error:", error);
    res.status(500).json({ message: "Error registering user", error });
  }


});

// 📌 **User Login API**
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ 
      message: " Login successful", 
      token, 
      user: { id: user._id, email: user.email } 
    });
  } catch (error) {
    console.error(" Login Error:", error);
    res.status(500).json({ message: "Error logging in", error });
  }
});

// 📌 **Save Booking API (Protected Route)**
app.post("/api/bookings", async (req, res) => {
  try {
    const { guestName, phone, checkInDate, checkOutDate } = req.body;

    if (!guestName || !phone || !checkInDate || !checkOutDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Booking(req.body);
    await newBooking.save();

    res.status(201).json({ message: "Booking Confirmed!", booking: newBooking });
  } catch (error) {
    console.error(" Booking Error:", error);
    res.status(500).json({ message: "Error saving booking", error });
  }
});

// 📌 **Start Server**
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
