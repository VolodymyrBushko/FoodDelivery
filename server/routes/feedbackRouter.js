const express = require("express");
const passport = require('passport');
const feedbackController = require("../controllers/feedbackController");
const validator = require('../validators/feedbackValidator');
const feedbackRouter = express.Router();

feedbackRouter.get("/", feedbackController.getPost);

feedbackRouter.post("/add", [passport.authenticate('jwt', {session: false}), validator], feedbackController.addPost);

feedbackRouter.delete("/delete/:id", passport.authenticate('jwt', {session: false}), feedbackController.deletePostById);

module.exports = feedbackRouter;
