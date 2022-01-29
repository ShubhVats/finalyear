const router = require("express").Router();
let Review = require("../models/Review.model");

router.route("/").get((req, res) => {
  Review.find()
    .then((review) => res.json(review))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
