import mongoose from "mongoose";
import conf from "../config/conf.js";

const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        const connect = await mongoose.connect(conf.MONGO_URI);
        console.log("MongoDB connection successful:", connect.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};


export default connectDB;