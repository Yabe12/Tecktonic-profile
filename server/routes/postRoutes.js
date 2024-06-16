// postRoutes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');

// Create new post
app.post('/postPage', checkAdmin, async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (error) {
    console.error('Failed to create post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update post
app.put('/postPage/:id', checkAdmin, async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.json(post);
  } catch (error) {
    console.error('Failed to update post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete post
app.delete('/postPage/:id', checkAdmin, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Failed to delete post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
