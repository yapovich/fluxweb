module.exports ={
    authorize:function(req, res, next){
        if (!req.session.user) {
            res.send({result:-1,msg:"没有权限"});
        } else {
            next();
        }
    }
}