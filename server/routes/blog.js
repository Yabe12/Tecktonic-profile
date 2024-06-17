const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Assuming you have a Blog model
const auth = require('../middleware/auth'); // Middleware for authentication

router.get("/blogs",async function (req,res){
  const blogs = await Blog.findAll()
  res.status(200).json({success:true,data:blogs});
})

router.post("/add-blog",async function (req,res){
  const {title,content, image} = req.body

  const blog = await Blog.create({title:title,content:content,image:image})

  res.status(201).send({success:true,data:blog})
})

router.delete("/delete-blog/:id", async function(req, res) {
  const {id} = req.params
  await Blog.findByIdAndDelete(id)

  res.status(200).json({success:true})
})



// Get all blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
});

// Get a single blog by ID
router.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).send('Blog not found');
  res.send(blog);
});

// Create a new blog
router.post('/', auth, async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  });
  await blog.save();
  res.send(blog);
});

// Delete a blog by ID
router.delete('/:id', auth, async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return res.status(404).send('Blog not found');
  res.send(blog);
});

module.exports = router;
