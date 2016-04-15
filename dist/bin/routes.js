/**
 * Created by yebo on 2015/12/3.
 */
var path = require('path');
var staticRootDir;
var fs=require("fs");
var getFilePath=function(path,app){
    fs.readdir(routes.getStaticRootDir()+path, function(err,files){
        if(!err&&files&&files.length>0) {
            for (var i = 0; i < files.length; i++) {
                var _p=path+files[i]
                if(_p.indexOf(".js")>-1){
                    _p=_p.substr(0,_p.indexOf(".js"));
                    console.log(_p);
                    app.use(_p, require('../routes'+_p));
                }
                else
                  getFilePath(_p+"/",app);
            }

        }else{
            console.log(err);
        }
    })
}
var routes={
        createRoutes:function(app){
            //过滤器，必须在app.use前面
            //app.all("/api",require("../lib/filters/loginFilter").isLogined);
            //app.all("/",require("../lib/filters/loginFilter").isLogined);
            //app.all("/test/*",require("../lib/filters/authFilter").authorize);
            //路由设计
            //app.use('/login', require('../routes/login'));
            //app.use('/', require('../routes/index'));
            //app.use('/m', require('../routes/module'));
            //app.use('/user', require('../routes/user'));
            //app.use('/service/webService', require('../routes/service/webService'));
        },
        getStaticRootDir:function(){
           if(!staticRootDir)
               staticRootDir=path.join(__dirname, '../routes');
            return staticRootDir
        }
    }
module.exports = routes;