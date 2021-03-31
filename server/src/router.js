const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/user', controllers.user);
router.use('/product', controllers.product);
router.use('/category', controllers.category);
router.use('/brand', controllers.brand);

module.exports = router;