import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Connection to MongoDB failed'));
db.once("open", () => {
  console.log('Connection to MongoDB succeeded');
});

const app = express();
app.use(express.json());
routes(app);

export default app;