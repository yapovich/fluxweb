/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var Switch = Flux.createView({
    onChange:function(e){
        var v=e.currentTarget.attributes["value"].value;
        if(this.props.onSelected){
            this.props.onSelected.call(null,v);
        }
    },
    //按钮控件
    getComponent:function(_props){
        var type=_props.type?_props.type:"default";
        var checked=(_props.checked=="true"||_props.checked==true)?"checked":"";
        var disabled=(_props.disabled=="true"||_props.disabled==true)?"disabled":"";
        if(_props.shape&&_props.shape=="square")
            return <div className="bootstrap-switch-square">
                <input ref="switch" type="checkbox" data-on-color={type} disabled={disabled} checked={checked} data-toggle="switch" value={_props.value} onChange={this.onChange}/></div>;
        return <input ref="switch" type="checkbox" data-on-color={type} disabled={disabled} checked={checked} data-toggle="switch" value={_props.value} onChange={this.onChange}/>;
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    },
    didMount:function(){
        var obj=$(ReactDOM.findDOMNode(this.refs.switch));
        obj.bootstrapSwitch();
    }
});
module.exports = Switch;