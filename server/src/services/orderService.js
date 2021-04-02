const Order = require('../models/Order');

const placeOrder = async ({ firstName, lastName, phoneNumber, address, shippingCost, tax, products, totalPrice, qtty }) => {
    try {
        const newOrder = new Order({ firstName, lastName, phoneNumber, address, shippingCost, tax, products, totalPrice, qtty });
    
        return await newOrder.save();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    placeOrder,
}