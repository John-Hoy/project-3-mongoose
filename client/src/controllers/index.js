const router = require("express").Router();
const tenantController = require("./tenant.controller");
const landLordController = require("./landlord.controller");

// API Routes
router.use("/api/tenants", tenantController);

// Other Routes
router.use("/api/landlord", landlordController)

module.exports = router;
