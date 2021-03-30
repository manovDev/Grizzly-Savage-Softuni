const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { productService } = require('../services');


//TOTO: Add verify on create if the request is made from an admin
router.post('/create-product', async (req, res) => {
    try {
        const productRecord = await productService.create(req.body);
    
        return res.json(productRecord);
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({ error });
    }
});

module.exports = router;