const express=require('express');
const homeController=require('../contollers/home_Controller')
const router=express.Router();
console.log("routes is loaded");
router.get('/',homeController.home);
router.use('/users',require('./users'));

module.exports=router;
