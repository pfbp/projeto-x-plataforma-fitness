import express from "express";
import ProtocolController from "../controllers/ProtocolsController.js";

const router = express.Router();

router
  .get("/protocols", ProtocolController.listarProtocols)
  .get("/protocols/busca", ProtocolController.listarProtocolPorEditora)
  .get("/protocols/:id", ProtocolController.listarProtocolPorId)
  .post("/protocols", ProtocolController.cadastrarProtocol)
  .put("/protocols/:id", ProtocolController.atualizarProtocol)
  .delete("/rotocols/:id", ProtocolController.excluirProtocol)

export default router;   