const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/user', controllers.user);

module.exports = router;