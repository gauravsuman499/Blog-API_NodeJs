const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    content: {
        type: String,
        required : true
    },
    author: {
        type: String,
        required : true
    },
    created_at: {
        type: Date,
        default: new Date().toLocaleString()
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
