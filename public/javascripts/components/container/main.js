/**
 * Created by yebo on 2016/4/8.
 */
var React = require('react');
var Flux = require('../../vendor/util/FluxUtil');
var Top=require('./top');
var Menu=require('./menu');
var Stage=require('./stage');
var Main = Flux.createView({
    getState: function() {
        return {showTop:true};
    },
    handleClick: function(evt){
        this.setState({showTop:this.refs.cb.checked})
    },
    render: function() {
        return (
            <div className="container">
                <input type="checkbox" ref="cb" checked={this.state.showTop} onChange={this.handleClick}/>
                <div style={{display:(this.state.showTop?"block":"none")}}>showTop</div>
                <Top {...this.props}/>
                <Menu {...this.props}/>
                <Stage {...this.props}/>
            </div>)
    }
});
module.exports = Main;