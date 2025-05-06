const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    buyer_name: { type: String, required: true },
    buyer_email: { type: String },
    buyer_phone: { type: String },
    buyer_status: { type: String },
    buyer_about: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Buyer', buyerSchema);
