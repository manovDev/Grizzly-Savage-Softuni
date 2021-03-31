const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    model: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    qtty: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
});

const model = mongoose.model('Product', ProductSchema);
module.exports = model;