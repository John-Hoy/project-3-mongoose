const express = require('express')
const Tenant = require('../models/tenant')
const lodash = require ('lodash')
const errorHandler= require ('../helpers/dbErrorHandler')

const router = express.Router();

// Read All Tenants
const list = (req, res) => {
    Tenant.find({}).then (tenants => {
        
        res.json(tenants)
    })
}

// Create a tenant
router.route("/api/tenants").post((req, res) => {
    db.Tenant
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Read One
router.route("/api/tenants/:id").get((req, res) => {
    db.Tenant
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

// Update 
router.route("/api/tenants/:id").put((req, res) => {
    db.Tenant
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));a
})

// Delete
router.route("/api/tenants/:id").delete((req, res) => {
    db.Tenant
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;
