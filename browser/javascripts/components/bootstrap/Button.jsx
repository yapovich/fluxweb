/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var Button = Flux.createView({
    //按钮控件
    getComponent:function(_props){
        var size=_props.size?" btn-"+_props.size:""
        var type=" btn-"+(_props.type?_props.type:"default");
        return (<button
            className={"btn"+type+size}
            {..._props}>
            {_props.children}
        </button>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = Button;