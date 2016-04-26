/**
 * Created by yebo on 2016/4/11.
 * 按钮
 */
var BreadCrumb = Flux.createView({
    //按钮控件
    getComponent:function(_props){

        return (<ol
            {..._props}
            className={"breadcrumb"+" "+(_props.className?_props.className:"")}>
            {
                this.props.children.map(function(li,index){
                    if(index==this.props.children.length-1)
                        return <li className="active">{li}</li>
                    return <li><a href="#">{li}</a></li>
                }.bind(this))
            }
        </ol>);
    },
    render: function() {
        var comp=this.getComponent(this.props);
        return (comp);
    }
});
module.exports = BreadCrumb;