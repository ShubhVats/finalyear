const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExamsSchema = new Schema({
    S: {
        No: {},
    },
    ConductedBy: {
        type: String,
    },
    ExamDate: {
        type: String,
    },
    ExamName: {
        type: String,
    },
    OfficialWebsite: {
        type: String,
    },
    ExamType: {
        type: String,
    },
    ExamLevel: {
        type: String,
    },
    Eligibility: {
        type: String,
    },
    ModeOfExam: {
        type: String,
    },
    Image: {
        type: String,
    },
});

module.exports = mongoose.model("Exams", ExamsSchema);