const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./../models/user');
const router = express.Router();

router.post('/loginpage', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    const token = jwt.sign({ _id: user._id }, 'your_jwt_secret_key'); // Replace 'your_jwt_secret_key' with your actual secret key
    res.send({ token });
  } catch (err) {
    res.status(500).send('Something went wrong.');
  }
});

module.exports = router;
