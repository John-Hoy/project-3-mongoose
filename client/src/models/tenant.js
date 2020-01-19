const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    unit_no: { type: String, required: true },
    rent_current: { type: Number, required: true },
    rent_starting: { type: Number, required: true },
    rent_last_paid: {
        type: Date,
        required: true,
        default: Date.now
    },
    rent_status: {
        type: String,
        required: true
    },
    issues: [{
        body: { type: String, required: true },
        severity: { type: Number, required: true },
        date: { type: Date, default: Date.now },
        resolved: { type: Boolean, default: false }
    }],
    mgr_comments: [{
        body: { type: String},
        date: { type: Date, default: Date.now }
    }],
});

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;
