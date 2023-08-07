const express = require("express");
const { AuthDataController, registerContoller, loginController, checkOTPController } = require("../Controllers/authController");
const UserRouter = express.Router();



// authData
UserRouter.get("/authData", AuthDataController);

// register
UserRouter.post("/register", registerContoller);

// login
UserRouter.post("/login", loginController);

// check otp
UserRouter.post("/verify/otp", checkOTPController);


module.exports = {
  UserRouter,
};
