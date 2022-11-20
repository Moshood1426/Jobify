const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [20, "Name shouldn't exceed 20 characters"],
    minLength: [3, "Name shouldn't be less than 20 characters"],
    required: [true, "Name field can't be empty"],
    trim: true,
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email address",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a safe password"],
    minLength: [6, "Password can't be less than 6 characters"],
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: [20, "Last name cannot be more than 20 characters"],
    default: "lastName",
  },
  location: {
    type: String,
    trim: true,
    maxlength: [20, "Last name cannot be more than 20 characters"],
    default: "my city",
  },
  image: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/64/64572.png",
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (password) {
  const isPasswordMatch = await bcrypt.compare(password, this.password);
  return isPasswordMatch;
};

UserSchema.methods.createJWT = function () {
  const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  return token;
};

module.exports = mongoose.model("Users", UserSchema);
