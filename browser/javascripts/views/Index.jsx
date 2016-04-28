/**
 * Created by yebo on 2016/4/11.
 */
var IndexStore = require('../stores/IndexStore');
var IndexAction = require('../actions/IndexAction');
var Modal=require('./Modal');
//console.log($("#container").width()+"########"+$("#container").height());
var Index = Flux.createView({
    //指定视图关联存储对象
    store:IndexStore,
    //发起一个动作，此例为点击事件发起
    handleClick: function () {
        IndexAction.openModal(true);
    },
    handleMenuClick: function () {
        IndexAction.updateText("cctv");
    },
    handleGroupClick:function(v){
        //var v=e.target.attributes["value"].value;
        IndexAction.updateCurrent(v);
    },
    handleCB:function(interests){
        IndexAction.updateInterests(v);
    },
    handleRD:function(v){
        IndexAction.updateMale(v);
    },
    handleChooseAll:function(){
        IndexAction.chooseAll();
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
            <div className="indexContainer" style={{padding:10}}>
                <input type="text" id="beginDateTxt"/>
                <h1>表单===================</h1>
                <h2>输入框(Input)</h2>
                <div className="row">
                    <div className="col-sm-3"><Comp.Input size="hg" placeholder="this is a Input"></Comp.Input></div>
                    <div className="col-sm-3"><Comp.Input type="success" size="lg" placeholder="this is a Input"></Comp.Input></div>
                    <div className="col-sm-3"><Comp.Input type="error" placeholder="this is a Input"></Comp.Input></div>
                    <div className="col-sm-3"><Comp.Input disabled="true" size="sm" placeholder="this is a Input"></Comp.Input></div>
                </div>
                <h2>多选框(CheckBox)</h2>
                <Comp.CheckBox onSelected={this.handleCB} value={this.state.interests}>
                    {[
                        {name:"读书",value:1},
                        {name:"音乐",value:2},
                        {name:"军事",value:3}
                    ]}
                </Comp.CheckBox>
                <Comp.Button type="primary" onClick={this.handleChooseAll}>全选</Comp.Button>
                <h2>单选框(RadioButton)</h2>
                <Comp.RadioButton onSelected={this.handleRD}>
                    {[
                        {name:"男",value:"male",checked:(this.state.male=="male"?true:false)},
                        {name:"女",value:"female",checked:(this.state.male=="female"?true:false)},
                    ]}
                </Comp.RadioButton>
                <h2>下拉选框(Select)</h2>
                <Comp.Select></Comp.Select>
                <h2>开关</h2>
                <Comp.Switch type="default" checked="true" value="1"></Comp.Switch>
                <Comp.Switch type="primary" checked="true" shape="square" value="2"></Comp.Switch>
                <Comp.Switch type="success" checked="true" value="3"></Comp.Switch>
                <Comp.Switch type="warning" checked="true" value="4"></Comp.Switch>
                <Comp.Switch type="danger" checked="true" value="5"></Comp.Switch>
                <Comp.Switch type="danger" checked="true" disabled="true" value="6"></Comp.Switch>
                <h1>常用===================</h1>
                <h2>Glyphicons 字体图标---</h2>
                <Comp.Icon type="heart" size="32" color="#ff0000"/>&nbsp;
                <Comp.Icon type="star" size="32"/>
                <h2>下拉菜单---{this.state.text}</h2>
                <Comp.DropDownMenu style={{float:"left"}} name="我的空间" position="down" align="left" onSelected={this.handleMenuClick}>{dropGroup}</Comp.DropDownMenu>
                <Comp.DropDownMenu style={{float:"left"}} type="primary" name="我的空间" position="up" align="left" split="true" onSelected={this.handleMenuClick}>{dropGroup}</Comp.DropDownMenu>
                <Comp.DropDownMenu style={{float:"left"}} type="success" name="我的空间" position="down" align="left" split="true" onSelected={this.handleMenuClick}>{dropGroup}</Comp.DropDownMenu>
                <Comp.DropDownMenu style={{float:"left"}} size="lg" type="info" name="我的空间" position="down" align="left" onSelected={this.handleMenuClick}>{dropGroup}</Comp.DropDownMenu>
                <Comp.DropDownMenu style={{float:"left"}} size="sm" type="warning" name="我的空间" position="down" align="left" onSelected={this.handleMenuClick}>{dropGroup}</Comp.DropDownMenu>
                <Comp.DropDownMenu style={{float:"left"}} size="xs" type="danger" name="我的空间" position="down" align="left" onSelected={this.handleMenuClick}>{dropGroup}</Comp.DropDownMenu>
                <div className="clearfix"></div>
                <h2>按钮---</h2>
                <Comp.Button type="default" badge="4">Default</Comp.Button>&nbsp;
                <Comp.Button type="primary" badge="4">Primary</Comp.Button>&nbsp;
                <Comp.Button type="success" badge="4">Success</Comp.Button>&nbsp;
                <Comp.Button type="info" size="lg" badge="4">Info</Comp.Button>&nbsp;
                <Comp.Button type="warning" size="sm" badge="4">Warning</Comp.Button>&nbsp;
                <Comp.Button type="danger" size="xs" badge="4">Danger</Comp.Button>
                <h2>按钮组---</h2>
                <Comp.ButtonGroup type="success" size="lg" current={this.state.current} onSelected={this.handleGroupClick}>{group}</Comp.ButtonGroup>
                <h2>标签组---</h2>
                <Comp.Nav group={group} onSelected={this.handleGroupClick}>{group}</Comp.Nav>
                <Comp.Nav type="pills" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Comp.Nav>
                <Comp.Nav type="pills" subtype="stacked" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Comp.Nav>
                <Comp.Nav type="pills" subtype="justified" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Comp.Nav>
                <Comp.Nav type="underlines" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Comp.Nav>
                <Comp.Nav type="overlines" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Comp.Nav>
                <h2>进度条---</h2>
                <Comp.Progress type="danger" value="30" style={{width:"200px"}}/>
                <h2>导航(面包屑)---</h2>
                <Comp.BreadCrumb>{["首页","主功能","子功能"]}</Comp.BreadCrumb>
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
        console.log("didMount");
        /*$(".indexContainer").mCustomScrollbar("destroy");
        $(".indexContainer").mCustomScrollbar({
            theme : "dark"
        });*/
        $('#beginDateTxt').datetimebox({
            endtoday : true,// 截止今天
            value : DateUtil.getToday(-6)
        });
    },
    //是否应该更新
    shouldUpdate:function(){
      return true;
    },
    //重新渲染完成时
    didUpdate: function(){
    }
});
module.exports = Index;