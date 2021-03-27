const { Router } = require('express');
const router = Router();

const { userService } = require('../services');

router.post('/signup', async (req, res) => {
    const response = await userService.signUp(req.body);
    return await res.json(response);
});


module.exports = router;