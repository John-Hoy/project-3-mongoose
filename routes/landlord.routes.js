const express = require ('express');
const unitCtrl = require ('../controllers/unit.controller');
const tenantCtrl = require ('../controllers/tenant.controller');
const propertyCtrl = require ('../controllers/property.controller');
const landlordCtrl = require ('../controllers/landlord.controller');


const router = express.Router();

// ========== API Routes Tenants ===========
router.route('/api/tenants')
.get(tenantCtrl.list)
.post(tenantCtrl.create)

router.route('/api/tenants/:tenantId')
.get(tenantCtrl.read)
.put(tenantCtrl.update)
.delete(tenantCtrl.remove)


// ========== API Routes Units ===========
router.route('/api/units')
.get(unitCtrl.list)
.post(unitCtrl.create)

router.route('/api/units/:unitId')
.get(unitCtrl.read)
.put(unitCtrl.update)
.delete(unitCtrl.remove)



// ========== API Routes Properties ===========
router.route('/api/properties')
.get(propertyCtrl.list)
.post(propertyCtrl.create)

router.route('/api/properties/:propertyId')
.get(propertyCtrl.read)
.put(propertyCtrl.update)
.delete(propertyCtrl.remove)

// ========== API Routes Landlords ===========
router.route('/api/landlords')
.get(landlordCtrl.list)
.post(landlordCtrl.create)

router.route('/api/landlords/:landlordId')
.get(landlordCtrl.read)
.put(landlordCtrl.update)
.delete(landlordCtrl.remove)


module.exports = router;