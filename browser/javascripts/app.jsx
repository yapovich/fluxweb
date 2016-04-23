/**
 * Created by yebo on 2016/4/8.
 */
//导入样式
require('./vendor/bootstrap/css/bootstrap');
require('./vendor/jquery/jquery-easyui-1.3.6/themes/gray/easyui');
require('./vendor/jquery/scrollbar/jquery.mCustomScrollbar');
require('../stylesheets/index.less');
//导入语言环境相关文件
var lang = $.i18n.browserLang().replace("-", "_");
require("./vendor/jquery/jquery-easyui-1.3.6/locale/easyui-lang-" + lang)
var loadModule=function(name) {
    require(['./views/' + name], function (Index) {
        //var array = [1, 2, 3];
        //ES6
        //array.forEach(v => console.log(v));
        //渲染初始页面
        ReactDOM.render(
            <Index/>,
            document.getElementById('container')
        );
    });
};
loadModule("Index");