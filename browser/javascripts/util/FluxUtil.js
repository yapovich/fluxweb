/**
 * Created by yebo on 2016/4/8.
 */
var AppDispatcher=new (require('flux').Dispatcher)();
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var BaseAction = {
    dispatch: function(type,text) {
        AppDispatcher.dispatch({
            actionType: type,
            text: text
        });
    }
}
var BaseStore = assign({}, EventEmitter.prototype, {
    state:{},
    setState:function(data){
        if (data !== undefined) {
            this.state=data;
        }
    },
    emitChange: function() {
        this.emit(FluxConstant.event.CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(FluxConstant.event.CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(FluxConstant.event.CHANGE_EVENT, callback);
    }
});
var BaseView={
    _onChange: function() {
        if(this.store)
          this.setState(this.store.state);
    },
    getInitialState: function() {
        if(this.store)
           return this.store.state;
        return {};
    },
    componentWillMount: function() {
        if(this.willMount){
            this.willMount.call(this);
        }
    },
    componentDidMount: function() {
        if(this.didMount){
            this.didMount.call(this);
        }
        if(this.store) {
            this.store.addChangeListener(this._onChange);
        }
        if(this.resize) {
            window.addEventListener("resize", this.resize);
        }
    },
    componentWillUnmount: function() {
        if(this.willUnMount){
            this.willUnMount.call(this);
        }
        if(this.store)
            this.store.removeChangeListener(this._onChange);
        if(this.resize) {
            window.removeEventListener("resize", this.resize);
        }
    },
    shouldComponentUpdate:function(){
         return this.shouldUpdate?this.shouldUpdate.call(this):true;
    },
    componentWillUpdate  : function() {
        if(this.willUpdate){
            this.willUpdate.call(this);
        }
    },
    componentDidUpdate: function() {
        if(this.didUpdate){
            this.didUpdate.call(this);
        }
    }
};
var FluxUtil={
    //创建存储
    createStore: function(obj) {
        var newObj = assign({}, BaseStore, obj)
        AppDispatcher.register(function (action) {
            if(newObj[action.actionType]) {
                newObj[action.actionType].call(newObj,action.text);
                newObj.emitChange();
            }
        });
        return newObj;
    },
    //创建动作
    createAction: function(obj){
        var newObj = assign({}, BaseAction, obj);
        return newObj;
    },
    //创建视图
    createView: function(obj){
        var newObj = assign({}, BaseView, obj)
        return React.createClass(newObj);
    }
}
//注册全局窗口监听器,位于事件栈顶触发，初始化全局变量
//-----------------------------------------begin
window.addEventListener("resize", function(){
    var w = window, d = document;
    var documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    //重置页面大小
    FluxConstant.view.PAGE_WIDTH=width;
    FluxConstant.view.PAGE_HEIGHT=height;
});
var dispatchEvent=function(obj,eventName){
    if( document.createEvent) {
        var event = document.createEvent ("HTMLEvents");
        event.initEvent(eventName, true, true);
        obj.dispatchEvent(event);
    } else if(document.createEventObject){
        obj.fireEvent("on"+eventName);
    }
}
dispatchEvent(window,"resize");
//-----------------------------------------end
module.exports = FluxUtil;