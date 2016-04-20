webpackJsonp([1],{

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Index": 218,
		"./Index.jsx": 218
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 217;


/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Flux, React, BootstrapComp, FluxConstant, DateUtil) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	/**
	 * Created by yebo on 2016/4/11.
	 */
	var IndexStore = __webpack_require__(229);
	var IndexAction = __webpack_require__(230);
	console.log($("#container").width() + "########" + $("#container").height());
	var Index = Flux.createView({
	    //获取当前视图所需Store,如果用到了Store,必须实现该方法，否则将无法响应状态更新
	    getStore: function getStore() {
	        return [IndexStore];
	    },
	    //获取当前视图状态，通常都是从Store中获取
	    getState: function getState() {
	        return { text: IndexStore.getResultText() };
	    },
	    //发起一个动作，此例为点击事件发起
	    handleClick: function handleClick() {
	        IndexAction.updateText("this is my first update");
	    },
	    //视图渲染，发生状态变化时自动调用
	    render: function render() {
	        return React.createElement("div", { className: "indexContainer", style: { width: 400, height: 100 } }, React.createElement("label", null, this.state.text), React.createElement("input", { type: "text", id: "beginDateTxt" }), React.createElement(BootstrapComp.Button, { id: "loginBtn", className: "btn-danger btn-large", onClick: this.handleClick }, "按钮"), React.createElement("span", { className: "glyphicon glyphicon-hand-left" }));
	    },
	    //尺寸重绘，发生窗体大小变化时自动调用
	    resize: function resize() {
	        //获取当前页面的尺寸
	        var width = FluxConstant.view.PAGE_WIDTH;
	        var height = FluxConstant.view.PAGE_HEIGHT;
	    },
	    //渲染完成后
	    didMount: function didMount() {

	        /*$(".indexContainer").mCustomScrollbar("destroy");
	        $(".indexContainer").mCustomScrollbar({
	            theme : "dark"
	        });*/
	        $('#beginDateTxt').datetimebox({
	            endtoday: true, // 截止今天
	            value: DateUtil.getToday(-6)
	        });
	    }
	});
	module.exports = Index;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(219), __webpack_require__(205), __webpack_require__(226), __webpack_require__(225), __webpack_require__(228)))

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Flux) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/**
	 * Created by yebo on 2016/4/8.
	 */
	var resultText = "init value";
	var IndexStore = Flux.createStore({
	    update: function update(action) {
	        var text = action.text.trim();
	        switch (action.actionType) {
	            case "updateText":
	                if (text !== '') {
	                    resultText = text;
	                }
	                break;
	            default:
	            // no op
	        }
	    },
	    getResultText: function getResultText() {
	        return resultText;
	    }
	});
	//for(var i=0;i<1000;i++)
	//resultText+="波波维奇";
	module.exports = IndexStore;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "IndexStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(219)))

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Flux) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/**
	 * Created by yebo on 2016/4/8.
	*/
	var IndexAction = Flux.createAction({
	    updateText: function updateText(text) {
	        this.dispatch("updateText", text);
	    }
	});
	module.exports = IndexAction;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "IndexAction.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(219)))

/***/ }

});