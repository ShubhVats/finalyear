const router = require("express").Router();
let Review = require("../models/Review.model");

router.route("/").get((req, res) => {
    Review.find()
        .then((review) => res.json(review))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const profession = req.body.profession;
    const review = req.body.review;
    const stars = req.body.stars;

    const newReview = new Review({
        name,
        profession,
        review,
        stars,
    });

    newReview
        .save()
        .then(() => res.json("Test Added!"))
        .catch((err) => res.status(400).json("Ërror: " + err));
});

module.exports = router;