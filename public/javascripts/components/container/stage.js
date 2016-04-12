/**
 * Created by yebo on 2016/4/8.
 */
var React = require('react');
var Flux = require('../../vendor/util/FluxUtil');
var Stage = Flux.createView({
    render: function() {
        return (
            <div data-attribute="http://www.baidu.com" className="stage" style={{color:"green"}}>this is stage!my name is {this.props.stageName}</div>
        );
    }
});
module.exports = Stage;