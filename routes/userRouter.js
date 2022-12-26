const router = require("express").Router();

const {
  register,
  login,
  setAvatar,
  getAllUsers,
} = require("../controllers/usersController");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/setavatar").post(login);
router.route("/setavatar/:id").post(setAvatar);
router.route("/allusers/:id").get(getAllUsers);
module.exports = router;
