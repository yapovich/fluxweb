/**
 * Created by yebo on 2016/4/11.
 */
var Flux = require('../vendor/util/FluxUtil');
var FluxConstant=require("../vendor/util/FluxConstant");
var React = require('react');
var IndexStore = require('../stores/IndexStore');
var IndexAction = require('../actions/IndexAction');
var Button=require('../components/bootstrap/Button');
//console.log($("#container").width()+"########"+$("#container").height());
var Index = Flux.createView({
    //获取当前视图所需Store,如果用到了Store,必须实现该方法，否则将无法响应状态更新
getStore: function(){
    return [IndexStore];
},
//获取当前视图状态，通常都是从Store中获取
getState: function(){
    return {text: IndexStore.getResultText()};
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
        <Button id="loginBtn" className="btn-danger btn-large" onClick={this.handleClick}>
            我的点击按钮
        </Button>
            <span className="glyphicon glyphicon-hand-left"></span>
        </div>
   )
},
//尺寸重绘，发生窗体大小变化时自动调用
resize: function() {
    //获取当前页面的尺寸
    var width=FluxConstant.view.PAGE_WIDTH;
    var height=FluxConstant.view.PAGE_HEIGHT;
}
});
module.exports = Index;