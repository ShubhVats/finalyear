const router = require("express").Router();
let College = require("../models/College.model");

router.route("/").get((req, res) => {
    College.find()
        .limit(100)
        .then((college) => res.json(college))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const CollegeName = req.body.CollegeName;
    const State = req.body.State;
    const Rating = req.body.Rating;
    const CollegeWebsite = req.body.CollegeWebsite;
    const Overview = req.body.Overview;
    const CollegeType = req.body.CollegeType;
    const CollegeImg = req.body.CollegeImg;

    const newCollege = new College({
        CollegeName,
        State,
        Rating,
        CollegeWebsite,
        Overview,
        CollegeType,
        CollegeImg,
    });

    newCollege
        .save()
        .then(() => res.json("Test Added!"))
        .catch((err) => res.status(400).json("Ërror: " + err));
});

module.exports = router;