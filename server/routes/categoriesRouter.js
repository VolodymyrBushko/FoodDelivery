const express=require("express");
const  categoriesController=require("../controllers/categoriesController.js");
const categoriesRouter=express.Router();


categoriesRouter.get("/",categoriesController.getCategories);
categoriesRouter.get("/:id",categoriesController.getCategoryById);
categoriesRouter.post("/add",categoriesController.addCategory);
categoriesRouter.put("/update/:id",categoriesController.updateCategoryById);
categoriesRouter.delete("/delete/:id",categoriesController.deleteCategoryById);

module.exports=categoriesRouter;
