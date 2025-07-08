const express = require('express');
const cors = require('cors');
require('dotenv').config();

const hotmartRoutes = require('./routes/hotmart');
const acRoutes = require('./routes/activeCampaign');

const app = express();
app.use(cors());
app.use(express.json());

// Monta as rotas do micro-serviço
app.use('/api/hotmart', hotmartRoutes);
app.use('/api/activecampaign', acRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});