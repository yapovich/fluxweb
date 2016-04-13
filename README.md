# fluxweb
react+flux+browserify前端组件式开发框架
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