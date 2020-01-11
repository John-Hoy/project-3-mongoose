import express from 'express';
import landlordCtrl from '../controllers/landlordController';

const router = express.Router();

router.route('/api/landlords')
.get(landlordCtrl.list)
.post(landlordCtrl.createProperty)

router.route('/api/landlords/:landlordId')
.get(landlordCtrl.read)
.put(landlordCtrl.update)
.delete(landlordCtrl.remove)

router.param(landlordId, landlordCtrl.landlordByID)

export default router;