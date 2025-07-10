// middleware/verifyHotmartToken.js
require('dotenv').config();

function verifyHotmartToken(req, res, next) {
  const incoming = req.headers['x-hook-verification'];
  if (incoming !== process.env.HOTMART_WEBHOOK_TOKEN) {
    return res.status(401).json({ error: 'Invalid webhook token' });
  }
  next();
}

module.exports = verifyHotmartToken;
