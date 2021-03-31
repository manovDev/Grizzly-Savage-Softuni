const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
});

const model = mongoose.model('Category', CategorySchema);
module.exports = model;