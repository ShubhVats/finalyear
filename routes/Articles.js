const router = require("express").Router();
let Article = require("../models/Article.model");

router.route("/").get((req, res) => {
  Article.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
