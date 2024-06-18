// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Ensure you have a Blog model defined

// Get all blogs
router.get('/', async (req, res) => { // Notice the '/' to handle '/api/blogs'
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single blog by ID
router.get('/:id', async (req, res) => { // Added '/' before :id
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: 'Cannot find blog' });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new blog
router.post('/', async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    summery: req.body.summery,
    image: req.body.image,
  });
  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a blog
router.put('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: 'Cannot find blog' });
    }

    if (req.body.title != null) {
      blog.title = req.body.title;
    }
    if (req.body.content != null) {
      blog.content = req.body.content;
    }
    if (req.body.image != null) {
      blog.image = req.body.image;
    }
    if (req.body.summery != null) {
      blog.summery = req.body.summery;
    }

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Deleted blog' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
