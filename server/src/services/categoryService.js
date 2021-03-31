const Category = require('../models/Category');

const getAll = async () => {
    try {
        const allCategories = await Category.find();
    
        return await allCategories;
    } catch (error) {
        throw error;
    }
}

const create = async ({ name }) => {
    try {
        const newCategory = new Category({ name });
    
        return await newCategory.save();
    } catch (error) {
        throw error;
    }
}

const edit = async ({ _id, name }) => {
    try {
        const editedCategory = await Category.findOneAndUpdate(
            {_id},
            {name},
            {new: true}
            );
        
        return editedCategory;
    } catch (error) {
        throw error;
    }
}

const del = async ({ _id }) => {
    try {
        const deletedCategory = await Category.findOneAndDelete({_id});
    
        return deletedCategory;
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