/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var ButtonGroup = Flux.createView({
    getInitialState:function(){
      return {current:this.props.current};
    },
    handleClick:function(e){
        var v=e.currentTarget.attributes["value"].value;
        this.setState({current:v});
        if(this.props.onNavClick){
            this.props.onNavClick.call(null,v);
        }
    },
    //按钮控件
    getComponent:function(_props){
        var type=" nav-"+(_props.type?_props.type:"tabs");
        var subtype=" nav-"+(_props.subtype?_props.subtype:"");
        var group=_props.group;
        return (
            <ul {..._props} className={"nav"+type+subtype+" "+(_props.className?_props.className:"")}>{
                group.map(function(g){
                 return <li className={(this.state.current==g.value?"active":"")} value={g.value} onClick={this.handleClick}><a href="javascript:void(0)">
                     {g.name}
                     {(g.badge||g.badge==0)?(<span className="badge">{g.badge}</span>):""}
                 </a></li>
            }.bind(this))}
        </ul>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = ButtonGroup;