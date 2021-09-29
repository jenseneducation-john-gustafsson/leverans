const router = require("express").Router();
const UserController = require('../controllers/users');

const CheckoutController = require("../controllers/checkout")

router.get("/members/:email", UserController.member);
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);

router.post("/api/checkout", CheckoutController.checkout);

module.exports = router;