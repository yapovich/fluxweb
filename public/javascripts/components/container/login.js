/**
 * Created by yebo on 2016/4/11.
 */
var Flux = require('../../vendor/util/FluxUtil');
var FluxConstant=require("../../vendor/util/FluxConstant");
var React = require('react');
var Button=require('../bootstrap/button');
var LoginStore = require('../../stores/LoginStore');
var LoginAction = require('../../actions/LoginAction');
var Login = Flux.createView({
    getStore: function(){
        return [LoginStore];
    },
    getState: function(){
        return {username: LoginStore.getResultText()};
    },
    handleClick:function(){
        LoginAction.updateText(this.refs.username.value);
    },
    handleChange:function(){
        this.setState({username:this.refs.username.value});
    },
    render: function() {
        return (
            <div className="login_bg" style={{width:"100%",height:"100%"}}>
            <div className="login_wrapper">
            <div className="login_container">
            <div className="login_formContainer">
            <div className="login_logo">
                <strong></strong>
            </div>
            <div className="login_foot"><span>©2015 海康威视研究院&nbsp;&nbsp;大数据技术部</span></div>
            <div className="login_form">
            <div className="login_formTitle">
               <strong>欢迎登录</strong>
            </div>
            <div className="login_validateLabel"></div>
            <div className="login_MainForm">
               <div className="form-group" style={{marginBottom:10}}>
                  <div className="input-group">
                      <div className="input-group-addon">
                         <img src="images/login/username.png"/>
                      </div>
                      <input ref="username" autocomplete="off" className="form-control" type="text" id="login_username" name="login_username"
                             placeholder="用户名"/>
                  </div>
               </div>
               <div className="form-group" style={{marginBottom:10}}>
                    <div className="input-group">
                       <div className="input-group-addon">
                         <img src="images/login/pwd.png"/>
                       </div>
                       <input ref="password" autocomplete="off" className="form-control" type="password" id="login_password" name="login_password"
                           placeholder="密码"/>
                </div>
            </div>
            <div className="checkbox"><label><input type="checkbox" id="rememberMe"/>记住密码</label></div>
            <div style={{textAlign:"right",paddingTop:50}}>
                 <Button id="loginBtn" className="btn-danger btn-large form-control" onClick={this.handleClick}>登&nbsp;录</Button>
             </div>
           </div>
           </div>
           </div>
           </div>
           </div>
           </div>
        );
     },
     //尺寸重绘
     resize: function() {
         var width=FluxConstant.view.PAGE_WIDTH;
         var height=FluxConstant.view.PAGE_HEIGHT;
         //console.log({width: FluxConstant.view.PAGE_WIDTH, height: FluxConstant.view.PAGE_HEIGHT});
     }
});
module.exports = Login;