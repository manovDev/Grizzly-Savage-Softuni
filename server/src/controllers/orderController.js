const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { orderService } = require('../services');

router.post('/place-order', verifyIdToken, async (req, res) => {
    try {
        const orderRecord = await orderService.placeOrder(req.body);
    
        return res.status(200).json(orderRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;