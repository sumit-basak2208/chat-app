const Express = require("express");
const {registerUser, authUser} = require("../controllers/userControllers");

const router = Express.Router();

router.route("/").post(registerUser)
router.post("/login", authUser)

module.exports = router;