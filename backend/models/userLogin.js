import mongoose from 'mongoose';
const userLoginSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("UserModel", userLoginSchema);

export default UserModel;