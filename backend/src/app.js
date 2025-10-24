require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./db');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const init = require('./app_init');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ status: 'CaquiCanela API - primeira versão' }));

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco estabelecida.');
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados.');
    await init();
    app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
  } catch (err) {
    console.error('Erro ao iniciar servidor:', err);
    process.exit(1);
  }
}

start();
