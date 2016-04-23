/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var Icon = Flux.createView({
    //按钮控件
    getComponent:function(_props){
        var style=_props.size?{fontSize:(_props.size+"px")}:{};
        var type=" glyphicon-"+(_props.type?_props.type:"home");
        return (<span
            className={"glyphicon"+type}
            style={style}
            {..._props}>
        </span>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = Icon;