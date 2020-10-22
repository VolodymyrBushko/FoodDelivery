const express=require("express");
const  userController=require("../controllers/userController.js");
const userRouter=express.Router();


userRouter.get("/",userController.getUsers);
userRouter.get("/:id",userController.getUserById);
userRouter.post("/login",userController.loginUser);
userRouter.post("/register",userController.registerUser);
userRouter.put("/update/:id",userController.updateUserById);
userRouter.delete("/delete/:id",userController.deleteUserById);

module.exports=userRouter;
