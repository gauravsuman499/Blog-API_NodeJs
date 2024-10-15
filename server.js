const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(express.json());

const db = require("./db");
const Blog = require("./models/Blog.js");

const blogRoutes = require("./routes/blogRoutes");
app.use("/api/blogs", blogRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
