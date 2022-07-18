const User=require('../models/user');

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
if(req.body.password!==req.body.confirmpassword)
{
   return res.redirect('back');
}

User.findOne({'email':req.body.email},function(err,result)
{
    if(err){ console.log("error in finding the user");}
    if(!result)
    {
        User.create(req.body,function(req,res)
        {
            if(err){
                console.log("error in signing up");
            }
            return res.redirect('/users/create');
        })
    }
    else{
        return res.redirect('back');
    }
})

    // TODO later
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // TODO later
}