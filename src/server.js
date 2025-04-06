const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const EmployeeModel = require("./models/employee"); // Make sure this file exists and is correct

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Signup route
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  EmployeeModel.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      return EmployeeModel.create({ name, email, password });
    })
    .then(newUser => res.json(newUser))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await EmployeeModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
