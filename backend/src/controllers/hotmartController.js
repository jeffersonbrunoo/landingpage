const { createCheckoutLink } = require('../services/hotmartClient');

async function createCheckout(req, res) {
  try {
    const { productId } = req.params;
    const checkoutUrl = await createCheckoutLink(productId);

    console.log('🔗 Checkout URL:', checkoutUrl);
    return res.json({ checkoutUrl });
  } catch (err) {
    console.error('❌ Controller caught error:', err);
    // se é um erro Hotmart estruturado, usa status/data
    if (err.status && err.data) {
      return res.status(err.status).json({ error: err.data });
    }
    // fallback genérico
    return res.status(500).json({ error: err.message || err });
  }
}

async function handleWebhook(req, res) {
  console.log('📬 Webhook event:', req.body);
  // TODO: persistir a venda, acionar email marketing, etc.
  res.sendStatus(200);
}

module.exports = { createCheckout, handleWebhook };
