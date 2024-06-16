// routes/protectedRoutes.js

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

module.exports = router;
