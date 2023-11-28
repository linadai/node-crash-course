//express app
const express = require('express');
const app = express();
const morgan = require('morgan'); //HTTP request logger middleware for node.js
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRouter');
//connect to mongodb
const dbURL = 'mongodb+srv://linadaijuly:Tpr3mFLcUWXtNq1t@cluster0.gsmkz2f.mongodb.net/note-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURL).then((result) => {
    //console.log(result);
    app.listen(3000)

}).catch((err) => {
    console.log(err);
});

//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog3',
//         snippet: 'new snippet3',
//         body: 'new body3'
//     });
//     blog.save().then((result) => {
//         console.log(result);
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });
// })
// //find all blogs
// app.get('/all-blogs', (req, res) => {
//     Blog.find().then((result) => {
//         console.log(result);
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     })
// })


//register view engine
app.set('view engine', 'ejs'); //automatically find the html pages in the views folder

//add middleware
// app.use((req, res, next) => {
//     console.log("Go to the fisrt middleware");
//     next();
// })
// app.use((req, res, next) => {
//     console.log("Go to the second middleware")
//     next();
// })

//use morgan middleware
app.use(morgan('dev'));

//middleware & static files
app.use(express.static(__dirname + '/public'));// Due to static files cannot be accessed by the browser by default in the backend, we use express.static to serve static files from the public folder.
//url encoded middleware
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
   res.redirect("/blogs")
});



app.get('/about', (req, res) => {
    res.render('about', { title: 'About' }); //find the about.html file in the views folder
});


//blog routes
 app.use('/blogs',blogRoutes); //use middleware for blog routes


//404page
app.use((req, res) => { //should go very bottom, before any other request 
    // res.sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404', { title: '404' });
})
