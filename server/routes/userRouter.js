const express = require("express");
const passport = require("passport");
const userController = require("../controllers/userController.js");
const validator = require("../validators/userValidator.js");
const userRouter = express.Router();

// example route guard
// userRouter.get("/", passport.authenticate('jwt', {session: false}), userController.getUsers);

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/login", userController.loginUser);
userRouter.post("/register", validator, userController.registerUser);
userRouter.put("/update/:id", validator, userController.updateUserById);
userRouter.delete("/delete/:id", userController.deleteUserById);

module.exports = userRouter;
