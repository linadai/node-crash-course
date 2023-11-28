//create a model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });
const Blog = mongoose.model('Blog', blogSchema); //'Blog' should be the singular name of the collection
module.exports = Blog;