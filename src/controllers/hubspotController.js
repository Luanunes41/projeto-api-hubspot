const hubspotService = require ('../services/hubspotService');
const { createContact } = require('../services/hubspotService');

const hubspotController = {
async createContact(req, res) {
    try {
        const contactProperties = req.body;
        const newContact = await hubspotService.createContact(contactProperties);
        res.status(201).json({message: 'Contato criado com sucesso no Hubspot!', contact: newContact});
    } catch (error) {
        res.status(500).json({message: 'Falha ao criar contato no hubspot.', error: error.message});
    }
},

async createDeal(req, res) {
        try {
      const dealProperties = req.body; 
      const newDeal = await hubspotService.createDeal(dealProperties);
      res.status(201).json({ message: 'Negócio criado com sucesso no HubSpot!', deal: newDeal });
    } catch (error) {
      res.status(500).json({ message: 'Falha ao criar negócio no HubSpot.', error: error.message });
    }
  },

  async createAssociation(req, res) {
    try {
      const { fromObjectType, fromObjectId, toObjectType, toObjectId, associationType } = req.body;
      const associationResult = await hubspotService.associateObjects(fromObjectType, fromObjectId, toObjectType, toObjectId, associationType);
      res.status(200).json({ message: 'Associação criada com sucesso no HubSpot!', result: associationResult });
    } catch (error) {
      res.status(500).json({ message: 'Falha ao criar associação no HubSpot.', error: error.message });
    }
  }
};

module.exports = hubspotController;
