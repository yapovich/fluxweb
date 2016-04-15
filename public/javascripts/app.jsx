/**
 * Created by yebo on 2016/4/8.
 */
//引用样式
//var css=require("javascripts/vendor/bootstrap/css/bootstrap.min.css");
//引用第三方静态库
//var Jquery=require('./vendor/jquery/jquery-1.9.1');
//应用node模块
var React = require('react');
var ReactDOM = require('react-dom');
require(['./app/components/Index'], function(Index) {
    var array = [1, 2, 3];
    //ES6
    array.forEach(v => console.log(v));
    //渲染初始页面
    ReactDOM.render(
        <Index/>,
        document.getElementById('container')
    );
});