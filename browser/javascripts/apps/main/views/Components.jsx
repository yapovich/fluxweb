/**
 * Created by yebo on 2016/4/11.
 */
var Components = Flux.createView({
    loadModel:function(name){
        require(["./demo/"+name+"Demo"],function(Demo){
            ReactDOM.render(
                <Demo/>,
                document.getElementById('apicontent')
            );
        });
    },
    //发起一个动作，此例为点击事件发起
    handleClick: function (e) {
        //IndexAction.openModal(true);
        var name=e.currentTarget.innerHTML;
        this.loadModel(name);
    },
    //视图渲染，发生状态变化时自动调用
    render: function () {
        var group=[
            {name:"left",value:"left",badge:4,active:(this.state.current=="left")},
            {name:"center",value:"center",badge:0,active:(this.state.current=="center")},
            {name:"right",value:"right",badge:4,active:(this.state.current=="right")}]
        var dropGroup=[
            {name:"常用工具",children:[
                {name:"设置",value:"Setting"},
                {name:"主题",value:"Theme",disabled:true}
            ]},
            {name:"高级工具",children:[
                {name:"换肤",value:"Face"}
            ]},
            {name:"separator"},
            {name:"其他",value:"Other"}];
        return (
            <div className="api_simple_layout">
                <div className="apimenu">
                    <ul>
                        <li><a href="javascript:void(0)" onClick={this.handleClick}>Button</a></li>
                        <li><a href="javascript:void(0)">CheckBox</a></li>
                        <li><a href="javascript:void(0)">RadioButton</a></li>
                        <li><a href="javascript:void(0)">Input</a></li>
                        <li><a href="javascript:void(0)">Switch</a></li>
                        <li><a href="javascript:void(0)">Process</a></li>
                        <li><a href="javascript:void(0)">Modal</a></li>
                    </ul>
                </div>
                <div className="container apicontainer">
                    <div className="apirow"  id="apicontent"></div>
                </div>
            </div>
        )/*<h2>模态框---</h2>
         <Comp.Button onClick={this.handleClick}>打开模态框</Comp.Button>
         <Modal ref="modal" open={this.state.open}/>*/
    },
    //尺寸重绘，发生窗体大小变化时自动调用
    resize: function () {
        //获取当前页面的尺寸
        var width = FluxConstant.view.PAGE_WIDTH;
        var height = FluxConstant.view.PAGE_HEIGHT;
    },
    //渲染完成后
    didMount: function () {
        this.loadModel("Button");
    },
    //是否应该更新
    shouldUpdate:function(){
        return true;
    },
    //重新渲染完成时
    didUpdate: function(){
    }
});
module.exports = Components;