const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    type: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Field', fieldSchema);
