const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyer-controller');

router.post('/add-buyer', buyerController.createBuyer);
router.get('/get-buyers', buyerController.getBuyers);
router.get('/get-buyer-by-id/:id', buyerController.getBuyerById);
router.put('/update-buyer/:id', buyerController.updateBuyer);
router.delete('/delete-buyer/:id', buyerController.deleteBuyer);

module.exports = router;