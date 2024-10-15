//db.js
const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/blog_api";


mongoose.connect(mongoURL);

const db = mongoose.connection;

//event listeners
db.on('connected', () => {
    console.log(`Connected to MongoDB server`);
});

db.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`);
    
});

db.on('disconnected', () => {
    console.log(`MongoDB server disconnected`);
    
});


module.exports = db;

