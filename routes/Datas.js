const router = require("express").Router();
let Exercise = require("../models/Data.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .limit(100)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const State = req.body.State;
  const Address = req.body.Address;
  const DOB = req.body["Date/Year of Notification/ Establishment"];

  const newExercise = new Exercise({
    State,
    Address,
    DOB,
  });

  newExercise
    .save()
    .then(() => res.json("Test Added!"))
    .catch((err) => res.status(400).json("Ërror: " + err));
});

module.exports = router;
