const {getHubspotClient} = require ('../config/hubspot');

const hubspotService = {
    async createContact(properties) {
        const hubspotClient = getHubspotClient();
        try {
            const SimplePublicObjectInput = {properties};
                  const apiResponse = await hubspotClient.crm.deals.basicApi.create(SimplePublicObjectInput);
                        return apiResponse.body;
          
        }

    catch (e) {
    console.error('Erro ao criar negócio no HubSpot:', e.response ? JSON.stringify(e.response.body, null, 2) : e.message);
    throw new Error(`Erro HubSpot ao criar negócio: ${e.response ? e.response.body.message : e.message}`);

    }
},

 async associateObjects(fromObjectType, fromObjectId, toObjectType, toObjectId, associationType = "deal_to_contact") {
    const hubspotClient = getHubspotClient();
    try {
   
      const AssociationInput = {
        from: { id: fromObjectId },
        to: { id: toObjectId },
        type: associationType 
      };

      const apiResponse = await hubspotClient.crm.associations.v4.basicApi.create(
        fromObjectType,
        fromObjectId,
        toObjectType,
        AssociationInput
      );
      return apiResponse.body;

    } catch (e) {
      console.error('Erro ao criar associação no HubSpot:', e.response ? JSON.stringify(e.response.body, null, 2) : e.message);
      throw new Error(`Erro HubSpot ao associar objetos: ${e.response ? e.response.body.message : e.message}`);
    }
  }
};

module.exports = hubspotService;
