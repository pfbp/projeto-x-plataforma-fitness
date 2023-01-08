import express from "express";
import UsersController from "../controllers/Users-controller.js";

const router = express.Router();

router
  .post("/users", UsersController.registerUser)
  .post("/users/login", UsersController.loginUser)
  .get("/users", UsersController.getAllUsers)
  .get("/users/:id", UsersController.getUserById)
  .get("/users/search", UsersController.getUsersByFilter)
  .put("/users/:id", UsersController.updateUserById)
  .delete("/users/:id", UsersController.deleteUserById)


export default router;