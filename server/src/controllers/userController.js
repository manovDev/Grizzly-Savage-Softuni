const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { userService } = require('../services');

router.post('/signup', async (req, res) => {
    const userRecord = await userService.signUp(req.body);
    
    return res.json(userRecord);
});

module.exports = router;