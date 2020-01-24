import express from 'express';
import tenantCtrl from '../controllers/tenantController';

const router = express.Router();

router.route('/api/tenants')
.get(tenantCtrl.list)
.post(tenantCtrl.create)

router.route('/api/tenants/:tenantId')
.get(tenantCtrl.read)
.put(tenantCtrl.update)
.delete(tenantCtrl.remove)

router.param(tenantId, tenantCtrl.tenantByID)

export default router;