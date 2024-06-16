const express = require('express');
const Blog = require('../models/Blog');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
});

router.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.send(blog);
});

router.post('/', auth, async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.send(blog);
});

router.delete('/:id', auth, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.send('Blog deleted');
});

router.put('/:id', auth, async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(blog);
});

module.exports = router;
