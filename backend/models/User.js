const mongoose = require("mongoose");
const { isEmail } = require('validator');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [3, "Username must be a minumin length of 3 characters"],
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [isEmail, "Please enter a valid email"],
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be a minimum length of 8 characters"]
  },
  shopcart: []
});


const User = mongoose.model("user", UserSchema);
module.exports = User;