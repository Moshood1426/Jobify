const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new UnauthenticatedError("User is not allowed to access this route");
  }

  const token = authorization.split(" ")[1];
  
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    throw new UnauthenticatedError("User is not allowed to access this route");
  }
};

module.exports = authMiddleware;
