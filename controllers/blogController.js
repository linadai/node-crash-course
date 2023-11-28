const Blog = require('../models/blogs');
//blog_index
const blog_index = (req, res) => {
    console.log('into ------blog-contoller ');
    Blog.find().sort({createdAt: -1}).then((result) => {
        res.render('blogs/index', { title: 'Home', blogs: result }); //find the index.html file in the views folder
    }).catch((err) => {
        console.log(err);
    })
}

//blog_details
const blog_details = (req, res)=>{
    Blog.findById(req.params.id).then((result) => {
        console.log(result);
        res.render('blogs/details', { title: "Blog details:", blog:result });
    }).catch((err) => {
        console.log(err);
        res.render('404', { title: 'Blog not found' });
    })
}

//blog_create_get,
const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}

//blog_create_post,
const blog_create_post = (req, res) => {
    console.log(req.body);
    const blog = new Blog(req.body);
    blog.save().then((result) => {
        res.redirect("/blogs");
    }).catch((err) => {
        console.log(err);
    })
}

//blog_delete

const blog_delete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id).then((result) => {
        res.json({ redirect: '/blogs' })
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
};