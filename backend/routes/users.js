const router = require("express").Router();
const UserController = require('../controllers/users');

router.get("/members/:username", UserController.member);
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);

module.exports = router;