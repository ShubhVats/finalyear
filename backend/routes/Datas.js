const router = require("express").Router();
let Exercise = require("../models/Data.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .limit(3)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
