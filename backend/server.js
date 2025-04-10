import connectDB from "./configs/db.js";
import express from "express";
import dotenv from "dotenv";
import authRoutes from "../backend/routers/authRoutes.js";
import cors from "cors";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.VITE_MONGO_URI,
    credentials: true
}));
console.log(process.env.VITE_MONGO_URI)
app.use("/api/auth",authRoutes);

app.listen(process.env.PORT || 5000, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});