import connectDB from "./configs/db.js";
import express from "express";
import dotenv from "dotenv";
import authRoutes from "../backend/routers/authRoutes.js";
import studentRoutes from "./routers/student.router.js";
import cors from "cors";
import ErrorMiddleware from './middleware/error.js'


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.VITE_MONGO_URI,
    credentials: true
}));
app.use(ErrorMiddleware)

app.use("/api/auth",authRoutes);
app.use("/api/students",studentRoutes);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
});
