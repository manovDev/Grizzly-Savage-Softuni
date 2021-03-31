const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { categoryService } = require('../services');


//TOTO: Add verify if the request is made from an admin
router.get('/get-all', async (req, res) => {
    try {
        const categoryRecord = await categoryService.getAll(req.body);
    
        return res.status(200).json(categoryRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/create', async (req, res) => {
    try {
        const categoryRecord = await categoryService.create(req.body);
    
        return res.status(200).json(categoryRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.put('/edit', async (req, res) => {
    try {
        const categoryRecord = await categoryService.edit(req.body);
    
        return res.status(200).json(categoryRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.delete('/delete', async (req, res) => {
    try {
        const categoryRecord = await categoryService.del(req.body);
    
        return res.status(200).json(categoryRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;