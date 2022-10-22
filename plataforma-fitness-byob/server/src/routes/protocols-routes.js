import express from "express";
import ProtocolsController from "../controllers/Protocols-controller.js";

const router = express.Router();

router
  .post("/protocols", ProtocolsController.createRecord)
  .get("/protocols", ProtocolsController.getAllRecords)
  .get("/protocols/:id", ProtocolsController.getRecordById)
  .get("/protocols/search", ProtocolsController.getRecordsByFilter)
  .put("/protocols/:id", ProtocolsController.updateRecordById)
  .delete("/protocols/:id", ProtocolsController.deleteRecordById)

export default router;   