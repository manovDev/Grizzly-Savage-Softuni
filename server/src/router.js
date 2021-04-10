const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/user', controllers.user);
router.use('/product', controllers.product);
router.use('/category', controllers.category);
router.use('/brand', controllers.brand);
router.use('/order', controllers.order);

module.exports = router;