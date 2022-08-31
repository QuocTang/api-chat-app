const express = require("express");
const {
  resgisterUser,
  authUser,

  allUsers,
} = require("../controllers/userControllers");

const { sendMailAuthencation } = require("../controllers/mailerControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", resgisterUser);
router.post("/emailAuthentication", sendMailAuthencation);
router.get("/", protect, allUsers);
router.post("/login", authUser);

module.exports = router;
