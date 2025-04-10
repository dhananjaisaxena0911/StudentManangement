import UserModel from '../models/userLogin.js';
import bcrypt from 'bcrypt';

const signup = async (req, res) => {
    console.log(req.body);

    try {
        console.log(req.body); 
        const {
            Name,
            Email,
            Password
        } = req.body;

        if (!Name || !Email || !Password) {
            return res.status(400).json({
                message: "Name, Email, and Password are required."
            });
        }
        const existingUser = await UserModel.findOne({
            Email
        });
        if (existingUser) {
            return res.status(400).json({
                message: 'Email already registered'
            });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);

        const newUser = new UserModel({
            Name,
            Email,
            Password: hashedPassword,
        });

        await newUser.save();
        res.status(200).json({
            message: "User registered Successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

export default signup;