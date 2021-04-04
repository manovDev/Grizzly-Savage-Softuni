const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { userService } = require('../services');

router.post('/signup', async (req, res) => {
    try {
        const userRecord = await userService.signUp(req.body);
        
        return res.json(userRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/signin', verifyIdToken, async (req, res) => {
    try {
        const userRecord = await userService.signIn(req.body);
    
        return res.json(userRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
    
});

router.post('/verifyuser', verifyIdToken, async (req, res) => {
    try {
        const userRecord = await userService.verifyUser(req.body);
    
        return res.json(userRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
    
});

module.exports = router;