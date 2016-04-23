/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var ButtonGroup = Flux.createView({
    getInitialState:function(){
      return {current:this.props.current};
    },
    handleClick:function(e){
        var v=e.target.attributes["value"].value;
        this.setState({current:v});
        if(this.props.onButtonClick){
            this.props.onButtonClick.call(null,v);
        }
    },
    //按钮控件
    getComponent:function(_props){
        var size=_props.size?" btn-group-"+_props.size:""
        var type=" btn-"+(_props.type?_props.type:"default");
        var group=_props.group;
        return (
            <div className={"btn-group"+size} {..._props}>{
                group.map(function(g){
                 return <button value={g.value} type="button" className={"btn"+type+(this.state.current==g.value?" active":"")} onClick={this.handleClick}>{g.name}</button>
            }.bind(this))}
        </div>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = ButtonGroup;