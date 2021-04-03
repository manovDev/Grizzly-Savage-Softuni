const Order = require('../models/Order');

const placeOrder = async ({
    firstName,
    lastName,
    phoneNumber,
    address,
    city,
    postalCode,
    country,
    shippingCost,
    tax,
    products,
    totalPrice,
    qtty }) => {
    try {
        const newOrder = new Order({
            firstName,
            lastName,
            phoneNumber,
            address,
            city,
            postalCode,
            country,
            shippingCost,
            tax,
            products,
            totalPrice,
            qtty });
    
        return await newOrder.save();
    } catch (error) {
        throw error;
    }
}

const getAll = async () => {
    try {
        const allOrders = await Order.find();
    
        return await allOrders;
    } catch (error) {
        throw error;
    }
}

const getOne = async (_id) => {
    try {
        const order = await Order.findById(_id);
    
        return await order;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    placeOrder,
    getAll,
    getOne,
}