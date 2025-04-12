import userModelLogin from "../models/userLogin.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
 import ErrorHandler from "../utils/errorHandler.js";

const Login = catchAsyncError(async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password){
      return next(new ErrorHandler("Please enter Email and Password", 400))
    }

    const user = await userModelLogin.findOne({ Email }).select("+Password");

    if (!user) {
      return next(new ErrorHandler("User not found", 404))
    }

    const isMatched = user.comparePassword(Password);

    if (!isMatched) {
       return res.status(401).json({
         message: "Invalid Credentials",
       });
     }

    const token = user.getJwtToken();
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token
    });

  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: "Server Error",
      err,
    });
  }
});

const Signup = catchAsyncError(async (req, res, next) => {
  try {
    const { Name, Email, Password } = req.body;

    if (!Name || !Email || !Password) {
      return next(new ErrorHandler("Something is missing", 400))
    }
    const existingUser = await userModelLogin.findOne({
      Email,
    });
    if (existingUser) {
      return next(new ErrorHandler("Email already exists", 400))
    }
    const newUser = new userModelLogin({
      Name,
      Email,
      Password,
    });
    await newUser.save();
    res.status(201).json({
       success:true,
       message: "User registerd successfully",
       newUser
     });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
      err,
    });
  }
});

export { Login, Signup };
