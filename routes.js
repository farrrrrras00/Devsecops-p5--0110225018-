// routes.js - Pengatur rute URL aplikasi
const express = require('express');
const router = express.Router();
const authController = require('./authController');

router.get('/', (req, res) => {
  res.send('Aplikasi DevSecOps Berjalan!');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const result = authController.login(username, password);
  res.json(result);
});

module.exports = router;