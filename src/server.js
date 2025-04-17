import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"; // ✅ Only one import
import jwt from "jsonwebtoken"; // JWT for user authentication
import EmployeeModel from "./models/employee.js";
import DonorModel from "./models/donor.js";
import validator from "validator"; // For validation
import helmet from "helmet"; // Secure HTTP headers

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet()); // Added helmet for security

// MongoDB connection using environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Employee signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // Check if user already exists
    const existingUser = await EmployeeModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // Create new user
    const newUser = await EmployeeModel.create({ name, email, password });
    
    // Send response
    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Error during signup", error: err.message });
  }
});

// Employee login without bcrypt
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    // Find user by email
    const user = await EmployeeModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords directly (no hashing, plain text comparison)
    if (password !== user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({
      message: "Login successful",
      user: { name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Error during login", error: err.message });
  }
});

// Donor registration with validation
app.post("/donor", async (req, res) => {
  const { name, bloodType, state, city, phone } = req.body;

  if (!name || !bloodType || !state || !city || !phone) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!validator.isMobilePhone(phone)) {
    return res.status(400).json({ message: "Invalid phone number format" });
  }

  try {
    // Check if donor with the same phone number already exists
    const existingDonor = await DonorModel.findOne({ phone });
    if (existingDonor) {
      return res.status(400).json({ message: "Donor with this phone number already exists" });
    }

    // Create a new donor record
    const newDonor = await DonorModel.create({ name, bloodType, state, city, phone });
    res.status(201).json(newDonor);
  } catch (err) {
    console.error("Error saving donor:", err); // Detailed logging for debugging
    res.status(500).json({ message: "Error saving donor", error: err.message });
  }
});

// Search donor with case-insensitive regex matching and better error handling
app.get("/search-donor", async (req, res) => {
  const { bloodType, state, city } = req.query;

  // Ensure at least one search criterion is provided
  if (!bloodType && !state && !city) {
    return res.status(400).json({ message: "Please provide at least one search criterion (bloodType, state, or city)." });
  }

  try {
    // Build query object based on available criteria
    const query = {};
    if (bloodType) query.bloodType = new RegExp(`^${bloodType}$`, "i");  // Case-insensitive match for bloodType
    if (state) query.state = new RegExp(`^${state}$`, "i");  // Case-insensitive match for state
    if (city) query.city = new RegExp(`^${city}$`, "i");  // Case-insensitive match for city

    // Search for donors in the database
    const donors = await DonorModel.find(query);

    // Return empty array with status 200 if no donors are found
    if (donors.length === 0) {
      return res.status(200).json([]);  // Changed to 200 with empty array, not 404
    }

    res.status(200).json(donors);  // Return matching donors
  } catch (err) {
    console.error("Error fetching donors:", err);  
    res.status(500).json({ message: "Error fetching donors", error: err.message });
  }
});

// Start server
app.listen(process.env.PORT || 3001, () => {
  console.log("Server running on port", process.env.PORT || 3001);
});
