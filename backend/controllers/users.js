const User = require("../models/User");
const crypto = require("crypto")

exports.member = async (req, res) => {
  // Find one user

  const user = await User.findOne({ email: req.params.email });

  if (user) {

    res.status(200).json({ user });

  }

  else {

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

    res.status(400).json({
      message: "Username already exists",
    })

  } else {

    try {

      const user = await User.create({
        email: req.body.email,
        password: await hash(req.body.password)
      });


      res.status(201).json({ message: "New account has been created" });

    } catch (error) {

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

    res.status(400).json({
      message: "Username or Password doesn't exist",
      auth: false
    })

  } else {


    if (await verify(password, existingUser.password)) {


      res.status(200).json({
        message: "Login Successful",
        auth: true,
        email: existingUser.email
      })

    } else {

      res.status(400).json({
        message: "Username or Password doesn't exist",
        auth: false
      })
    }


  }

};



async function hash(password) {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString("hex")

    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString('hex'))
    });
  })
}

async function verify(password, hash) {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(":")
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key == derivedKey.toString('hex'))
    });
  })
}