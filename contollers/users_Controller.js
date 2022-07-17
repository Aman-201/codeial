module.exports.profile=function(req,res)
{
    return res.render('home',{title:'Profile'});
}
module.exports.signUp=function(req,res)
{
    return res.render('user_sign_up');
}
module.exports.signIn=function(req,res)
{
    return res.render('user_sign_in');
}
module.exports.create=function(req,res)
{

}
module.exports.createSession=function(req,res)
{

}
