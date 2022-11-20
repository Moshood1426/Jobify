const express = require("express");
const router = express.Router();
const {
  login,
  register,
  forgotPassword,
  updateUser,
  uploadUserImg,
  updatePassword,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const rateLimiter = require("express-rate-limit");

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 mins,
  max: 10,
  message:
    "Too many requests from this IP address, please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/forgotPassword").post(apiLimiter, forgotPassword);
router.route("/updateUser").patch(authMiddleware, updateUser);
router.route("/uploadImage").post(authMiddleware, uploadUserImg);
router.route("/updatePassword").post(authMiddleware, updatePassword);

module.exports = router;
