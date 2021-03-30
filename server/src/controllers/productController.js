const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { productService } = require('../services');


//TOTO: Add verify if the request is made from an admin
router.post('/create-product', async (req, res) => {
    try {
        const productRecord = await productService.create(req.body);
    
        return res.status(200).json(productRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.put('/edit-product', async (req, res) => {
    try {
        const productRecord = await productService.edit(req.body);
    
        return res.status(200).json(productRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.delete('/delete-product', async (req, res) => {
    try {
        const productRecord = await productService.del(req.body);
    
        return res.status(200).json(productRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;