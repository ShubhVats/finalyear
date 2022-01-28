const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  S: {
    No: {},
  },
  topic: {
    type: String,
  },
  body: {
    type: String,
  },
  writtenBy: {
    type: String,
  },
});

module.exports = mongoose.model("Article", ArticleSchema);
