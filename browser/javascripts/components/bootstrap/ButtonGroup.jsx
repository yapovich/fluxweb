/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var ButtonGroup = Flux.createView({
    handleClick:function(e){
        var v=e.currentTarget.attributes["value"].value;
        if(this.props.onSelected){
            this.props.onSelected.call(null,v);
        }
    },
    //按钮控件
    getComponent:function(_props){
        var size=_props.size?" btn-group-"+_props.size:""
        var type=" btn-"+(_props.type?_props.type:"default");
        var html;
        var group=_props.children;
        if(group){
            html=group.map(function(g){
                return <button value={g.value} className={"btn"+type+(g.active?" active":"")} onClick={this.handleClick}>
                    {g.name}
                    {(g.badge||g.badge==0)?(<span className="badge">{g.badge}</span>):""}
                </button>
            }.bind(this))
        }
        return (
            <div {..._props} className={"btn-group"+size+" "+(_props.className?_props.className:"")}>{html}</div>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = ButtonGroup;