/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var RadioButton = Flux.createView({
    onChange:function(e){
        var v=e.currentTarget.attributes["value"].value;
        if(this.props.onSelected){
            this.props.onSelected.call(null,v);
        }
    },
    //按钮控件
    getComponent:function(_props){
        var html;
        var group=_props.children;
        var name="radio_"+Math.random();
        var size=_props.size?_props.size:"";
        if(group){
            html=group.map(function(g){
              var checked=(g.value==_props.value)?"checked":"";
              var disabled=(_props.disabled=="true"||_props.disabled==true)?"disabled":"";
                return <label className={"radio "+size} style={{display:"inline-block"}}>
                    <input type="radio" name={name} checked={checked} disabled={disabled} onChange={this.onChange} value={g.value} className="custom-radio"/>
                  <span className={"icons "+size}>
                      <span className="icon-unchecked"></span>
                      <span className="icon-checked"></span>
                  </span>{g.name}</label>;
            }.bind(this));
        }
        return (<div className={_props.className}>{html}</div>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = RadioButton;