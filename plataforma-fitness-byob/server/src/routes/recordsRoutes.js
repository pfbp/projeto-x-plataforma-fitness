import express from "express";
import RecordController from "../controllers/RecordsController.js";

const router = express.Router();

router
  .get("/records", RecordController.listarRecords)
  .get("/records/busca", RecordController.listarRecordPorEditora)
  .get("/records/:id", RecordController.listarRecordPorId)
  .post("/records", RecordController.cadastrarRecord)
  .put("/records/:id", RecordController.atualizarRecord)
  .delete("/records/:id", RecordController.excluirRecord)

export default router;   