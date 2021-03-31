const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
});

const model = mongoose.model('Brand', BrandSchema);
module.exports = model;