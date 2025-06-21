const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const mainRouter = require('./routes'); 
// Middlewares globais
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Monta o roteador principal
app.use('/api', mainRouter); // Todas as suas rotas, incluindo as do HubSpot, terão o prefixo '/api'

// Rota de Boas-Vindas
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Bem-vindo à minha API de Integração HubSpot!' });
});

// Middleware para lidar com rotas não encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Rota não encontrada.' });
});

// Middleware global de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Erro interno do servidor.',
    error: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
});

module.exports = app;