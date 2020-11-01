const express = require("express");
const passport = require("passport");
const userController = require("../controllers/userController.js");
const validator = require("../validators/userValidator.js");
const userRouter = express.Router();

userRouter.get("/", passport.authenticate('jwt', {session: false}), userController.getUsers);
userRouter.get("/:id", passport.authenticate('jwt', {session: false}), userController.getUserById);
userRouter.post("/login", userController.loginUser);
userRouter.post("/register", validator, userController.registerUser);
userRouter.put("/update/:id", [passport.authenticate('jwt', {session: false})], userController.updateUserById);
userRouter.delete("/delete/:id", passport.authenticate('jwt', {session: false}), userController.deleteUserById);

module.exports = userRouter;
