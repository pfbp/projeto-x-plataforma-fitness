import express from "express";
import UsersController from "../controllers/UsersController.js";

const router = express.Router();

router
  .get("/users", UsersController.listarUsers)
  .get("/users/:id", UsersController.listarUserPorId)
  .post("/users", UsersController.cadastrarUser)
  .put("/users/:id", UsersController.atualizarUser)
  .delete("/users/:id", UsersController.excluirUser)

export default router;   