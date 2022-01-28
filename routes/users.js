const router = require("express").Router();
let Exercise = require("../models/users.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .limit(10)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
