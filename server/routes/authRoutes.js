// authRoutes.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Login route
router.post('/loginpage', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the provided email and password match the admin's credentials
      if (email === 'admin.blog@gmail.com' && password === 'admin') {
        // Generate JWT token
        const token = jwt.sign({ email }, '1212', { expiresIn: '1h' });
        // Set token as a cookie with expiration time
        res.cookie('token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true });
        return res.json({ success: true });
      } else {
        // If credentials don't match, return an error
        return res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login failed:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

module.exports = router;
