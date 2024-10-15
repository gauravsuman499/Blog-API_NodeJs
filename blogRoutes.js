const express = require("express");
const router = express.Router();

const Blog = require("../models/Blog.js");

// /********************** CREATE A BLOG *********************/
router.post("", async(req, res) => {
    try {
        const newBlog = new Blog(req.body);
        console.log(newBlog);
        
    const response = await newBlog.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



/********************** GET ALL BLOG *********************/

router.get("", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/********************** GET BLOG BY ID *********************/

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/********************** EDIT A BLOG *********************/

router.put("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/********************** DELETE ALL BLOG *********************/

router.delete("", async (req, res) => {
  try {
    await Blog.deleteMany();
    res.json({ message: "All blogs deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/********************** DELETE BLOG BY ID *********************/

router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully", deletedBlog: blog });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
