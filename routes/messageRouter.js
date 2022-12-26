const {
  getMessages,
  addMessage,
} = require("../controllers/messagesContollers");

const router = require("express").Router();

router.route("/getmsg").post(getMessages);
router.route("/addmsg").post(addMessage);

module.exports = router;
