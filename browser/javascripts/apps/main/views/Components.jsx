/**
 * Created by yebo on 2016/4/11.
 */
var Components = Flux.createView({
    getButton:function(type){
        return (<div>
            <h4>{type}</h4>
            <div className="row">
                <div className="col-lg-12">
                <Comp.Button type={type} size="lg">{type}</Comp.Button>&nbsp;
                <Comp.Button type={type}>{type}</Comp.Button>&nbsp;
                <Comp.Button type={type} disabled="true">{type}</Comp.Button>&nbsp;
                <Comp.Button type={type} size="sm">{type}</Comp.Button>&nbsp;
                <Comp.Button type={type} size="xs">{type}</Comp.Button>&nbsp;
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <Comp.Button type={type} size="lg" badge="4">{type}</Comp.Button>&nbsp;
                <Comp.Button type={type} badge="4">{type}</Comp.Button>&nbsp;
                <Comp.Button type={type} disabled="true" badge="4">{type}</Comp.Button>&nbsp;
                <Comp.Button type={type} size="sm" badge="4">{type}</Comp.Button>&nbsp;
                <Comp.Button type={type} size="xs" badge="4">{type}</Comp.Button>&nbsp;
                </div>
            </div>
        </div>)
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
                        <li><a href="#ui_Button">Button</a></li>
                        <li><a href="#ui_CheckBox">CheckBox</a></li>
                        <li><a href="#ui_RadioButton">RadioButton</a></li>
                        <li><a href="#ui_Button">Input</a></li>
                        <li><a href="#ui_Button">Switch</a></li>
                        <li><a href="#ui_Button">Process</a></li>
                        <li><a href="#ui_Button">Modal</a></li>
                    </ul>
                </div>
                <div className="container apicontainer">
                    <div className="apirow"  id="apicontent">
                        <h3>
                            Components<label style={{fontSize:18}}>for React</label>
                        </h3>
                        <h4 id="ui_Button"></h4>
                        <h4>[Button]</h4>
                        {this.getButton("default")}
                        {this.getButton("primary")}
                        {this.getButton("success")}
                        {this.getButton("info")}
                        {this.getButton("warning")}
                        {this.getButton("danger")}
                        <h4 id="ui_CheckBox"></h4>
                        <h4>[CheckBox]</h4>
                        <h4 id="ui_RadioButton"></h4>
                        <h4>[RadioButton]</h4>
                    </div>
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