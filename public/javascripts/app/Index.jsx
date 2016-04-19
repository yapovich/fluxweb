/**
 * Created by yebo on 2016/4/11.
 */
var IndexStore = require('../stores/IndexStore');
var IndexAction = require('../actions/IndexAction');
console.log($("#container").width()+"########"+$("#container").height());
var Index = Flux.createView({
    //获取当前视图所需Store,如果用到了Store,必须实现该方法，否则将无法响应状态更新
    getStore: function () {
        return [IndexStore];
    },
//获取当前视图状态，通常都是从Store中获取
    getState: function () {
        return {text: IndexStore.getResultText()};
    },
//发起一个动作，此例为点击事件发起
    handleClick: function () {
        IndexAction.updateText("this is my first update");
    },
//视图渲染，发生状态变化时自动调用
    render: function () {
        return (
            <div className="indexContainer" style={{width:400,height:100}}>
                <label>{this.state.text}</label>
                <input type="text" id="beginDateTxt"/>
                <BootstrapComp.Button id="loginBtn" className="btn-danger btn-large" onClick={this.handleClick}>
                    按钮
                </BootstrapComp.Button>
                <span className="glyphicon glyphicon-hand-left"></span>
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

        /*$(".indexContainer").mCustomScrollbar("destroy");
        $(".indexContainer").mCustomScrollbar({
            theme : "dark"
        });*/
        $('#beginDateTxt').datetimebox({
            endtoday : true,// 截止今天
            value : DateUtil.getToday(-6)
        });
    }
});
module.exports = Index;