const app = require('./app');
const dotenv = require('dotenv');
const { initializeHubspotClient } = require('./config/hubspot'); 

dotenv.config();

const PORT = process.env.PORT || 3000;

initializeHubspotClient();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse a API em: http://localhost:${PORT}/api`);
});