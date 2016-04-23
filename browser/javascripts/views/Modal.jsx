/**
 * Created by yebo on 2016/4/21.
 * TO DO
 */
var MyView = Flux.createView({
    //视图渲染
    render: function () {
        var width = FluxConstant.view.PAGE_WIDTH;
        var height = FluxConstant.view.PAGE_HEIGHT;
        var top=(height-148)/2;
        return (
            <div ref="modal" className="modal fade" role="dialog">
                <div className="modal-dialog" role="document" style={{marginTop:top}}>
                    <div className="modal-content">
                        <div className="modal-header">
                        </div>
                        <div className="modal-body">
                            this is modal
                        </div>
                        <div className="modal-footer">
                            <Bootstrap.Button data-dismiss="modal">
                                关闭
                            </Bootstrap.Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    //尺寸重绘时
    resize: function () {
        //获取当前页面的尺寸
        var width = FluxConstant.view.PAGE_WIDTH;
        var height = FluxConstant.view.PAGE_HEIGHT;
        var obj=$(ReactDOM.findDOMNode(this.refs.modal))
        var top=(height-148)/2;
        obj.find(".modal-dialog").css("marginTop",top);
    },
    //渲染开始时
    willMount: function () {

    },
    //渲染完成时
    didMount: function () {

    },
    //卸载渲染时
    didUnMount: function () {

    },
    //重新渲染完成时
    didUpdate: function () {

    }
});
module.exports = MyView;