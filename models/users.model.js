const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  S: {
    No: {},
  },
  "Application Number": {
    type: String,
    required: true,
  },
  "Application Type": {
    type: String,
    required: true,
  },
  "Institute Name": {
    type: String,
    required: true,
  },
  "Inst Address": {
    type: String,
    required: true,
  },
  "Inst Address 2": {
    type: String,
    required: true,
  },
  CITY: {
    type: String,
    required: true,
  },
  District: {
    type: String,
    required: true,
  },
  Pincode: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Region: {
    type: String,
    required: true,
  },
  "Inst Type": {
    type: String,
    required: true,
  },
  Program: {
    type: String,
    required: true,
  },
  Course: {
    type: String,
    required: true,
  },
  Level: {
    type: String,
    required: true,
  },
  Specialization: {
    type: String,
    required: true,
  },
  Intake: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", UsersSchema);
