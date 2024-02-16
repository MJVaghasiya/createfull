// auth.js
const express = require('express');
const router = express.Router();
const { register, signin } = require('../controllers/auth');

// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/signin', signin);

module.exports = router;
