const mongoose = require("mongoose");
const colors = require("colors");

// Set the strictQuery option to prepare for the change in Mongoose 7
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB server issue: ${error}`.bgRed.white);
  }
};

module.exports = connectDB;