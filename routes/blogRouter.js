const express = require('express')
const router = express.Router();
const blogController = require('../controllers/blogController');
//blog routes
router.get('/', blogController.blog_index);

//add new blog to the database
router.post('/',blogController.blog_create_post)

//create blog page
router.get('/create', blogController.blog_create_get);
//get specific blog
router.get('/:id',  blogController.blog_details);

//delete specific blog
router.delete('/:id',blogController.blog_delete);

module.exports = router;