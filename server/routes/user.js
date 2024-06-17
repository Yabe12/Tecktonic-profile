const express = require('express');
const router = express.Router();
// const User = require('./../models/User'); // Assuming you have a User model
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

  const token = jwt.sign({ _id: user._id }, 'your_jwt_secret'); // Use a strong secret
  res.send({ token });
});

module.exports = router;
