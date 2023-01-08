import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    id: {type: String},
    user: {type: String, required: true},
    date: {type: Date, required: true},
    type: {type: String, required: true},
    item: {type: String, required: true},
    value: {type: Number},
    highLimit: {type: Number},
    lowLimit: {type: Number}
  }
);

const records = mongoose.model('records', recordSchema);

export default records;