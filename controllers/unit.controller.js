const db = require("../models");
const router = require("express").Router();

// Read All
router.route("/").get(function(req, res){
    console.log(req.query)
    db.Unit
        .find()
        .sort({ date: -1 })
        .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)
            
        })
        .catch(err => res.status(422).json(err));
})

// Create
router.route("/").post((req, res) => {
    db.Unit
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Read One
router.route("/:id").get((req, res) => {
    db.Unit
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

// Update 
router.route("/:id").put((req, res) => {
    db.Unit
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

// Delete
router.route("/:id").delete((req, res) => {
    db.Unit
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;
