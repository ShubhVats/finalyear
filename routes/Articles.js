const router = require("express").Router();
let Article = require("../models/Article.model");

router.route("/").get((req, res) => {
  Article.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const topic = req.body.topic;
  const body = req.body.body;
  const writtenBy = req.body.writtenBy;

  const newArticle = new Article({
    topic,
    body,
    writtenBy,
  });
  newArticle
    .save()
    .then(() => res.json("Article Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
