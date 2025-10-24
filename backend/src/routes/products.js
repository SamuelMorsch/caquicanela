const express = require('express');
const Product = require('../models/Product');
const Stock = require('../models/Stock');
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.findAll({ include: [{ model: Stock }] });
  res.json(products);
});

router.post('/', async (req, res) => {
  try {
    const p = await Product.create(req.body);
    res.status(201).json(p);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Erro ao criar produto' });
  }
});

module.exports = router;
