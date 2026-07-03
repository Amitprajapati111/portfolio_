const mongoose = require('mongoose');

const connectDB = async () => {
  // If already connected, reuse the connection
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
    
    // In production/Vercel, enforce MONGODB_URI is provided
    if (process.env.VERCEL && !process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is missing on Vercel.');
    }

    await mongoose.connect(connStr);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    if (!process.env.VERCEL) {
      process.exit(1);
    }
    throw error; // Throw error to let Express/Vercel handle and log it properly
  }
};

module.exports = connectDB;

