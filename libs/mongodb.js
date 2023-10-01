
import mongoose from "mongoose";

const {MONGO_URI} = process.env

if(!MONGO_URI) {
  throw new Error("Invalid env")
}

const connectDB = async () => {
  try {
    const {connection} = await mongoose.connect(MONGO_URI)
    
    if (connection.readyState === 1) {
      console.log("DB Connected")
      return Promise.resolve(true)
    }
  } catch (error) {
    return Promise.reject(true)
  }
};

export default connectDB;
