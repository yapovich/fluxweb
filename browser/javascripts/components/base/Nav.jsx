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
        var type=" nav-"+(_props.type?_props.type:"tabs");
        var subtype=(_props.subtype?" nav-"+_props.subtype:"");
        var html;
        var group=_props.children;
        if(group){
            html=group.map(function(g){
                return <li className={((g.value==_props.value)? "active" : "")} value={g.value} onClick={this.handleClick}><a href="javascript:void(0)">
                    {g.name}
                    {(g.badge || g.badge == 0) ? (<span className="badge">{g.badge}</span>) : ""}
                </a></li>
            }.bind(this))
        }
        return (
            <ul {..._props} className={"nav"+type+subtype+" "+(_props.className?_props.className:"")}>{html}</ul>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = ButtonGroup;