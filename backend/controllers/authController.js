import userModelLogin from "../models/userLogin.js";

const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await userModelLogin.findOne({ Email });
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    const isMatch = Password === user.Password;

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credential",
      });
    }
    res.status(200).json({
      message: "Login Successful",
      loggedin: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      err,
    });
  }
};

const Signup = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;

    if (!Name || !Email || !Password) {
      return res.status(400).json({
        message: "Something is missing",
      });
    }
    const existingUser = await userModelLogin.findOne({
      Email,
    });
    if (existingUser) {
      return res.status(400).json({
        message: "Email Already Present",
      });
    }
    const newUser = new userModelLogin({
      Name,
      Email,
      Password,
    });
    await newUser.save();
    res.status(200).json({
      message: "User registerd successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
      err,
    });
  }
};

export { Login, Signup };
