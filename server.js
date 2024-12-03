// Importing dependencies
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();// Load environment variables

// Importing route handlers
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();


app.use(helmet());// Middleware for security headers
app.use(cors());// Middleware to enable CORS
app.use(express.json());// Middleware to parse incoming JSON payloads

// Middleware to limit repeated requests from the same IP
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.error(err)
}) 


// Registering routes
app.use('/api/v1/auth', authRoutes);// Authentication routes
app.use('/api/v1/users', userRoutes);// User-related routes

// Start the server
app.listen(process.env.PORT)
