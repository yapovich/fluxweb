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
    handleClick2: function () {
        IndexAction.updateText("cctv");
    },
    handleGroupClick:function(v){
        //var v=e.target.attributes["value"].value;
        IndexAction.updateCurrent(v);
    },
    //视图渲染，发生状态变化时自动调用
    render: function () {
        var group=[
            {name:"left",value:"left"},
            {name:"center",value:"center"},
            {name:"right",value:"right"}];
        return (
            <div className="indexContainer" style={{padding:10}}>
                <label>{this.state.current}</label>
                <input type="text" id="beginDateTxt"/>
                <h2>图标---</h2>
                <Bootstrap.Icon type="heart" size="32"/>&nbsp;
                <Bootstrap.Icon type="star" size="32"/>
                <h2>按钮---</h2>
                <Bootstrap.Button>NoType</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="default">Default</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="primary">Primary</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="success">Success</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="info">Info</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="warning">Warning</Bootstrap.Button>&nbsp;
                <Bootstrap.Button type="danger">Danger</Bootstrap.Button>
                <h2>按钮组---</h2>
                <Bootstrap.ButtonGroup type="success" size="lg" group={group} current={this.state.current} onButtonClick={this.handleGroupClick}>
                </Bootstrap.ButtonGroup>
                <h2>进度条---</h2>
                <Bootstrap.Progress value="80" style={{width:"200px"}}/>
                <span className="glyphicon glyphicon-hand-left"></span>
                <Modal ref="modal"/>
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
    //重新渲染完成时
    didUpdate: function(){
        if(this.state.open){
            //console.log(ReactDOM.findDOMNode(this.refs.modal));
            var obj=$(ReactDOM.findDOMNode(this.refs.modal))
            obj.modal({
                keyboard: false,
                backdrop:"static",
                show:true
            });
            this.state.open=false;
        }
    }
});
module.exports = Index;