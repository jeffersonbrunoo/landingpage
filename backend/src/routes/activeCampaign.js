const express = require('express');
const router = express.Router();
const { subscribeContact } = require('../controllers/activeCampaignController');

router.post('/contacts', subscribeContact);

module.exports = router;