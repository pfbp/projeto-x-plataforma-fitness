import mongoose from "mongoose"

mongoose.connect("mongodb+srv://byob:byob@cluster0.lphozdc.mongodb.net/?");
let db = mongoose.connection;

export default db;