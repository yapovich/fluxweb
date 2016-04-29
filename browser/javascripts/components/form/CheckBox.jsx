/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var CheckBox = Flux.createView({
    onChange:function(e){
        var lastv=this.props.value;
        var v=e.currentTarget.attributes["value"].value;
        var value=","+this.props.value+",";
        if((value).indexOf(","+v+",")>-1){
            value=value.replace((","+v+","),",")
            lastv=value.substr(1,value.length-2);
        }else{
            lastv=lastv.length<=0?v:(lastv+","+v);
        }
        if(this.props.onSelected){
            this.props.onSelected.call(null,lastv);
        }
    },
    //按钮控件
    getComponent:function(_props){
        var html;
        var group=_props.children;
        var value=","+_props.value+",";
        var size=_props.size?_props.size:"";
        console.log("value:"+value);
        if(group){
            html=group.map(function(g){
              var checked=(value.indexOf(","+g.value+",")>-1)?"checked":"";
              var disabled=g.disabled?"disabled":"";
              return <label className={"checkbox "+size} style={{display:"inline-block"}}>
                  <input type="checkbox" checked={checked} disabled={disabled} onChange={this.onChange} value={g.value} className="custom-checkbox"/>
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
module.exports = CheckBox;