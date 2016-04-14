# fluxweb
react+flux+browserify前端组件式开发框架，基于上述三大框架做了工程化和约定俗成的封装，屏蔽了显式的调用过程，使开发人员专注于组件及其业务逻辑的开发。
## 写在前面
### React
React是一个JavaScript框架，用于构建“可预期的”和“声明式的”Web用户界面，它已经使Facebook更快地开发Web应用。
可通过Facebook的github网址了解详情：
[http://facebook.github.io/react/](http://facebook.github.io/react/ "")
### Flux
Flux 是一个Facebook开发的、利用单向数据流实现的应用架构，用于 React。
Flux应用有四个主要的部分组成：调度(Dispatcher)、存储(Store)、动作(Action)和视图(React)。
Facebook工程经理Tom Occhino说，由于他们“非常巨大”的代码库和庞大的组织，因而需要“以某种方式使代码结构化，使其更加可预测”。
这已经通过 Flux 和 React 完成。
Flux是一个系统架构，用于推进应用中的数据单向流动。
可通过Facebook的github网址了解详情：
[http://facebook.github.io/flux/](http://facebook.github.io/flux/ "")
### Browserify
Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过预编译让前端 javascript 可以直接使用 node npm 安装的一些库。

安装：
```
npm install -g browserify
```
这是 main.js 的内容，像普通的 nodejs 程序那样使用 require() 加载库和文件：
```
var foo = require('./foo.js');
var bar = require('../lib/bar.js');
var gamma = require('gamma');
var elem = document.getElementById('result');
var x = foo(100) + bar('baz');
elem.textContent = gamma(x);
```
导出的方法：
```
module.exports = function (n) { return n * 111 }
```
使用 browserify 编译：
```
$ browserify main.js > bundle.js
```
现在 main.js 需要的所有其它文件都会被编译进 bundle.js 中，包括很多层 require() 的情况也会一起被递归式的编译过来。

编译好的 js 可以直接拿到浏览器使用
```
<script src="bundle.js"></script>
```
因此，框架采用Browserify的模块化方式组织我们的javascript代码，进一步提高了代码的可维护性和可测试性，后面将结合nodeunit模块详细介绍如何进行js模块的单元测试
## 构建/运行依赖
1. node.js - server-side JS engine
2. npm - node package manager

## node,npm安装说明
node.js - [https://github.com/nodejs/node](https://github.com/nodejs/node)

npm - [https://github.com/npm/npm](https://github.com/npm/npm)
(npm在最近的node.js发布系列版中已加入，不需要单独安装)
## fluxweb安装说明
运行以下命令：
```
git clone https://github.com/yb030832/fluxweb.git
cd fluxweb
npm install
```
## 一个例子
### 1. 创建页面
/public/index.html
```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <!--sourcecss begin-->
    <link rel="stylesheet/less" type="text/css" href="stylesheets/less/index.less"/>
    <script type="text/javascript" src="javascripts/vendor/less/less.min.js"></script>
    <!--sourcecss end-->
</head>
<body>
<div id="container"></div>
</body>
</html>
<!--sourcejs begin-->
<script type="text/javascript" src="javascripts/bundle.js"></script>
<!--sourcejs end-->
```
以上是初始页面的基本结构，其中&lt;!--sourcecss ...--&gt;，&lt;!--sourcejs ...--&gt;标签是页面预编译参数，不能省略，
在正式编译后，此类标签内的脚本或样式将被编译后版本替换。
显然，框架样式是基于less开发的，因此引入了less样式文件以及less编译脚本，bundle.js是未压缩版本的broswerify合并文件，将在编译时被压缩。
编译后的页面结构如下：

/dist/public/index.html
```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet/css" type="text/css" href="stylesheets/all.css"/>
</head>
<body>
<div id="container"></div>
</body>
</html>
<script type="text/javascript" src="javascripts/bundle.min.js"></script>
```
### 2.创建样式
/public/stylesheets/less/index.less
```
@baseBackgroundColor:#ffffff;
@width:100%;
@height:100%;
html,body{
  width:@width;
  height:@height;
  overflow:hidden;
}
#container{
  width:@width;
  height:@height;
  background-color:@baseBackgroundColor;
}
```
### 3.创建存储(Store)
/public/javascripts/stores/IndexStore.js
```
var Flux = require('../vendor/util/FluxUtil');
var resultText="";
var IndexStore = Flux.createStore({
    //更新存储结果，update为约定函数名，必须实现
    update:function(action) {
        var text = action.text.trim();
        switch(action.actionType) {
            case "updateText"://注册updateText动作处理逻辑
                if (text !== '') {
                    resultText=text;
                }
                break;
            default:
            // no op
        }
    },
    //获取存储结果，getResultText为自定义函数名，可选实现
    //一般来说,至少有一个getSomething函数,以便获取存储数据
    getResultText: function() {
        return resultText;
    }
});
module.exports = IndexStore;
```
### 4.创建动作(Action)
/public/javascripts/actions/IndexAction.js
```
var Flux = require('../vendor/util/FluxUtil');
var IndexAction = Flux.createAction({
    //发起更新动作，updateText为自定义函数名，可选实现
    //一般来说,至少有一个updateSomething函数,以便发起动作
    updateText: function(text) {
        //广播更新动作，所有的Store都将接收到
        this.dispatch("updateText",text);
    }
});
module.exports = IndexAction;
```
注意：通常，我们在发起一个动作的时候，会跟服务端进行数据传输，
比如发送一个ajax请求，我们也是在Action的updateSomething方法中去实现，
并在请求返回时dispatch出去，
Store只负责存放最后的结果和结果运算,不负责前后端通讯。
### 5.创建视图(React)
/public/javascripts/components/Index.js
```
var Flux = require('../vendor/util/FluxUtil');
var FluxConstant=require("../vendor/util/FluxConstant");
var React = require('react');
var IndexStore = require('../stores/IndexStore');
var IndexAction = require('../actions/IndexAction');
var Index = Flux.createView({
    //获取当前视图所需Store,如果用到了Store,必须实现该方法，否则将无法响应状态更新
    getStore: function(){
        return [IndexStore];
    },
    //获取当前视图状态，通常都是从Store中获取
    getState: function(){
        return {text: LoginStore.getResultText()};
    },
    //发起一个动作，此例为点击事件发起
    handleClick:function(){
        IndexAction.updateText("this is my first update");
    },
    //视图渲染，发生状态变化时自动调用
    render: function() {
        return (
            <div>
               <label>{this.state.text}</label>
               <button onClick={this.handleClick}></button>
            </div>
     },
     //尺寸重绘，发生窗体大小变化时自动调用
     resize: function() {
         //获取当前页面的尺寸
         var width=FluxConstant.view.PAGE_WIDTH;
         var height=FluxConstant.view.PAGE_HEIGHT;
     }
});
module.exports = Index;
```
### 6.调用视图
/public/app.js
```
var Jquery=require('./vendor/jquery/jquery-1.9.1');
//应用node模块
var React = require('react');
var ReactDOM = require('react-dom');
var ContainerMain=require('./components/container/main');
var Index=require('./components/Index');
//渲染初始页面
ReactDOM.render(
    <Index/>,
    document.getElementById('container')
);
```
### 7.启动本地HTTP服务
通过框架安装的node express开启一个http服务来测试例子：
~~~
node ./bin/www
~~~
### 8.编译并启动文件监控
启动框架已配置的grunt任务编译代码，并开始文件监控，下次我们再修改代码，就能自动编译啦！
~~~
grunt monitor
~~~
注意在Window开发环境下，不要关闭Shell，Linux开发环境下可通过nohup命令在后台运行:)

OK，访问http://localhost:3000来看看结果吧！
## 文档
想要了解更多关于如何编译打包web应用的信息,如下所示:

* [如何编译打包工程](https://github.com/yb030832/fluxweb/wiki/%E5%A6%82%E4%BD%95%E7%BC%96%E8%AF%91%E6%89%93%E5%8C%85%E5%B7%A5%E7%A8%8B)

进入我们的[Wiki](https://github.com/yb030832/fluxweb/wiki)可了解更多
this is boboweiqi's github
