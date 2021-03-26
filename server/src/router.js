const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/', controllers.home);

module.exports = router;