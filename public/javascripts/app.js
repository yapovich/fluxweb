/**
 * Created by yebo on 2016/4/8.
 */
//引用第三方静态库
var Jquery=require('./vendor/jquery/jquery-1.9.1');
//应用node模块
var React = require('react');
var ReactDOM = require('react-dom');
var ContainerMain=require('./components/container/main');
var Login=require('./components/container/login');
//渲染初始页面
ReactDOM.render(
    <Login/>,
    document.getElementById('container')
);