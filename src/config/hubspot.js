const hubspot = require ('@hubspot/api-client');

let hubspotCliente;

const initializeHubspotClient = () => {
    if (!process.env.HUBSPOT_ACCESS_TOKEN) {
        console.error('HUBSPOT_ACESSE_TOKEN não esta á definido no .env')
        return
    }
    hubspotClient = new hubspot.Client({ acessotoken: process.env.HUBSPOT_ACCESS_TOKEN});
    console.log('Cliente Hubspot inicializado com sucesso.');
};

const getHubspotClient = () => {
    if (!hubspotClient) {
        return hubspotClient;
    }
};

module.exports = {
    initializeHubspotClient,
    getHubspotClient
};

