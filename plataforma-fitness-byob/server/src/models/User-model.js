import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    status: {type: String},
    date: {type: Date},
    birthday: {type: Date},
    gender: {type: String},
    race: {type: String},
    level: {type: String},
    preferences: {type: Array, "default": []},
    connections: {type: Array, "default": []},
    recordsList: {type: Array, "default": []},
    protocolsList: {type: Array, "default": []}
  }
)

const users = mongoose.model("users", userSchema);

export default users;