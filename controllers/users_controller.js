const User=require('../models/user');
const bodyParser=require('body-parser')
module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}


// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    console.log(req.body);
if(req.body.password!=req.body.confirm_password)
{
    console.log("password not equal");
   return res.redirect('back');
}

User.findOne({'email':req.body.email},function(err,result)
{
    if(err){ console.log("error in finding the user");}
    if(!result)
    {
        console.log("added to databasee");
        User.create(req.body,function(req,res)
        {
            if(err){
                console.log("error in signing up");
            }
           
        })
        return res.redirect('/users/create');
    }
    else{
        // console.log(result);
        return res.redirect('back');
    }
})

    // TODO later
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    User.findOne({'email':req.body.email},function(err,user)
    {
        if(err){console.log("error in finding the entry");}

        if(user)
        {
            if(user.password!=req.body.password)
            {
                console.log("password not matched");
               return res.redirect('back');
            }
            res.cookie("user_id",user.id);
            return res.redirect('/users/profile');
        }
        else
        {
            res.redirect('back');
        }
    })
    // TODO later
}