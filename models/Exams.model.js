const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExamsSchema = new Schema({
  S: {
    No: {},
  },
  ConductedBy: {
    type: String,
    required: true,
  },
  ExamDate: {
    type: String,
    required: true,
  },
  ExamName: {
    type: String,
    required: true,
  },
  OfficialWebsite: {
    type: String,
    required: true,
  },
  ExamType: {
    type: String,
    required: true,
  },
  ExamLevel: {
    type: String,
    required: true,
  },
  Eligibility: {
    type: String,
    required: true,
  },
  ModeOfExam: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Exams", ExamsSchema);
