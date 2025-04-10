import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import router from "./routers/Login_router.mjs";  // Make sure the path is correct

dotenv.config();

const app = express();


app.use(express.json());

// Register routes
app.use("/api", router);
app.use("/api/signup",router);

// Start server
app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});
