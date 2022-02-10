const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
    S: {
        No: {},
    },
    CollegeName: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    Rating: {
        type: String,
        required: true,
    },
    CollegeWebsite: {
        type: String,
        required: true,
    },
    Overview: {
        type: String,
        required: true,
    },
    CollegeType: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("College", CollegeSchema);