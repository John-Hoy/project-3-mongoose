const router = require("express").Router();
const tenantController = require("./tenant.controller");
const unitController = require("./unit.controller");
const authController = require("./auth.controller");

// API Routes
router.use("/api/tenants", tenantController);

router.use("/api/units", unitController);

// Auth Routes
router.use("/auth", authController)

module.exports = router;
