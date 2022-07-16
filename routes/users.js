
const express=require('express')
const router=express.Router();
const userController=require('../contollers/users_Controller');
const postController=require('../contollers/posts_controller');

// this means whenever localhost:8000/users/profile is requested or called it will go to user controller and import the profile in controllers
router.get('/profile',userController.profile);
router.get('/posts',postController.posts);




module.exports=router;