const Product = require('../models/Product');

const getAll = async () => {
    try {
        const allProducts = await Product.find();
    
        return await allProducts;
    } catch (error) {
        throw error;
    }
}

const create = async ({ title, image, price, brand, model, description, qtty }) => {
    try {
        const newProduct = new Product({ title, image, price, brand, model, description, qtty });
    
        return await newProduct.save();
    } catch (error) {
        throw error;
    }
}

const edit = async ({ _id, title, image, price, brand, model, description, qtty }) => {
    try {
        const editedProduct = await Product.findOneAndUpdate(
            {_id},
            {title, image, price, brand, model, description, qtty},
            {new: true}
            );
        
        return editedProduct;
    } catch (error) {
        throw error;
    }
}

const del = async ({ _id }) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({_id});
    
        return deletedProduct;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAll,
    create,
    edit,
    del
}