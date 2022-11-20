const { UnauthenticatedError } = require("../errors");

function checkPermissions(requestUser, resourceUserId) {
  if (requestUser === resourceUserId.toString()) {
    return;
  }
  throw new UnauthenticatedError("User not allowed to make this change");
}

module.exports = checkPermissions;
