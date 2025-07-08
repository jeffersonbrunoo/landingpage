const express = require('express');
const router = express.Router();
const { createCheckout, handleWebhook } = require('../controllers/hotmartController');
const verifyHotmartToken = require('../middleware/verifyHotmartToken');

router.get('/checkout/:productId', createCheckout);
router.post('/webhooks', verifyHotmartToken, handleWebhook);

module.exports = router;
