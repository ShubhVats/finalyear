const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DataSchema = new Schema({
  S: {
    No: {},
  },
  State: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  "Date/Year of Notification/ Establishment": {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Data", DataSchema);
