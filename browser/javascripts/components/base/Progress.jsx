/**
 * Created by yebo on 2016/4/11.
* 进度条
*/
var Progress = Flux.createView({
    render: function() {
        var type=(this.props.type?" progress-bar-"+this.props.type:"");
        return (
            <div {...this.props} className={"progress "+(this.props.className?this.props.className:"")}>
                <div className={"progress-bar"+type} role="progressbar" aria-valuenow={this.props.value} aria-valuemin="0" aria-valuemax="100" style={{width:this.props.value+"%"}}>
                    {this.props.value}%
                </div>
            </div>
        );
    }
});
module.exports = Progress;