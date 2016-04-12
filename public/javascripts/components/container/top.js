/**
 * Created by yebo on 2016/4/8.
 */
var React = require('react');
var Flux = require('../../vendor/util/FluxUtil');
var LoginStore = require('../../stores/LoginStore');
var LoginAction = require('../../actions/LoginAction');
var Button=require('../bootstrap/button');
var Top = Flux.createView({
  render: function() {
    return (
            <div className="top">
              <input ref="myinput" type="text"/>
            </div>
    );
  }
});
module.exports = Top;