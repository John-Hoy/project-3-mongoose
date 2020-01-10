import Tenant from '../models/tenant.model';
import _ from 'lodash';
import errorHandler from './error.controller';


const create = (req, res, next) => {
    const tenant = new Tenant(req.body)
    tenant.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.status(200).json({
            message: "Tenant Successfully Created!"
        })
    })
}

const list = (req, res) => {
    Tenant.find((err, tenants) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(tenants)
    }).select('first_name', 'last_name', 'unit_no', 'rent_current', 'rent_status')
}

const tenantByID = (req, res, next, id) => {
    Tenant.findById(id).exec((err, tenant) => {
        if (err || !tenant)
            return res.status('400').json({
                error: "Tenant not found"
            })
        req.profile = tenant;
        next();
    })
}

const read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
}

const update = (req, res, next) => {
    let tenant = req.profile;
    tenant = _.extend(tenant, req.body)
    tenant.updated = Date.now();
    tenant.save((err) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        tenant.hashed_password = undefined;
        tenant.salt = undefined;
        res.json(tenant);
    })
}

const remove = (req, res, next) => {
let tenant = req.profile;
tenant.remove ((err, deletedTenant) => {
    if (err) {
        return res.status (400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
    deletedTenant.hashed_password = undefined;
    deletedTenant.salt = undefined;
    res.json(deletedTenant);
})
}

export default { create, tenantByID, read, list, remove, update };