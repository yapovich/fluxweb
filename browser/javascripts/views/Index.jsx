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
                <h2>Glyphicons 字体图标---</h2>
                <Bootstrap.Icon type="heart" size="32" color="#ff0000"/>&nbsp;
                <Bootstrap.Icon type="star" size="32"/>
                <h2>下拉菜单---{this.state.text}</h2>
                <Bootstrap.DropDownMenu style={{float:"left"}} name="我的空间" position="down" align="left" onSelected={this.handleMenuClick}>{dropGroup}</Bootstrap.DropDownMenu>
                <Bootstrap.DropDownMenu style={{float:"left"}} type="primary" name="我的空间" position="up" align="left" split="true" onSelected={this.handleMenuClick}>{dropGroup}</Bootstrap.DropDownMenu>
                <Bootstrap.DropDownMenu style={{float:"left"}} type="success" name="我的空间" position="down" align="left" split="true" onSelected={this.handleMenuClick}>{dropGroup}</Bootstrap.DropDownMenu>
                <Bootstrap.DropDownMenu style={{float:"left"}} size="lg" type="info" name="我的空间" position="down" align="left" onSelected={this.handleMenuClick}>{dropGroup}</Bootstrap.DropDownMenu>
                <Bootstrap.DropDownMenu style={{float:"left"}} size="sm" type="warning" name="我的空间" position="down" align="left" onSelected={this.handleMenuClick}>{dropGroup}</Bootstrap.DropDownMenu>
                <Bootstrap.DropDownMenu style={{float:"left"}} size="xs" type="danger" name="我的空间" position="down" align="left" onSelected={this.handleMenuClick}>{dropGroup}</Bootstrap.DropDownMenu>
                <div className="clearfix"></div>
                <h2>按钮---</h2>
                <Bootstrap.Button type="default" badge="4">Default</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="primary" badge="4">Primary</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="success" badge="4">Success</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="info" size="lg" badge="4">Info</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="warning" size="sm" badge="4">Warning</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="danger" size="xs" badge="4">Danger</Bootstrap.Button>
                <h2>按钮组---</h2>
                <Bootstrap.ButtonGroup type="success" size="lg" current={this.state.current} onSelected={this.handleGroupClick}>{group}</Bootstrap.ButtonGroup>
                <h2>标签组---</h2>
                <Bootstrap.Nav group={group} onSelected={this.handleGroupClick}>{group}</Bootstrap.Nav>
                <Bootstrap.Nav type="pills" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Bootstrap.Nav>
                <Bootstrap.Nav type="pills" subtype="stacked" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Bootstrap.Nav>
                <Bootstrap.Nav type="pills" subtype="justified" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Bootstrap.Nav>
                <Bootstrap.Nav type="underlines" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Bootstrap.Nav>
                <Bootstrap.Nav type="overlines" style={{marginTop:5}} onSelected={this.handleGroupClick}>{group}</Bootstrap.Nav>
                <h2>进度条---</h2>
                <Bootstrap.Progress type="danger" value="30" style={{width:"200px"}}/>
                <h2>模态框---</h2>
                <Bootstrap.Button onClick={this.handleClick}>打开模态框</Bootstrap.Button>
                <Modal ref="modal" open={this.state.open}/>
                <h2>导航(面包屑)---</h2>
                <Bootstrap.BreadCrumb>{["首页","主功能","子功能"]}</Bootstrap.BreadCrumb>
            </div>
        )
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