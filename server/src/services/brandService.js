const Brand = require('../models/Brand');

const getAll = async () => {
    try {
        const allBrands = await Brand.find();
    
        return await allBrands;
    } catch (error) {
        throw error;
    }
}

const create = async ({ name }) => {
    try {
        const newBrand = new Brand({ name });
    
        return await newBrand.save();
    } catch (error) {
        throw error;
    }
}

const edit = async ({ _id, name }) => {
    try {
        const editedBrand = await Brand.findOneAndUpdate(
            {_id},
            {name},
            {new: true}
            );
        
        return editedBrand;
    } catch (error) {
        throw error;
    }
}

const del = async ({ _id }) => {
    try {
        const deletedBrand = await Brand.findOneAndDelete({_id});
    
        return deletedBrand;
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