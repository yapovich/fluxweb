/**
 * Created by yebo on 2016/4/11.
 */
var IndexStore = require('../stores/IndexStore');
var IndexAction = require('../actions/IndexAction');
var Modal=require('./Modal');
console.log($("#container").width()+"########"+$("#container").height());
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
    //视图渲染，发生状态变化时自动调用
    render: function () {
        return (
            <div className="indexContainer" style={{width:400,height:100}}>
                <label>{this.state.text}</label>
                <input type="text" id="beginDateTxt"/>
                <BootstrapComp.Button type="danger" onClick={this.handleClick}>
                    打开模块
                </BootstrapComp.Button>
                <BootstrapComp.Button type="danger" onClick={this.handleClick2}>
                    修改文本
                </BootstrapComp.Button>
                <BootstrapComp.Progress value="99"/>
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