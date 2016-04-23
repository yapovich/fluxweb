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
            //views.all("/api",require("../server/lib/filters/loginFilter").isLogined);
            //views.all("/",require("../server/lib/filters/loginFilter").isLogined);
            //views.all("/test/*",require("../server/lib/filters/authFilter").authorize);
            //路由设计
            //views.use('/login', require('../routes/login'));
            //views.use('/', require('../routes/index'));
            //views.use('/m', require('../routes/module'));
            //views.use('/user', require('../routes/user'));
            //views.use('/service/webService', require('../routes/service/webService'));
        }/*,
        getStaticRootDir:function(){
           if(!staticRootDir)
               staticRootDir=path.join(__dirname, '../routes');
            return staticRootDir
        }*/
    }
module.exports = routes;