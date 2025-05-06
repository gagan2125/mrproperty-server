const Buyer = require('../models/buyer-model');

exports.createBuyer = async (req, res) => {
    try {
        const buyer = await Buyer.create(req.body);
        res.status(201).json(buyer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getBuyers = async (req, res) => {
    try {
        const buyers = await Buyer.find();
        res.json(buyers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getBuyerById = async (req, res) => {
    try {
        const buyer = await Buyer.findById(req.params.id);
        if (!buyer) return res.status(404).json({ message: 'Buyer not found' });
        res.json(buyer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateBuyer = async (req, res) => {
    try {
        const buyer = await Buyer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!buyer) return res.status(404).json({ message: 'Buyer not found' });
        res.json(buyer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteBuyer = async (req, res) => {
    try {
        const buyer = await Buyer.findByIdAndDelete(req.params.id);
        if (!buyer) return res.status(404).json({ message: 'Buyer not found' });
        res.json({ message: 'Buyer deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};