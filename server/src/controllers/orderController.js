const { Router } = require('express');
const router = Router();

const verifyIdToken = require('../middlewares/verifyIdToken');
const { orderService } = require('../services');

router.get('/get-all', verifyIdToken, async (req, res) => {
    try {
        const ordersRecord = await orderService.getAll(req.body);

        return res.status(200).json(ordersRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/place-order', verifyIdToken, async (req, res) => {
    try {
        const orderRecord = await orderService.placeOrder(req.body);

        return res.status(200).json(orderRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});


router.patch('/:orderId', verifyIdToken, async (req, res) => {
    try {
        const orderRecord = await orderService.patch(req.params.orderId, req.body);
        return res.status(200).json(orderRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get('/:orderId', async (req, res) => {
    try {
        const orderRecord = await orderService.getOne(req.params.orderId);

        return res.status(200).json(orderRecord);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;