const db = require("../models");
const router = require("express").Router();

// Read All tenants
router.route("/").get(function(req, res){
    console.log(req.query)
    db.Tenant
        .find({})
        .sort({ last_name: -1 })
        .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)      
        })
        .catch(err => res.status(422).json(err));
})

// Create a tenant
router.route("/").post((req, res) => {
    db.Tenant
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Read One
router.route("/:id").get((req, res) => {
    db.Tenant
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

// Update 
router.route("/:id").put((req, res) => {
    db.Tenant
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));a
})

// Delete
router.route("/:id").delete((req, res) => {
    db.Tenant
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;
