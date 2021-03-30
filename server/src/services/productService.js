const Product = require('../models/Product');

const create = async ({ title, image, price, brand, model, description, qtty }) => {
    const newProduct = new Product({ title, image, price, brand, model, description, qtty });
    
    return await newProduct.save();
}

const edit = async ({ _id, title, image, price, brand, model, description, qtty }) => {
    const editedProduct = await Product.findOneAndUpdate(
        {_id},
        {title, image, price, brand, model, description, qtty},
        {new: true}
        );
    
    return editedProduct;
}

const del = async ({ _id }) => {
    const deletedProduct = await Product.findOneAndDelete({_id});
    
    return deletedProduct;
}

module.exports = {
    create,
    edit,
    del
}