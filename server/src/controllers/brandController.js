const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { brandService } = require('../services');


//TOTO: Add verify if the request is made from an admin
router.get('/get-all', async (req, res) => {
    try {
        const brandRecord = await brandService.getAll(req.body);
    
        return res.status(200).json(brandRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/create', async (req, res) => {
    try {
        const brandRecord = await brandService.create(req.body);
    
        return res.status(200).json(brandRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.put('/edit', async (req, res) => {
    try {
        const brandRecord = await brandService.edit(req.body);
    
        return res.status(200).json(brandRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.delete('/delete', async (req, res) => {
    try {
        const brandRecord = await brandService.del(req.body);
    
        return res.status(200).json(brandRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;