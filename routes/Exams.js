const router = require("express").Router();
let Exams = require("../models/Exams.model");
// let Exams = require("../models/Exams.model");

router.route("/").get((req, res) => {
    Exams.find()
        .then((exams) => res.json(exams))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const ConductedBy = req.body.ConductedBy;
    const ExamDate = req.body.ExamDate;
    const ExamName = req.body.ExamName;
    const OfficialWebsite = req.body.OfficialWebsite;
    const ExamType = req.body.ExamType;
    const ExamLevel = req.body.ExamLevel;
    const Eligibility = req.body.Eligibility;
    const ModeOfExam = req.body.ModeOfExam;
    const Image = req.body.Image;

    const newExams = new Exams({
        ConductedBy,
        ExamDate,
        ExamName,
        OfficialWebsite,
        ExamType,
        ExamLevel,
        Eligibility,
        ModeOfExam,
        Image,
    });
    newExams
        .save()
        .then(() => res.json("Exam Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;