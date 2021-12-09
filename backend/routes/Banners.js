const router = require("express").Router();
let Banner = require("../models/Banner.model");

router.route("/").get((req, res) => {
  Banner.find()
    .then((banner) => res.json(banner))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
