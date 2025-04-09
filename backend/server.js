import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import router from "./routers/Login_router.mjs";
dotenv.config();

const app = express();

app.use(express.json()); 

app.use("/login", router); 
app.use("/signup",router);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});
