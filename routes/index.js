const express=require('express');
const homeController=require('../contollers/homeController')
const router=express.Router();
console.log("routes is loaded");
router.get('/',homeController.home);
module.exports=router;
