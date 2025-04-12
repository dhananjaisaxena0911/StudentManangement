import userModelLogin from "../models/userLogin.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";

import bcrypt from 'bcryptjs';

export const Login = catchAsyncError(async (req, res, next) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return next(new ErrorHandler("Please enter Email and Password", 400));
    }

    const user = await userModelLogin.findOne({ Email }).select("+Password");

    if (!user) {
      // If user is not found, return a generic error message
      return res.status(401).json({
        message: "Wrong Credentials",
      });
    }

    const isMatched = await bcrypt.compare(Password, user.Password);

    if (!isMatched) {
      return res.status(401).json({
        message: "Wrong Credentials",
      });
    }

    const token = user.getJwtToken();
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
      err,
    });
  }
});



export const Signup = catchAsyncError(async (req, res, next) => {
  try {
    const { Name, Email, Password } = req.body;

    if (!Name || !Email || !Password) {
      return next(new ErrorHandler("Something is missing", 400));
    }

    const existingUser = await userModelLogin.findOne({ Email });
    if (existingUser) {
      return next(new ErrorHandler("Email already exists", 400));
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(Password, 10);

    const newUser = new userModelLogin({
      Name,
      Email,
      Password: hashedPassword, // Save the hashed password
    });

    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
      err,
    });
  }
});


export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return next(new ErrorHandler("Email and new password are required", 400));
  }

  const user = await userModelLogin.findOne({ Email: email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  // Hash the new password
  user.Password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
});

