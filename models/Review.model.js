const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  S: {
    No: {},
  },
  name: {
    type: String,
  },
  profession: {
    type: String,
  },
  review: {
    type: String,
  },
  stars: {
    $numberInt: {},
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
