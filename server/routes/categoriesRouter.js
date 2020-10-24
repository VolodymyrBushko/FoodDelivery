const express = require("express");
const passport = require('passport');
const categoriesController = require("../controllers/categoriesController.js");
const validator = require('../validators/categoryValidator');
const categoriesRouter = express.Router();

categoriesRouter.get("/", categoriesController.getCategories);
categoriesRouter.get("/:id", categoriesController.getCategoryById);
categoriesRouter.post("/add", [passport.authenticate('jwt', {session: false}), validator], categoriesController.addCategory);
categoriesRouter.put("/update/:id", [passport.authenticate('jwt', {session: false}), validator], categoriesController.updateCategoryById);
categoriesRouter.delete("/delete/:id", passport.authenticate('jwt', {session: false}), categoriesController.deleteCategoryById);

module.exports = categoriesRouter;
