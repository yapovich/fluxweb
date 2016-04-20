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

## node install introduction
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
`/broswer/javascripts/stores/IndexStore.js`
```
var resultText="";
var IndexStore = Flux.createStore({

    /*
      Update storage results, update as the name of the contract must be implemented
    */
    update:function(action) {
        var text = action.text.trim();
        switch(action.actionType) {
            /*
              Register updateText action processing logic
            */
            case "updateText":
                if (text !== '') {
                    resultText=text;
                }
                break;
            default:
            // no op
        }
    },
    /*
      Get the storage results,
      getResultText for the custom function name,
      optional implementation, in general,
      there is at least one getSomething function,
      in order to obtain the storage data
    */
    getResultText: function() {
        return resultText;
    }
});
module.exports = IndexStore;
```
### 2.Create a Action
`/broswer/javascripts/actions/IndexAction.js`
```
var Flux = require('../../vendor/util/FluxUtil');
var IndexAction = Flux.createAction({
    /*
      Initiate the update action, updateText for the custom function name,
      optional implementation, in general,
      there is at least one updateSomething function
      in order to initiate action
    */
    updateText: function(text) {
        /*
          Broadcast update action, all Store will receive
        */
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
       /*
       Gets the current view of the Store,
       if you use the Store, you must implement the method,
       otherwise it will not be able to respond to the status update
       */
       getStore: function(){
           return [IndexStore];
       },
       /*
         Gets the current view state, usually from Store
       */
       getState: function(){
           return {text: LoginStore.getResultText()};
       },
       /*
         Initiate a action, this is the click event initiated
       */
       handleClick:function(){
           IndexAction.updateText("this is my first update");
       },
       /*
         View rendering, automatic call when the state changes
       */
       render: function() {
           return (
               <div>
                  <label>{this.state.text}</label>
                  <button onClick={this.handleClick}></button>
               </div>
        },
        /*
          Size of the re painting, the size of the change occurs when the automatic call
        */
        resize: function() {
            /*
              Gets the size of the current page
            */
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
        //Initial page rendering
        ReactDOM.render(
            <Index/>,
            document.getElementById('container')
        );
});
```
### 7.Build And Watch
~~~
grunt default
~~~
### 8.Start a Local HTTP Server
~~~
node ./server/bin/www
~~~
OK，visit local site look our result: http://localhost:3000
## Document
For more information on how to write/package/run apps, see:

* [How to Build And Package Project](https://github.com/yapovich/fluxweb/wiki/How-to-Build-And-Package-Project)

And our [Wiki](https://github.com/yapovich/fluxweb/wiki) for much more.
