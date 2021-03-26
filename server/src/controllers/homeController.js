const { Router } = require('express');
const router = Router();

const { homeService } = require('../services');

router.get('/', async (req, res) => {
    const response = homeService.message('Hello from server!');
    return res.json(response);
});


module.exports = router;