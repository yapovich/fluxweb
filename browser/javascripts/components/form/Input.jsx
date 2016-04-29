/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var Input = Flux.createView({
    //按钮控件
    getComponent:function(_props){
        var size=_props.size?" input-"+_props.size:""
        var type=_props.type?" has-"+_props.type:"";
        var inputGroupClass=(_props.append||_props.prepend)?" input-group "+(_props.size?" input-group-"+_props.size:""):"";
        var feedbackClass=_props.feedback?" has-feedback":"";
        var disabled=(_props.disabled=="true"||_props.disabled==true)?"disabled":"";
        return (<div {..._props} className={"form-group"+type+inputGroupClass+feedbackClass+" "+(_props.className?_props.className:"")}>
            {_props.prepend?<span className="input-group-addon">{_props.prepend}</span>:null}
            <input type="text" placeholder={_props.placeholder} className={"form-control"+size} disabled={disabled}/>
            {_props.append?<span className="input-group-addon">{_props.append}</span>:null}
            {_props.feedback?<span className={"form-control-feedback "+_props.feedback}></span>:null}
        </div>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = Input;