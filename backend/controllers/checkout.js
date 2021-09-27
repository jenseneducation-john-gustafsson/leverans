const User = require("../models/User");


exports.checkout = async (req, res) => {

  const { email, cart } = req.body

  console.log("email checkout backend: ", email);
  console.log("cart checkout backend: ", cart);


  const user = await User.findOne({ email: email });

  if (user) {

    console.log("cart to push: ", cart);


    user.shopcart.push(cart);
    user.save();

    console.log("Cart has been added");

    res.status(200).json();

  } else {

    return res.status(400).json();

  }

};
