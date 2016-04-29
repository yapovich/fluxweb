/**
 * Created by yebo on 2016/4/11.
 */
var Components = Flux.createView({
    getButton:function(type){
        return (<div>
            <h5>{type}</h5>
            <div className="row">
                <div className="col-lg-3">
                <Comp.Button type={type} size="lg">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} size="lg" disabled="true">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                <Comp.Button type={type} size="lg" badge="4">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} size="lg" badge="4" disabled="true">{type}</Comp.Button>&nbsp;
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <Comp.Button type={type}>{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} disabled="true">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} badge="4">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} badge="4" disabled="true">{type}</Comp.Button>&nbsp;
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <Comp.Button type={type} size="sm">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} size="sm" disabled="true">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} size="sm" badge="4">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} size="sm" badge="4" disabled="true">{type}</Comp.Button>&nbsp;
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <Comp.Button type={type} size="xs">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} size="xs" disabled="true">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} size="xs" badge="4">{type}</Comp.Button>&nbsp;
                </div>
                <div className="col-lg-3">
                    <Comp.Button type={type} size="xs" badge="4" disabled="true">{type}</Comp.Button>&nbsp;
                </div>
            </div>
        </div>)
    },
    getButtonGroup:function(type){
        var group=[
            {name:"left",value:"left"},
            {name:"midd",value:"midd"},
            {name:"right",value:"right"}]
        var group2=[
            {name:"left",value:"left",badge:2},
            {name:"midd",value:"midd",badge:3},
            {name:"right",value:"right",badge:1}]
        var group3=[
            {name:"left",value:"left",icon:"glyphicon glyphicon-gift"},
            {name:"midd",value:"midd",icon:"glyphicon glyphicon-leaf"},
            {name:"right",value:"right",icon:"glyphicon glyphicon-plane"}]
        return (
            <div>
            <h5>{type}</h5>
            <div className="row">
                <div className="col-lg-4">
                    <Comp.ButtonGroup type={type} size="lg" value="midd">{group}</Comp.ButtonGroup>
                </div>
                <div className="col-lg-4">
                  <Comp.ButtonGroup type={type} size="lg" value="midd">{group2}</Comp.ButtonGroup>
                </div>
                <div className="col-lg-4">
                    <Comp.ButtonGroup type={type} size="lg" value="midd">{group3}</Comp.ButtonGroup>
                </div>
            </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Comp.ButtonGroup type={type} value="midd">{group}</Comp.ButtonGroup>
                    </div>
                    <div className="col-lg-4">
                        <Comp.ButtonGroup type={type} value="midd">{group2}</Comp.ButtonGroup>
                    </div>
                    <div className="col-lg-4">
                        <Comp.ButtonGroup type={type} value="midd">{group3}</Comp.ButtonGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Comp.ButtonGroup type={type} size="sm" value="midd">{group}</Comp.ButtonGroup>
                    </div>
                    <div className="col-lg-4">
                        <Comp.ButtonGroup type={type} size="sm" value="midd">{group2}</Comp.ButtonGroup>
                    </div>
                    <div className="col-lg-4">
                        <Comp.ButtonGroup type={type} size="sm" value="midd">{group3}</Comp.ButtonGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Comp.ButtonGroup type={type} size="xs" value="midd">{group}</Comp.ButtonGroup>
                    </div>
                    <div className="col-lg-4">
                        <Comp.ButtonGroup type={type} size="xs" value="midd">{group2}</Comp.ButtonGroup>
                    </div>
                    <div className="col-lg-4">
                        <Comp.ButtonGroup type={type} size="xs" value="midd">{group3}</Comp.ButtonGroup>
                    </div>
                </div>

            </div>
        )
    },
    getCheckBox:function(size){
        return (<div className="row">
            <div className="col-lg-3">
                <Comp.CheckBox size={size} value="1">
                    {[
                        {name:"读书",value:1},
                        {name:"音乐",value:2}
                    ]}
                </Comp.CheckBox>
            </div>
            <div className="col-lg-3">
                <Comp.CheckBox size={size} value="1">
                    {[
                        {name:"读书",value:1,disabled:true},
                        {name:"音乐",value:2,disabled:true}
                    ]}
                </Comp.CheckBox>
            </div>
        </div>)
    },
    getRadioButton:function(size){
        return (<div className="row">
            <div className="col-lg-3">
                <Comp.RadioButton size={size} value="male">
                    {[
                        {name:"男",value:"male"},
                        {name:"女",value:"female"}
                    ]}
                </Comp.RadioButton>
            </div>
            <div className="col-lg-3">
                <Comp.RadioButton size={size}  value="male" disabled="true">
                    {[
                        {name:"男",value:"male"},
                        {name:"女",value:"female"}
                    ]}
                </Comp.RadioButton>
            </div>
        </div>)
    },
    getInput:function(type,prepend,append,feedback){
           return (
               <div>
               <h5>{type}</h5>
               <div className="row">
                   <div className="col-lg-3">
                       <Comp.Input type={type} size="hg" placeholder="this is a Input"></Comp.Input>
                   </div>
                   <div className="col-lg-3">
                       <Comp.Input prepend={prepend} type={type} size="hg" placeholder="this is a Input"></Comp.Input>
                   </div>
                   <div className="col-lg-3">
                       <Comp.Input append={append} type={type} size="hg" placeholder="this is a Input"></Comp.Input>
                   </div>
                   <div className="col-lg-3">
                       <Comp.Input feedback={feedback} type={type} size="hg" placeholder="this is a Input"></Comp.Input>
                   </div>
               </div>
               <div className="row">
                   <div className="col-lg-3">
                       <Comp.Input type={type} size="lg" placeholder="this is a Input"></Comp.Input>
                   </div>
                   <div className="col-lg-3">
                       <Comp.Input prepend={prepend} type={type} size="lg" placeholder="this is a Input"></Comp.Input>
                   </div>
                   <div className="col-lg-3">
                       <Comp.Input append={append} type={type} size="lg" placeholder="this is a Input"></Comp.Input>
                   </div>
                   <div className="col-lg-3">
                       <Comp.Input feedback={feedback} type={type} size="lg" placeholder="this is a Input"></Comp.Input>
                   </div>
                </div>
                   <div className="row">
                       <div className="col-lg-3">
                           <Comp.Input type={type} placeholder="this is a Input"></Comp.Input>
                       </div>
                       <div className="col-lg-3">
                           <Comp.Input prepend={prepend} type={type} placeholder="this is a Input"></Comp.Input>
                       </div>
                       <div className="col-lg-3">
                           <Comp.Input append={append} type={type} placeholder="this is a Input"></Comp.Input>
                       </div>
                       <div className="col-lg-3">
                           <Comp.Input feedback={feedback} type={type} placeholder="this is a Input"></Comp.Input>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-3">
                           <Comp.Input type={type} size="sm" placeholder="this is a Input"></Comp.Input>
                       </div>
                       <div className="col-lg-3">
                           <Comp.Input prepend={prepend} type={type} size="sm" placeholder="this is a Input"></Comp.Input>
                       </div>
                       <div className="col-lg-3">
                           <Comp.Input append={append} type={type} size="sm" placeholder="this is a Input"></Comp.Input>
                       </div>
                       <div className="col-lg-3">
                           <Comp.Input feedback={feedback} type={type} size="sm" placeholder="this is a Input"></Comp.Input>
                       </div>
                   </div>
             </div>
           )
    },
    getSwitch:function(type){
        return (
            <div>
                <h5>{type}</h5>
                <div className="row">
                    <div className="col-lg-3">
                      <Comp.Switch type={type} checked="true" value="1"></Comp.Switch>
                   </div>
                    <div className="col-lg-3">
                        <Comp.Switch type={type} checked="true" disabled="true" value="1"></Comp.Switch>
                    </div>
                    <div className="col-lg-3">
                        <Comp.Switch type={type} value="1"></Comp.Switch>
                    </div>
                    <div className="col-lg-3">
                        <Comp.Switch type={type} disabled="true" value="1"></Comp.Switch>
                    </div>
                </div>
            </div>
        )
    },
    getNav:function(type){
        var group=[
            {name:"left",value:"left"},
            {name:"midd",value:"midd"},
            {name:"right",value:"right"}]
        return (
            <div>
                <h5>default</h5>
                <Comp.Nav value="midd">{group}</Comp.Nav>
                <h5>pills</h5>
                <Comp.Nav type="pills" value="midd">{group}</Comp.Nav>
                <h5>pills-stacked</h5>
                <Comp.Nav type="pills" subtype="stacked"  value="midd">{group}</Comp.Nav>
                <h5>pills-justified</h5>
                <Comp.Nav type="pills" subtype="justified" value="midd">{group}</Comp.Nav>
                <h5>underlines</h5>
                <Comp.Nav type="underlines" value="midd">{group}</Comp.Nav>
                <h5>overlines</h5>
                <Comp.Nav type="overlines" value="midd">{group}</Comp.Nav>
            </div>
        )
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
                        <li><a href="#ui_ButtonGroup">ButtonGroup</a></li>
                        <li><a href="#ui_CheckBox">CheckBox</a></li>
                        <li><a href="#ui_RadioButton">RadioButton</a></li>
                        <li><a href="#ui_Input">Input</a></li>
                        <li><a href="#ui_Nav">Nav</a></li>
                        <li><a href="#ui_Button">Process</a></li>
                        <li><a href="#ui_Button">Modal</a></li>
                    </ul>
                </div>
                <div className="container apicontainer">
                    <div className="apirow"  id="apicontent">
                        <h3>
                            Components<label style={{fontSize:18}}>for React</label>
                        </h3>
                        <h4 id="ui_Button">Button</h4>
                        {this.getButton("default")}
                        {this.getButton("primary")}
                        {this.getButton("success")}
                        {this.getButton("info")}
                        {this.getButton("warning")}
                        {this.getButton("danger")}
                        <h4 id="ui_ButtonGroup">ButtonGroup</h4>
                        {this.getButtonGroup("default")}
                        {this.getButtonGroup("primary")}
                        {this.getButtonGroup("success")}
                        {this.getButtonGroup("info")}
                        {this.getButtonGroup("warning")}
                        {this.getButtonGroup("danger")}
                        <h4 id="ui_CheckBox">CheckBox</h4>
                        {this.getCheckBox("lg")}
                        {this.getCheckBox()}
                        {this.getCheckBox("sm")}
                        {this.getCheckBox("xs")}
                        <h4 id="ui_RadioButton">RadioButton</h4>
                        {this.getRadioButton("lg")}
                        {this.getRadioButton()}
                        {this.getRadioButton("sm")}
                        {this.getRadioButton("xs")}
                        <h4 id="ui_Input">Input</h4>
                        {this.getInput("default","@","@","glyphicon glyphicon-ok")}
                        {this.getInput("success","@","@","glyphicon glyphicon-ok")}
                        {this.getInput("error","@","@","glyphicon glyphicon-remove")}
                        {this.getInput("warning","@","@","glyphicon glyphicon-warning-sign")}
                        <h4 id="ui_Nav">Nav</h4>
                        {this.getNav()}
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