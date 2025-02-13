import mongoose from "mongoose";
import dotenv from "dotenv";

// Load env variables if not already loaded
dotenv.config();

const connectDB = async () => {
  try {
    // Fetch the connection string template and password from the environment
    const mongoUriTemplate = process.env.MONGO_URL || process.env.MONGO_URI;
    const mongoPassword = process.env.MONGO_PASSWORD;

    if (!mongoUriTemplate || !mongoPassword) {
      console.error(
        "MONGO_URL/MONGO_URI or MONGO_PASSWORD is not defined in your .env file."
      );
      process.exit(1);
    }

    // Replace the placeholder with the actual password
    const mongoURI = mongoUriTemplate.replace(
      "<db_password>",
      encodeURIComponent(mongoPassword)
    );

    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
