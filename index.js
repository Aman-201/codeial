const express=require('express');
const app=express();
const port=8000;


//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

// use express router
app.use('/',require('./routes'));



app.listen(port,function(error)
{
if(error)
console.log(`Error in running is: ${error}`);

console.log(`running on port: ${port}`);
});