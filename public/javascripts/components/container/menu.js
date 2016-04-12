/**
 * Created by yebo on 2016/4/8.
 */
var React = require('react');
var Flux = require('../../vendor/util/FluxUtil');
var Menu = Flux.createView({
    render: function() {
        return (
            <div className="menu">this is menu!my name is {this.props.menuName}</div>);
     }
});
module.exports = Menu;