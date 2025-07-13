const express = require('express');
const router = express.Router();
const Client = require('../models/client');

// GET all clients
router.get('/', async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

// POST add a client
router.post('/', async (req, res) => {
  const newClient = new Client(req.body);
  await newClient.save();
  res.status(201).json(newClient);
});

module.exports = router;
