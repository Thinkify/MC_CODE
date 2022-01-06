import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        default: "user",
    },
    role: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default:
            "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
});
const dataSet = mongoose.models.User || mongoose.model("User", userSchema);
export default dataSet;
