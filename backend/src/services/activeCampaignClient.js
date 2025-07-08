const axios = require('axios');
require('dotenv').config();

const apiClient = axios.create({
  baseURL: process.env.ACTIVECAMPAIGN_API_URL,
  headers: {
    'Api-Token': process.env.ACTIVECAMPAIGN_API_KEY,
    'Content-Type': 'application/json'
  },
});

async function addContact(email) {
  const res = await apiClient.post('/api/3/contacts', {
    contact: { email }
  });
  return res.data;
}

async function tagContact(contactId, tagId) {
  const res = await apiClient.post('/api/3/contactTags', {
    contactTag: { contact: contactId, tag: tagId }
  });
  return res.data;
}

module.exports = { addContact, tagContact };