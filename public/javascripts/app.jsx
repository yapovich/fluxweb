/**
 * Created by yebo on 2016/4/8.
 */
//导入样式
require('./vendor/bootstrap/css/bootstrap');
require('../stylesheets/index.less');
//应用node模块
var React = require('react');
var ReactDOM = require('react-dom');
var loadModule=function(name) {
    require(['./app/' + name], function (Index) {
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