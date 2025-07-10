// services/hotmartClient.js
const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

const AUTH_BASE_URL = process.env.HOTMART_AUTH_URL.replace(/\/+$/g, '');
const PAYMENTS_BASE_URL = process.env.HOTMART_PAYMENTS_BASE_URL.replace(/\/+$/g, '');

let _token = null;
let _expiresAt = 0;

async function getHotmartAccessToken() {
  if (_token && Date.now() < _expiresAt) return _token;
  const tokenUrl = `${AUTH_BASE_URL}/security/oauth/token`;
  try {
    const payload = qs.stringify({ grant_type: 'client_credentials' });
    const basicAuth = Buffer.from(
      `${process.env.HOTMART_CLIENT_ID}:${process.env.HOTMART_CLIENT_SECRET}`
    ).toString('base64');

    const response = await axios.post(
      tokenUrl,
      payload,
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const data = response.data;
    if (!data.access_token) throw new Error('Hotmart retornou sem access_token');
    _token = data.access_token;
    _expiresAt = Date.now() + data.expires_in * 1000;
    return _token;
  } catch (e) {
    console.error('❌ Falha ao obter token Hotmart:', e.response?.status, e.response?.data || e.message);
    throw e;
  }
}

async function createCheckoutLink(productId) {
  const token = await getHotmartAccessToken();
  const endpoints = [
    `${PAYMENTS_BASE_URL}/checkout/link`,
    `${PAYMENTS_BASE_URL}/checkout-link`,
    `${PAYMENTS_BASE_URL}/checkout-links`
  ];

  const payload = {
    product: { code: productId },
    quantity: 1,
  };

  for (const url of endpoints) {
    try {
      console.log(`🚀 Trying endpoint: ${url}`);
      const response = await axios.post(
        url,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data && response.data.url) {
        return response.data.url;
      }
    } catch (error) {
      console.error(`❌ Endpoint ${url} error status:`, error.response?.status);
      console.error(`❌ Endpoint ${url} error data:`, error.response?.data);
      // Continue testing next endpoint
    }
  }
  throw new Error('Nenhum endpoint de checkout funcionou (404). Verifique o código do produto e permissões na Hotmart.');
}


module.exports = { createCheckoutLink };
