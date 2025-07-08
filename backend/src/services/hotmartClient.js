const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

const AUTH_BASE_URL = process.env.HOTMART_AUTH_URL;
const PAYMENTS_BASE_URL = process.env.HOTMART_PAYMENTS_BASE_URL;

let _token = null;
let _expiresAt = 0;

async function getHotmartAccessToken() {
  if (_token && Date.now() < _expiresAt) return _token;

  const basicAuth = Buffer.from(
    `${process.env.HOTMART_CLIENT_ID}:${process.env.HOTMART_CLIENT_SECRET}`
  ).toString('base64');

  const tokenResponse = await axios.post(
    `${AUTH_BASE_URL}/security/oauth/token`,
    qs.stringify({ grant_type: 'client_credentials' }),
    {
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  _token = tokenResponse.data.access_token;
  _expiresAt = Date.now() + tokenResponse.data.expires_in * 1000;
  return _token;
}

async function createCheckoutLink(productId) {
  const token = await getHotmartAccessToken();

  try {
    const response = await axios.post(
      `${PAYMENTS_BASE_URL}/checkout-links`,
      { product: { productId } },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('🔎 Hotmart response:', response.data);
    return response.data.url;
  } catch (error) {
    if (error.response) {
      console.error('❌ Hotmart error status:', error.response.status);
      console.error('❌ Hotmart error data:', error.response.data);
      // encaminha status e body para o controller
      throw { status: error.response.status, data: error.response.data };
    }
    console.error('❌ Request error:', error.message);
    throw error;
  }
}

module.exports = { createCheckoutLink };
