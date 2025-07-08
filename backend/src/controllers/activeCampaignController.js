const { addContact, tagContact } = require('../services/activeCampaignClient');

async function subscribeContact(req, res) {
  try {
    const { email, tagId } = req.body;
    const data = await addContact(email);
    if (tagId) await tagContact(data.contact.id, tagId);
    res.json({ success: true, contact: data });
  } catch (err) {
    console.error('Error subscribing contact:', err);
    res.status(500).json({ error: 'Failed to subscribe contact' });
  }
}

module.exports = { subscribeContact };