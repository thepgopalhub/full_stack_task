const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST a contact form
router.post('/', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
});

// GET all contact form entries
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

module.exports = router;
