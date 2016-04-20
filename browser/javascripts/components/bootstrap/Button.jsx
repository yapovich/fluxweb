/**
 * Created by yebo on 2016/4/11.
 */
var Button = Flux.createView({
    render: function() {
        return (
            <button
              className={"btn "+this.props.className}
              onClick={this.props.onClick}>
              {this.props.children}
            </button>
         );
     }
});
module.exports = Button;