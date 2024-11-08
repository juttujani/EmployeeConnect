const express = require("express");
const { createUser, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require("../controller/usercontroller");
const userRouter = express.Router();
userRouter.post("/employee/add",createUser)
userRouter.get("/allemployees",getAllEmployees)
userRouter.get("/employee/:id",getEmployeeById)

userRouter.put("/update/:id",updateEmployee)

userRouter.delete("/delete/:id",deleteEmployee)
module.exports = userRouter;