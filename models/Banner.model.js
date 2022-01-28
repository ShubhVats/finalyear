const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BannerSchema = new Schema({
  S: {
    No: {},
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imgText: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Banner", BannerSchema);
