import express from "express";
import ProtocolsController from "../controllers/Protocols-controller.js";

const router = express.Router();

router
  .post("/protocols", ProtocolsController.createProtocol)
  .get("/protocols", ProtocolsController.getAllProtocols)
  .get("/protocols/:id", ProtocolsController.getProtocolById)
  .get("/protocols/search", ProtocolsController.getProtocolsByFilter)
  .put("/protocols/:id", ProtocolsController.updateProtocolById)
  .delete("/protocols/:id", ProtocolsController.deleteProtocoById)

export default router;   