const User = require("../models/User");


exports.member = (req, res) => {
  // Find one user
}

exports.signup = async (req, res) => {
  // Create new user

  try {

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    console.log("New user created!: ", user);

    res.status(201).json({ newUser: user });

  } catch (error) {

    console.log("Error with user creation: ", error);

    res.status(400).json({ error });

  }

};

exports.login = (req, res) => {
  // Login user
};

exports.update = (req, res) => {
  // Update user
};

exports.delete = (req, res) => {
  // Delete user
}

