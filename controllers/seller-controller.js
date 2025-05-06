const Seller = require('../models/seller-model');

exports.createSeller = async (req, res) => {
    try {
        const seller = await Seller.create(req.body);
        res.status(201).json(seller);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getSellers = async (req, res) => {
    try {
        const sellers = await Seller.find();
        res.json(sellers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getSellerById = async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.id);
        if (!seller) return res.status(404).json({ message: 'Seller not found' });
        res.json(seller);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateSeller = async (req, res) => {
    try {
        const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!seller) return res.status(404).json({ message: 'Seller not found' });
        res.json(seller);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteSeller = async (req, res) => {
    try {
        const seller = await Seller.findByIdAndDelete(req.params.id);
        if (!seller) return res.status(404).json({ message: 'Seller not found' });
        res.json({ message: 'Seller deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};