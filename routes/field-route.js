const express = require('express');
const router = express.Router();
const fieldController = require('../controllers/field-controller');

router.post('/add-field', fieldController.createField);
router.get('/get-fields', fieldController.getFields);
router.get('/get-field-by-id/:id', fieldController.getFieldById);
router.put('/update-field/:id', fieldController.updateField);
router.delete('/delete-field/:id', fieldController.deleteField);

module.exports = router;