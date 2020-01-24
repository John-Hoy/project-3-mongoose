const Property = require('../models/properties')
const lodash = require ('lodash')
const errorHandler= require ('../helpers/dbErrorHandler')

// Read All properties
const list = (req, res) => {
    Properties.find({}).then (properties => {
        
        res.json(properties)
    })
}

// Create a new property
const create = (req, res, next) => {
    const property = new Property(req.body)
    Property.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)

            })
        }
        res.status(200).json({
            message: "Successfully added a new property!"
        })
    })
}


// Find Property by ID
const propertyByID = (req, res, next, id) => {
    Property.findByID(id).exec((err, property) => {
        if (err || !property)
            return res.status(400).json({
                error: "Property not found!"
            })
        req.profile = property
        next()
    })
}


// Read
const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
} 

// Update a Property
const update = (req, res, next) => {
    let property = req.profile
    property = _.extended (property, req.body)
    property.updated = Date.now()
    property.save ((err) => {
        if (err) {
            return res.status(400).json ({
                error: errorHandler.getErrorMessage(err)
            })
        }
        property.hashed_password = undefined
        property.salt = undefined
        res.json(property)
    })
}

// Delete a Property
const remove = (req, res, next) => {
    let property = req.profile
    property.remove ((err, deletedTenant) => {
        if (err) {
            return res.status(400).json ({
                error: errorHandler.getErrorMessage(err)
            })
        }
        deletedProperty.hashed_password = undefined
        deletedProperty.salt = undefined
        res.json(deletedProperty)
    })
}

// const homePage = (req, res) => {
//     res.render ('Home', {title: 'Slumlords R Us - Home'})
// }

// const listAllTenants = async (req, res, next) => {
//     try {
//         const allTenants = await Tenant.find();
//         res.render ('all_tenants', { title: 'All Tenants', allTenants});
//     } catch (errors) {
//         next(error);
//     }
// }



module.exports =  { create, propertyID, read, list, remove, update }
