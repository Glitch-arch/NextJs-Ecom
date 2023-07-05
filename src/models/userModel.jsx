import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  passowrd: {
    type: String,
    required: [true, "Please enter your password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgetPasswordToken: String,
  forgetPasswordExpire: Date,
  verifyToken: String,
  verifyTokenExpire: Date,
});

const User = mongoose.model("User", userSchema);
export default User;
