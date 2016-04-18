/**
 * Created by yebo on 2016/4/11.
 */
var React = require('react');
var Flux = require('../../vendor/util/FluxUtil');
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