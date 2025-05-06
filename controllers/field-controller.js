const Field = require('../models/field-model');

exports.createField = async (req, res) => {
    try {
        const field = await Field.create(req.body);
        res.status(201).json(field);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all fields
exports.getFields = async (req, res) => {
    try {
        const fields = await Field.find();
        res.json(fields);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get single field
exports.getFieldById = async (req, res) => {
    try {
        const field = await Field.findById(req.params.id);
        if (!field) return res.status(404).json({ message: 'Field not found' });
        res.json(field);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update field
exports.updateField = async (req, res) => {
    try {
        const field = await Field.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!field) return res.status(404).json({ message: 'Field not found' });
        res.json(field);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete field
exports.deleteField = async (req, res) => {
    try {
        const field = await Field.findByIdAndDelete(req.params.id);
        if (!field) return res.status(404).json({ message: 'Field not found' });
        res.json({ message: 'Field deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};