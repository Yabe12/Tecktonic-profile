const express = require('express');
const auth = require('../middleware/auth');
const Blog = require('../models/Blog'); // Adjust the path according to your project structure
const router = express.Router();

// Get all blogs
router.get('/blogs', auth, async (req, res) => {
  const blogs = await Blog.find().sort('createdAt');
  res.send(blogs);
});

// Create a new blog
router.post('/blogs', auth, async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image
  });
  await blog.save();
  res.send(blog);
});

// Delete a blog
router.delete('/blogs/:id', auth, async (req, res) => {
  const blog = await Blog.findByIdAndRemove(req.params.id);
  if (!blog) return res.status(404).send('The blog with the given ID was not found.');
  res.send(blog);
});

module.exports = router;
