const User = require("../models/User");


exports.member = async (req, res) => {
  // Find one user

  const user = await User.findOne({ email: req.params.email });

  if (user) {

    console.log("Found user!");

    res.status(200).json({ user });

  }

  else {
    console.log("User not found!");

    res.status(400).json({ userStatus: "Not Found" });

  }

}

exports.signup = async (req, res) => {
  // Create new user

  const { email } = req.body;

  const checkExistingUser = await User.findOne({
    email
  })

  if (checkExistingUser) {
    console.log("User already exists!");

    res.status(400).json({
      message: "Username already exists",
    })

  } else {

    try {

      const user = await User.create({
        email: req.body.email,
        password: req.body.password
      });

      console.log("New user created!: ", user);

      res.status(201).json({ message: "New account has been created" });

    } catch (error) {

      console.log("Error with user creation: ", error);

      res.status(400).json({ error });

    }

  }

};

exports.login = async (req, res) => {
  // Login user

  const { email, password } = req.body;

  const existingUser = await User.findOne({
    email
  })

  if (!existingUser) {
    console.log("User not found!");

    res.status(400).json({
      message: "Username or Password doesn't exist",
      auth: false
    })

  } else {

    if (existingUser.password === password) {


      console.log("User found!");


      res.status(200).json({
        message: "Login Successful",
        auth: true,
        email: existingUser.email
      })

    } else {

      console.log("Password not found!");

      res.status(400).json({
        message: "Username or Password doesn't exist",
        auth: false
      })
    }


  }

};

exports.update = (req, res) => {
  // Update user
};

exports.delete = (req, res) => {
  // Delete user
}

