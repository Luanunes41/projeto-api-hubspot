const express = require('express');
const router = express.Router();

const hubspotRoutes = require('./hubspotRoutes');

// Monta as rotas do HubSpot sob o prefixo /hubspot
router.use('/hubspot', hubspotRoutes);

module.exports = router;