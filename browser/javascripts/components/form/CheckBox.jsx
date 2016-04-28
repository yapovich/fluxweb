/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var value;
var CheckBox = Flux.createView({
    onChange:function(e){
        var v=e.currentTarget.attributes["value"].value;
        if(value.indexOf(","+v+",")>-1)
            value=value.replace(","+v+",",",")
        else{
            
        }
        if(this.props.onSelected){
            this.props.onSelected.call(null,v);
        }
    },
    //按钮控件
    getComponent:function(_props){
        var html;
        var group=_props.children;
        value=","+_props.value+",";
        console.log("value:"+value);
        if(group){
            html=group.map(function(g){
              var checked=value.indexOf(","+g.value+",")>-1?"checked":"";
              var disabled=g.disabled?"disabled":"";
              return <label className="checkbox" style={{display:"inline-block"}}>
                  <input type="checkbox" checked={checked} disabled={disabled} onChange={this.onChange} value={g.value} className="custom-checkbox"/>
                  <span className="icons">
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
module.exports = CheckBox;