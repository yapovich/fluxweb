/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var Button = Flux.createView({
    //按钮控件
    getComponent:function(_props){
        var size=_props.size?" btn-"+_props.size:""
        var type=" btn-"+(_props.type?_props.type:"default");
        var disabled=(_props.disabled=="true"||_props.disabled==true)?"disabled":""
        return (<button
            {..._props}
            className={"btn"+type+size+" "+(_props.className?_props.className:"")} disabled={disabled}>
            {_props.children}
            {(_props.badge||_props.badge==0)?(<span className="badge">{_props.badge}</span>):""}
        </button>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = Button;