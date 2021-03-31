const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { productService } = require('../services');


//TOTO: Add verify if the request is made from an admin
router.get('/get-all', async (req, res) => {
    try {
        const productsRecord = await productService.getAll(req.body);
    
        return res.status(200).json(productsRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const productRecord = await productService.getOne(req.params.productId);
    
        return res.status(200).json(productRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/create', async (req, res) => {
    try {
        const productRecord = await productService.create(req.body);
    
        return res.status(200).json(productRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.put('/edit', async (req, res) => {
    try {
        const productRecord = await productService.edit(req.body);
    
        return res.status(200).json(productRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.delete('/delete', async (req, res) => {
    try {
        const productRecord = await productService.del(req.body);
    
        return res.status(200).json(productRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;