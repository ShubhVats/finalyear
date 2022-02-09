const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  S: {
    No: {},
  },
  topic: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  writtenBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Article", ArticleSchema);
