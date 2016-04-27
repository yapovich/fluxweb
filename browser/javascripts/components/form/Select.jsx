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
        //var group=_props.children;
        /*if(group){
            html=group.map(function(g){
              var checked=g.checked?"checked":"";
              var disabled=g.disabled?"disabled":"";
                return <label className="radio" style={{display:"inline-block"}}>
                    <input type="radio" name={name} checked={checked} disabled={disabled} onChange={this.onChange} value={g.value} className="custom-radio"/>
                  <span className="icons">
                      <span className="icon-unchecked"></span>
                      <span className="icon-checked"></span>
                  </span>{g.name}</label>;
            }.bind(this));
        }*/
        html=<select ref="myselect" defaultValue="2" className="form-control select select-primary" data-toggle="select">
            <option value="0">Choose hero</option>
            <option value="1">Spider Man</option>
            <option value="2">Wolverine</option>
            <option value="3">Captain America</option>
            <option value="4">X-Men</option>
            <option value="5">Crocodile</option>
        </select>
        return (<div>{html}</div>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    },
    didMount:function(){
        var obj=$(ReactDOM.findDOMNode(this.refs.myselect));
        //obj.select2({dropdownCssClass: 'dropdown-inverse'});
    }
});
module.exports = RadioButton;