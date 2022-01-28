const router = require("express").Router();
let Exams = require("../models/Exams.model");
// let Exams = require("../models/Exams.model");

router.route("/").get((req, res) => {
  Exams.find()
    .then((exams) => res.json(exams))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
