import UserModel from '../models/userLogin.js';
import jwt from 'jsonwebtoken';

const Loginup = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        const user = await UserModel.findOne({ Email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials!' });
        }

        const isMatch = await bcrypt.compare(Password, user.Password); 
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            message: "Login Successful",
            token
        });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};

export default Loginup;
