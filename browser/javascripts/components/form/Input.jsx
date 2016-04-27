/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var Input = Flux.createView({
    //按钮控件
    getComponent:function(_props){
        var size=_props.size?" input-"+_props.size:""
        var type=_props.type?" has-"+_props.type:"";
        var disabled=(_props.disabled=="true"||_props.disabled==true)?"disabled":"";
        return (<div {..._props} className={"form-group"+type+" "+(_props.className?_props.className:"")}>
            <input type="text" placeholder={_props.placeholder} className={"form-control"+size} disabled={disabled}/></div>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = Input;