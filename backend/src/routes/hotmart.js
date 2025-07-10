// routes/hotmart.js
const express = require('express');
const { createCheckout, handleWebhook } = require('../controllers/hotmartController');
const verifyHotmartToken = require('../middleware/verifyHotmartToken');

const router = express.Router();

router.get('/checkout/:productId', createCheckout);
router.post('/webhook', verifyHotmartToken, handleWebhook);

module.exports = router;
