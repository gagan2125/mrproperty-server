const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/seller-controller');

router.post('/add-seller', sellerController.createSeller);
router.get('/get-sellers', sellerController.getSellers);
router.get('/get-seller-by-id/:id', sellerController.getSellerById);
router.put('/update-seller/:id', sellerController.updateSeller);
router.delete('/delete-seller/:id', sellerController.deleteSeller);

module.exports = router;