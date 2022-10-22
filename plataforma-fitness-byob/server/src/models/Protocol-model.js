import mongoose from "mongoose";

const protocolSchema = new mongoose.Schema(
  {
    id: {type: String},
    user: {type: String, required: true},
    date: {type: Date, required: true},
    type: {type: String, required: true},
    item: {type: String, required: true},
    termination: {type: Date},
    frequency: {type: String || Number},
    intensity: {type: String || Number}
  }
);

const protocols= mongoose.model('protocols', protocolSchema);

export default protocols;