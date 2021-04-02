const user = require('./userController');
const product = require('./productController');
const category = require('./categoryController');
const brand = require('./brandController');
const order = require('./orderController');

module.exports = {
    user,
    product,
    category,
    brand,
    order,
};