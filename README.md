# fluxweb
a lightweight web development framework based by react+flux+webpack,Shielding the explicit call process, so that developers focus on the development of components and business logic
.
## INTRODUCTION
### React
[http://facebook.github.io/react/](http://facebook.github.io/react/ "")
### Flux
[http://facebook.github.io/flux/](http://facebook.github.io/flux/ "")

## Build/Run Dependencies
1. node.js - server-side JS engine

## node,npm install introduction
node.js - [https://github.com/nodejs/node](https://github.com/nodejs/node)

## fluxweb install introduction
Run the following command:
```
git clone https://github.com/yb030832/fluxweb.git
cd fluxweb
npm install
```
## Quick Start
### 1.Create a Store
`/public/javascripts/stores/IndexStore.js`
```
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
### 2.Create a Action
`/public/javascripts/actions/IndexAction.js`
```
var Flux = require('../../vendor/util/FluxUtil');
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
### 3. Create a View
`/broswer/javascripts/app/index.jsx`
```
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
### 4.Create a Less
`/broswer/stylesheets/index.less`
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
### 5.Call view
`/broswer/javascripts/app.jsx`
```
var Index=require('./app/Index');
require(['./app/Index'], function (Index) {
        //渲染初始页面
        ReactDOM.render(
            <Index/>,
            document.getElementById('container')
        );
});
```
### 7.Start a Local HTTP Server
~~~
node ./server/bin/www
~~~
### 8.Build And Watch
~~~
grunt default
~~~
OK，visit local site look our result: http://localhost:3000
## Document
For more information on how to write/package/run apps, see:

* [How to Build And Package Project](https://github.com/yapovich/fluxweb/wiki/How-to-Build-And-Package-Project)

And our [Wiki](https://github.com/yapovich/fluxweb/wiki) for much more.
