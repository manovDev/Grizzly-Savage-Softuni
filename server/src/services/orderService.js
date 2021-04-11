const Order = require('../models/Order');
const User = require('../models/User');

const placeOrder = async ({
    userId,
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
            qtty
        });

        await User.findByIdAndUpdate(userId, {
            $addToSet: {
                orders: newOrder._id
            }
        });

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

const patch = async (_id, data) => {
    try {
        return await Order.findByIdAndUpdate(_id, data, { new: true })
    } catch (error) {
        throw error;
    }
}

module.exports = {
    placeOrder,
    getAll,
    getOne,
    patch
}