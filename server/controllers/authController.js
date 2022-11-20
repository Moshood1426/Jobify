const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");
const User = require("../models/User");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    throw new BadRequestError("Please input all values");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("User with email already exist");
  }

  const user = await User.create({
    name,
    email: email.toLowerCase(),
    password,
  });

  const token = user.createJWT();
  const userObj = {
    email: user.email,
    lastName: user.lastName,
    location: user.location,
    name: user.name,
    userId: user._id,
    image: user.image,
  };

  res
    .status(StatusCodes.CREATED)
    .json({ userObj, token, location: user.location });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please input all values");
  }

  const userExists = await User.findOne({ email: email.toLowerCase() });
  if (!userExists) {
    throw new NotFoundError("Account with this email does not exist");
  }

  const isPasswordMatch = await userExists.comparePassword(password);
  if (!isPasswordMatch) {
    throw new UnauthenticatedError("email or password is incorrrect");
  }

  const token = userExists.createJWT();
  const userObj = {
    email: userExists.email,
    lastName: userExists.lastName,
    location: userExists.location,
    name: userExists.name,
    userId: userExists._id,
    image: userExists.image,
  };

  res
    .status(StatusCodes.OK)
    .json({ userObj, token, location: userExists.location });
};

const forgotPassword = (req, res) => {};

const updateUser = async (req, res) => {
  const { name, email, lastName, location } = req.body;

  if (!name || !email || !lastName || !location) {
    throw new BadRequestError("Kindly input name and email");
  }

  const oldUser = await User.findOne({ _id: req.user.userId });

  if (!oldUser) {
    throw new NotFoundError("User not found");
  }
  oldUser.email = email;
  oldUser.name = name;
  oldUser.lastName = lastName;
  oldUser.location = location;

  await oldUser.save();
  const token = oldUser.createJWT();

  const user = await User.findOne({ _id: req.user.userId }).select("-password");

  res
    .status(StatusCodes.CREATED)
    .json({ user, token, location: user.location });
};

const uploadUserImg = async (req, res) => {
  const { tempFilePath } = req.files.userImg;

  const user = await User.findOne({ _id: req.user.userId });
  if (!user) {
    throw new NotFoundError("user cannot be found");
  }
  const result = await cloudinary.uploader.upload(tempFilePath, {
    use_filename: true,
    folder: "jobtify-app",
    width: 250,
    height: 250,
    gravity: "faces",
    crop: "fill",
  });

  user.image = result.secure_url;
  await user.save();

  fs.unlinkSync(req.files.userImg.tempFilePath);

  res.status(StatusCodes.CREATED).json({ image: user.image });
};

const updatePassword = async (req, res) => {
  const { oldPass, newPass } = req.body;

  if (!oldPass || !newPass) {
    throw new BadRequestError("Please input all values");
  }

  const user = await User.findOne({ _id: req.user.userId });
  if (!user) {
    throw new UnauthenticatedError("User not validated to access this route");
  }

  const oldPassIsCorrect = await user.comparePassword(oldPass);
  if (!oldPassIsCorrect) {
    throw new BadRequestError("old password is not correct");
  }

  user.password = newPass;
  await user.save();

  const token = user.createJWT();
  const userObj = {
    email: user.email,
    lastName: user.lastName,
    location: user.location,
    name: user.name,
    userId: user._id,
    image: user.image,
  };

  res.status(StatusCodes.OK).json({ userObj, token, location: user.location });
};

module.exports = {
  register,
  login,
  forgotPassword,
  updateUser,
  uploadUserImg,
  updatePassword,
};
