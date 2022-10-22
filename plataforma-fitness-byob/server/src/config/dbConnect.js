import mongoose from "mongoose"

MONGO_URI = "mongodb+srv://byob:byob@cluster0.lphozdc.mongodb.net/?";

mongoose.connect(MONGO_URI);
let db = mongoose.connection;

export default db;