const express = require ('express');
const router = express.Router();
const hubspotController = require('../controllers/hubspotController');

router.post('/contacts', hubspotController.createContact);
router.post('/deals', hubspotController.createDeal);
router.post('/associations', hubspotController.createAssociation);

module.exports = router;

