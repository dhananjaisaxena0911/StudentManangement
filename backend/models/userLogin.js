import mongoose from 'mongoose';
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
const userLoginSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    Email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email address is required",
        validate: [validateEmail, "Please fill a valid email Address!"],
    },
    Password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("UserModel", userLoginSchema);

export default UserModel;
