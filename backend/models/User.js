const mongoose = require("mongoose");
const { isEmail } = require('validator');

const UserSchema = mongoose.Schema({
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