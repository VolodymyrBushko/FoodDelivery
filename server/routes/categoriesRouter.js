const express = require("express");
const categoriesController = require("../controllers/categoriesController.js");
const validator = require('../validators/categoryValidator');
const categoriesRouter = express.Router();


categoriesRouter.get("/", categoriesController.getCategories);
categoriesRouter.get("/:id", categoriesController.getCategoryById);
categoriesRouter.post("/add", validator, categoriesController.addCategory);
categoriesRouter.put("/update/:id", validator, categoriesController.updateCategoryById);
categoriesRouter.delete("/delete/:id", categoriesController.deleteCategoryById);

module.exports = categoriesRouter;
