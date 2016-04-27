/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var DropDownMenu = Flux.createView({
    handleClick:function(e){
        var v=e.currentTarget.attributes["value"].value;
        var d=e.currentTarget.attributes["class"]&&e.currentTarget.attributes["class"].value=="disabled"?true:false;
        if(this.props.onSelected&&!d){
            this.props.onSelected.call(null,v);
        }
    },
    //按钮控件
    getComponent:function(_props){
        var position=(_props.position?"drop"+_props.position:"dropdown");
        var align=(_props.align?" dropdown-menu-"+_props.align:"");
        var type=" btn-"+(_props.type?_props.type:"default");
        var size=_props.size?" btn-"+_props.size:""
        var split=_props.split&&_props.split=="true"?true:false;
        var html;
        var group=_props.children;
        if(group){
            html=group.map(function(g){
                if(g.name=="separator")
                    return <li role="separator" className="divider"></li>;
                else if(g.children&&g.children.length>0){
                    var child=g.children.map(function(_g){
                        return <li value={_g.value} onClick={this.handleClick} className={_g.disabled?"disabled":""}><a href="javascript:void(0)">{_g.name}</a></li>;
                    }.bind(this));
                    return <li><li className="dropdown-header">{g.name}</li>{child}</li>;
                }
                return <li value={g.value} onClick={this.handleClick} className={g.disabled?"disabled":""}><a href="javascript:void(0)">{g.name}</a></li>
            }.bind(this))
        }
        var style=_props.style?_props.style:{};
        style.position="relative";
        return (
            <div {..._props} className={(split?"btn-group ":"")+position} style={style}>
                {split?<button className={"btn"+type}>{_props.name?_props.name:"菜单"}</button>:null}
            <button className={"btn"+type+size+" dropdown-toggle"+" "+_props.className} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {!split?(_props.name?_props.name:"菜单"):null}
                <span className="caret"></span>
            </button>
            <ul className={"dropdown-menu"+align} style={{position:"absolute"}}>{html}</ul>
            </div>
        );
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = DropDownMenu;