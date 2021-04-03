const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    shippingCost: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    products: {
        type: Array,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true
    },
    qtty: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Processing'
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const model = mongoose.model('Order', OrderSchema);
module.exports = model;