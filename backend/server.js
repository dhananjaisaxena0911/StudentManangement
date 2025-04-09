import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import authRoutes from "../backend/routers/authRoutes.js";

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use('/auth',authRoutes);