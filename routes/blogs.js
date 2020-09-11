const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const blogsData = require('../db.json');

router.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const foundBlog = await Blog.findOne({slug: slug});
    // res.json({message: slug});
    res.json({ok: true, response: foundBlog});
  } catch (error) {
    res.json({ok: false, message: error});
  }
})

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json({ok: true, response: blogs})
  } catch (error) {
    res.json({ok: false, messsage: error});
  }
});

router.post('/', async (req, res) => {
  const { title, content, slug, meta, coverImage, brand } = req.body
  const blog = new Blog({
    slug, 
    title,
    content, 
    coverImage, 
    meta, 
    brand
  });

  try {
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (error) {
    res.json({message: error});
  }
})

module.exports = router; 