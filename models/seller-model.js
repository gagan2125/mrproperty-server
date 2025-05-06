const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    seller_name: { type: String, required: true },
    seller_email: { type: String },
    seller_phone: { type: String },
    seller_status: { type: String },
    seller_about: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Seller', sellerSchema);
