/**
 * Created by yebo on 2016/4/11.
* 进度条
*/
var Progress = Flux.createView({
    render: function() {
        return (
            <div className="progress" style={this.props.style}>
                <div className="progress-bar" role="progressbar" aria-valuenow={this.props.value} aria-valuemin="0" aria-valuemax="100" style={{width:this.props.value+"%"}}>
                    <span className="sr-only">{this.props.value}% Complete</span>
                </div>
            </div>
        );
    }
});
module.exports = Progress;