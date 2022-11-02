import express from "express";
import RecordsController from "../controllers/Records-controller.js";

const router = express.Router();

router
  .post("/records", RecordsController.createRecord)
  .get("/records", RecordsController.getAllRecords)
  .get("/records/:id", RecordsController.getRecordById)
  .get("/records/search", RecordsController.getRecordsByFilter)
  .put("/records/:id", RecordsController.updateRecordById)
  .delete("/records/:id", RecordsController.deleteRecordById)
  

export default router;