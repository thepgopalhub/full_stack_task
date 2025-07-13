const express = require('express');
const router = express.Router();
const Newsletter = require('../models/newsletter');

// POST email to newsletter
router.post('/', async (req, res) => {
  const email = new Newsletter(req.body);
  await email.save();
  res.status(201).json(email);
});

// GET all newsletter emails
router.get('/', async (req, res) => {
  const emails = await Newsletter.find();
  res.json(emails);
});

module.exports = router;
