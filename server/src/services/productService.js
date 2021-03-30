const Product = require('../models/Product');

const create = async ({ title, image, price, brand, model, description, qtty }) => {
    const newProduct = new Product({ title, image, price, brand, model, description, qtty });
    
    return await newProduct.save();
}

module.exports = {
    create,
}