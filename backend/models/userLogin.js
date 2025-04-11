import mongoose from "mongoose";
const userLoginSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    Email: {
        type: String,
        required: "Email address is required", 
        unique: true, 
    },
    Password: {
        type: String,
        required: true,
    },
});

const userModelLogin = mongoose.model("UserModel", userLoginSchema);

// Use export default to match ES Modules syntax
export default userModelLogin;