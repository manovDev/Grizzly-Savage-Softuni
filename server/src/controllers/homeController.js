const { Router } = require('express');
const router = Router();

const { homeService } = require('../services');

router.get('/', async (req, res) => {
    res.send('Hello from server');
    return;
});


module.exports = router;