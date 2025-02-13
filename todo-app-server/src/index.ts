import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// complete the problem of the database connection (the lastthiing i did is to change the port to 4000)
