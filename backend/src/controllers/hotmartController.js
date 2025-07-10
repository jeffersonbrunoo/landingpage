// controllers/hotmartController.js
const { createCheckoutLink } = require('../services/hotmartClient');

async function createCheckout(req, res) {
  try {
    const { productId } = req.params;
    const checkoutUrl = await createCheckoutLink(productId);
    console.log('🔗 Checkout URL:', checkoutUrl);
    return res.json({ checkoutUrl });
  } catch (err) {
    console.error('❌ Controller caught error:', err);
    if (err.status && err.data) {
      return res.status(err.status).json({ error: err.data });
    }
    return res.status(500).json({ error: err.message || err });
  }
}

async function handleWebhook(req, res) {
  console.log('📬 Webhook event:', req.body);
  // TODO: persistir no banco, acionar email marketing ou upsell
  return res.sendStatus(200);
}

module.exports = { createCheckout, handleWebhook };
