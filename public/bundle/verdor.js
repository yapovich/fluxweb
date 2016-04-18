/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".app.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "bundle/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(209);
	module.exports = __webpack_require__(210);


/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, __webpack_provided_window_dot_$) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;}; /*!
	 * jQuery JavaScript Library v1.9.1
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2013-2-4
	 */(function(window,undefined){ // Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//"use strict";
	var  // The deferred used on DOM ready
	readyList, // A central reference to the root jQuery(document)
	rootjQuery, // Support: IE<9
	// For `typeof node.method` instead of `node.method !== undefined`
	core_strundefined=typeof undefined==="undefined"?"undefined":_typeof(undefined), // Use the correct document accordingly with window argument (sandbox)
	document=window.document,location=window.location, // Map over jQuery in case of overwrite
	_jQuery=__webpack_provided_window_dot_jQuery, // Map over the $ in case of overwrite
	_$=__webpack_provided_window_dot_$, // [[Class]] -> type pairs
	class2type={}, // List of deleted data cache ids, so we can reuse them
	core_deletedIds=[],core_version="1.9.1", // Save a reference to some core methods
	core_concat=core_deletedIds.concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim, // Define a local copy of jQuery
	jQuery=function jQuery(selector,context){ // The jQuery object is actually just the init constructor 'enhanced'
	return new jQuery.fn.init(selector,context,rootjQuery);}, // Used for matching numbers
	core_pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, // Used for splitting on whitespace
	core_rnotwhite=/\S+/g, // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, // Match a standalone tag
	rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/, // JSON RegExp
	rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, // Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();}, // The ready event handler
	completed=function completed(event){ // readyState === "complete" is good enough for us to call the dom ready in oldIE
	if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready();}}, // Clean-up method for dom ready events
	detach=function detach(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);}else {document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}};jQuery.fn=jQuery.prototype={ // The current version of jQuery being used
	jquery:core_version,constructor:jQuery,init:function init(selector,context,rootjQuery){var match,elem; // HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;} // Handle HTML strings
	if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){ // Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else {match=rquickExpr.exec(selector);} // Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){ // HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context; // scripts is true for back-compat
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true)); // HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){ // Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]); // ...and otherwise set as attributes
	}else {this.attr(match,context[match]);}}}return this; // HANDLE: $(#id)
	}else {elem=document.getElementById(match[2]); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document #6963
	if(elem&&elem.parentNode){ // Handle the case where IE and Opera return items
	// by name instead of ID
	if(elem.id!==match[2]){return rootjQuery.find(selector);} // Otherwise, we inject the element directly into the jQuery object
	this.length=1;this[0]=elem;}this.context=document;this.selector=selector;return this;} // HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return (context||rootjQuery).find(selector); // HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else {return this.constructor(context).find(selector);} // HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this; // HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}return jQuery.makeArray(selector,this);}, // Start with an empty selector
	selector:"", // The default length of a jQuery object is 0
	length:0, // The number of elements contained in the matched element set
	size:function size(){return this.length;},toArray:function toArray(){return core_slice.call(this);}, // Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num==null? // Return a 'clean' array
	this.toArray(): // Return just the object
	num<0?this[this.length+num]:this[num];}, // Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){ // Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems); // Add the old object onto the stack (as a reference)
	ret.prevObject=this;ret.context=this.context; // Return the newly-formed element set
	return ret;}, // Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each:function each(callback,args){return jQuery.each(this,callback,args);},ready:function ready(fn){ // Add the callback
	jQuery.ready.promise().done(fn);return this;},slice:function slice(){return this.pushStack(core_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function end(){return this.prevObject||this.constructor(null);}, // For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:core_push,sort:[].sort,splice:[].splice}; // Give the init function the jQuery prototype for later instantiation
	jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false; // Handle a deep copy situation
	if(typeof target==="boolean"){deep=target;target=arguments[1]||{}; // skip the boolean and the target
	i=2;} // Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};} // extend jQuery itself if only one argument is passed
	if(length===i){target=this;--i;}for(;i<length;i++){ // Only deal with non-null/undefined values
	if((options=arguments[i])!=null){ // Extend the base object
	for(name in options){src=target[name];copy=options[name]; // Prevent never-ending loop
	if(target===copy){continue;} // Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else {clone=src&&jQuery.isPlainObject(src)?src:{};} // Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy); // Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}} // Return the modified object
	return target;};jQuery.extend({noConflict:function noConflict(deep){if(__webpack_provided_window_dot_$===jQuery){__webpack_provided_window_dot_$=_$;}if(deep&&__webpack_provided_window_dot_jQuery===jQuery){__webpack_provided_window_dot_jQuery=_jQuery;}return jQuery;}, // Is the DOM ready to be used? Set to true once it occurs.
	isReady:false, // A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1, // Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else {jQuery.ready(true);}}, // Handle when the DOM is ready
	ready:function ready(wait){ // Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;} // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
	if(!document.body){return setTimeout(jQuery.ready);} // Remember that the DOM is ready
	jQuery.isReady=true; // If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;} // If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]); // Trigger any bound ready events
	if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready");}}, // See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function isWindow(obj){return obj!=null&&obj==obj.window;},isNumeric:function isNumeric(obj){return !isNaN(parseFloat(obj))&&isFinite(obj);},type:function type(obj){if(obj==null){return String(obj);}return (typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[core_toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},isPlainObject:function isPlainObject(obj){ // Must be an Object.
	// Because of IE, we also have to check the presence of the constructor property.
	// Make sure that DOM nodes and window objects don't pass through, as well
	if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}try{ // Not own constructor property must be Object
	if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){ // IE8,9 Will throw exceptions on certain host objects #9897
	return false;} // Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;for(key in obj){}return key===undefined||core_hasOwn.call(obj,key);},isEmptyObject:function isEmptyObject(obj){var name;for(name in obj){return false;}return true;},error:function error(msg){throw new Error(msg);}, // data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML:function parseHTML(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}if(typeof context==="boolean"){keepScripts=context;context=false;}context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[]; // Single tag
	if(parsed){return [context.createElement(parsed[1])];}parsed=jQuery.buildFragment([data],context,scripts);if(scripts){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);},parseJSON:function parseJSON(data){ // Attempt to parse using the native JSON parser first
	if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}if(data===null){return data;}if(typeof data==="string"){ // Make sure leading/trailing whitespace is removed (IE can't handle it)
	data=jQuery.trim(data);if(data){ // Make sure the incoming data is actual JSON
	// Logic borrowed from http://json.org/json2.js
	if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return new Function("return "+data)();}}}jQuery.error("Invalid JSON: "+data);}, // Cross-browser xml parsing
	parseXML:function parseXML(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}try{if(window.DOMParser){ // Standard
	tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else { // IE
	xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;},noop:function noop(){}, // Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval:function globalEval(data){if(data&&jQuery.trim(data)){ // We use execScript on Internet Explorer
	// We use an anonymous function so that context is window
	// rather than jQuery in Firefox
	(window.execScript||function(data){window["eval"].call(window,data);})(data);}}, // Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();}, // args is for internal usage only
	each:function each(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else {for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}} // A special, fast, case for the most common use of each
	}else {if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else {for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}return obj;}, // Use native String.trim function wherever possible
	trim:core_trim&&!core_trim.call("﻿ ")?function(text){return text==null?"":core_trim.call(text);}: // Otherwise use our own trimming functionality
	function(text){return text==null?"":(text+"").replace(rtrim,"");}, // results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else {core_push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i);}len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){ // Skip accessing in sparse arrays
	if(i in arr&&arr[i]===elem){return i;}}}return -1;},merge:function merge(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j];}}else {while(second[j]!==undefined){first[i++]=second[j++];}}first.length=i;return first;},grep:function grep(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv; // Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}return ret;}, // arg is for internal usage only
	map:function map(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[]; // Go through the array, translating each of the items to their
	if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}} // Go through every key on the object,
	}else {for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}} // Flatten any nested arrays
	return core_concat.apply([],ret);}, // A global GUID counter for objects
	guid:1, // Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;} // Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;} // Simulated bind
	args=core_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(core_slice.call(arguments)));}; // Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;}, // Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access:function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null; // Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);} // Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){ // Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null; // ...except when executing function values
	}else {bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems: // Gets
	bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;},now:function now(){return new Date().getTime();}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred(); // Catch cases where $(document).ready() is called after the browser event has already occurred.
	// we once tried to use readyState "interactive" here, but it caused issues like the one
	// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
	if(document.readyState==="complete"){ // Handle it asynchronously to allow scripts the opportunity to delay ready
	setTimeout(jQuery.ready); // Standards-based browsers support DOMContentLoaded
	}else if(document.addEventListener){ // Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed,false); // A fallback to window.onload, that will always work
	window.addEventListener("load",completed,false); // If IE event model is used
	}else { // Ensure firing before onload, maybe late but safe also for iframes
	document.attachEvent("onreadystatechange",completed); // A fallback to window.onload, that will always work
	window.attachEvent("onload",completed); // If IE and not a frame
	// continually check to see if the document is ready
	var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{ // Use the trick by Diego Perini
	// http://javascript.nwbox.com/IEContentLoaded/
	top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);} // detach all dom ready events
	detach(); // and execute any waiting functions
	jQuery.ready();}})();}}}return readyList.promise(obj);}; // Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(jQuery.isWindow(obj)){return false;}if(obj.nodeType===1&&length){return true;}return type==="array"||type!=="function"&&(length===0||typeof length==="number"&&length>0&&length-1 in obj);} // All jQuery objects should point back to these
	rootjQuery=jQuery(document); // String to Object options format cache
	var optionsCache={}; // Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(core_rnotwhite)||[],function(_,flag){object[flag]=true;});return object;} /*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){ // Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?optionsCache[options]||createOptions(options):jQuery.extend({},options);var  // Flag to know if list is currently firing
	firing, // Last fire value (for non-forgettable lists)
	memory, // Flag to know if list was already fired
	_fired, // End of the loop when firing
	firingLength, // Index of currently firing callback (modified by remove if needed)
	firingIndex, // First callback to fire (used internally by add and fireWith)
	firingStart, // Actual callback list
	list=[], // Stack of fire calls for repeatable lists
	stack=!options.once&&[], // Fire callbacks
	fire=function fire(data){memory=options.memory&&data;_fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false; // To prevent further calls using add
	break;}}firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else {self.disable();}}}, // Actual Callbacks object
	self={ // Add a callback or a collection of callbacks to the list
	add:function add(){if(list){ // First, we save the current length
	var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){ // Inspect recursively
	add(arg);}});})(arguments); // Do we need to add the callbacks to the
	// current firing batch?
	if(firing){firingLength=list.length; // With memory, if we're not firing then
	// we should call right away
	}else if(memory){firingStart=start;fire(memory);}}return this;}, // Remove a callback from the list
	remove:function remove(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1); // Handle firing indexes
	if(firing){if(index<=firingLength){firingLength--;}if(index<=firingIndex){firingIndex--;}}}});}return this;}, // Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);}, // Remove all callbacks from the list
	empty:function empty(){list=[];return this;}, // Have the list do nothing anymore
	disable:function disable(){list=stack=memory=undefined;return this;}, // Is it disabled?
	disabled:function disabled(){return !list;}, // Lock the list in its current state
	lock:function lock(){stack=undefined;if(!memory){self.disable();}return this;}, // Is it locked?
	locked:function locked(){return !stack;}, // Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){args=args||[];args=[context,args.slice?args.slice():args];if(list&&(!_fired||stack)){if(firing){stack.push(args);}else {fire(args);}}return this;}, // Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;}, // To know if the callbacks have already been called at least once
	fired:function fired(){return !!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[ // action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},then:function then() /* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var action=tuple[0],fn=jQuery.isFunction(fns[i])&&fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else {newDefer[action+"With"](this===_promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();}, // Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={}; // Keep pipe for back-compat
	_promise.pipe=_promise.then; // Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3]; // promise[ done | fail | progress ] = list.add
	_promise[tuple[1]]=list.add; // Handle state
	if(stateString){list.add(function(){ // state = [ resolved | rejected ]
	_state=stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i^1][2].disable,tuples[2][2].lock);} // deferred[ resolve | reject | notify ]
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?_promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;}); // Make the deferred a promise
	_promise.promise(deferred); // Call given func if any
	if(func){func.call(deferred,deferred);} // All done!
	return deferred;}, // Deferred helper
	when:function when(subordinate /* , ..., subordinateN */){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length, // the count of uncompleted subordinates
	remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0, // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining===1?subordinate:jQuery.Deferred(), // Update function for both resolve and progress values
	updateFunc=function updateFunc(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts; // add listeners to Deferred subordinates; treat others as resolved
	if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else {--remaining;}}} // if we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}});jQuery.support=function(){var support,all,a,input,select,fragment,opt,eventName,isSupported,i,div=document.createElement("div"); // Setup
	div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; // Support tests won't run in some limited or non-browser environments
	all=div.getElementsByTagName("*");a=div.getElementsByTagName("a")[0];if(!all||!a||!all.length){return {};} // First batch of tests
	select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px;float:left;opacity:.5";support={ // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	getSetAttribute:div.className!=="t", // IE strips leading whitespace when .innerHTML is used
	leadingWhitespace:div.firstChild.nodeType===3, // Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	tbody:!div.getElementsByTagName("tbody").length, // Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	htmlSerialize:!!div.getElementsByTagName("link").length, // Get the style information from getAttribute
	// (IE uses .cssText instead)
	style:/top/.test(a.getAttribute("style")), // Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	hrefNormalized:a.getAttribute("href")==="/a", // Make sure that element opacity exists
	// (IE uses filter instead)
	// Use a regex to work around a WebKit issue. See #5145
	opacity:/^0.5/.test(a.style.opacity), // Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	cssFloat:!!a.style.cssFloat, // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	checkOn:!!input.value, // Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	optSelected:opt.selected, // Tests for enctype support on a form (#6743)
	enctype:!!document.createElement("form").enctype, // Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	html5Clone:document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>", // jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
	boxModel:document.compatMode==="CSS1Compat", // Will be defined later
	deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false}; // Make sure checked status is properly cloned
	input.checked=true;support.noCloneChecked=input.cloneNode(true).checked; // Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled=true;support.optDisabled=!opt.disabled; // Support: IE<9
	try{delete div.test;}catch(e){support.deleteExpando=false;} // Check if we can trust getAttribute("value")
	input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")===""; // Check if an input maintains its value after becoming a radio
	input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t"; // #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute("checked","t");input.setAttribute("name","t");fragment=document.createDocumentFragment();fragment.appendChild(input); // Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked=input.checked; // WebKit doesn't clone checked state correctly in fragments
	support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).click();} // Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
	for(i in {submit:true,change:true,focusin:true}){div.setAttribute(eventName="on"+i,"t");support[i+"Bubbles"]=eventName in window||div.attributes[eventName].expando===false;}div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box"; // Run tests that need a body at doc ready
	jQuery(function(){var container,marginDiv,tds,divReset="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",body=document.getElementsByTagName("body")[0];if(!body){ // Return for frameset docs that don't have a body
	return;}container=document.createElement("div");container.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";body.appendChild(container).appendChild(div); // Support: IE8
	// Check if table cells still have offsetWidth/Height when they are set
	// to display:none and there are still other visible table cells in a
	// table row; if so, offsetWidth/Height are not reliable for use when
	// determining if an element has been hidden directly using
	// display:none (it is still safe to use offsets if a parent element is
	// hidden; don safety goggles and see bug #4512 for more information).
	div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=tds[0].offsetHeight===0;tds[0].style.display="";tds[1].style.display="none"; // Support: IE8
	// Check if empty table cells still have offsetWidth/Height
	support.reliableHiddenOffsets=isSupported&&tds[0].offsetHeight===0; // Check box-sizing and margin behavior
	div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";support.boxSizing=div.offsetWidth===4;support.doesNotIncludeMarginInBodyOffset=body.offsetTop!==1; // Use window.getComputedStyle because jsdom on node.js will break without it.
	if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px"; // Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. (#3333)
	// Fails in WebKit before Feb 2011 nightlies
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight);}if(_typeof(div.style.zoom)!==core_strundefined){ // Support: IE<8
	// Check if natively block-level elements act like inline-block
	// elements when setting their display to 'inline' and giving
	// them layout
	div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=div.offsetWidth===3; // Support: IE6
	// Check if elements with layout shrink-wrap their children
	div.style.display="block";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=div.offsetWidth!==3;if(support.inlineBlockNeedsLayout){ // Prevent IE 6 from affecting layout for positioned elements #11048
	// Prevent IE from shrinking the body in IE 7 mode #12869
	// Support: IE<8
	body.style.zoom=1;}}body.removeChild(container); // Null elements to avoid leaks in IE
	container=div=tds=marginDiv=null;}); // Null elements to avoid leaks in IE
	all=select=fragment=opt=a=input=null;return support;}();var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;function internalData(elem,name,data,pvt /* Internal Use Only */){if(!jQuery.acceptData(elem)){return;}var thisCache,ret,internalKey=jQuery.expando,getByName=typeof name==="string", // We have to handle DOM nodes and JS objects differently because IE6-7
	// can't GC object references properly across the DOM-JS boundary
	isNode=elem.nodeType, // Only DOM nodes need the global jQuery cache; JS object data is
	// attached directly to the object so GC can occur automatically
	cache=isNode?jQuery.cache:elem, // Only defining an ID for JS objects if its cache already exists allows
	// the code to shortcut on the same path as a DOM node with no cache
	id=isNode?elem[internalKey]:elem[internalKey]&&internalKey; // Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if((!id||!cache[id]||!pvt&&!cache[id].data)&&getByName&&data===undefined){return;}if(!id){ // Only DOM nodes need a new unique ID for each element since their data
	// ends up in the global cache
	if(isNode){elem[internalKey]=id=core_deletedIds.pop()||jQuery.guid++;}else {id=internalKey;}}if(!cache[id]){cache[id]={}; // Avoids exposing jQuery metadata on plain JS objects when the object
	// is serialized using JSON.stringify
	if(!isNode){cache[id].toJSON=jQuery.noop;}} // An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if((typeof name==="undefined"?"undefined":_typeof(name))==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else {cache[id].data=jQuery.extend(cache[id].data,name);}}thisCache=cache[id]; // jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if(!pvt){if(!thisCache.data){thisCache.data={};}thisCache=thisCache.data;}if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;} // Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if(getByName){ // First Try to find as-is property data
	ret=thisCache[name]; // Test for null|undefined property data
	if(ret==null){ // Try to find the camelCased property
	ret=thisCache[jQuery.camelCase(name)];}}else {ret=thisCache;}return ret;}function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}var i,l,thisCache,isNode=elem.nodeType, // See jQuery.data for more information
	cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando; // If there is already no cache entry for this object, there is no
	// purpose in continuing
	if(!cache[id]){return;}if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){ // Support array or space separated string names for data keys
	if(!jQuery.isArray(name)){ // try the string as a key before any manipulation
	if(name in thisCache){name=[name];}else { // split the camel cased version by spaces unless a key with the spaces exists
	name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else {name=name.split(" ");}}}else { // If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name=name.concat(jQuery.map(name,jQuery.camelCase));}for(i=0,l=name.length;i<l;i++){delete thisCache[name[i]];} // If there is no data left in the cache, we want to continue
	// and let the cache object itself get destroyed
	if(!(pvt?isEmptyDataObject:jQuery.isEmptyObject)(thisCache)){return;}}} // See jQuery.data for more information
	if(!pvt){delete cache[id].data; // Don't destroy the parent cache unless the internal data object
	// had been the only thing left in it
	if(!isEmptyDataObject(cache[id])){return;}} // Destroy the cache
	if(isNode){jQuery.cleanData([elem],true); // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	}else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id]; // When all else fails, null
	}else {cache[id]=null;}}jQuery.extend({cache:{}, // Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando:"jQuery"+(core_version+Math.random()).replace(/\D/g,""), // The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData:{"embed":true, // Ban all objects except for Flash (which handle expandos)
	"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function hasData(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return !!elem&&!isEmptyDataObject(elem);},data:function data(elem,name,_data){return internalData(elem,name,_data);},removeData:function removeData(elem,name){return internalRemoveData(elem,name);}, // For internal use only.
	_data:function _data(elem,name,data){return internalData(elem,name,data,true);},_removeData:function _removeData(elem,name){return internalRemoveData(elem,name,true);}, // A method for determining if a DOM node can handle the data expando
	acceptData:function acceptData(elem){ // Do not set data on non-element because it will not be cleared (#8335).
	if(elem.nodeType&&elem.nodeType!==1&&elem.nodeType!==9){return false;}var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]; // nodes accept data unless otherwise specified; rejection can be conditional
	return !noData||noData!==true&&elem.getAttribute("classid")===noData;}});jQuery.fn.extend({data:function data(key,value){var attrs,name,elem=this[0],i=0,data=null; // Gets all values
	if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attrs=elem.attributes;for(;i<attrs.length;i++){name=attrs[i].name;if(!name.indexOf("data-")){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}jQuery._data(elem,"parsedAttrs",true);}}return data;} // Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){jQuery.data(this,key);});}return jQuery.access(this,function(value){if(value===undefined){ // Try to fetch any internally stored data first
	return elem?dataAttr(elem,key,jQuery.data(elem,key)):null;}this.each(function(){jQuery.data(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){ // If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null: // Only convert to a number if it doesn't change the string
	+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){} // Make sure we set the data so it isn't changed later
	jQuery.data(elem,key,data);}else {data=undefined;}}return data;} // checks a cache object for emptiness
	function isEmptyDataObject(obj){var name;for(name in obj){ // if the public data object is empty, the private is still empty
	if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}if(name!=="toJSON"){return false;}}return true;}jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type); // Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else {queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);}; // If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}hooks.cur=fn;if(fn){ // Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");} // clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}}, // not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data); // ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});}, // Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay:function delay(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);}, // Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var nodeHook,boolHook,rclass=/[\t\r\n]/g,rreturn=/\r/g,rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i,rboolean=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,getSetInput=jQuery.support.input;jQuery.fn.extend({attr:function attr(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function prop(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){name=jQuery.propFix[name]||name;return this.each(function(){ // try/catch handles cases where IE balks (such as removing a property on window)
	try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function addClass(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}if(proceed){ // The disjunction here is for better compressibility (see removeClass)
	classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}elem.className=jQuery.trim(cur);}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i]; // This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while(clazz=classes[j++]){ // Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ");}}elem.className=value?jQuery.trim(cur):"";}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value),isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}return this.each(function(){if(type==="string"){ // toggle individual class names
	var className,i=0,self=jQuery(this),state=stateVal,classNames=value.match(core_rnotwhite)||[];while(className=classNames[i++]){ // check each className given, space separated list
	state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);} // Toggle whole class name
	}else if(type===core_strundefined||type==="boolean"){if(this.className){ // store className if set
	jQuery._data(this,"__className__",this.className);} // If the element has a class name or if we're passed "false",
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function hasClass(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}return false;},val:function val(value){var ret,hooks,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"? // handle most common string cases
	ret.replace(rreturn,""): // handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val,self=jQuery(this);if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,self.val());}else {val=value;} // Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
	if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){ // attributes.value is undefined in Blackberry 4.7 but
	// uses .value. See #6932
	var val=elem.attributes.value;return !val||val.specified?elem.value:elem.text;}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0; // Loop through all the selected options
	for(;i<max;i++){option=options[i]; // oldIE doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&( // Don't return options that are disabled or in a disabled optgroup
	jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){ // Get the specific value for the option
	value=jQuery(option).val(); // We don't need an array for one selects
	if(one){return value;} // Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var values=jQuery.makeArray(value);jQuery(elem).find("option").each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){elem.selectedIndex=-1;}return values;}}},attr:function attr(elem,name,value){var hooks,notxml,ret,nType=elem.nodeType; // don't get/set attributes on text, comment and attribute nodes
	if(!elem||nType===3||nType===8||nType===2){return;} // Fallback to prop when attributes are not supported
	if(_typeof(elem.getAttribute)===core_strundefined){return jQuery.prop(elem,name,value);}notxml=nType!==1||!jQuery.isXMLDoc(elem); // All attributes are lowercase
	// Grab necessary hook if one is defined
	if(notxml){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(rboolean.test(name)?boolHook:nodeHook);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&notxml&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else {elem.setAttribute(name,value+"");return value;}}else if(hooks&&notxml&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else { // In IE9+, Flash objects don't have .getAttribute (#12945)
	// Support: IE9+
	if(_typeof(elem.getAttribute)!==core_strundefined){ret=elem.getAttribute(name);} // Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;}},removeAttr:function removeAttr(elem,value){var name,propName,i=0,attrNames=value&&value.match(core_rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery.propFix[name]||name; // Boolean attributes get special treatment (#10870)
	if(rboolean.test(name)){ // Set corresponding property to false for boolean attributes
	// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
	if(!getSetAttribute&&ruseDefault.test(name)){elem[jQuery.camelCase("default-"+name)]=elem[propName]=false;}else {elem[propName]=false;} // See #9699 for explanation of this approach (setting first, then removal)
	}else {jQuery.attr(elem,name,"");}elem.removeAttribute(getSetAttribute?name:propName);}}},attrHooks:{type:{set:function set(elem,value){if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){ // Setting the type on a radio button after the value resets the value in IE6-9
	// Reset value to default in case type is set after value during creation
	var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function prop(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType; // don't get/set properties on text, comment and attribute nodes
	if(!elem||nType===3||nType===8||nType===2){return;}notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){ // Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else {return elem[name]=value;}}else {if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else {return elem[name];}}},propHooks:{tabIndex:{get:function get(elem){ // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	var attributeNode=elem.getAttributeNode("tabindex");return attributeNode&&attributeNode.specified?parseInt(attributeNode.value,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}}}}); // Hook for boolean attributes
	boolHook={get:function get(elem,name){var  // Use .prop to determine if this attribute is understood as boolean
	prop=jQuery.prop(elem,name), // Fetch it accordingly
	attr=typeof prop==="boolean"&&elem.getAttribute(name),detail=typeof prop==="boolean"?getSetInput&&getSetAttribute?attr!=null: // oldIE fabricates an empty string for missing boolean attributes
	// and conflates checked/selected into attroperties
	ruseDefault.test(name)?elem[jQuery.camelCase("default-"+name)]:!!attr: // fetch an attribute node for properties not recognized as boolean
	elem.getAttributeNode(name);return detail&&detail.value!==false?name.toLowerCase():undefined;},set:function set(elem,value,name){if(value===false){ // Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){ // IE<8 needs the *property* name
	elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name); // Use defaultChecked and defaultSelected for oldIE
	}else {elem[jQuery.camelCase("default-"+name)]=elem[name]=true;}return name;}}; // fix oldIE value attroperty
	if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={get:function get(elem,name){var ret=elem.getAttributeNode(name);return jQuery.nodeName(elem,"input")? // Ignore the value *property* by using defaultValue
	elem.defaultValue:ret&&ret.specified?ret.value:undefined;},set:function set(elem,value,name){if(jQuery.nodeName(elem,"input")){ // Does not return so that setAttribute is also used
	elem.defaultValue=value;}else { // Use nodeHook if defined (#1954); otherwise setAttribute is fine
	return nodeHook&&nodeHook.set(elem,value,name);}}};} // IE6/7 do not support getting/setting some attributes with get/setAttribute
	if(!getSetAttribute){ // Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook=jQuery.valHooks.button={get:function get(elem,name){var ret=elem.getAttributeNode(name);return ret&&(name==="id"||name==="name"||name==="coords"?ret.value!=="":ret.specified)?ret.value:undefined;},set:function set(elem,value,name){ // Set the existing or create a new attribute node
	var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode(ret=elem.ownerDocument.createAttribute(name));}ret.value=value+=""; // Break association with cloned elements by also using setAttribute (#9646)
	return name==="value"||value===elem.getAttribute(name)?value:undefined;}}; // Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable={get:nodeHook.get,set:function set(elem,value,name){nodeHook.set(elem,value===""?false:value,name);}}; // Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{set:function set(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}});});} // Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!jQuery.support.hrefNormalized){jQuery.each(["href","src","width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{get:function get(elem){var ret=elem.getAttribute(name,2);return ret==null?undefined:ret;}});}); // href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function get(elem){return elem.getAttribute(name,4);}};});}if(!jQuery.support.style){jQuery.attrHooks.style={get:function get(elem){ // Return undefined in the case of empty string
	// Note: IE uppercases css property names, but if we were to .toLowerCase()
	// .cssText, that would destroy case senstitivity in URL's, like in "background"
	return elem.style.cssText||undefined;},set:function set(elem,value){return elem.style.cssText=value+"";}};} // Safari mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if(!jQuery.support.optSelected){jQuery.propHooks.selected=jQuery.extend(jQuery.propHooks.selected,{get:function get(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex; // Make sure that it also works with optgroups, see #5701
	if(parent.parentNode){parent.parentNode.selectedIndex;}}return null;}});} // IE6/7 call enctype encoding
	if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding";} // Radios and checkboxes getter/setter
	if(!jQuery.support.checkOn){jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={get:function get(elem){ // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
	return elem.getAttribute("value")===null?"on":elem.value;}};});}jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]=jQuery.extend(jQuery.valHooks[this],{set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0;}}});});var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}function returnFalse(){return false;} /*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;} // Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;} // Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;} // Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){ // Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return (typeof jQuery==="undefined"?"undefined":_typeof(jQuery))!==core_strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;}; // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
	eventHandle.elem=elem;} // Handle multiple events separated by a space
	// jQuery(...).bind("mouseover mouseout", fn);
	types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); // If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{}; // If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type; // Update special based on newly reset type
	special=jQuery.event.special[type]||{}; // handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn); // Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0; // Only use addEventListener/attachEvent if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){ // Bind the global event handler to the element
	if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}} // Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else {handlers.push(handleObj);} // Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;} // Nullify elem to prevent memory leaks in IE
	elem=null;}, // Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;} // Once for each type.namespace in types; type may be omitted
	types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"); // Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}} // Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}} // Remove the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){delete elemData.handle; // removeData also checks for emptiness and clears the expando if empty
	// so use it instead of delete
	jQuery._removeData(elem,"events");}},trigger:function trigger(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=core_hasOwn.call(event,"type")?event.type:event,namespaces=core_hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document; // Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;} // focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>=0){ // Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);event.isTrigger=true;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null; // Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;} // Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]); // Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;} // Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;} // Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}} // Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type; // jQuery handler
	handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);} // Native handler
	handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault();}}event.type=type; // If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(elem.ownerDocument,data)===false)&&!(type==="click"&&jQuery.nodeName(elem,"a"))&&jQuery.acceptData(elem)){ // Call a native DOM method on the target with the same name name as the event.
	// Can't use an .isFunction() check here because IE6/7 fails that test.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&elem[type]&&!jQuery.isWindow(elem)){ // Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;} // Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;try{elem[type]();}catch(e){ // IE<9 dies on focus/blur to hidden element (#1486,#12518)
	// only reproducible on winXP IE8 native, not IE9 in IE8 mode
	}jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},dispatch:function dispatch(event){ // Make a writable jQuery.Event from the native event object
	event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=core_slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;event.delegateTarget=this; // Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;} // Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers); // Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){ // Triggered event must either 1) have no namespace, or
	// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
	if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}} // Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target; // Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	// Avoid non-left-click bubbling in Firefox (#3861)
	if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){ // Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=_handlers[i]; // Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}} // Add the remaining (directly-bound) handlers
	if(delegateCount<_handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},fix:function fix(event){if(event[jQuery.expando]){return event;} // Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];} // Support: IE<9
	// Fix target property (#1925)
	if(!event.target){event.target=originalEvent.srcElement||document;} // Support: Chrome 23+, Safari?
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType===3){event.target=event.target.parentNode;} // Support: IE<9
	// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
	event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;}, // Includes some event props shared by KeyEvent and MouseEvent
	props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){ // Add which for key events
	if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function filter(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement; // Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);} // Add relatedTarget, if necessary
	if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;} // Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0;}return event;}},special:{load:{ // Prevent triggered image.load events from bubbling to window.load
	noBubble:true},click:{ // For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false;}}},focus:{ // Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==document.activeElement&&this.focus){try{this.focus();return false;}catch(e){ // Support: IE<9
	// If we error on focus to hidden element (#1486, #12518),
	// let .trigger() run the handlers
	}}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===document.activeElement&&this.blur){this.blur();return false;}},delegateType:"focusout"},beforeunload:{postDispatch:function postDispatch(event){ // Even when returnValue equals to undefined Firefox will still show alert
	if(event.result!==undefined){event.originalEvent.returnValue=event.result;}}}},simulate:function simulate(type,elem,event,bubble){ // Piggyback on a donor event to simulate a different one.
	// Fake originalEvent to avoid donor's stopPropagation, but if the
	// simulated event prevents default then we do the same on the donor.
	var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else {jQuery.event.dispatch.call(elem,e);}if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){ // #8545, #7054, preventing memory leaks for custom events in IE6-8
	// detachEvent needed property on element, by name of that event, to properly expose it to GC
	if(_typeof(elem[name])===core_strundefined){elem[name]=null;}elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){ // Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} // Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type; // Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault()?returnTrue:returnFalse; // Event type
	}else {this.type=src;} // Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);} // Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now(); // Mark it as fixed
	this[jQuery.expando]=true;}; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return;} // If preventDefault exists, run it on the original event
	if(e.preventDefault){e.preventDefault(); // Support: IE
	// Otherwise set the returnValue property of the original event to false
	}else {e.returnValue=false;}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return;} // If stopPropagation exists, run it on the original event
	if(e.stopPropagation){e.stopPropagation();} // Support: IE
	// Set the cancelBubble property of the original event to true
	e.cancelBubble=true;},stopImmediatePropagation:function stopImmediatePropagation(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();}}; // Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj; // For mousenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};}); // IE submit delegation
	if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function setup(){ // Only need this for delegated form submit events
	if(jQuery.nodeName(this,"form")){return false;} // Lazy-add a submit handler when a descendant form may potentially be submitted
	jQuery.event.add(this,"click._submit keypress._submit",function(e){ // Node name check avoids a VML-related crash in IE (#9807)
	var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"submitBubbles",true);}}); // return undefined since we don't need an event listener
	},postDispatch:function postDispatch(event){ // If form was submitted by the user, bubble the event up the tree
	if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function teardown(){ // Only need this for delegated form submit events
	if(jQuery.nodeName(this,"form")){return false;} // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
	jQuery.event.remove(this,"._submit");}};} // IE change delegation and checkbox/radio fix
	if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function setup(){if(rformElems.test(this.nodeName)){ // IE doesn't fire change on a check/radio until blur; trigger it on click
	// after a propertychange. Eat the blur-change in special.change.handle.
	// This still fires onchange a second time for check/radio after blur.
	if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;} // Allow triggered, simulated change events (#11500)
	jQuery.event.simulate("change",this,event,true);});}return false;} // Delegated event; lazy-add a change handler on descendant inputs
	jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"changeBubbles",true);}});},handle:function handle(event){var elem=event.target; // Swallow native change events from checkbox/radio, we already triggered them above
	if(this!==elem||event.isSimulated||event.isTrigger||elem.type!=="radio"&&elem.type!=="checkbox"){return event.handleObj.handler.apply(this,arguments);}},teardown:function teardown(){jQuery.event.remove(this,"._change");return !rformElems.test(this.nodeName);}};} // Create "bubbling" focus and blur events
	if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ // Attach a single capturing handler while someone wants focusin/focusout
	var attaches=0,handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function setup(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function teardown(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};});}jQuery.fn.extend({on:function on(types,selector,data,fn, /*INTERNAL*/one){var type,origFn; // Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){ // ( types-Object, selector, data )
	if(typeof selector!=="string"){ // ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){this.on(type,selector,data,types[type],one);}return this;}if(data==null&&fn==null){ // ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){ // ( types, selector, fn )
	fn=data;data=undefined;}else { // ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return this;}if(one===1){origFn=fn;fn=function fn(event){ // Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);}; // Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function one(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){ // ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){ // ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){ // ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){ // ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}}); /*!
	 * Sizzle CSS Selector Engine
	 * Copyright 2012 jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://sizzlejs.com/
	 */(function(window,undefined){var i,cachedruns,Expr,getText,isXML,compile,hasDuplicate,outermostContext, // Local document vars
	setDocument,document,docElem,documentIsXML,rbuggyQSA,rbuggyMatches,matches,contains,sortOrder, // Instance-specific data
	expando="sizzle"+-new Date(),preferredDoc=window.document,support={},dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(), // General-purpose constants
	strundefined=typeof undefined==="undefined"?"undefined":_typeof(undefined),MAX_NEGATIVE=1<<31, // Array methods
	arr=[],pop=arr.pop,push=arr.push,slice=arr.slice, // Use a stripped-down indexOf if we can't use a native one
	indexOf=arr.indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i;}}return -1;}, // Regular expressions
	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier=characterEncoding.replace("w","w#"), // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	operators="([*^$|!~]?=)",attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:"+operators+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]", // Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos=":("+characterEncoding+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+attributes.replace(3,8)+")*)|.*)\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([\\x20\\t\\r\\n\\f>+~])"+whitespace+"*"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"NAME":new RegExp("^\\[name=['\"]?("+characterEncoding+")['\"]?\\]"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"), // For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rsibling=/[\x20\t\r\n\f]*[+~]/,rnative=/^[^{]+\{\s*\[native code/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rescape=/'|\\/g,rattributeQuotes=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,funescape=function funescape(_,escaped){var high="0x"+escaped-0x10000; // NaN means non-codepoint
	return high!==high?escaped: // BMP codepoint
	high<0?String.fromCharCode(high+0x10000): // Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);}; // Use a stripped-down slice if we can't use a native one
	try{slice.call(preferredDoc.documentElement.childNodes,0)[0].nodeType;}catch(e){slice=function slice(i){var elem,results=[];while(elem=this[i++]){results.push(elem);}return results;};} /**
	 * For feature detection
	 * @param {Function} fn The function to test for native support
	 */function isNative(fn){return rnative.test(fn+"");} /**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var _cache,keys=[];return _cache=function cache(key,value){ // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+=" ")>Expr.cacheLength){ // Only keep the most recent entries
	delete _cache[keys.shift()];}return _cache[key]=value;};} /**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;} /**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return fn(div);}catch(e){return false;}finally { // release memory in IE
	div=null;}}function Sizzle(selector,context,results,seed){var match,elem,m,nodeType, // QSA vars
	i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;results=results||[];if(!selector||typeof selector!=="string"){return results;}if((nodeType=context.nodeType)!==1&&nodeType!==9){return [];}if(!documentIsXML&&!seed){ // Shortcuts
	if(match=rquickExpr.exec(selector)){ // Speed-up: Sizzle("#ID")
	if(m=match[1]){if(nodeType===9){elem=context.getElementById(m); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document #6963
	if(elem&&elem.parentNode){ // Handle the case where IE, Opera, and Webkit return items
	// by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else {return results;}}else { // Context is not a document
	if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}} // Speed-up: Sizzle("TAG")
	}else if(match[2]){push.apply(results,slice.call(context.getElementsByTagName(selector),0));return results; // Speed-up: Sizzle(".CLASS")
	}else if((m=match[3])&&support.getByClassName&&context.getElementsByClassName){push.apply(results,slice.call(context.getElementsByClassName(m),0));return results;}} // QSA path
	if(support.qsa&&!rbuggyQSA.test(selector)){old=true;nid=expando;newContext=context;newSelector=nodeType===9&&selector; // qSA works strangely on Element-rooted queries
	// We can work around this by specifying an extra ID on the root
	// and working up from there (Thanks to Andrew Dupont for the technique)
	// IE 8 doesn't work on object elements
	if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if(old=context.getAttribute("id")){nid=old.replace(rescape,"\\$&");}else {context.setAttribute("id",nid);}nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i]);}newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",");}if(newSelector){try{push.apply(results,slice.call(newContext.querySelectorAll(newSelector),0));return results;}catch(qsaError){}finally {if(!old){context.removeAttribute("id");}}}}} // All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);} /**
	 * Detect xml
	 * @param {Element|Object} elem An element or a document
	 */isXML=Sizzle.isXML=function(elem){ // documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;}; /**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var doc=node?node.ownerDocument||node:preferredDoc; // If no document and documentElement is available, return
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;} // Set our document
	document=doc;docElem=doc.documentElement; // Support tests
	documentIsXML=isXML(doc); // Check if getElementsByTagName("*") returns only elements
	support.tagNameNoComments=assert(function(div){div.appendChild(doc.createComment(""));return !div.getElementsByTagName("*").length;}); // Check if attributes should be retrieved by attribute nodes
	support.attributes=assert(function(div){div.innerHTML="<select></select>";var type=_typeof(div.lastChild.getAttribute("multiple")); // IE8 returns a string for some attributes even when not present
	return type!=="boolean"&&type!=="string";}); // Check if getElementsByClassName can be trusted
	support.getByClassName=assert(function(div){ // Opera can't find a second classname (in 9.6)
	div.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!div.getElementsByClassName||!div.getElementsByClassName("e").length){return false;} // Safari 3.2 caches class attributes and doesn't catch changes
	div.lastChild.className="e";return div.getElementsByClassName("e").length===2;}); // Check if getElementById returns elements by name
	// Check if getElementsByName privileges form controls or returns elements by ID
	support.getByName=assert(function(div){ // Inject content
	div.id=expando+0;div.innerHTML="<a name='"+expando+"'></a><div name='"+expando+"'></div>";docElem.insertBefore(div,docElem.firstChild); // Test
	var pass=doc.getElementsByName&& // buggy browsers will return fewer than the correct 2
	doc.getElementsByName(expando).length===2+ // buggy browsers will return more than the correct 0
	doc.getElementsByName(expando+0).length;support.getIdNotName=!doc.getElementById(expando); // Cleanup
	docElem.removeChild(div);return pass;}); // IE6/7 return modified attributes
	Expr.attrHandle=assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild&&_typeof(div.firstChild.getAttribute)!==strundefined&&div.firstChild.getAttribute("href")==="#";})?{}:{"href":function href(elem){return elem.getAttribute("href",2);},"type":function type(elem){return elem.getAttribute("type");}}; // ID find and filter
	if(support.getIdNotName){Expr.find["ID"]=function(id,context){if(_typeof(context.getElementById)!==strundefined&&!documentIsXML){var m=context.getElementById(id); // Check parentNode to catch when Blackberry 4.6 returns
	// nodes that are no longer in the document #6963
	return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else {Expr.find["ID"]=function(id,context){if(_typeof(context.getElementById)!==strundefined&&!documentIsXML){var m=context.getElementById(id);return m?m.id===id||_typeof(m.getAttributeNode)!==strundefined&&m.getAttributeNode("id").value===id?[m]:undefined:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=_typeof(elem.getAttributeNode)!==strundefined&&elem.getAttributeNode("id");return node&&node.value===attrId;};};} // Tag
	Expr.find["TAG"]=support.tagNameNoComments?function(tag,context){if(_typeof(context.getElementsByTagName)!==strundefined){return context.getElementsByTagName(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag); // Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;}; // Name
	Expr.find["NAME"]=support.getByName&&function(tag,context){if(_typeof(context.getElementsByName)!==strundefined){return context.getElementsByName(name);}}; // Class
	Expr.find["CLASS"]=support.getByClassName&&function(className,context){if(_typeof(context.getElementsByClassName)!==strundefined&&!documentIsXML){return context.getElementsByClassName(className);}}; // QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[]; // qSa(:focus) reports false when true (Chrome 21),
	// no need to also add to buggyMatches since matches checks buggyQSA
	// A support test would require too much code (would include document ready)
	rbuggyQSA=[":focus"];if(support.qsa=isNative(doc.querySelectorAll)){ // Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){ // Select is set to empty string on purpose
	// This is to test IE's treatment of not explictly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	div.innerHTML="<select><option selected=''></option></select>"; // IE8 - Some boolean attributes are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)");} // Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}});assert(function(div){ // Opera 10-12/IE8 - ^= $= *= and empty values
	// Should not select anything
	div.innerHTML="<input type='hidden' i=''/>";if(div.querySelectorAll("[i^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:\"\"|'')");} // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");} // Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=isNative(matches=docElem.matchesSelector||docElem.mozMatchesSelector||docElem.webkitMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){ // Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(div,"div"); // This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=new RegExp(rbuggyQSA.join("|"));rbuggyMatches=new RegExp(rbuggyMatches.join("|")); // Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains=isNative(docElem.contains)||docElem.compareDocumentPosition?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;}; // Document order sorting
	sortOrder=docElem.compareDocumentPosition?function(a,b){var compare;if(a===b){hasDuplicate=true;return 0;}if(compare=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b)){if(compare&1||a.parentNode&&a.parentNode.nodeType===11){if(a===doc||contains(preferredDoc,a)){return -1;}if(b===doc||contains(preferredDoc,b)){return 1;}return 0;}return compare&4?-1:1;}return a.compareDocumentPosition?-1:1;}:function(a,b){var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b]; // Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0; // Parentless nodes are either documents or disconnected
	}else if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:0; // If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);} // Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);} // Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i? // Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]): // Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;}; // Always assume the presence of duplicates if sort doesn't
	// pass them to our comparison function (as in Google Chrome).
	hasDuplicate=false;[0,0].sort(sortOrder);support.detectDuplicates=hasDuplicate;return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){ // Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);} // Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']"); // rbuggyQSA always contains :focus, so no need for an existence check
	if(support.matchesSelector&&!documentIsXML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&!rbuggyQSA.test(expr)){try{var ret=matches.call(elem,expr); // IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch|| // As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){ // Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){var val; // Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}if(!documentIsXML){name=name.toLowerCase();}if(val=Expr.attrHandle[name]){return val(elem);}if(documentIsXML||support.attributes){return elem.getAttribute(name);}return ((val=elem.getAttributeNode(name))||elem.getAttribute(name))&&elem[name]===true?name:val&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);}; // Document sorting and removing duplicates
	Sizzle.uniqueSort=function(results){var elem,duplicates=[],i=1,j=0; // Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;results.sort(sortOrder);if(hasDuplicate){for(;elem=results[i];i++){if(elem===results[i-1]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}return results;};function siblingCheck(a,b){var cur=b&&a,diff=cur&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes
	if(diff){return diff;} // Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return -1;}}}return a?1:-1;} // Returns a function to use in pseudos for input types
	function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};} // Returns a function to use in pseudos for buttons
	function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return (name==="input"||name==="button")&&elem.type===type;};} // Returns a function to use in pseudos for positionals
	function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length; // Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});} /**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){ // If no nodeType, this is expected to be an array
	for(;node=elem[i];i++){ // Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){ // Use textContent for elements
	// innerText usage removed for consistency of new lines (see #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else { // Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;} // Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={ // Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape); // Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){ /* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){ // nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);} // numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd"); // other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[5]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;} // Accept quoted arguments as-is
	if(match[4]){match[2]=match[4]; // Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&( // Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&( // advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){ // excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);} // Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeName){if(nodeName==="*"){return function(){return true;};}nodeName=nodeName.replace(runescape,funescape).toLowerCase();return function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(elem.className||_typeof(elem.getAttribute)!==strundefined&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0? // Shortcut for :nth-*(n)
	function(elem){return !!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){ // :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}} // Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){ // Seek `elem` from a previously-cached index
	outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||( // Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){ // When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}} // Use previously-cached element index if available
	}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1]; // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
	}else { // Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){ // Cache the index of each encountered element
	if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}if(node===elem){break;}}}} // Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){ // pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo); // The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);} // But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{ // Potentially complex pseudos
	"not":markFunction(function(selector){ // Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length; // Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return !results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){return function(elem){return (elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}), // "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){ // lang value must be a valid identifider
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do {if(elemLang=documentIsXML?elem.getAttribute("xml:lang")||elem.getAttribute("lang"):elem.lang){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}), // Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);}, // Boolean properties
	"enabled":function enabled(elem){return elem.disabled===false;},"disabled":function disabled(elem){return elem.disabled===true;},"checked":function checked(elem){ // In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){ // Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;}, // Contents
	"empty":function empty(elem){ // http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
	//   not comment, processing instructions, or others
	// Thanks to Diego Perini for the nodeName shortcut
	//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeName>"@"||elem.nodeType===3||elem.nodeType===4){return false;}}return true;},"parent":function parent(elem){return !Expr.pseudos["empty"](elem);}, // Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr; // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
	// use getAttribute instead to test this case
	return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===elem.type);}, // Position-in-collection
	"first":createPositionalPseudo(function(){return [0];}),"last":createPositionalPseudo(function(matchIndexes,length){return [length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return [argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}}; // Add button/input type pseudos
	for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in {submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){ // Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){ // Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false; // Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched, // Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);} // Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}} // Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector): // Cache the tokens
	tokenCache(selector,groups).slice(0);}function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first? // Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}: // Check against all ancestor/preceding elements
	function(elem,context,xml){var data,cache,outerCache,dirkey=dirruns+" "+doneName; // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else {while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((cache=outerCache[dir])&&cache[0]===dirkey){if((data=cache[1])===true||data===cachedruns){return data===true;}}else {cache=outerCache[dir]=[dirkey];cache[1]=matcher(elem,context,xml)||cachedruns;if(cache[1]===true){return true;}}}}}};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length, // Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]), // Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)? // ...intermediate processing is necessary
	[]: // ...otherwise use results directly
	results:matcherIn; // Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);} // Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml); // Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){ // Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){ // Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);} // Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}} // Add elements to results, through postFinder if defined
	}else {matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else {push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0, // The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){return !leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else {matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches); // Return special upon seeing a positional matcher
	if(matcher[expando]){ // Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1)).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){ // A counter to specify which element is currently being matched
	var matcherCachedRuns=0,bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext, // We must always have either seed elements or context
	elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context), // Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1;if(outermost){outermostContext=context!==document&&context;cachedruns=matcherCachedRuns;} // Add elements passing elementMatchers directly to results
	// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
	for(;(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while(matcher=elementMatchers[j++]){if(matcher(elem,context,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;cachedruns=++matcherCachedRuns;}} // Track unmatched elements for set filters
	if(bySet){ // They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;} // Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}} // Apply set filters to unmatched elements
	matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){ // Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}} // Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);} // Add matches to results
	push.apply(results,setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}} // Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,group /* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){ // Generate a function of recursive functions that can be used to check each element
	if(!group){group=tokenize(selector);}i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached);}else {elementMatchers.push(cached);}} // Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));}return cached;};function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function select(selector,context,results,seed){var i,tokens,token,type,find,match=tokenize(selector);if(!seed){ // Try to minimize operations if there is only one group
	if(match.length===1){ // Take a shortcut and set the context if the root selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&!documentIsXML&&Expr.relative[tokens[1].type]){context=Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)[0];if(!context){return results;}selector=selector.slice(tokens.shift().value.length);} // Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i]; // Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){ // Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&context.parentNode||context)){ // If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,slice.call(seed,0));return results;}break;}}}}} // Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile(selector,match)(seed,context,documentIsXML,results,rsibling.test(selector));return results;} // Deprecated
	Expr.pseudos["nth"]=Expr.pseudos["eq"]; // Easy API for creating new setFilters
	function setFilters(){}Expr.filters=setFilters.prototype=Expr.pseudos;Expr.setFilters=new setFilters(); // Initialize with the default document
	setDocument(); // Override sizzle attribute retrieval
	Sizzle.attr=jQuery.attr;jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})(window);var runtil=/Until$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,isSimple=/^.[^:#\[\.,]*$/,rneedsContext=jQuery.expr.match.needsContext, // methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function find(selector){var i,ret,self,len=this.length;if(typeof selector!=="string"){self=this;return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=[];for(i=0;i<len;i++){jQuery.find(selector,this[i],ret);} // Needed because $( selector, context ) becomes $( context ).find( selector )
	ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=(this.selector?this.selector+" ":"")+selector;return ret;},has:function has(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function not(selector){return this.pushStack(winnow(this,selector,false));},filter:function filter(selector){return this.pushStack(winnow(this,selector,true));},is:function is(selector){return !!selector&&(typeof selector==="string"? // If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	rneedsContext.test(selector)?jQuery(selector,this.context).index(this[0])>=0:jQuery.filter(selector,this).length>0:this.filter(selector).length>0);},closest:function closest(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){cur=this[i];while(cur&&cur.ownerDocument&&cur!==context&&cur.nodeType!==11){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);break;}cur=cur.parentNode;}}return this.pushStack(ret.length>1?jQuery.unique(ret):ret);}, // Determine the position of an element within
	// the matched set of elements
	index:function index(elem){ // No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;} // index in selector
	if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));} // Locate the position of the desired element
	return jQuery.inArray( // If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem,this);},add:function add(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(jQuery.unique(all));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});jQuery.fn.andSelf=jQuery.fn.addBack;function sibling(cur,dir){do {cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function prevAll(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function siblings(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return jQuery.sibling(elem.firstChild);},contents:function contents(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(!runtil.test(name)){selector=until;}if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;if(this.length>1&&rparentsprev.test(name)){ret=ret.reverse();}return this.pushStack(ret);};});jQuery.extend({filter:function filter(expr,elems,not){if(not){expr=":not("+expr+")";}return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems);},dir:function dir(elem,_dir,until){var matched=[],cur=elem[_dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}cur=cur[_dir];}return matched;},sibling:function sibling(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}return r;}}); // Implement the identical functionality for filter and not
	function winnow(elements,qualifier,keep){ // Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier=qualifier||0;if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);return retVal===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else {qualifier=jQuery.filter(qualifier,filtered);}}return jQuery.grep(elements,function(elem){return jQuery.inArray(elem,qualifier)>=0===keep;});}function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}return safeFrag;}var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/i, // checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, // We have to close these tags to support XHTML (#13200)
	wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"], // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default:jQuery.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;jQuery.fn.extend({text:function text(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},wrapAll:function wrapAll(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){ // The elements to wrap the target around
	var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else {self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function append(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.appendChild(elem);}});},prepend:function prepend(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.insertBefore(elem,this.firstChild);}});},before:function before(){return this.domManip(arguments,false,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return this.domManip(arguments,false,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});}, // keepData is for internal use only--do not document
	remove:function remove(selector,keepData){var elem,i=0;for(;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length>0){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}elem.parentNode.removeChild(elem);}}}return this;},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){ // Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));} // Remove any remaining nodes
	while(elem.firstChild){elem.removeChild(elem.firstChild);} // If this is a select, ensure that it displays empty (#12336)
	// Support: IE<9
	if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0;}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;} // See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){ // Remove element nodes and prevent memory leaks
	elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0; // If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(value){var isFunc=jQuery.isFunction(value); // Make sure that the elements are removed from the DOM before they are inserted
	// this can help fix replacing a parent with child elements
	if(!isFunc&&typeof value!=="string"){value=jQuery(value).not(this).detach();}return this.domManip([value],true,function(elem){var next=this.nextSibling,parent=this.parentNode;if(parent){jQuery(this).remove();parent.insertBefore(elem,next);}});},detach:function detach(selector){return this.remove(selector,true);},domManip:function domManip(args,table,callback){ // Flatten any nested arrays
	args=core_concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||!(l<=1||typeof value!=="string"||jQuery.support.checkClone||!rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,table?self.html():undefined);}self.domManip(args,table,callback);});}if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}if(first){table=table&&jQuery.nodeName(first,"tr");scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length; // Use the original fragment for the last item instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true); // Keep references to cloned scripts for later restoration
	if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}callback.call(table&&jQuery.nodeName(this[i],"table")?findOrAppend(this[i],"tbody"):this[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument; // Reenable scripts
	jQuery.map(scripts,restoreScript); // Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){ // Hope ajax is available...
	jQuery.ajax({url:node.src,type:"GET",dataType:"script",async:false,global:false,"throws":true});}else {jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""));}}}} // Fix #11809: Avoid leaking memory
	fragment=first=null;}}return this;}});function findOrAppend(elem,tag){return elem.getElementsByTagName(tag)[0]||elem.appendChild(elem.ownerDocument.createElement(tag));} // Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){var attr=elem.getAttributeNode("type");elem.type=(attr&&attr.specified)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else {elem.removeAttribute("type");}return elem;} // Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"));}}function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}} // make the cloned public data object a copy from the original
	if(curData.data){curData.data=jQuery.extend({},curData.data);}}function fixCloneNodeIssues(src,dest){var nodeName,e,data; // We do not need to do anything for non-Elements
	if(dest.nodeType!==1){return;}nodeName=dest.nodeName.toLowerCase(); // IE6-8 copies events bound via attachEvent when using cloneNode.
	if(!jQuery.support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle);} // Event data gets referenced instead of copied if the expando gets copied too
	dest.removeAttribute(jQuery.expando);} // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest); // IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;} // This path appears unavoidable for IE9. When cloning an object
	// element in IE9, the outerHTML strategy above is not sufficient.
	// If the src has innerHTML and the destination does not,
	// copy the src.innerHTML into the dest.innerHTML. #10324
	if(jQuery.support.html5Clone&&src.innerHTML&&!jQuery.trim(dest.innerHTML)){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&manipulation_rcheckableType.test(src.type)){ // IE6-8 fails to persist the checked state of a cloned checkbox
	// or radio button. Worse, IE6-7 fail to give the cloned element
	// a checked appearance if the defaultChecked value isn't also set
	dest.defaultChecked=dest.checked=src.checked; // IE6-7 get confused and end up setting the value of a cloned
	// checkbox/radio button to an empty string instead of "on"
	if(dest.value!==src.value){dest.value=src.value;} // IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected; // IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems); // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
	core_push.apply(ret,elems.get());}return this.pushStack(ret);};});function getAll(context,tag){var elems,elem,i=0,found=_typeof(context.getElementsByTagName)!==core_strundefined?context.getElementsByTagName(tag||"*"):_typeof(context.querySelectorAll)!==core_strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem);}else {jQuery.merge(found,getAll(elem,tag));}}}return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;} // Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked(elem){if(manipulation_rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}jQuery.extend({clone:function clone(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true); // IE<=8 does not properly clone detached, unknown element nodes
	}else {fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){ // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem); // Fix all IE cloning issues
	for(i=0;(node=srcElements[i])!=null;++i){ // Ensure that the destination node is not null; Fixes #9587
	if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}} // Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i]);}}else {cloneCopyEvent(elem,clone);}} // Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}destElements=srcElements=node=null; // Return the cloned set
	return clone;},buildFragment:function buildFragment(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length, // Ensure a safe fragment
	safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){ // Add nodes directly
	if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem); // Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
	}else {tmp=tmp||safe.appendChild(context.createElement("div")); // Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2]; // Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;} // Manually add leading whitespace removed by IE
	if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));} // Remove IE's autoinserted <tbody> from table fragments
	if(!jQuery.support.tbody){ // String was a <table>, *may* have spurious <tbody>
	elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild: // String was a bare <thead> or <tfoot>
	wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName(tbody=elem.childNodes[j],"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody);}}}jQuery.merge(nodes,tmp.childNodes); // Fix #12392 for WebKit and IE > 9
	tmp.textContent=""; // Fix #12392 for oldIE
	while(tmp.firstChild){tmp.removeChild(tmp.firstChild);} // Remember the top-level container for proper cleanup
	tmp=safe.lastChild;}}} // Fix #11356: Clear elements from fragment
	if(tmp){safe.removeChild(tmp);} // Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if(!jQuery.support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}i=0;while(elem=nodes[i++]){ // #4087 - If origin and destination elements are the same, and this is
	// that element, do not do anything
	if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}contains=jQuery.contains(elem.ownerDocument,elem); // Append to fragment
	tmp=getAll(safe.appendChild(elem),"script"); // Preserve script evaluation history
	if(contains){setGlobalEval(tmp);} // Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}tmp=null;return safe;},cleanData:function cleanData(elems, /* internal */acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type); // This is a shortcut to avoid jQuery.event.remove's overhead
	}else {jQuery.removeEvent(elem,type,data.handle);}}} // Remove cache only if it was not already removed by jQuery.event.remove
	if(cache[id]){delete cache[id]; // IE does not allow us to delete expando properties from nodes,
	// nor does it have a removeAttribute function on Document nodes;
	// we must handle all of these cases
	if(deleteExpando){delete elem[internalKey];}else if(_typeof(elem.removeAttribute)!==core_strundefined){elem.removeAttribute(internalKey);}else {elem[internalKey]=null;}core_deletedIds.push(id);}}}}}});var iframe,getStyles,curCSS,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rposition=/^(top|right|bottom|left)$/, // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"]; // return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(style,name){ // shortcut for names that are not vendor prefixed
	if(name in style){return name;} // check for vendor prefixed names
	var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}return origName;}function isHidden(elem,el){ // isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){ // Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index]&&display==="none"){elem.style.display="";} // Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName));}}else {if(!values[index]){hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}} // Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}return elements;}jQuery.fn.extend({css:function css(name,value){return jQuery.access(this,function(elem,name,value){var len,styles,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){var bool=typeof state==="boolean";return this.each(function(){if(bool?state:isHidden(this)){jQuery(this).show();}else {jQuery(this).hide();}});}});jQuery.extend({ // Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){ // We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}}, // Exclude the following css properties to add px
	cssNumber:{"columnCount":true,"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true}, // Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{ // normalize float css property
	"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"}, // Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){ // Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;} // Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName)); // gets hook for the prefixed version
	// followed by the unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; // Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value); // convert relative number strings (+= or -=) to relative numbers. #7345
	if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name)); // Fixes bug #9237
	type="number";} // Make sure that NaN and null values aren't set. See: #7116
	if(value==null||type==="number"&&isNaN(value)){return;} // If a number was passed in, add 'px' to the (except for certain CSS properties)
	if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";} // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
	// but it would mean to define eight (for every problematic property) identical functions
	if(!jQuery.support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";} // If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){ // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
	// Fixes bug #5509
	try{style[name]=value;}catch(e){}}}else { // If a hook was provided get the non-computed value from there
	if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;} // Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name); // Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName)); // gets hook for the prefixed version
	// followed by the unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
	if(hooks&&"get" in hooks){val=hooks.get(elem,true,extra);} // Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);} //convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];} // Return, converting to number if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}return val;}, // A method for quickly swapping in/out CSS properties to get correct calculations
	swap:function swap(elem,options,callback,args){var ret,name,old={}; // Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]); // Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;}}); // NOTE: we've included the "window" in window.getComputedStyle
	// because jsdom on node.js will break without it.
	if(window.getComputedStyle){getStyles=function getStyles(elem){return window.getComputedStyle(elem,null);};curCSS=function curCSS(elem,name,_computed){var width,minWidth,maxWidth,computed=_computed||getStyles(elem), // getPropertyValue is only needed for .css('filter') in IE9, see #12537
	ret=computed?computed.getPropertyValue(name)||computed[name]:undefined,style=elem.style;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);} // A tribute to the "awesome hack by Dean Edwards"
	// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
	// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
	// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
	if(rnumnonpx.test(ret)&&rmargin.test(name)){ // Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth; // Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width; // Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret;};}else if(document.documentElement.currentStyle){getStyles=function getStyles(elem){return elem.currentStyle;};curCSS=function curCSS(elem,name,_computed){var left,rs,rsLeft,computed=_computed||getStyles(elem),ret=computed?computed[name]:undefined,style=elem.style; // Avoid setting ret to empty string here
	// so we don't default to auto
	if(ret==null&&style&&style[name]){ret=style[name];} // From the awesome hack by Dean Edwards
	// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	// If we're not dealing with a regular pixel number
	// but a number that has a weird ending, we need to convert it to pixels
	// but not position css attributes, as those are proportional to the parent element instead
	// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
	if(rnumnonpx.test(ret)&&!rposition.test(name)){ // Remember the original values
	left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left; // Put in the new values to get a computed value out
	if(rsLeft){rs.left=elem.currentStyle.left;}style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px"; // Revert the changed values
	style.left=left;if(rsLeft){rs.left=rsLeft;}}return ret===""?"auto":ret;};}function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches? // Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")? // If we already have the right measurement, avoid augmentation
	4: // Otherwise initialize for horizontal or vertical properties
	name==="width"?1:0,val=0;for(;i<4;i+=2){ // both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){ // border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);} // at this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else { // at this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles); // at this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){ // Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box"; // some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){ // Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];} // Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;} // we need the check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]); // Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;} // use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";} // Try to determine the default display value of an element
	function css_defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc); // If the simple way fails, read from inside an iframe
	if(display==="none"||!display){ // Use the already-created iframe if possible
	iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write("<!doctype html><html><body>");doc.close();display=actualDisplay(nodeName,doc);iframe.detach();} // Store the correct default display
	elemdisplay[nodeName]=display;}return display;} // Called ONLY from within css_defaultDisplay
	function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.remove();return display;}jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){ // certain elements can have dimension info if we invisibly show them
	// however, it must have a current display style that would benefit from this
	return elem.offsetWidth===0&&rdisplayswap.test(jQuery.css(elem,"display"))?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function get(elem,computed){ // IE uses filters for opacity
	return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":computed?"1":"";},set:function set(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||""; // IE has trouble with opacity if it does not have layout
	// Force it by setting the zoom level
	style.zoom=1; // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
	// if value === "", then remove inline opacity #12685
	if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){ // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
	// if "filter:" is present at all, clearType is disabled, we want to avoid this
	// style.removeAttribute is IE Only, but so apparently is this code path...
	style.removeAttribute("filter"); // if there is no filter style applied in a css rule or unset inline opacity, we are done
	if(value===""||currentStyle&&!currentStyle.filter){return;}} // otherwise, set new filter values
	style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};} // These hooks cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function get(elem,computed){if(computed){ // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// Work around by temporarily setting element display to inline-block
	return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}};} // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function get(elem,computed){if(computed){computed=curCSS(elem,prop); // if curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}}};});}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){ // Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth<=0&&elem.offsetHeight<=0||!jQuery.support.reliableHiddenOffsets&&(elem.style&&elem.style.display||jQuery.css(elem,"display"))==="none";};jQuery.expr.filters.visible=function(elem){return !jQuery.expr.filters.hidden(elem);};} // These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={}, // assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){ // Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type; // Use .is(":disabled") so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!manipulation_rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return {name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}}); //Serialize an array of form elements or a set of
	//key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,value){ // If value is a function, invoke it and return its value
	value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);}; // Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;} // If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){ // Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else { // If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}} // Return the resulting serialization
	return s.join("&").replace(r20,"+");};function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){ // Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){ // Treat each array item as a scalar.
	add(prefix,v);}else { // Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){ // Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else { // Serialize scalar item.
	add(prefix,obj);}}jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ // Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.hover=function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);};var  // Document location
	ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, // Keep a copy of the old load method
	_load=jQuery.fn.load, /* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={}, /* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"); // #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try{ajaxLocation=location.href;}catch(e){ // Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;} // Segment location into parts
	ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[]; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){ // dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(core_rnotwhite)||[];if(jQuery.isFunction(func)){ // For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){ // Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func); // Otherwise append
	}else {(structure[dataType]=structure[dataType]||[]).push(func);}}}};} // Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return !(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");} // A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off);} // If it's a function
	if(jQuery.isFunction(params)){ // We assume that it's the callback
	callback=params;params=undefined; // Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";} // If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url, // if "type" variable is undefined, then "GET" method will be used
	type:type,dataType:"html",data:params}).done(function(responseText){ // Save response for use in complete callback
	response=arguments;self.html(selector? // If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector): // Otherwise use the full result
	responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}return this;}; // Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){ // shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});jQuery.extend({ // Counter for holding the number of active queries
	active:0, // Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8", /*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"}, // Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{ // Convert anything to text
	"* text":window.String, // Text to html (true = no transformation)
	"text html":true, // Evaluate text as a json expression
	"text json":jQuery.parseJSON, // Parse text as xml
	"text xml":jQuery.parseXML}, // For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}}, // Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings? // Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings): // Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), // Main method
	ajax:function ajax(url,options){ // If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;} // Force options to be an object
	options=options||{};var  // Cross-domain detection vars
	parts, // Loop variable
	i, // URL without anti-cache param
	cacheURL, // Response headers as string
	responseHeadersString, // timeout handle
	timeoutTimer, // To know if global events are to be dispatched
	fireGlobals,transport, // Response headers
	responseHeaders, // Create the final options object
	s=jQuery.ajaxSetup({},options), // Callbacks context
	callbackContext=s.context||s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event, // Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), // Status-dependent callbacks
	_statusCode=s.statusCode||{}, // Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={}, // The jqXHR state
	state=0, // Default abort message
	strAbort="canceled", // Fake xhr
	jqXHR={readyState:0, // Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;}, // Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state===2?responseHeadersString:null;}, // Caches the header
	setRequestHeader:function setRequestHeader(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}return this;}, // Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType=type;}return this;}, // Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(state<2){for(code in map){ // Lazy-add the new callback in a way that preserves old ones
	_statusCode[code]=[_statusCode[code],map[code]];}}else { // Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;}, // Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}}; // Attach deferreds
	deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail; // Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//"); // Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type; // Extract dataTypes list
	s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(core_rnotwhite)||[""]; // A cross-domain request is in order when we have a protocol:host:port mismatch
	if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?80:443))!=(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?80:443))));} // Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);} // Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); // If request was aborted inside a prefilter, stop there
	if(state===2){return jqXHR;} // We can fire global events as of now if asked to
	fireGlobals=s.global; // Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");} // Uppercase the type
	s.type=s.type.toUpperCase(); // Determine if request has content
	s.hasContent=!rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL=s.url; // More options handling for requests with no content
	if(!s.hasContent){ // If data is available, append data to url
	if(s.data){cacheURL=s.url+=(ajax_rquery.test(cacheURL)?"&":"?")+s.data; // #9682: remove data so that it's not used in an eventual retry
	delete s.data;} // Add anti-cache in url if needed
	if(s.cache===false){s.url=rts.test(cacheURL)? // If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_="+ajax_nonce++): // Otherwise add one to the end
	cacheURL+(ajax_rquery.test(cacheURL)?"&":"?")+"_="+ajax_nonce++;}} // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}} // Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} // Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]); // Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);} // Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){ // Abort if not done already and return
	return jqXHR.abort();} // aborting is no longer a cancellation
	strAbort="abort"; // Install callbacks on deferreds
	for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i]);} // Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR); // If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else {jqXHR.readyState=1; // Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} // Timeout
	if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state=1;transport.send(requestHeaders,done);}catch(e){ // Propagate exception as error if not done
	if(state<2){done(-1,e); // Simply rethrow otherwise
	}else {throw e;}}} // Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText; // Called once
	if(state===2){return;} // State is "done" now
	state=2; // Clear timeout if it exists
	if(timeoutTimer){clearTimeout(timeoutTimer);} // Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined; // Cache response headers
	responseHeadersString=headers||""; // Set readyState
	jqXHR.readyState=status>0?4:0; // Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);} // If successful, handle type chaining
	if(status>=200&&status<300||status===304){ // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}} // if no content
	if(status===204){isSuccess=true;statusText="nocontent"; // if not modified
	}else if(status===304){isSuccess=true;statusText="notmodified"; // If we have data, let's convert it
	}else {isSuccess=ajaxConvert(s,response);statusText=isSuccess.state;success=isSuccess.data;error=isSuccess.error;isSuccess=!error;}}else { // We extract error from statusText
	// then normalize statusText and status for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}} // Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+""; // Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else {deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} // Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);} // Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); // Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");}}); /* Handles responses to an ajax request:
	 * - sets all responseXXX fields accordingly
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields; // Fill responseXXX fields
	for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type];}} // Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}} // Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}} // Check to see if we have a response for the expected dataType
	if(dataTypes[0] in responses){finalDataType=dataTypes[0];}else { // Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}} // Or just use first one
	finalDataType=finalDataType||firstDataType;} // If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}} // Chain conversions given the request and the original response
	function ajaxConvert(s,response){var conv2,current,conv,tmp,converters={},i=0, // Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice(),prev=dataTypes[0]; // Apply the dataFilter if provided
	if(s.dataFilter){response=s.dataFilter(response,s.dataType);} // Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}} // Convert to each sequential dataType, tolerating list modification
	for(;current=dataTypes[++i];){ // There's only work to do if current dataType is non-auto
	if(current!=="*"){ // Convert response if prev dataType is non-auto and differs from current
	if(prev!=="*"&&prev!==current){ // Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current]; // If none found, seek a pair
	if(!conv){for(conv2 in converters){ // If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){ // If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){ // Condense equivalence converters
	if(conv===true){conv=converters[conv2]; // Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.splice(i--,0,current);}break;}}}} // Apply converter (if not an equivalence)
	if(conv!==true){ // Unless errors are allowed to bubble, catch and return them
	if(conv&&s["throws"]){response=conv(response);}else {try{response=conv(response);}catch(e){return {state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}} // Update prev for next iteration
	prev=current;}}return {state:"success",data:response};} // Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}}); // Handle cache's special case and global
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";s.global=false;}}); // Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){ // This transport only deals with cross domain requests
	if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return {send:function send(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset;}script.src=s.url; // Attach handlers for all browsers
	script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){ // Handle memory leak in IE
	script.onload=script.onreadystatechange=null; // Remove the script
	if(script.parentNode){script.parentNode.removeChild(script);} // Dereference the script
	script=null; // Callback if not abort
	if(!isAbort){callback(200,"success");}}}; // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
	// Use native DOM manipulation to avoid our domManip AJAX trickery
	head.insertBefore(script,head.firstChild);},abort:function abort(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/; // Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+ajax_nonce++;this[callback]=true;return callback;}}); // Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){ // Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback; // Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(ajax_rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;} // Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];}; // force json dataType
	s.dataTypes[0]="json"; // Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;}; // Clean-up function (fires after converters)
	jqXHR.always(function(){ // Restore preexisting value
	window[callbackName]=overwritten; // Save back as free
	if(s[callbackName]){ // make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback; // save the callback name for future use
	oldCallbacks.push(callbackName);} // Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;}); // Delegate to script
	return "script";}});var xhrCallbacks,xhrSupported,xhrId=0, // #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort=window.ActiveXObject&&function(){ // Abort all pending requests
	var key;for(key in xhrCallbacks){xhrCallbacks[key](undefined,true);}}; // Functions to create xhrs
	function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}} // Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr=window.ActiveXObject? /* Microsoft failed to properly
		 * implement the XMLHttpRequest in IE7 (can't request local files),
		 * so we use the ActiveXObject when it is available
		 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
		 * we need a fallback.
		 */function(){return !this.isLocal&&createStandardXHR()||createActiveXHR();}: // For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR; // Determine support properties
	xhrSupported=jQuery.ajaxSettings.xhr();jQuery.support.cors=!!xhrSupported&&"withCredentials" in xhrSupported;xhrSupported=jQuery.support.ajax=!!xhrSupported; // Create transport if the browser can provide an xhr
	if(xhrSupported){jQuery.ajaxTransport(function(s){ // Cross domain only allowed if supported through XMLHttpRequest
	if(!s.crossDomain||jQuery.support.cors){var _callback;return {send:function send(headers,complete){ // Get a new xhr
	var handle,i,xhr=s.xhr(); // Open the socket
	// Passing null username, generates a login popup on Opera (#2865)
	if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else {xhr.open(s.type,s.url,s.async);} // Apply custom fields if provided
	if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}} // Override mime type if needed
	if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);} // X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";} // Need an extra try/catch for cross domain requests in Firefox 3
	try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(err){} // Do send the request
	// This may raise an exception which is actually
	// handled in jQuery.ajax (so no try/catch here)
	xhr.send(s.hasContent&&s.data||null); // Listener
	_callback=function callback(_,isAbort){var status,responseHeaders,statusText,responses; // Firefox throws exceptions when accessing properties
	// of an xhr when a network error occurred
	// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
	try{ // Was never called and is aborted or complete
	if(_callback&&(isAbort||xhr.readyState===4)){ // Only called once
	_callback=undefined; // Do not keep as active anymore
	if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}} // If it's an abort
	if(isAbort){ // Abort it manually if needed
	if(xhr.readyState!==4){xhr.abort();}}else {responses={};status=xhr.status;responseHeaders=xhr.getAllResponseHeaders(); // When requesting binary data, IE6-9 will throw an exception
	// on any attempt to access responseText (#11426)
	if(typeof xhr.responseText==="string"){responses.text=xhr.responseText;} // Firefox throws an exception when accessing
	// statusText for faulty cross-domain requests
	try{statusText=xhr.statusText;}catch(e){ // We normalize with Webkit giving an empty statusText
	statusText="";} // Filter status for non standard behaviors
	// If the request is local and we have data: assume a success
	// (success with no data won't get notified, that's the best we
	// can do given current implementations)
	if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404; // IE - #1450: sometimes returns 1223 when it should be 204
	}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}} // Call complete if needed
	if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async){ // if we're in sync mode we fire the callback
	_callback();}else if(xhr.readyState===4){ // (IE6 & IE7) if it's in cache and has been
	// retrieved directly we need to fire the callback
	setTimeout(_callback);}else {handle=++xhrId;if(xhrOnUnloadAbort){ // Create the active xhrs callbacks list if needed
	// and attach the unload handler
	if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);} // Add to list of active xhrs callbacks
	xhrCallbacks[handle]=_callback;}xhr.onreadystatechange=_callback;}},abort:function abort(){if(_callback){_callback(undefined,true);}}};}});}var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var end,unit,tween=this.createTween(prop,value),parts=rfxnum.exec(value),target=tween.cur(),start=+target||0,scale=1,maxIterations=20;if(parts){end=+parts[2];unit=parts[3]||(jQuery.cssNumber[prop]?"":"px"); // We need to compute starting value
	if(unit!=="px"&&start){ // Iteratively approximate from a nonzero starting point
	// Prefer the current property, because this process will be trivial if it uses the same units
	// Fallback to end or a simple constant
	start=jQuery.css(tween.elem,prop,true)||end||1;do { // If previous iteration zeroed out, double until we get *something*
	// Use a string for doubling factor so we don't accidentally see scale as unchanged below
	scale=scale||".5"; // Adjust and apply
	start=start/scale;jQuery.style(tween.elem,prop,start+unit); // Update scale, tolerating zero or NaN from tween.cur()
	// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
	}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}tween.unit=unit;tween.start=start; // If a +=/-= token was provided, we're doing a relative animation
	tween.end=parts[1]?start+(parts[1]+1)*end:end;}return tween;}]}; // Animations created synchronously will run synchronously
	function createFxNow(){setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}function createTweens(animation,props){jQuery.each(props,function(prop,value){var collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(collection[index].call(animation,prop,value)){ // we're done with this property
	return;}}});}function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){ // don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime), // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else {deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0, // if we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);} // resolve when we played the last frame
	// otherwise, reject
	if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else {deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}createTweens(animation,props);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})); // attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}function propFilter(props,specialEasing){var value,name,index,easing,hooks; // camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand" in hooks){value=hooks.expand(value);delete props[name]; // not quite $.extend, this wont overwrite keys already present.
	// also - reusing 'index' from above because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else {specialEasing[name]=easing;}}}jQuery.Animation=jQuery.extend(Animation,{tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else {props=props.split(" ");}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function prefilter(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else {animationPrefilters.push(callback);}}});function defaultPrefilter(elem,props,opts){ /*jshint validthis:true */var prop,index,length,value,dataShow,toggle,tween,hooks,oldfire,anim=this,style=elem.style,orig={},handled=[],hidden=elem.nodeType&&isHidden(elem); // handle queue: false promises
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){ // doing this makes sure that the complete handler will be called
	// before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});} // height/width overflow pass
	if(elem.nodeType===1&&("height" in props||"width" in props)){ // Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE does not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow=[style.overflow,style.overflowX,style.overflowY]; // Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){ // inline-level elements accept inline-block;
	// block-level elements need to be inline with layout
	if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else {style.zoom=1;}}}if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}} // show/hide pass
	for(index in props){value=props[index];if(rfxtypes.exec(value)){delete props[index];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){continue;}handled.push(index);}}length=handled.length;if(length){dataShow=jQuery._data(elem,"fxshow")||jQuery._data(elem,"fxshow",{});if("hidden" in dataShow){hidden=dataShow.hidden;} // store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden=!hidden;}if(hidden){jQuery(elem).show();}else {anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(index=0;index<length;index++){prop=handled[index];tween=anim.createTween(prop,hidden?dataShow[prop]:0);orig[prop]=dataShow[prop]||jQuery.style(elem,prop);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}}function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else {this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else {Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];} // passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails
	// so, simple values such as "10px" are parsed to Float.
	// complex values such as "rotate(1rad)" are returned as is.
	result=jQuery.css(tween.elem,tween.prop,""); // Empty strings, null, undefined and "auto" are converted to 0.
	return !result||result==="auto"?0:result;},set:function set(tween){ // use step hook for back compat - use cssHook if its there - use .style if its
	// available and use plain properties where available
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else {tween.elem[tween.prop]=tween.now;}}}}; // Remove in 2.0 - this supports IE8's panic based approach
	// to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){ // show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show() // animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){ // Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall);doAnimation.finish=function(){anim.stop(true);}; // Empty animations, or finishing resolves immediately
	if(empty||jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else {for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}} // start the next in the queue if the last step wasn't forced
	// timers currently will call their complete callbacks, which will dequeue
	// but only if they were gotoEnd
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0; // enable finishing flag on private data
	data.finish=true; // empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.cur&&hooks.cur.finish){hooks.cur.finish.call(this);} // look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}} // look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}} // turn off finishing flag
	delete data.finish;});}}); // Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,attrs={height:type},i=0; // if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;} // Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default; // normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";} // Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i]; // Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)){jQuery.fx.start();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200, // Default speed
	_default:400}; // Back Compat <1.8 extension point
	jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}docElem=doc.documentElement; // Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;} // If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if(_typeof(elem.getBoundingClientRect)!==core_strundefined){box=elem.getBoundingClientRect();}win=getWindow(doc);return {top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)};};jQuery.offset={setOffset:function setOffset(elem,options,i){var position=jQuery.css(elem,"position"); // set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft; // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else {curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using" in options){options.using.call(elem,props);}else {curElem.css(props);}}};jQuery.fn.extend({position:function position(){if(!this[0]){return;}var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0]; // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
	if(jQuery.css(elem,"position")==="fixed"){ // we assume that getBoundingClientRect is available when computed position is fixed
	offset=elem.getBoundingClientRect();}else { // Get *real* offsetParent
	offsetParent=this.offsetParent(); // Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();} // Add offsetParent borders
	parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);} // Subtract parent offsets and element margins
	// note: when an element has margin: auto the offsetLeft and marginLeft
	// are the same in Safari causing offset.left to incorrectly be 0
	return {top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent||document.documentElement;while(offsetParent&&!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||document.documentElement;});}}); // Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?prop in win?win[prop]:win.document.documentElement[method]:elem[method];}if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else {elem[method]=val;}},method,val,arguments.length,null);};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;} // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){ // margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){ // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client"+name];} // Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
	// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined? // Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra): // Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});}); // Limit scope pollution from any deprecated API
	// (function() {
	// })();
	// Expose jQuery to the global object
	__webpack_provided_window_dot_jQuery=__webpack_provided_window_dot_$=jQuery; // Expose jQuery as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase jquery is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if("function"==="function"&&__webpack_require__(195)&&__webpack_require__(195).jQuery){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}})(window);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "jquery-1.9.1.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(194), __webpack_require__(194)))

/***/ },

/***/ 195:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * jQuery Form Plugin
	 * version: 3.50.0-2014.02.05
	 * Requires jQuery v1.5 or later
	 * Copyright (c) 2013 M. Alsup
	 * Examples and documentation at: http://malsup.com/jquery/form/
	 * Project repository: https://github.com/malsup/form
	 * Dual licensed under the MIT and GPL licenses.
	 * https://github.com/malsup/form#copyright-and-license
	 */
	/*global ActiveXObject */

	// AMD support
	(function (factory) {
	    "use strict";

	    if (true) {
	        // using AMD; register as anon module
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(194)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // no AMD; invoke directly
	        factory(typeof jQuery != 'undefined' ? jQuery : window.Zepto);
	    }
	})(function ($) {
	    "use strict";

	    /*
	        Usage Note:
	        -----------
	        Do not use both ajaxSubmit and ajaxForm on the same form.  These
	        functions are mutually exclusive.  Use ajaxSubmit if you want
	        to bind your own submit handler to the form.  For example,
	    
	        $(document).ready(function() {
	            $('#myForm').on('submit', function(e) {
	                e.preventDefault(); // <-- important
	                $(this).ajaxSubmit({
	                    target: '#output'
	                });
	            });
	        });
	    
	        Use ajaxForm when you want the plugin to manage all the event binding
	        for you.  For example,
	    
	        $(document).ready(function() {
	            $('#myForm').ajaxForm({
	                target: '#output'
	            });
	        });
	    
	        You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
	        form does not have to exist when you invoke ajaxForm:
	    
	        $('#myForm').ajaxForm({
	            delegation: true,
	            target: '#output'
	        });
	    
	        When using ajaxForm, the ajaxSubmit function will be invoked for you
	        at the appropriate time.
	    */

	    /**
	     * Feature detection
	     */

	    var feature = {};
	    feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
	    feature.formdata = window.FormData !== undefined;

	    var hasProp = !!$.fn.prop;

	    // attr2 uses prop when it can but checks the return type for
	    // an expected string.  this accounts for the case where a form
	    // contains inputs with names like "action" or "method"; in those
	    // cases "prop" returns the element
	    $.fn.attr2 = function () {
	        if (!hasProp) {
	            return this.attr.apply(this, arguments);
	        }
	        var val = this.prop.apply(this, arguments);
	        if (val && val.jquery || typeof val === 'string') {
	            return val;
	        }
	        return this.attr.apply(this, arguments);
	    };

	    /**
	     * ajaxSubmit() provides a mechanism for immediately submitting
	     * an HTML form using AJAX.
	     */
	    $.fn.ajaxSubmit = function (options) {
	        /*jshint scripturl:true */

	        // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	        if (!this.length) {
	            log('ajaxSubmit: skipping submit process - no element selected');
	            return this;
	        }

	        var method,
	            action,
	            url,
	            $form = this;

	        if (typeof options == 'function') {
	            options = { success: options };
	        } else if (options === undefined) {
	            options = {};
	        }

	        method = options.type || this.attr2('method');
	        action = options.url || this.attr2('action');

	        url = typeof action === 'string' ? $.trim(action) : '';
	        url = url || window.location.href || '';
	        if (url) {
	            // clean url (don't include hash vaue)
	            url = (url.match(/^([^#]+)/) || [])[1];
	        }

	        options = $.extend(true, {
	            url: url,
	            success: $.ajaxSettings.success,
	            type: method || $.ajaxSettings.type,
	            iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	        }, options);

	        // hook for manipulating the form data before it is extracted;
	        // convenient for use with rich editors like tinyMCE or FCKEditor
	        var veto = {};
	        this.trigger('form-pre-serialize', [this, options, veto]);
	        if (veto.veto) {
	            log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
	            return this;
	        }

	        // provide opportunity to alter form data before it is serialized
	        if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
	            log('ajaxSubmit: submit aborted via beforeSerialize callback');
	            return this;
	        }

	        var traditional = options.traditional;
	        if (traditional === undefined) {
	            traditional = $.ajaxSettings.traditional;
	        }

	        var elements = [];
	        var qx,
	            a = this.formToArray(options.semantic, elements);
	        if (options.data) {
	            options.extraData = options.data;
	            qx = $.param(options.data, traditional);
	        }

	        // give pre-submit callback an opportunity to abort the submit
	        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
	            log('ajaxSubmit: submit aborted via beforeSubmit callback');
	            return this;
	        }

	        // fire vetoable 'validate' event
	        this.trigger('form-submit-validate', [a, this, options, veto]);
	        if (veto.veto) {
	            log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
	            return this;
	        }

	        var q = $.param(a, traditional);
	        if (qx) {
	            q = q ? q + '&' + qx : qx;
	        }
	        if (options.type.toUpperCase() == 'GET') {
	            options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
	            options.data = null; // data is null for 'get'
	        } else {
	                options.data = q; // data is the query string for 'post'
	            }

	        var callbacks = [];
	        if (options.resetForm) {
	            callbacks.push(function () {
	                $form.resetForm();
	            });
	        }
	        if (options.clearForm) {
	            callbacks.push(function () {
	                $form.clearForm(options.includeHidden);
	            });
	        }

	        // perform a load on the target only if dataType is not provided
	        if (!options.dataType && options.target) {
	            var oldSuccess = options.success || function () {};
	            callbacks.push(function (data) {
	                var fn = options.replaceTarget ? 'replaceWith' : 'html';
	                $(options.target)[fn](data).each(oldSuccess, arguments);
	            });
	        } else if (options.success) {
	            callbacks.push(options.success);
	        }

	        options.success = function (data, status, xhr) {
	            // jQuery 1.4+ passes xhr as 3rd arg
	            var context = options.context || this; // jQuery 1.4+ supports scope context
	            for (var i = 0, max = callbacks.length; i < max; i++) {
	                callbacks[i].apply(context, [data, status, xhr || $form, $form]);
	            }
	        };

	        if (options.error) {
	            var oldError = options.error;
	            options.error = function (xhr, status, error) {
	                var context = options.context || this;
	                oldError.apply(context, [xhr, status, error, $form]);
	            };
	        }

	        if (options.complete) {
	            var oldComplete = options.complete;
	            options.complete = function (xhr, status) {
	                var context = options.context || this;
	                oldComplete.apply(context, [xhr, status, $form]);
	            };
	        }

	        // are there files to upload?

	        // [value] (issue #113), also see comment:
	        // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
	        var fileInputs = $('input[type=file]:enabled', this).filter(function () {
	            return $(this).val() !== '';
	        });

	        var hasFileInputs = fileInputs.length > 0;
	        var mp = 'multipart/form-data';
	        var multipart = $form.attr('enctype') == mp || $form.attr('encoding') == mp;

	        var fileAPI = feature.fileapi && feature.formdata;
	        log("fileAPI :" + fileAPI);
	        var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

	        var jqxhr;

	        // options.iframe allows user to force iframe mode
	        // 06-NOV-09: now defaulting to iframe mode if file input is detected
	        if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
	            // hack to fix Safari hang (thanks to Tim Molendijk for this)
	            // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	            if (options.closeKeepAlive) {
	                $.get(options.closeKeepAlive, function () {
	                    jqxhr = fileUploadIframe(a);
	                });
	            } else {
	                jqxhr = fileUploadIframe(a);
	            }
	        } else if ((hasFileInputs || multipart) && fileAPI) {
	            jqxhr = fileUploadXhr(a);
	        } else {
	            jqxhr = $.ajax(options);
	        }

	        $form.removeData('jqxhr').data('jqxhr', jqxhr);

	        // clear element array
	        for (var k = 0; k < elements.length; k++) {
	            elements[k] = null;
	        }

	        // fire 'notify' event
	        this.trigger('form-submit-notify', [this, options]);
	        return this;

	        // utility fn for deep serialization
	        function deepSerialize(extraData) {
	            var serialized = $.param(extraData, options.traditional).split('&');
	            var len = serialized.length;
	            var result = [];
	            var i, part;
	            for (i = 0; i < len; i++) {
	                // #252; undo param space replacement
	                serialized[i] = serialized[i].replace(/\+/g, ' ');
	                part = serialized[i].split('=');
	                // #278; use array instead of object storage, favoring array serializations
	                result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
	            }
	            return result;
	        }

	        // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
	        function fileUploadXhr(a) {
	            var formdata = new FormData();

	            for (var i = 0; i < a.length; i++) {
	                formdata.append(a[i].name, a[i].value);
	            }

	            if (options.extraData) {
	                var serializedData = deepSerialize(options.extraData);
	                for (i = 0; i < serializedData.length; i++) {
	                    if (serializedData[i]) {
	                        formdata.append(serializedData[i][0], serializedData[i][1]);
	                    }
	                }
	            }

	            options.data = null;

	            var s = $.extend(true, {}, $.ajaxSettings, options, {
	                contentType: false,
	                processData: false,
	                cache: false,
	                type: method || 'POST'
	            });

	            if (options.uploadProgress) {
	                // workaround because jqXHR does not expose upload property
	                s.xhr = function () {
	                    var xhr = $.ajaxSettings.xhr();
	                    if (xhr.upload) {
	                        xhr.upload.addEventListener('progress', function (event) {
	                            var percent = 0;
	                            var position = event.loaded || event.position; /*event.position is deprecated*/
	                            var total = event.total;
	                            if (event.lengthComputable) {
	                                percent = Math.ceil(position / total * 100);
	                            }
	                            options.uploadProgress(event, position, total, percent);
	                        }, false);
	                    }
	                    return xhr;
	                };
	            }

	            s.data = null;
	            var beforeSend = s.beforeSend;
	            s.beforeSend = function (xhr, o) {
	                //Send FormData() provided by user
	                if (options.formData) {
	                    o.data = options.formData;
	                } else {
	                    o.data = formdata;
	                }
	                if (beforeSend) {
	                    beforeSend.call(this, xhr, o);
	                }
	            };
	            return $.ajax(s);
	        }

	        // private function for handling file uploads (hat tip to YAHOO!)
	        function fileUploadIframe(a) {
	            var form = $form[0],
	                el,
	                i,
	                s,
	                g,
	                id,
	                $io,
	                io,
	                xhr,
	                sub,
	                n,
	                timedOut,
	                timeoutHandle;
	            var deferred = $.Deferred();

	            // #341
	            deferred.abort = function (status) {
	                xhr.abort(status);
	            };

	            if (a) {
	                // ensure that every serialized input is still enabled
	                for (i = 0; i < elements.length; i++) {
	                    el = $(elements[i]);
	                    if (hasProp) {
	                        el.prop('disabled', false);
	                    } else {
	                        el.removeAttr('disabled');
	                    }
	                }
	            }

	            s = $.extend(true, {}, $.ajaxSettings, options);
	            s.context = s.context || s;
	            id = 'jqFormIO' + new Date().getTime();
	            if (s.iframeTarget) {
	                $io = $(s.iframeTarget);
	                n = $io.attr2('name');
	                if (!n) {
	                    $io.attr2('name', id);
	                } else {
	                    id = n;
	                }
	            } else {
	                $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />');
	                $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
	            }
	            io = $io[0];

	            xhr = { // mock object
	                aborted: 0,
	                responseText: null,
	                responseXML: null,
	                status: 0,
	                statusText: 'n/a',
	                getAllResponseHeaders: function getAllResponseHeaders() {},
	                getResponseHeader: function getResponseHeader() {},
	                setRequestHeader: function setRequestHeader() {},
	                abort: function abort(status) {
	                    var e = status === 'timeout' ? 'timeout' : 'aborted';
	                    log('aborting upload... ' + e);
	                    this.aborted = 1;

	                    try {
	                        // #214, #257
	                        if (io.contentWindow.document.execCommand) {
	                            io.contentWindow.document.execCommand('Stop');
	                        }
	                    } catch (ignore) {}

	                    $io.attr('src', s.iframeSrc); // abort op in progress
	                    xhr.error = e;
	                    if (s.error) {
	                        s.error.call(s.context, xhr, e, status);
	                    }
	                    if (g) {
	                        $.event.trigger("ajaxError", [xhr, s, e]);
	                    }
	                    if (s.complete) {
	                        s.complete.call(s.context, xhr, e);
	                    }
	                }
	            };

	            g = s.global;
	            // trigger ajax global events so that activity/block indicators work like normal
	            if (g && 0 === $.active++) {
	                $.event.trigger("ajaxStart");
	            }
	            if (g) {
	                $.event.trigger("ajaxSend", [xhr, s]);
	            }

	            if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
	                if (s.global) {
	                    $.active--;
	                }
	                deferred.reject();
	                return deferred;
	            }
	            if (xhr.aborted) {
	                deferred.reject();
	                return deferred;
	            }

	            // add submitting element to data if we know it
	            sub = form.clk;
	            if (sub) {
	                n = sub.name;
	                if (n && !sub.disabled) {
	                    s.extraData = s.extraData || {};
	                    s.extraData[n] = sub.value;
	                    if (sub.type == "image") {
	                        s.extraData[n + '.x'] = form.clk_x;
	                        s.extraData[n + '.y'] = form.clk_y;
	                    }
	                }
	            }

	            var CLIENT_TIMEOUT_ABORT = 1;
	            var SERVER_ABORT = 2;

	            function getDoc(frame) {
	                /* it looks like contentWindow or contentDocument do not
	                 * carry the protocol property in ie8, when running under ssl
	                 * frame.document is the only valid response document, since
	                 * the protocol is know but not on the other two objects. strange?
	                 * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
	                 */

	                var doc = null;

	                // IE8 cascading access check
	                try {
	                    if (frame.contentWindow) {
	                        doc = frame.contentWindow.document;
	                    }
	                } catch (err) {
	                    // IE8 access denied under ssl & missing protocol
	                    log('cannot get iframe.contentWindow document: ' + err);
	                }

	                if (doc) {
	                    // successful getting content
	                    return doc;
	                }

	                try {
	                    // simply checking may throw in ie8 under ssl or mismatched protocol
	                    doc = frame.contentDocument ? frame.contentDocument : frame.document;
	                } catch (err) {
	                    // last attempt
	                    log('cannot get iframe.contentDocument: ' + err);
	                    doc = frame.document;
	                }
	                return doc;
	            }

	            // Rails CSRF hack (thanks to Yvan Barthelemy)
	            var csrf_token = $('meta[name=csrf-token]').attr('content');
	            var csrf_param = $('meta[name=csrf-param]').attr('content');
	            if (csrf_param && csrf_token) {
	                s.extraData = s.extraData || {};
	                s.extraData[csrf_param] = csrf_token;
	            }

	            // take a breath so that pending repaints get some cpu time before the upload starts
	            function doSubmit() {
	                // make sure form attrs are set
	                var t = $form.attr2('target'),
	                    a = $form.attr2('action'),
	                    mp = 'multipart/form-data',
	                    et = $form.attr('enctype') || $form.attr('encoding') || mp;

	                // update form attrs in IE friendly way
	                form.setAttribute('target', id);
	                if (!method || /post/i.test(method)) {
	                    form.setAttribute('method', 'POST');
	                }
	                if (a != s.url) {
	                    form.setAttribute('action', s.url);
	                }

	                // ie borks in some cases when setting encoding
	                if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
	                    $form.attr({
	                        encoding: 'multipart/form-data',
	                        enctype: 'multipart/form-data'
	                    });
	                }

	                // support timout
	                if (s.timeout) {
	                    timeoutHandle = setTimeout(function () {
	                        timedOut = true;cb(CLIENT_TIMEOUT_ABORT);
	                    }, s.timeout);
	                }

	                // look for server aborts
	                function checkState() {
	                    try {
	                        var state = getDoc(io).readyState;
	                        log('state = ' + state);
	                        if (state && state.toLowerCase() == 'uninitialized') {
	                            setTimeout(checkState, 50);
	                        }
	                    } catch (e) {
	                        log('Server abort: ', e, ' (', e.name, ')');
	                        cb(SERVER_ABORT);
	                        if (timeoutHandle) {
	                            clearTimeout(timeoutHandle);
	                        }
	                        timeoutHandle = undefined;
	                    }
	                }

	                // add "extra" data to form if provided in options
	                var extraInputs = [];
	                try {
	                    if (s.extraData) {
	                        for (var n in s.extraData) {
	                            if (s.extraData.hasOwnProperty(n)) {
	                                // if using the $.param format that allows for multiple values with the same name
	                                if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
	                                    extraInputs.push($('<input type="hidden" name="' + s.extraData[n].name + '">').val(s.extraData[n].value).appendTo(form)[0]);
	                                } else {
	                                    extraInputs.push($('<input type="hidden" name="' + n + '">').val(s.extraData[n]).appendTo(form)[0]);
	                                }
	                            }
	                        }
	                    }

	                    if (!s.iframeTarget) {
	                        // add iframe to doc and submit the form
	                        $io.appendTo('body');
	                    }
	                    if (io.attachEvent) {
	                        io.attachEvent('onload', cb);
	                    } else {
	                        io.addEventListener('load', cb, false);
	                    }
	                    setTimeout(checkState, 15);

	                    try {
	                        form.submit();
	                    } catch (err) {
	                        // just in case form has element with name/id of 'submit'
	                        var submitFn = document.createElement('form').submit;
	                        submitFn.apply(form);
	                    }
	                } finally {
	                    // reset attrs and remove "extra" input elements
	                    form.setAttribute('action', a);
	                    form.setAttribute('enctype', et); // #380
	                    if (t) {
	                        form.setAttribute('target', t);
	                    } else {
	                        $form.removeAttr('target');
	                    }
	                    $(extraInputs).remove();
	                }
	            }

	            if (s.forceSync) {
	                doSubmit();
	            } else {
	                setTimeout(doSubmit, 10); // this lets dom updates render
	            }

	            var data,
	                doc,
	                domCheckCount = 50,
	                callbackProcessed;

	            function cb(e) {
	                if (xhr.aborted || callbackProcessed) {
	                    return;
	                }

	                doc = getDoc(io);
	                if (!doc) {
	                    log('cannot access response document');
	                    e = SERVER_ABORT;
	                }
	                if (e === CLIENT_TIMEOUT_ABORT && xhr) {
	                    xhr.abort('timeout');
	                    deferred.reject(xhr, 'timeout');
	                    return;
	                } else if (e == SERVER_ABORT && xhr) {
	                    xhr.abort('server abort');
	                    deferred.reject(xhr, 'error', 'server abort');
	                    return;
	                }

	                if (!doc || doc.location.href == s.iframeSrc) {
	                    // response not received yet
	                    if (!timedOut) {
	                        return;
	                    }
	                }
	                if (io.detachEvent) {
	                    io.detachEvent('onload', cb);
	                } else {
	                    io.removeEventListener('load', cb, false);
	                }

	                var status = 'success',
	                    errMsg;
	                try {
	                    if (timedOut) {
	                        throw 'timeout';
	                    }

	                    var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
	                    log('isXml=' + isXml);
	                    if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
	                        if (--domCheckCount) {
	                            // in some browsers (Opera) the iframe DOM is not always traversable when
	                            // the onload callback fires, so we loop a bit to accommodate
	                            log('requeing onLoad callback, DOM not available');
	                            setTimeout(cb, 250);
	                            return;
	                        }
	                        // let this fall through because server response could be an empty document
	                        //log('Could not access iframe DOM after mutiple tries.');
	                        //throw 'DOMException: not available';
	                    }

	                    //log('response detected');
	                    var docRoot = doc.body ? doc.body : doc.documentElement;
	                    xhr.responseText = docRoot ? docRoot.innerHTML : null;
	                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
	                    if (isXml) {
	                        s.dataType = 'xml';
	                    }
	                    xhr.getResponseHeader = function (header) {
	                        var headers = { 'content-type': s.dataType };
	                        return headers[header.toLowerCase()];
	                    };
	                    // support for XHR 'status' & 'statusText' emulation :
	                    if (docRoot) {
	                        xhr.status = Number(docRoot.getAttribute('status')) || xhr.status;
	                        xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
	                    }

	                    var dt = (s.dataType || '').toLowerCase();
	                    var scr = /(json|script|text)/.test(dt);
	                    if (scr || s.textarea) {
	                        // see if user embedded response in textarea
	                        var ta = doc.getElementsByTagName('textarea')[0];
	                        if (ta) {
	                            xhr.responseText = ta.value;
	                            // support for XHR 'status' & 'statusText' emulation :
	                            xhr.status = Number(ta.getAttribute('status')) || xhr.status;
	                            xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
	                        } else if (scr) {
	                            // account for browsers injecting pre around json response
	                            var pre = doc.getElementsByTagName('pre')[0];
	                            var b = doc.getElementsByTagName('body')[0];
	                            if (pre) {
	                                xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
	                            } else if (b) {
	                                xhr.responseText = b.textContent ? b.textContent : b.innerText;
	                            }
	                        }
	                    } else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
	                        xhr.responseXML = toXml(xhr.responseText);
	                    }

	                    try {
	                        data = httpData(xhr, dt, s);
	                    } catch (err) {
	                        status = 'parsererror';
	                        xhr.error = errMsg = err || status;
	                    }
	                } catch (err) {
	                    log('error caught: ', err);
	                    status = 'error';
	                    xhr.error = errMsg = err || status;
	                }

	                if (xhr.aborted) {
	                    log('upload aborted');
	                    status = null;
	                }

	                if (xhr.status) {
	                    // we've set xhr.status
	                    status = xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 ? 'success' : 'error';
	                }

	                // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
	                if (status === 'success') {
	                    if (s.success) {
	                        s.success.call(s.context, data, 'success', xhr);
	                    }
	                    deferred.resolve(xhr.responseText, 'success', xhr);
	                    if (g) {
	                        $.event.trigger("ajaxSuccess", [xhr, s]);
	                    }
	                } else if (status) {
	                    if (errMsg === undefined) {
	                        errMsg = xhr.statusText;
	                    }
	                    if (s.error) {
	                        s.error.call(s.context, xhr, status, errMsg);
	                    }
	                    deferred.reject(xhr, 'error', errMsg);
	                    if (g) {
	                        $.event.trigger("ajaxError", [xhr, s, errMsg]);
	                    }
	                }

	                if (g) {
	                    $.event.trigger("ajaxComplete", [xhr, s]);
	                }

	                if (g && ! --$.active) {
	                    $.event.trigger("ajaxStop");
	                }

	                if (s.complete) {
	                    s.complete.call(s.context, xhr, status);
	                }

	                callbackProcessed = true;
	                if (s.timeout) {
	                    clearTimeout(timeoutHandle);
	                }

	                // clean up
	                setTimeout(function () {
	                    if (!s.iframeTarget) {
	                        $io.remove();
	                    } else {
	                        //adding else to clean up existing iframe response.
	                        $io.attr('src', s.iframeSrc);
	                    }
	                    xhr.responseXML = null;
	                }, 100);
	            }

	            var toXml = $.parseXML || function (s, doc) {
	                // use parseXML if available (jQuery 1.5+)
	                if (window.ActiveXObject) {
	                    doc = new ActiveXObject('Microsoft.XMLDOM');
	                    doc.async = 'false';
	                    doc.loadXML(s);
	                } else {
	                    doc = new DOMParser().parseFromString(s, 'text/xml');
	                }
	                return doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror' ? doc : null;
	            };
	            var parseJSON = $.parseJSON || function (s) {
	                /*jslint evil:true */
	                return window['eval']('(' + s + ')');
	            };

	            var httpData = function httpData(xhr, type, s) {
	                // mostly lifted from jq1.4.4

	                var ct = xhr.getResponseHeader('content-type') || '',
	                    xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
	                    data = xml ? xhr.responseXML : xhr.responseText;

	                if (xml && data.documentElement.nodeName === 'parsererror') {
	                    if ($.error) {
	                        $.error('parsererror');
	                    }
	                }
	                if (s && s.dataFilter) {
	                    data = s.dataFilter(data, type);
	                }
	                if (typeof data === 'string') {
	                    if (type === 'json' || !type && ct.indexOf('json') >= 0) {
	                        data = parseJSON(data);
	                    } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
	                        $.globalEval(data);
	                    }
	                }
	                return data;
	            };

	            return deferred;
	        }
	    };

	    /**
	     * ajaxForm() provides a mechanism for fully automating form submission.
	     *
	     * The advantages of using this method instead of ajaxSubmit() are:
	     *
	     * 1: This method will include coordinates for <input type="image" /> elements (if the element
	     *    is used to submit the form).
	     * 2. This method will include the submit element's name/value data (for the element that was
	     *    used to submit the form).
	     * 3. This method binds the submit() method to the form for you.
	     *
	     * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
	     * passes the options argument along after properly binding events for submit elements and
	     * the form itself.
	     */
	    $.fn.ajaxForm = function (options) {
	        options = options || {};
	        options.delegation = options.delegation && $.isFunction($.fn.on);

	        // in jQuery 1.3+ we can fix mistakes with the ready state
	        if (!options.delegation && this.length === 0) {
	            var o = { s: this.selector, c: this.context };
	            if (!$.isReady && o.s) {
	                log('DOM not ready, queuing ajaxForm');
	                $(function () {
	                    $(o.s, o.c).ajaxForm(options);
	                });
	                return this;
	            }
	            // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
	            log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
	            return this;
	        }

	        if (options.delegation) {
	            $(document).off('submit.form-plugin', this.selector, doAjaxSubmit).off('click.form-plugin', this.selector, captureSubmittingElement).on('submit.form-plugin', this.selector, options, doAjaxSubmit).on('click.form-plugin', this.selector, options, captureSubmittingElement);
	            return this;
	        }

	        return this.ajaxFormUnbind().bind('submit.form-plugin', options, doAjaxSubmit).bind('click.form-plugin', options, captureSubmittingElement);
	    };

	    // private event handlers
	    function doAjaxSubmit(e) {
	        /*jshint validthis:true */
	        var options = e.data;
	        if (!e.isDefaultPrevented()) {
	            // if event has been canceled, don't proceed
	            e.preventDefault();
	            $(e.target).ajaxSubmit(options); // #365
	        }
	    }

	    function captureSubmittingElement(e) {
	        /*jshint validthis:true */
	        var target = e.target;
	        var $el = $(target);
	        if (!$el.is("[type=submit],[type=image]")) {
	            // is this a child element of the submit el?  (ex: a span within a button)
	            var t = $el.closest('[type=submit]');
	            if (t.length === 0) {
	                return;
	            }
	            target = t[0];
	        }
	        var form = this;
	        form.clk = target;
	        if (target.type == 'image') {
	            if (e.offsetX !== undefined) {
	                form.clk_x = e.offsetX;
	                form.clk_y = e.offsetY;
	            } else if (typeof $.fn.offset == 'function') {
	                var offset = $el.offset();
	                form.clk_x = e.pageX - offset.left;
	                form.clk_y = e.pageY - offset.top;
	            } else {
	                form.clk_x = e.pageX - target.offsetLeft;
	                form.clk_y = e.pageY - target.offsetTop;
	            }
	        }
	        // clear form vars
	        setTimeout(function () {
	            form.clk = form.clk_x = form.clk_y = null;
	        }, 100);
	    }

	    // ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
	    $.fn.ajaxFormUnbind = function () {
	        return this.unbind('submit.form-plugin click.form-plugin');
	    };

	    /**
	     * formToArray() gathers form element data into an array of objects that can
	     * be passed to any of the following ajax functions: $.get, $.post, or load.
	     * Each object in the array has both a 'name' and 'value' property.  An example of
	     * an array for a simple login form might be:
	     *
	     * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
	     *
	     * It is this array that is passed to pre-submit callback functions provided to the
	     * ajaxSubmit() and ajaxForm() methods.
	     */
	    $.fn.formToArray = function (semantic, elements) {
	        var a = [];
	        if (this.length === 0) {
	            return a;
	        }

	        var form = this[0];
	        var formId = this.attr('id');
	        var els = semantic ? form.getElementsByTagName('*') : form.elements;
	        var els2;

	        if (els && !/MSIE [678]/.test(navigator.userAgent)) {
	            // #390
	            els = $(els).get(); // convert to standard array
	        }

	        // #386; account for inputs outside the form which use the 'form' attribute
	        if (formId) {
	            els2 = $(':input[form=' + formId + ']').get();
	            if (els2.length) {
	                els = (els || []).concat(els2);
	            }
	        }

	        if (!els || !els.length) {
	            return a;
	        }

	        var i, j, n, v, el, max, jmax;
	        for (i = 0, max = els.length; i < max; i++) {
	            el = els[i];
	            n = el.name;
	            if (!n || el.disabled) {
	                continue;
	            }

	            if (semantic && form.clk && el.type == "image") {
	                // handle image inputs on the fly when semantic == true
	                if (form.clk == el) {
	                    a.push({ name: n, value: $(el).val(), type: el.type });
	                    a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y });
	                }
	                continue;
	            }

	            v = $.fieldValue(el, true);
	            if (v && v.constructor == Array) {
	                if (elements) {
	                    elements.push(el);
	                }
	                for (j = 0, jmax = v.length; j < jmax; j++) {
	                    a.push({ name: n, value: v[j] });
	                }
	            } else if (feature.fileapi && el.type == 'file') {
	                if (elements) {
	                    elements.push(el);
	                }
	                var files = el.files;
	                if (files.length) {
	                    for (j = 0; j < files.length; j++) {
	                        a.push({ name: n, value: files[j], type: el.type });
	                    }
	                } else {
	                    // #180
	                    a.push({ name: n, value: '', type: el.type });
	                }
	            } else if (v !== null && typeof v != 'undefined') {
	                if (elements) {
	                    elements.push(el);
	                }
	                a.push({ name: n, value: v, type: el.type, required: el.required });
	            }
	        }

	        if (!semantic && form.clk) {
	            // input type=='image' are not found in elements array! handle it here
	            var $input = $(form.clk),
	                input = $input[0];
	            n = input.name;
	            if (n && !input.disabled && input.type == 'image') {
	                a.push({ name: n, value: $input.val() });
	                a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y });
	            }
	        }
	        return a;
	    };

	    /**
	     * Serializes form data into a 'submittable' string. This method will return a string
	     * in the format: name1=value1&amp;name2=value2
	     */
	    $.fn.formSerialize = function (semantic) {
	        //hand off to jQuery.param for proper encoding
	        return $.param(this.formToArray(semantic));
	    };

	    /**
	     * Serializes all field elements in the jQuery object into a query string.
	     * This method will return a string in the format: name1=value1&amp;name2=value2
	     */
	    $.fn.fieldSerialize = function (successful) {
	        var a = [];
	        this.each(function () {
	            var n = this.name;
	            if (!n) {
	                return;
	            }
	            var v = $.fieldValue(this, successful);
	            if (v && v.constructor == Array) {
	                for (var i = 0, max = v.length; i < max; i++) {
	                    a.push({ name: n, value: v[i] });
	                }
	            } else if (v !== null && typeof v != 'undefined') {
	                a.push({ name: this.name, value: v });
	            }
	        });
	        //hand off to jQuery.param for proper encoding
	        return $.param(a);
	    };

	    /**
	     * Returns the value(s) of the element in the matched set.  For example, consider the following form:
	     *
	     *  <form><fieldset>
	     *      <input name="A" type="text" />
	     *      <input name="A" type="text" />
	     *      <input name="B" type="checkbox" value="B1" />
	     *      <input name="B" type="checkbox" value="B2"/>
	     *      <input name="C" type="radio" value="C1" />
	     *      <input name="C" type="radio" value="C2" />
	     *  </fieldset></form>
	     *
	     *  var v = $('input[type=text]').fieldValue();
	     *  // if no values are entered into the text inputs
	     *  v == ['','']
	     *  // if values entered into the text inputs are 'foo' and 'bar'
	     *  v == ['foo','bar']
	     *
	     *  var v = $('input[type=checkbox]').fieldValue();
	     *  // if neither checkbox is checked
	     *  v === undefined
	     *  // if both checkboxes are checked
	     *  v == ['B1', 'B2']
	     *
	     *  var v = $('input[type=radio]').fieldValue();
	     *  // if neither radio is checked
	     *  v === undefined
	     *  // if first radio is checked
	     *  v == ['C1']
	     *
	     * The successful argument controls whether or not the field element must be 'successful'
	     * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
	     * The default value of the successful argument is true.  If this value is false the value(s)
	     * for each element is returned.
	     *
	     * Note: This method *always* returns an array.  If no valid value can be determined the
	     *    array will be empty, otherwise it will contain one or more values.
	     */
	    $.fn.fieldValue = function (successful) {
	        for (var val = [], i = 0, max = this.length; i < max; i++) {
	            var el = this[i];
	            var v = $.fieldValue(el, successful);
	            if (v === null || typeof v == 'undefined' || v.constructor == Array && !v.length) {
	                continue;
	            }
	            if (v.constructor == Array) {
	                $.merge(val, v);
	            } else {
	                val.push(v);
	            }
	        }
	        return val;
	    };

	    /**
	     * Returns the value of the field element.
	     */
	    $.fieldValue = function (el, successful) {
	        var n = el.name,
	            t = el.type,
	            tag = el.tagName.toLowerCase();
	        if (successful === undefined) {
	            successful = true;
	        }

	        if (successful && (!n || el.disabled || t == 'reset' || t == 'button' || (t == 'checkbox' || t == 'radio') && !el.checked || (t == 'submit' || t == 'image') && el.form && el.form.clk != el || tag == 'select' && el.selectedIndex == -1)) {
	            return null;
	        }

	        if (tag == 'select') {
	            var index = el.selectedIndex;
	            if (index < 0) {
	                return null;
	            }
	            var a = [],
	                ops = el.options;
	            var one = t == 'select-one';
	            var max = one ? index + 1 : ops.length;
	            for (var i = one ? index : 0; i < max; i++) {
	                var op = ops[i];
	                if (op.selected) {
	                    var v = op.value;
	                    if (!v) {
	                        // extra pain for IE...
	                        v = op.attributes && op.attributes.value && !op.attributes.value.specified ? op.text : op.value;
	                    }
	                    if (one) {
	                        return v;
	                    }
	                    a.push(v);
	                }
	            }
	            return a;
	        }
	        return $(el).val();
	    };

	    /**
	     * Clears the form data.  Takes the following actions on the form's input fields:
	     *  - input text fields will have their 'value' property set to the empty string
	     *  - select elements will have their 'selectedIndex' property set to -1
	     *  - checkbox and radio inputs will have their 'checked' property set to false
	     *  - inputs of type submit, button, reset, and hidden will *not* be effected
	     *  - button elements will *not* be effected
	     */
	    $.fn.clearForm = function (includeHidden) {
	        return this.each(function () {
	            $('input,select,textarea', this).clearFields(includeHidden);
	        });
	    };

	    /**
	     * Clears the selected form elements.
	     */
	    $.fn.clearFields = $.fn.clearInputs = function (includeHidden) {
	        var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
	        return this.each(function () {
	            var t = this.type,
	                tag = this.tagName.toLowerCase();
	            if (re.test(t) || tag == 'textarea') {
	                this.value = '';
	            } else if (t == 'checkbox' || t == 'radio') {
	                this.checked = false;
	            } else if (tag == 'select') {
	                this.selectedIndex = -1;
	            } else if (t == "file") {
	                if (/MSIE/.test(navigator.userAgent)) {
	                    $(this).replaceWith($(this).clone(true));
	                } else {
	                    $(this).val('');
	                }
	            } else if (includeHidden) {
	                // includeHidden can be the value true, or it can be a selector string
	                // indicating a special test; for example:
	                //  $('#myForm').clearForm('.special:hidden')
	                // the above would clean hidden inputs that have the class of 'special'
	                if (includeHidden === true && /hidden/.test(t) || typeof includeHidden == 'string' && $(this).is(includeHidden)) {
	                    this.value = '';
	                }
	            }
	        });
	    };

	    /**
	     * Resets the form data.  Causes all form elements to be reset to their original value.
	     */
	    $.fn.resetForm = function () {
	        return this.each(function () {
	            // guard against an input with the name of 'reset'
	            // note that IE reports the reset function as an 'object'
	            if (typeof this.reset == 'function' || _typeof(this.reset) == 'object' && !this.reset.nodeType) {
	                this.reset();
	            }
	        });
	    };

	    /**
	     * Enables or disables any matching elements.
	     */
	    $.fn.enable = function (b) {
	        if (b === undefined) {
	            b = true;
	        }
	        return this.each(function () {
	            this.disabled = !b;
	        });
	    };

	    /**
	     * Checks/unchecks any matching checkboxes or radio buttons and
	     * selects/deselects and matching option elements.
	     */
	    $.fn.selected = function (select) {
	        if (select === undefined) {
	            select = true;
	        }
	        return this.each(function () {
	            var t = this.type;
	            if (t == 'checkbox' || t == 'radio') {
	                this.checked = select;
	            } else if (this.tagName.toLowerCase() == 'option') {
	                var $sel = $(this).parent('select');
	                if (select && $sel[0] && $sel[0].type == 'select-one') {
	                    // deselect all other options
	                    $sel.find('option').selected(false);
	                }
	                this.selected = select;
	            }
	        });
	    };

	    // expose debug var
	    $.fn.ajaxSubmit.debug = false;

	    // helper fn for console logging
	    function log() {
	        if (!$.fn.ajaxSubmit.debug) {
	            return;
	        }
	        var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
	        if (window.console && window.console.log) {
	            window.console.log(msg);
	        } else if (window.opera && window.opera.postError) {
	            window.opera.postError(msg);
	        }
	    }
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "jquery.form.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/*
	*插件作者:周祥
	*更新时间:2014年12月12日
	*插件介绍:图片上传本地预览插件
	*插件网站:http://jquery.decadework.com
	*作  者QQ:200592114
	*/
	var uploadPreview = function uploadPreview(setting) {
	  var _self = this;_self.IsNull = function (value) {
	    if (value == undefined || value == null || value == "" || value.length == 0) {
	      return true;
	    };return false;
	  };_self.DefautlSetting = { UpBtn: "", DivShow: "", ImgShow: "", Width: 100, Height: 100, ImgType: ["gif", "jpeg", "jpg", "bmp", "png"], ErrMsg: "选择文件错误,图片类型必须是(gif,jpeg,jpg,bmp,png)中的一种", callback: function callback() {} };_self.Setting = { UpBtn: _self.IsNull(setting.UpBtn) ? _self.DefautlSetting.UpBtn : setting.UpBtn, DivShow: _self.IsNull(setting.DivShow) ? _self.DefautlSetting.DivShow : setting.DivShow, ImgShow: _self.IsNull(setting.ImgShow) ? _self.DefautlSetting.ImgShow : setting.ImgShow, Width: _self.IsNull(setting.Width) ? _self.DefautlSetting.Width : setting.Width, Height: _self.IsNull(setting.Height) ? _self.DefautlSetting.Height : setting.Height, ImgType: _self.IsNull(setting.ImgType) ? _self.DefautlSetting.ImgType : setting.ImgType, ErrMsg: _self.IsNull(setting.ErrMsg) ? _self.DefautlSetting.ErrMsg : setting.ErrMsg, callback: _self.IsNull(setting.callback) ? _self.DefautlSetting.callback : setting.callback };_self.getObjectURL = function (file) {
	    var url = null;if (window.createObjectURL != undefined) {
	      url = window.createObjectURL(file);
	    } else if (window.URL != undefined) {
	      url = window.URL.createObjectURL(file);
	    } else if (window.webkitURL != undefined) {
	      url = window.webkitURL.createObjectURL(file);
	    };return url;
	  };_self.Bind = function () {
	    document.getElementById(_self.Setting.UpBtn).onchange = function () {
	      if (this.value) {
	        if (!RegExp("\.(" + _self.Setting.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
	          alert(_self.Setting.ErrMsg);this.value = "";return false;
	        };if (navigator.userAgent.indexOf("MSIE") > -1) {
	          try {
	            document.getElementById(_self.Setting.ImgShow).src = _self.getObjectURL(this.files[0]);
	          } catch (e) {
	            var div = document.getElementById(_self.Setting.DivShow);this.select();top.parent.document.body.focus();var src = document.selection.createRange().text;document.selection.empty();document.getElementById(_self.Setting.ImgShow).style.display = "none";div.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";div.style.width = _self.Setting.Width + "px";div.style.height = _self.Setting.Height + "px";div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src;
	          }
	        } else {
	          document.getElementById(_self.Setting.ImgShow).src = _self.getObjectURL(this.files[0]);
	        };_self.Setting.callback();
	      }
	    };
	  };_self.Bind();
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "jquery.uploadPreview.min.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/******************************************************************************
	 * jquery.i18n.properties
	 * 
	 * Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
	 * MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
	 * 
	 * @version     1.0.x
	 * @author      Nuno Fernandes
	 * @url         www.codingwithcoffee.com
	 * @inspiration Localisation assistance for jQuery (http://keith-wood.name/localisation.html)
	 *              by Keith Wood (kbwood{at}iinet.com.au) June 2007
	 * 
	 *****************************************************************************/

	Array.prototype._indexOf = function (n) {
	  if ("indexOf" in this) {
	    return this["indexOf"](n);
	  }
	  for (var i = 0; i < this.length; i++) {
	    if (n === this[i]) {
	      return i;
	    }
	  }
	  return -1;
	};

	(function ($) {
	  $.i18n = {};

	  /** Map holding bundle keys (if mode: 'map') */
	  $.i18n.map = {};

	  /**
	   * Load and parse message bundle files (.properties),
	   * making bundles keys available as javascript variables.
	   * 
	   * i18n files are named <name>.js, or <name>_<language>.js or <name>_<language>_<country>.js
	   * Where:
	   *      The <language> argument is a valid ISO Language Code. These codes are the lower-case, 
	   *      two-letter codes as defined by ISO-639. You can find a full list of these codes at a 
	   *      number of sites, such as: http://www.loc.gov/standards/iso639-2/englangn.html
	   *      The <country> argument is a valid ISO Country Code. These codes are the upper-case,
	   *      two-letter codes as defined by ISO-3166. You can find a full list of these codes at a
	   *      number of sites, such as: http://www.iso.ch/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html
	   * 
	   * Sample usage for a bundles/Messages.properties bundle:
	   * $.i18n.properties({
	   *      name:      'Messages', 
	   *      language:  'en_US',
	   *      path:      'bundles'
	   * });
	   * @param  name			(string/string[], optional) names of file to load (eg, 'Messages' or ['Msg1','Msg2']). Defaults to "Messages"
	   * @param  language		(string, optional) language/country code (eg, 'en', 'en_US', 'pt_PT'). if not specified, language reported by the browser will be used instead.
	   * @param  path			(string, optional) path of directory that contains file to load
	   * @param  mode			(string, optional) whether bundles keys are available as JavaScript variables/functions or as a map (eg, 'vars' or 'map')
	   * @param  cache        (boolean, optional) whether bundles should be cached by the browser, or forcibly reloaded on each page load. Defaults to false (i.e. forcibly reloaded)
	   * @param  encoding 	(string, optional) the encoding to request for bundles. Property file resource bundles are specified to be in ISO-8859-1 format. Defaults to UTF-8 for backward compatibility.
	   * @param  callback     (function, optional) callback function to be called after script is terminated
	   */
	  $.i18n.properties = function (settings) {
	    // set up settings
	    var defaults = {
	      name: 'Messages',
	      language: '',
	      path: '',
	      mode: 'vars',
	      cache: false,
	      encoding: 'UTF-8',
	      callback: null
	    };
	    settings = $.extend(defaults, settings);
	    if (settings.language === null || settings.language == '') {
	      settings.language = $.i18n.browserLang();
	    }
	    if (settings.language === null) {
	      settings.language = '';
	    }

	    // load and parse bundle files
	    var files = getFiles(settings.name);
	    for (i = 0; i < files.length; i++) {
	      // 1. load base (eg, Messages.properties)
	      loadAndParseFile(settings.path + files[i] + '.properties', settings);
	      // 2. with language code (eg, Messages_pt.properties)
	      if (settings.language.length >= 2) {
	        loadAndParseFile(settings.path + files[i] + '_' + settings.language.substring(0, 2) + '.properties', settings);
	      }
	      // 3. with language code and country code (eg, Messages_pt_PT.properties)
	      if (settings.language.length >= 5) {
	        loadAndParseFile(settings.path + files[i] + '_' + settings.language.substring(0, 5) + '.properties', settings);
	      }
	    }

	    // call callback
	    var result = '';
	    if (settings.callback) {
	      result = settings.callback();
	    }
	    return result;
	  };

	  /**
	   * When configured with mode: 'map', allows access to bundle values by specifying its key.
	   * Eg, jQuery.i18n.prop('com.company.bundles.menu_add')
	   */
	  $.i18n.prop = function (key /* Add parameters as function arguments as necessary  */) {
	    var value = $.i18n.map[key];
	    if (value == null) return '[' + key + ']';

	    //	if(arguments.length < 2) // No arguments.
	    //    //if(key == 'spv.lbl.modified') {alert(value);}
	    //		return value;

	    //	if (!$.isArray(placeHolderValues)) {
	    //		// If placeHolderValues is not an array, make it into one.
	    //		placeHolderValues = [placeHolderValues];
	    //		for (var i=2; i<arguments.length; i++)
	    //			placeHolderValues.push(arguments[i]);
	    //	}

	    // Place holder replacement
	    /**
	     * Tested with:
	     *   test.t1=asdf ''{0}''
	     *   test.t2=asdf '{0}' '{1}'{1}'zxcv
	     *   test.t3=This is \"a quote" 'a''{0}''s'd{fgh{ij'
	     *   test.t4="'''{'0}''" {0}{a}
	     *   test.t5="'''{0}'''" {1}
	     *   test.t6=a {1} b {0} c
	     *   test.t7=a 'quoted \\ s\ttringy' \t\t x
	     *
	     * Produces:
	     *   test.t1, p1 ==> asdf 'p1'
	     *   test.t2, p1 ==> asdf {0} {1}{1}zxcv
	     *   test.t3, p1 ==> This is "a quote" a'{0}'sd{fgh{ij
	     *   test.t4, p1 ==> "'{0}'" p1{a}
	     *   test.t5, p1 ==> "'{0}'" {1}
	     *   test.t6, p1 ==> a {1} b p1 c
	     *   test.t6, p1, p2 ==> a p2 b p1 c
	     *   test.t6, p1, p2, p3 ==> a p2 b p1 c
	     *   test.t7 ==> a quoted \ s	tringy 		 x
	     */

	    var i;
	    if (typeof value == 'string') {
	      // Handle escape characters. Done separately from the tokenizing loop below because escape characters are
	      // active in quoted strings.
	      i = 0;
	      while ((i = value.indexOf('\\', i)) != -1) {
	        if (value[i + 1] == 't') value = value.substring(0, i) + '\t' + value.substring(i++ + 2); // tab
	        else if (value[i + 1] == 'r') value = value.substring(0, i) + '\r' + value.substring(i++ + 2); // return
	          else if (value[i + 1] == 'n') value = value.substring(0, i) + '\n' + value.substring(i++ + 2); // line feed
	            else if (value[i + 1] == 'f') value = value.substring(0, i) + '\f' + value.substring(i++ + 2); // form feed
	              else if (value[i + 1] == '\\') value = value.substring(0, i) + '\\' + value.substring(i++ + 2); // \
	                else value = value.substring(0, i) + value.substring(i + 1); // Quietly drop the character
	      }

	      // Lazily convert the string to a list of tokens.
	      var arr = [],
	          j,
	          index;
	      i = 0;
	      while (i < value.length) {
	        if (value[i] == '\'') {
	          // Handle quotes
	          if (i == value.length - 1) value = value.substring(0, i); // Silently drop the trailing quote
	          else if (value[i + 1] == '\'') value = value.substring(0, i) + value.substring(++i); // Escaped quote
	            else {
	                // Quoted string
	                j = i + 2;
	                while ((j = value.indexOf('\'', j)) != -1) {
	                  if (j == value.length - 1 || value[j + 1] != '\'') {
	                    // Found start and end quotes. Remove them
	                    value = value.substring(0, i) + value.substring(i + 1, j) + value.substring(j + 1);
	                    i = j - 1;
	                    break;
	                  } else {
	                    // Found a double quote, reduce to a single quote.
	                    value = value.substring(0, j) + value.substring(++j);
	                  }
	                }

	                if (j == -1) {
	                  // There is no end quote. Drop the start quote
	                  value = value.substring(0, i) + value.substring(i + 1);
	                }
	              }
	        } else if (value[i] == '{') {
	          // Beginning of an unquoted place holder.
	          j = value.indexOf('}', i + 1);
	          if (j == -1) i++; // No end. Process the rest of the line. Java would throw an exception
	          else {
	              // Add 1 to the index so that it aligns with the function arguments.
	              index = parseInt(value.substring(i + 1, j));
	              if (!isNaN(index) && index >= 0) {
	                // Put the line thus far (if it isn't empty) into the array
	                var s = value.substring(0, i);
	                if (s != "") arr.push(s);
	                // Put the parameter reference into the array
	                arr.push(index);
	                // Start the processing over again starting from the rest of the line.
	                i = 0;
	                value = value.substring(j + 1);
	              } else i = j + 1; // Invalid parameter. Leave as is.
	            }
	        } else i++;
	      }

	      // Put the remainder of the no-empty line into the array.
	      if (value != "") arr.push(value);
	      value = arr;

	      // Make the array the value for the entry.
	      $.i18n.map[key] = arr;
	    }

	    if (value.length == 0) return "";
	    if (value.lengh == 1 && typeof value[0] == "string") return value[0];

	    var s = "";
	    for (i = 0; i < value.length; i++) {
	      if (typeof value[i] == "string") s += value[i];
	      // Must be a number
	      else {
	          var offset = 0;
	          var arguments_arr = null;
	          if (arguments.length === 2 && arguments[1] instanceof Array) {

	            arguments_arr = arguments[1];
	          } else {
	            offset = 1;
	            arguments_arr = arguments;
	          }

	          if (value[i] + offset < arguments_arr.length) {
	            s += arguments_arr[value[i] + offset];
	          } else {
	            s += "{" + value[i] + "}";
	          }
	        }
	    }

	    return s;
	  };

	  /** Language reported by browser, normalized code */
	  $.i18n.browserLang = function () {
	    return normaliseLanguageCode(navigator.language /* Mozilla */ || navigator.userLanguage /* IE */ || "zh-CN" /* Othor*/);
	  };

	  /** Load and parse .properties files */
	  function loadAndParseFile(filename, settings) {
	    $.ajax({
	      url: filename,
	      async: false,
	      cache: settings.cache,
	      contentType: 'text/plain;charset=' + settings.encoding,
	      dataType: 'text',
	      success: function success(data, status) {
	        parseData(data, settings.mode);
	      }
	    });
	  }

	  /** Parse .properties files */
	  function parseData(data, mode) {
	    var parsed = '';
	    var parameters = data.split(/\n/);
	    var regPlaceHolder = /(\{\d+\})/g;
	    var regRepPlaceHolder = /\{(\d+)\}/g;
	    var unicodeRE = /(\\u.{4})/ig;
	    for (var i = 0; i < parameters.length; i++) {
	      parameters[i] = parameters[i].replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // trim
	      if (parameters[i].length > 0 && parameters[i].match("^#") != "#") {
	        // skip comments
	        var pair = parameters[i].split('=');
	        if (pair.length > 0) {
	          /** Process key & value */
	          var name = unescape(pair[0]).replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // trim
	          var value = pair.length == 1 ? "" : pair[1];
	          // process multi-line values
	          while (value.match(/\\$/) == "\\") {
	            value = value.substring(0, value.length - 1);
	            value += parameters[++i].replace(/\s\s*$/, ''); // right trim
	          }
	          // Put values with embedded '='s back together
	          for (var s = 2; s < pair.length; s++) {
	            value += '=' + pair[s];
	          }
	          value = value.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // trim

	          /** Mode: bundle keys in a map */
	          if (mode == 'map' || mode == 'both') {
	            // handle unicode chars possibly left out
	            var unicodeMatches = value.match(unicodeRE);
	            if (unicodeMatches) {
	              for (var u = 0; u < unicodeMatches.length; u++) {
	                value = value.replace(unicodeMatches[u], unescapeUnicode(unicodeMatches[u]));
	              }
	            }
	            // add to map
	            $.i18n.map[name] = value;
	          }

	          /** Mode: bundle keys as vars/functions */
	          if (mode == 'vars' || mode == 'both') {
	            value = value.replace(/"/g, '\\"'); // escape quotation mark (")

	            // make sure namespaced key exists (eg, 'some.key')
	            checkKeyNamespace(name);

	            // value with variable substitutions
	            if (regPlaceHolder.test(value)) {
	              var parts = value.split(regPlaceHolder);
	              // process function args
	              var first = true;
	              var fnArgs = '';
	              var usedArgs = [];
	              for (var p = 0; p < parts.length; p++) {
	                if (regPlaceHolder.test(parts[p]) && (usedArgs.length == 0 || usedArgs._indexOf(parts[p]) == -1)) {
	                  if (!first) {
	                    fnArgs += ',';
	                  }
	                  fnArgs += parts[p].replace(regRepPlaceHolder, 'v$1');
	                  usedArgs.push(parts[p]);
	                  first = false;
	                }
	              }
	              parsed += name + '=function(' + fnArgs + '){';
	              // process function body
	              var fnExpr = '"' + value.replace(regRepPlaceHolder, '"+v$1+"') + '"';
	              parsed += 'return ' + fnExpr + ';' + '};';

	              // simple value
	            } else {
	                parsed += name + '="' + value + '";';
	              }
	          } // END: Mode: bundle keys as vars/functions
	        } // END: if(pair.length > 0)
	      } // END: skip comments
	    }
	    eval(parsed);
	  }

	  /** Make sure namespace exists (for keys with dots in name) */
	  // TODO key parts that start with numbers quietly fail. i.e. month.short.1=Jan
	  function checkKeyNamespace(key) {
	    var regDot = /\./;
	    if (regDot.test(key)) {
	      var fullname = '';
	      var names = key.split(/\./);
	      for (var i = 0; i < names.length; i++) {
	        if (i > 0) {
	          fullname += '.';
	        }
	        fullname += names[i];
	        if (eval('typeof ' + fullname + ' == "undefined"')) {
	          eval(fullname + '={};');
	        }
	      }
	    }
	  }

	  /** Make sure filename is an array */
	  function getFiles(names) {
	    return names && names.constructor == Array ? names : [names];
	  }

	  /** Ensure language code is in the format aa_AA. */
	  function normaliseLanguageCode(lang) {
	    lang = lang.toLowerCase();
	    if (lang.length > 3) {
	      lang = lang.substring(0, 3) + lang.substring(3).toUpperCase();
	    }
	    return lang;
	  }

	  /** Unescape unicode chars ('\u00e3') */
	  function unescapeUnicode(str) {
	    // unescape unicode codes
	    var codes = [];
	    var code = parseInt(str.substr(2), 16);
	    if (code >= 0 && code < Math.pow(2, 16)) {
	      codes.push(code);
	    }
	    // convert codes to text
	    var unescaped = '';
	    for (var i = 0; i < codes.length; ++i) {
	      unescaped += String.fromCharCode(codes[i]);
	    }
	    return unescaped;
	  }

	  /* Cross-Browser Split 1.0.1
	  (c) Steven Levithan <stevenlevithan.com>; MIT License
	  An ECMA-compliant, uniform cross-browser split method */
	  var _cbSplit;
	  // avoid running twice, which would break `cbSplit._nativeSplit`'s reference to the native `split`
	  if (!_cbSplit) {
	    _cbSplit = function cbSplit(str, separator, limit) {
	      // if `separator` is not a regex, use the native `split`
	      if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	        if (typeof _cbSplit._nativeSplit == "undefined") return str.split(separator, limit);else return _cbSplit._nativeSplit.call(str, separator, limit);
	      }

	      var output = [],
	          lastLastIndex = 0,
	          flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.sticky ? "y" : ""),
	          separator = RegExp(separator.source, flags + "g"),
	          // make `global` and avoid `lastIndex` issues by working with a copy
	      separator2,
	          match,
	          lastIndex,
	          lastLength;

	      str = str + ""; // type conversion
	      if (!_cbSplit._compliantExecNpcg) {
	        separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags); // doesn't need /g or /y, but they don't hurt
	      }

	      /* behavior for `limit`: if it's...
	      - `undefined`: no limit.
	      - `NaN` or zero: return an empty array.
	      - a positive number: use `Math.floor(limit)`.
	      - a negative number: no limit.
	      - other: type-convert, then use the above rules. */
	      if (limit === undefined || +limit < 0) {
	        limit = Infinity;
	      } else {
	        limit = Math.floor(+limit);
	        if (!limit) {
	          return [];
	        }
	      }

	      while (match = separator.exec(str)) {
	        lastIndex = match.index + match[0].length; // `separator.lastIndex` is not reliable cross-browser

	        if (lastIndex > lastLastIndex) {
	          output.push(str.slice(lastLastIndex, match.index));

	          // fix browsers whose `exec` methods don't consistently return `undefined` for nonparticipating capturing groups
	          if (!_cbSplit._compliantExecNpcg && match.length > 1) {
	            match[0].replace(separator2, function () {
	              for (var i = 1; i < arguments.length - 2; i++) {
	                if (arguments[i] === undefined) {
	                  match[i] = undefined;
	                }
	              }
	            });
	          }

	          if (match.length > 1 && match.index < str.length) {
	            Array.prototype.push.apply(output, match.slice(1));
	          }

	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;

	          if (output.length >= limit) {
	            break;
	          }
	        }

	        if (separator.lastIndex === match.index) {
	          separator.lastIndex++; // avoid an infinite loop
	        }
	      }

	      if (lastLastIndex === str.length) {
	        if (lastLength || !separator.test("")) {
	          output.push("");
	        }
	      } else {
	        output.push(str.slice(lastLastIndex));
	      }

	      return output.length > limit ? output.slice(0, limit) : output;
	    };

	    _cbSplit._compliantExecNpcg = /()??/.exec("")[1] === undefined; // NPCG: nonparticipating capturing group
	    _cbSplit._nativeSplit = String.prototype.split;
	  } // end `if (!cbSplit)`
	  String.prototype.split = function (separator, limit) {
	    return _cbSplit(this, separator, limit);
	  };
	})(jQuery);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "jquery.i18n.properties-1.0.9.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(194)))

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;} /**
	 * jQuery EasyUI 1.3.6
	 * 
	 * Copyright (c) 2009-2014 www.jeasyui.com. All rights reserved.
	 * 
	 * Licensed under the GPL license: http://www.gnu.org/licenses/gpl.txt To use it
	 * on other terms please contact us at info@jeasyui.com
	 * 
	 */(function($){$.parser={auto:true,onComplete:function onComplete(_1){},plugins:["draggable","droppable","resizable","pagination","tooltip","linkbutton","menu","menubutton","splitbutton","progressbar","tree","combobox","combotree","combogrid","numberbox","validatebox","searchbox","numberspinner","timespinner","calendar","datebox","datetimebox","slider","layout","panel","datagrid","propertygrid","treegrid","tabs","accordion","window","dialog"],parse:function parse(_2){var aa=[];for(var i=0;i<$.parser.plugins.length;i++){var _3=$.parser.plugins[i];var r=$(".easyui-"+_3,_2);if(r.length){if(r[_3]){r[_3]();}else {aa.push({name:_3,jq:r});}}}if(aa.length&&window.easyloader){var _4=[];for(var i=0;i<aa.length;i++){_4.push(aa[i].name);}easyloader.load(_4,function(){for(var i=0;i<aa.length;i++){var _5=aa[i].name;var jq=aa[i].jq;jq[_5]();}$.parser.onComplete.call($.parser,_2);});}else {$.parser.onComplete.call($.parser,_2);}},parseOptions:function parseOptions(_6,_7){var t=$(_6);var _8={};var s=$.trim(t.attr("data-options"));if(s){if(s.substring(0,1)!="{"){s="{"+s+"}";}_8=new Function("return "+s)();}if(_7){var _9={};for(var i=0;i<_7.length;i++){var pp=_7[i];if(typeof pp=="string"){if(pp=="width"||pp=="height"||pp=="left"||pp=="top"){_9[pp]=parseInt(_6.style[pp])||undefined;}else {_9[pp]=t.attr(pp);}}else {for(var _a in pp){var _b=pp[_a];if(_b=="boolean"){_9[_a]=t.attr(_a)?t.attr(_a)=="true":undefined;}else {if(_b=="number"){_9[_a]=t.attr(_a)=="0"?0:parseFloat(t.attr(_a))||undefined;}}}}}$.extend(_8,_9);}return _8;}};$(function(){var d=$("<div style=\"position:absolute;top:-1000px;width:100px;height:100px;padding:5px\"></div>").appendTo("body");d.width(100);$._boxModel=parseInt(d.width())==100;d.remove();if(!window.easyloader&&$.parser.auto){$.parser.parse();}});$.fn._outerWidth=function(_c){if(_c==undefined){if(this[0]==window){return this.width()||document.body.clientWidth;}return this.outerWidth()||0;}return this.each(function(){if($._boxModel){$(this).width(_c-($(this).outerWidth()-$(this).width()));}else {$(this).width(_c);}});};$.fn._outerHeight=function(_d){if(_d==undefined){if(this[0]==window){return this.height()||document.body.clientHeight;}return this.outerHeight()||0;}return this.each(function(){if($._boxModel){$(this).height(_d-($(this).outerHeight()-$(this).height()));}else {$(this).height(_d);}});};$.fn._scrollLeft=function(_e){if(_e==undefined){return this.scrollLeft();}else {return this.each(function(){$(this).scrollLeft(_e);});}};$.fn._propAttr=$.fn.prop||$.fn.attr;$.fn._fit=function(_f){_f=_f==undefined?true:_f;var t=this[0];var p=t.tagName=="BODY"?t:this.parent()[0];var _10=p.fcount||0;if(_f){if(!t.fitted){t.fitted=true;p.fcount=_10+1;$(p).addClass("panel-noscroll");if(p.tagName=="BODY"){$("html").addClass("panel-fit");}}}else {if(t.fitted){t.fitted=false;p.fcount=_10-1;if(p.fcount==0){$(p).removeClass("panel-noscroll");if(p.tagName=="BODY"){$("html").removeClass("panel-fit");}}}}return {width:$(p).width(),height:$(p).height()};};})(jQuery);(function($){var _11=null;var _12=null;var _13=false;function _14(e){if(e.touches.length!=1){return;}if(!_13){_13=true;dblClickTimer=setTimeout(function(){_13=false;},500);}else {clearTimeout(dblClickTimer);_13=false;_15(e,"dblclick");}_11=setTimeout(function(){_15(e,"contextmenu",3);},1000);_15(e,"mousedown");if($.fn.draggable.isDragging||$.fn.resizable.isResizing){e.preventDefault();}};function _16(e){if(e.touches.length!=1){return;}if(_11){clearTimeout(_11);}_15(e,"mousemove");if($.fn.draggable.isDragging||$.fn.resizable.isResizing){e.preventDefault();}};function _17(e){if(_11){clearTimeout(_11);}_15(e,"mouseup");if($.fn.draggable.isDragging||$.fn.resizable.isResizing){e.preventDefault();}};function _15(e,_18,_19){var _1a=new $.Event(_18);_1a.pageX=e.changedTouches[0].pageX;_1a.pageY=e.changedTouches[0].pageY;_1a.which=_19||1;$(e.target).trigger(_1a);};if(document.addEventListener){document.addEventListener("touchstart",_14,true);document.addEventListener("touchmove",_16,true);document.addEventListener("touchend",_17,true);}})(jQuery);(function($){function _1b(e){var _1c=$.data(e.data.target,"draggable");var _1d=_1c.options;var _1e=_1c.proxy;var _1f=e.data;var _20=_1f.startLeft+e.pageX-_1f.startX;var top=_1f.startTop+e.pageY-_1f.startY;if(_1e){if(_1e.parent()[0]==document.body){if(_1d.deltaX!=null&&_1d.deltaX!=undefined){_20=e.pageX+_1d.deltaX;}else {_20=e.pageX-e.data.offsetWidth;}if(_1d.deltaY!=null&&_1d.deltaY!=undefined){top=e.pageY+_1d.deltaY;}else {top=e.pageY-e.data.offsetHeight;}}else {if(_1d.deltaX!=null&&_1d.deltaX!=undefined){_20+=e.data.offsetWidth+_1d.deltaX;}if(_1d.deltaY!=null&&_1d.deltaY!=undefined){top+=e.data.offsetHeight+_1d.deltaY;}}}if(e.data.parent!=document.body){_20+=$(e.data.parent).scrollLeft();top+=$(e.data.parent).scrollTop();}if(_1d.axis=="h"){_1f.left=_20;}else {if(_1d.axis=="v"){_1f.top=top;}else {_1f.left=_20;_1f.top=top;}}};function _21(e){var _22=$.data(e.data.target,"draggable");var _23=_22.options;var _24=_22.proxy;if(!_24){_24=$(e.data.target);}_24.css({left:e.data.left,top:e.data.top});$("body").css("cursor",_23.cursor);};function _25(e){$.fn.draggable.isDragging=true;var _26=$.data(e.data.target,"draggable");var _27=_26.options;var _28=$(".droppable").filter(function(){return e.data.target!=this;}).filter(function(){var _29=$.data(this,"droppable").options.accept;if(_29){return $(_29).filter(function(){return this==e.data.target;}).length>0;}else {return true;}});_26.droppables=_28;var _2a=_26.proxy;if(!_2a){if(_27.proxy){if(_27.proxy=="clone"){_2a=$(e.data.target).clone().insertAfter(e.data.target);}else {_2a=_27.proxy.call(e.data.target,e.data.target);}_26.proxy=_2a;}else {_2a=$(e.data.target);}}_2a.css("position","absolute");_1b(e);_21(e);_27.onStartDrag.call(e.data.target,e);return false;};function _2b(e){var _2c=$.data(e.data.target,"draggable");_1b(e);if(_2c.options.onDrag.call(e.data.target,e)!=false){_21(e);}var _2d=e.data.target;_2c.droppables.each(function(){var _2e=$(this);if(_2e.droppable("options").disabled){return;}var p2=_2e.offset();if(e.pageX>p2.left&&e.pageX<p2.left+_2e.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_2e.outerHeight()){if(!this.entered){$(this).trigger("_dragenter",[_2d]);this.entered=true;}$(this).trigger("_dragover",[_2d]);}else {if(this.entered){$(this).trigger("_dragleave",[_2d]);this.entered=false;}}});return false;};function _2f(e){$.fn.draggable.isDragging=false;_2b(e);var _30=$.data(e.data.target,"draggable");var _31=_30.proxy;var _32=_30.options;if(_32.revert){if(_33()==true){$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});}else {if(_31){var _34,top;if(_31.parent()[0]==document.body){_34=e.data.startX-e.data.offsetWidth;top=e.data.startY-e.data.offsetHeight;}else {_34=e.data.startLeft;top=e.data.startTop;}_31.animate({left:_34,top:top},function(){_35();});}else {$(e.data.target).animate({left:e.data.startLeft,top:e.data.startTop},function(){$(e.data.target).css("position",e.data.startPosition);});}}}else {$(e.data.target).css({position:"absolute",left:e.data.left,top:e.data.top});_33();}_32.onStopDrag.call(e.data.target,e);$(document).unbind(".draggable");setTimeout(function(){$("body").css("cursor","");},100);function _35(){if(_31){_31.remove();}_30.proxy=null;};function _33(){var _36=false;_30.droppables.each(function(){var _37=$(this);if(_37.droppable("options").disabled){return;}var p2=_37.offset();if(e.pageX>p2.left&&e.pageX<p2.left+_37.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_37.outerHeight()){if(_32.revert){$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});}$(this).trigger("_drop",[e.data.target]);_35();_36=true;this.entered=false;return false;}});if(!_36&&!_32.revert){_35();}return _36;};return false;};$.fn.draggable=function(_38,_39){if(typeof _38=="string"){return $.fn.draggable.methods[_38](this,_39);}return this.each(function(){var _3a;var _3b=$.data(this,"draggable");if(_3b){_3b.handle.unbind(".draggable");_3a=$.extend(_3b.options,_38);}else {_3a=$.extend({},$.fn.draggable.defaults,$.fn.draggable.parseOptions(this),_38||{});}var _3c=_3a.handle?typeof _3a.handle=="string"?$(_3a.handle,this):_3a.handle:$(this);$.data(this,"draggable",{options:_3a,handle:_3c});if(_3a.disabled){$(this).css("cursor","");return;}_3c.unbind(".draggable").bind("mousemove.draggable",{target:this},function(e){if($.fn.draggable.isDragging){return;}var _3d=$.data(e.data.target,"draggable").options;if(_3e(e)){$(this).css("cursor",_3d.cursor);}else {$(this).css("cursor","");}}).bind("mouseleave.draggable",{target:this},function(e){$(this).css("cursor","");}).bind("mousedown.draggable",{target:this},function(e){if(_3e(e)==false){return;}$(this).css("cursor","");var _3f=$(e.data.target).position();var _40=$(e.data.target).offset();var _41={startPosition:$(e.data.target).css("position"),startLeft:_3f.left,startTop:_3f.top,left:_3f.left,top:_3f.top,startX:e.pageX,startY:e.pageY,offsetWidth:e.pageX-_40.left,offsetHeight:e.pageY-_40.top,target:e.data.target,parent:$(e.data.target).parent()[0]};$.extend(e.data,_41);var _42=$.data(e.data.target,"draggable").options;if(_42.onBeforeDrag.call(e.data.target,e)==false){return;}$(document).bind("mousedown.draggable",e.data,_25);$(document).bind("mousemove.draggable",e.data,_2b);$(document).bind("mouseup.draggable",e.data,_2f);});function _3e(e){var _43=$.data(e.data.target,"draggable");var _44=_43.handle;var _45=$(_44).offset();var _46=$(_44).outerWidth();var _47=$(_44).outerHeight();var t=e.pageY-_45.top;var r=_45.left+_46-e.pageX;var b=_45.top+_47-e.pageY;var l=e.pageX-_45.left;return Math.min(t,r,b,l)>_43.options.edge;};});};$.fn.draggable.methods={options:function options(jq){return $.data(jq[0],"draggable").options;},proxy:function proxy(jq){return $.data(jq[0],"draggable").proxy;},enable:function enable(jq){return jq.each(function(){$(this).draggable({disabled:false});});},disable:function disable(jq){return jq.each(function(){$(this).draggable({disabled:true});});}};$.fn.draggable.parseOptions=function(_48){var t=$(_48);return $.extend({},$.parser.parseOptions(_48,["cursor","handle","axis",{"revert":"boolean","deltaX":"number","deltaY":"number","edge":"number"}]),{disabled:t.attr("disabled")?true:undefined});};$.fn.draggable.defaults={proxy:null,revert:false,cursor:"move",deltaX:null,deltaY:null,handle:null,disabled:false,edge:0,axis:null,onBeforeDrag:function onBeforeDrag(e){},onStartDrag:function onStartDrag(e){},onDrag:function onDrag(e){},onStopDrag:function onStopDrag(e){}};$.fn.draggable.isDragging=false;})(jQuery);(function($){function _49(_4a){$(_4a).addClass("droppable");$(_4a).bind("_dragenter",function(e,_4b){$.data(_4a,"droppable").options.onDragEnter.apply(_4a,[e,_4b]);});$(_4a).bind("_dragleave",function(e,_4c){$.data(_4a,"droppable").options.onDragLeave.apply(_4a,[e,_4c]);});$(_4a).bind("_dragover",function(e,_4d){$.data(_4a,"droppable").options.onDragOver.apply(_4a,[e,_4d]);});$(_4a).bind("_drop",function(e,_4e){$.data(_4a,"droppable").options.onDrop.apply(_4a,[e,_4e]);});};$.fn.droppable=function(_4f,_50){if(typeof _4f=="string"){return $.fn.droppable.methods[_4f](this,_50);}_4f=_4f||{};return this.each(function(){var _51=$.data(this,"droppable");if(_51){$.extend(_51.options,_4f);}else {_49(this);$.data(this,"droppable",{options:$.extend({},$.fn.droppable.defaults,$.fn.droppable.parseOptions(this),_4f)});}});};$.fn.droppable.methods={options:function options(jq){return $.data(jq[0],"droppable").options;},enable:function enable(jq){return jq.each(function(){$(this).droppable({disabled:false});});},disable:function disable(jq){return jq.each(function(){$(this).droppable({disabled:true});});}};$.fn.droppable.parseOptions=function(_52){var t=$(_52);return $.extend({},$.parser.parseOptions(_52,["accept"]),{disabled:t.attr("disabled")?true:undefined});};$.fn.droppable.defaults={accept:null,disabled:false,onDragEnter:function onDragEnter(e,_53){},onDragOver:function onDragOver(e,_54){},onDragLeave:function onDragLeave(e,_55){},onDrop:function onDrop(e,_56){}};})(jQuery);(function($){$.fn.resizable=function(_57,_58){if(typeof _57=="string"){return $.fn.resizable.methods[_57](this,_58);}function _59(e){var _5a=e.data;var _5b=$.data(_5a.target,"resizable").options;if(_5a.dir.indexOf("e")!=-1){var _5c=_5a.startWidth+e.pageX-_5a.startX;_5c=Math.min(Math.max(_5c,_5b.minWidth),_5b.maxWidth);_5a.width=_5c;}if(_5a.dir.indexOf("s")!=-1){var _5d=_5a.startHeight+e.pageY-_5a.startY;_5d=Math.min(Math.max(_5d,_5b.minHeight),_5b.maxHeight);_5a.height=_5d;}if(_5a.dir.indexOf("w")!=-1){var _5c=_5a.startWidth-e.pageX+_5a.startX;_5c=Math.min(Math.max(_5c,_5b.minWidth),_5b.maxWidth);_5a.width=_5c;_5a.left=_5a.startLeft+_5a.startWidth-_5a.width;}if(_5a.dir.indexOf("n")!=-1){var _5d=_5a.startHeight-e.pageY+_5a.startY;_5d=Math.min(Math.max(_5d,_5b.minHeight),_5b.maxHeight);_5a.height=_5d;_5a.top=_5a.startTop+_5a.startHeight-_5a.height;}};function _5e(e){var _5f=e.data;var t=$(_5f.target);t.css({left:_5f.left,top:_5f.top});if(t.outerWidth()!=_5f.width){t._outerWidth(_5f.width);}if(t.outerHeight()!=_5f.height){t._outerHeight(_5f.height);}};function _60(e){$.fn.resizable.isResizing=true;$.data(e.data.target,"resizable").options.onStartResize.call(e.data.target,e);return false;};function _61(e){_59(e);if($.data(e.data.target,"resizable").options.onResize.call(e.data.target,e)!=false){_5e(e);}return false;};function _62(e){$.fn.resizable.isResizing=false;_59(e,true);_5e(e);$.data(e.data.target,"resizable").options.onStopResize.call(e.data.target,e);$(document).unbind(".resizable");$("body").css("cursor","");return false;};return this.each(function(){var _63=null;var _64=$.data(this,"resizable");if(_64){$(this).unbind(".resizable");_63=$.extend(_64.options,_57||{});}else {_63=$.extend({},$.fn.resizable.defaults,$.fn.resizable.parseOptions(this),_57||{});$.data(this,"resizable",{options:_63});}if(_63.disabled==true){return;}$(this).bind("mousemove.resizable",{target:this},function(e){if($.fn.resizable.isResizing){return;}var dir=_65(e);if(dir==""){$(e.data.target).css("cursor","");}else {$(e.data.target).css("cursor",dir+"-resize");}}).bind("mouseleave.resizable",{target:this},function(e){$(e.data.target).css("cursor","");}).bind("mousedown.resizable",{target:this},function(e){var dir=_65(e);if(dir==""){return;}function _66(css){var val=parseInt($(e.data.target).css(css));if(isNaN(val)){return 0;}else {return val;}};var _67={target:e.data.target,dir:dir,startLeft:_66("left"),startTop:_66("top"),left:_66("left"),top:_66("top"),startX:e.pageX,startY:e.pageY,startWidth:$(e.data.target).outerWidth(),startHeight:$(e.data.target).outerHeight(),width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),deltaWidth:$(e.data.target).outerWidth()-$(e.data.target).width(),deltaHeight:$(e.data.target).outerHeight()-$(e.data.target).height()};$(document).bind("mousedown.resizable",_67,_60);$(document).bind("mousemove.resizable",_67,_61);$(document).bind("mouseup.resizable",_67,_62);$("body").css("cursor",dir+"-resize");});function _65(e){var tt=$(e.data.target);var dir="";var _68=tt.offset();var _69=tt.outerWidth();var _6a=tt.outerHeight();var _6b=_63.edge;if(e.pageY>_68.top&&e.pageY<_68.top+_6b){dir+="n";}else {if(e.pageY<_68.top+_6a&&e.pageY>_68.top+_6a-_6b){dir+="s";}}if(e.pageX>_68.left&&e.pageX<_68.left+_6b){dir+="w";}else {if(e.pageX<_68.left+_69&&e.pageX>_68.left+_69-_6b){dir+="e";}}var _6c=_63.handles.split(",");for(var i=0;i<_6c.length;i++){var _6d=_6c[i].replace(/(^\s*)|(\s*$)/g,"");if(_6d=="all"||_6d==dir){return dir;}}return "";};});};$.fn.resizable.methods={options:function options(jq){return $.data(jq[0],"resizable").options;},enable:function enable(jq){return jq.each(function(){$(this).resizable({disabled:false});});},disable:function disable(jq){return jq.each(function(){$(this).resizable({disabled:true});});}};$.fn.resizable.parseOptions=function(_6e){var t=$(_6e);return $.extend({},$.parser.parseOptions(_6e,["handles",{minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number",edge:"number"}]),{disabled:t.attr("disabled")?true:undefined});};$.fn.resizable.defaults={disabled:false,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000,edge:5,onStartResize:function onStartResize(e){},onResize:function onResize(e){},onStopResize:function onStopResize(e){}};$.fn.resizable.isResizing=false;})(jQuery);(function($){function _6f(_70){var _71=$.data(_70,"linkbutton").options;var t=$(_70).empty();t.addClass("l-btn").removeClass("l-btn-plain l-btn-selected l-btn-plain-selected");t.removeClass("l-btn-small l-btn-medium l-btn-large").addClass("l-btn-"+_71.size);if(_71.plain){t.addClass("l-btn-plain");}if(_71.selected){t.addClass(_71.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");}t.attr("group",_71.group||"");t.attr("id",_71.id||"");var _72=$("<span class=\"l-btn-left\"></span>").appendTo(t);if(_71.text){$("<span class=\"l-btn-text\"></span>").html(_71.text).appendTo(_72);}else {$("<span class=\"l-btn-text l-btn-empty\">&nbsp;</span>").appendTo(_72);}if(_71.iconCls){$("<span class=\"l-btn-icon\">&nbsp;</span>").addClass(_71.iconCls).appendTo(_72);_72.addClass("l-btn-icon-"+_71.iconAlign);}t.unbind(".linkbutton").bind("focus.linkbutton",function(){if(!_71.disabled){$(this).addClass("l-btn-focus");}}).bind("blur.linkbutton",function(){$(this).removeClass("l-btn-focus");}).bind("click.linkbutton",function(){if(!_71.disabled){if(_71.toggle){if(_71.selected){$(this).linkbutton("unselect");}else {$(this).linkbutton("select");}}_71.onClick.call(this);}return false;});_73(_70,_71.selected);_74(_70,_71.disabled);};function _73(_75,_76){var _77=$.data(_75,"linkbutton").options;if(_76){if(_77.group){$("a.l-btn[group=\""+_77.group+"\"]").each(function(){var o=$(this).linkbutton("options");if(o.toggle){$(this).removeClass("l-btn-selected l-btn-plain-selected");o.selected=false;}});}$(_75).addClass(_77.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");_77.selected=true;}else {if(!_77.group){$(_75).removeClass("l-btn-selected l-btn-plain-selected");_77.selected=false;}}};function _74(_78,_79){var _7a=$.data(_78,"linkbutton");var _7b=_7a.options;$(_78).removeClass("l-btn-disabled l-btn-plain-disabled");if(_79){_7b.disabled=true;var _7c=$(_78).attr("href");if(_7c){_7a.href=_7c;$(_78).attr("href","javascript:void(0)");}if(_78.onclick){_7a.onclick=_78.onclick;_78.onclick=null;}_7b.plain?$(_78).addClass("l-btn-disabled l-btn-plain-disabled"):$(_78).addClass("l-btn-disabled");}else {_7b.disabled=false;if(_7a.href){$(_78).attr("href",_7a.href);}if(_7a.onclick){_78.onclick=_7a.onclick;}}};$.fn.linkbutton=function(_7d,_7e){if(typeof _7d=="string"){return $.fn.linkbutton.methods[_7d](this,_7e);}_7d=_7d||{};return this.each(function(){var _7f=$.data(this,"linkbutton");if(_7f){$.extend(_7f.options,_7d);}else {$.data(this,"linkbutton",{options:$.extend({},$.fn.linkbutton.defaults,$.fn.linkbutton.parseOptions(this),_7d)});$(this).removeAttr("disabled");}_6f(this);});};$.fn.linkbutton.methods={options:function options(jq){return $.data(jq[0],"linkbutton").options;},enable:function enable(jq){return jq.each(function(){_74(this,false);});},disable:function disable(jq){return jq.each(function(){_74(this,true);});},select:function select(jq){return jq.each(function(){_73(this,true);});},unselect:function unselect(jq){return jq.each(function(){_73(this,false);});}};$.fn.linkbutton.parseOptions=function(_80){var t=$(_80);return $.extend({},$.parser.parseOptions(_80,["id","iconCls","iconAlign","group","size",{plain:"boolean",toggle:"boolean",selected:"boolean"}]),{disabled:t.attr("disabled")?true:undefined,text:$.trim(t.html()),iconCls:t.attr("icon")||t.attr("iconCls")});};$.fn.linkbutton.defaults={id:null,disabled:false,toggle:false,selected:false,group:null,plain:false,text:"",iconCls:null,iconAlign:"left",size:"small",onClick:function onClick(){}};})(jQuery);(function($){function _81(_82){var _83=$.data(_82,"pagination");var _84=_83.options;var bb=_83.bb={};var _85=$(_82).addClass("pagination").html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table>");var tr=_85.find("tr");var aa=$.extend([],_84.layout);if(!_84.showPageList){_86(aa,"list");}if(!_84.showRefresh){_86(aa,"refresh");}if(aa[0]=="sep"){aa.shift();}if(aa[aa.length-1]=="sep"){aa.pop();}for(var _87=0;_87<aa.length;_87++){var _88=aa[_87]; //添加上一个文件，下一个文件
	//----------------------------------
	//----------------------------------
	if(_88=="list"){ //添加上一个文件，下一个文件
	//----------------------------------
	$("<td><button class='btn btn-default btn-xs btn-prev-page-list' style='margin-left:5px;"+(_84.showFileCount?"":"display:none")+"' disabled='disabled'>上一文件</button>"+"<button class='btn btn-default btn-xs btn-next-page-list' style='margin-left:5px;"+(_84.showFileCount?"":"display:none")+"' disabled='disabled'>下一文件</button></td>").appendTo(tr); /*$(".btn-prev-page-list").click(function(){
						
					});
	                $(".btn-next-page-list").click(function(){
						
					});*/ //----------------------------------
	var ps=$("<select class=\"pagination-page-list\"></select>");ps.bind("change",function(){_84.pageSize=parseInt($(this).val());_84.onChangePageSize.call(_82,_84.pageSize);_8e(_82,_84.pageNumber);});for(var i=0;i<_84.pageList.length;i++){$("<option></option>").text(_84.pageList[i]).appendTo(ps);}$("<td></td>").append(ps).appendTo(tr);}else {if(_88=="sep"){$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);}else {if(_88=="first"){bb.first=_89("first");}else {if(_88=="prev"){bb.prev=_89("prev");}else {if(_88=="next"){bb.next=_89("next");}else {if(_88=="last"){bb.last=_89("last");}else {if(_88=="manual"){$("<span style=\"padding-left:6px;\"></span>").html(_84.beforePageText).appendTo(tr).wrap("<td></td>");bb.num=$("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");bb.num.unbind(".pagination").bind("keydown.pagination",function(e){if(e.keyCode==13){var _8a=parseInt($(this).val())||1;_8e(_82,_8a);return false;}});bb.after=$("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");}else {if(_88=="refresh"){bb.refresh=_89("refresh");}else {if(_88=="links"){$("<td class=\"pagination-links\"></td>").appendTo(tr);}}}}}}}}}}if(_84.buttons){$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);if($.isArray(_84.buttons)){for(var i=0;i<_84.buttons.length;i++){var btn=_84.buttons[i];if(btn=="-"){$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);}else {var td=$("<td></td>").appendTo(tr);var a=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);a[0].onclick=eval(btn.handler||function(){});a.linkbutton($.extend({},btn,{plain:true}));}}}else {var td=$("<td></td>").appendTo(tr);$(_84.buttons).appendTo(td).show();}}$("<div class=\"pagination-info\"></div>").appendTo(_85);$("<div style=\"clear:both;\"></div>").appendTo(_85);function _89(_8b){var btn=_84.nav[_8b];var a=$("<a href=\"javascript:void(0)\"></a>").appendTo(tr);a.wrap("<td></td>");a.linkbutton({iconCls:btn.iconCls,plain:true}).unbind(".pagination").bind("click.pagination",function(){btn.handler.call(_82);});return a;};function _86(aa,_8c){var _8d=$.inArray(_8c,aa);if(_8d>=0){aa.splice(_8d,1);}return aa;};};function _8e(_8f,_90){var _91=$.data(_8f,"pagination").options;_92(_8f,{pageNumber:_90});_91.onSelectPage.call(_8f,_91.pageNumber,_91.pageSize);};function _92(_93,_94){var _95=$.data(_93,"pagination");var _96=_95.options;var bb=_95.bb;$.extend(_96,_94||{});var ps=$(_93).find("select.pagination-page-list");if(ps.length){ps.val(_96.pageSize+"");_96.pageSize=parseInt(ps.val());}var _97=Math.ceil(_96.total/_96.pageSize)||1;if(_96.pageNumber<1){_96.pageNumber=1;}if(_96.pageNumber>_97){_96.pageNumber=_97;}if(bb.num){bb.num.val(_96.pageNumber);}if(bb.after){bb.after.html(_96.afterPageText.replace(/{pages}/,_97));}var td=$(_93).find("td.pagination-links");if(td.length){td.empty();var _98=_96.pageNumber-Math.floor(_96.links/2);if(_98<1){_98=1;}var _99=_98+_96.links-1;if(_99>_97){_99=_97;}_98=_99-_96.links+1;if(_98<1){_98=1;}for(var i=_98;i<=_99;i++){var a=$("<a class=\"pagination-link\" href=\"javascript:void(0)\"></a>").appendTo(td);a.linkbutton({plain:true,text:i});if(i==_96.pageNumber){a.linkbutton("select");}else {a.unbind(".pagination").bind("click.pagination",{pageNumber:i},function(e){_8e(_93,e.data.pageNumber);});}}}var _9a=_96.displayMsg;_9a=_9a.replace(/{from}/,_96.total==0?0:_96.pageSize*(_96.pageNumber-1)+1);_9a=_9a.replace(/{to}/,Math.min(_96.pageSize*_96.pageNumber,_96.total));_9a=_9a.replace(/{total}/,_96.total);$(_93).find("div.pagination-info").html(_9a);if(bb.first){bb.first.linkbutton({disabled:_96.pageNumber==1});}if(bb.prev){bb.prev.linkbutton({disabled:_96.pageNumber==1});}if(bb.next){bb.next.linkbutton({disabled:_96.pageNumber==_97});}if(bb.last){bb.last.linkbutton({disabled:_96.pageNumber==_97});}_9b(_93,_96.loading);};function _9b(_9c,_9d){var _9e=$.data(_9c,"pagination");var _9f=_9e.options;_9f.loading=_9d;if(_9f.showRefresh&&_9e.bb.refresh){_9e.bb.refresh.linkbutton({iconCls:_9f.loading?"pagination-loading":"pagination-load"});}};$.fn.pagination=function(_a0,_a1){if(typeof _a0=="string"){return $.fn.pagination.methods[_a0](this,_a1);}_a0=_a0||{};return this.each(function(){var _a2;var _a3=$.data(this,"pagination");if(_a3){_a2=$.extend(_a3.options,_a0);}else {_a2=$.extend({},$.fn.pagination.defaults,$.fn.pagination.parseOptions(this),_a0);$.data(this,"pagination",{options:_a2});}_81(this);_92(this);});};$.fn.pagination.methods={options:function options(jq){return $.data(jq[0],"pagination").options;},loading:function loading(jq){return jq.each(function(){_9b(this,true);});},loaded:function loaded(jq){return jq.each(function(){_9b(this,false);});},refresh:function refresh(jq,_a4){return jq.each(function(){_92(this,_a4);});},select:function select(jq,_a5){return jq.each(function(){_8e(this,_a5);});}};$.fn.pagination.parseOptions=function(_a6){var t=$(_a6);return $.extend({},$.parser.parseOptions(_a6,[{total:"number",pageSize:"number",pageNumber:"number",links:"number"},{loading:"boolean",showPageList:"boolean",showRefresh:"boolean"}]),{pageList:t.attr("pageList")?eval(t.attr("pageList")):undefined});};$.fn.pagination.defaults={total:1,pageSize:10,pageNumber:1,pageList:[10,20,30,50],loading:false,buttons:null,showPageList:true,showRefresh:true,links:10,layout:["list","sep","first","prev","sep","manual","sep","next","last","sep","refresh"],onSelectPage:function onSelectPage(_a7,_a8){},onBeforeRefresh:function onBeforeRefresh(_a9,_aa){},onRefresh:function onRefresh(_ab,_ac){},onChangePageSize:function onChangePageSize(_ad){},beforePageText:"Page",afterPageText:"of {pages}",displayMsg:"Displaying {from} to {to} of {total} items",nav:{first:{iconCls:"pagination-first",handler:function handler(){var _ae=$(this).pagination("options");if(_ae.pageNumber>1){$(this).pagination("select",1);}}},prev:{iconCls:"pagination-prev",handler:function handler(){var _af=$(this).pagination("options");if(_af.pageNumber>1){$(this).pagination("select",_af.pageNumber-1);}}},next:{iconCls:"pagination-next",handler:function handler(){var _b0=$(this).pagination("options");var _b1=Math.ceil(_b0.total/_b0.pageSize);if(_b0.pageNumber<_b1){$(this).pagination("select",_b0.pageNumber+1);}}},last:{iconCls:"pagination-last",handler:function handler(){var _b2=$(this).pagination("options");var _b3=Math.ceil(_b2.total/_b2.pageSize);if(_b2.pageNumber<_b3){$(this).pagination("select",_b3);}}},refresh:{iconCls:"pagination-refresh",handler:function handler(){var _b4=$(this).pagination("options");if(_b4.onBeforeRefresh.call(this,_b4.pageNumber,_b4.pageSize)!=false){$(this).pagination("select",_b4.pageNumber);_b4.onRefresh.call(this,_b4.pageNumber,_b4.pageSize);}}}}};})(jQuery);(function($){function _b5(_b6){var _b7=$(_b6);_b7.addClass("tree");return _b7;};function _b8(_b9){var _ba=$.data(_b9,"tree").options;$(_b9).unbind().bind("mouseover",function(e){var tt=$(e.target);var _bb=tt.closest("div.tree-node");if(!_bb.length){return;}_bb.addClass("tree-node-hover");if(tt.hasClass("tree-hit")){if(tt.hasClass("tree-expanded")){tt.addClass("tree-expanded-hover");}else {tt.addClass("tree-collapsed-hover");}}e.stopPropagation();}).bind("mouseout",function(e){var tt=$(e.target);var _bc=tt.closest("div.tree-node");if(!_bc.length){return;}_bc.removeClass("tree-node-hover");if(tt.hasClass("tree-hit")){if(tt.hasClass("tree-expanded")){tt.removeClass("tree-expanded-hover");}else {tt.removeClass("tree-collapsed-hover");}}e.stopPropagation();}).bind("click",function(e){var tt=$(e.target);var _bd=tt.closest("div.tree-node");if(!_bd.length){return;}if(tt.hasClass("tree-hit")){_125(_b9,_bd[0]);return false;}else {if(tt.hasClass("tree-checkbox")){_e8(_b9,_bd[0],!tt.hasClass("tree-checkbox1"));return false;}else {_16a(_b9,_bd[0]);_ba.onClick.call(_b9,_c0(_b9,_bd[0]));}}e.stopPropagation();}).bind("dblclick",function(e){var _be=$(e.target).closest("div.tree-node");if(!_be.length){return;}_16a(_b9,_be[0]);_ba.onDblClick.call(_b9,_c0(_b9,_be[0]));e.stopPropagation();}).bind("contextmenu",function(e){var _bf=$(e.target).closest("div.tree-node");if(!_bf.length){return;}_ba.onContextMenu.call(_b9,e,_c0(_b9,_bf[0]));e.stopPropagation();});};function _c1(_c2){var _c3=$.data(_c2,"tree").options;_c3.dnd=false;var _c4=$(_c2).find("div.tree-node");_c4.draggable("disable");_c4.css("cursor","pointer");};function _c5(_c6){var _c7=$.data(_c6,"tree");var _c8=_c7.options;var _c9=_c7.tree;_c7.disabledNodes=[];_c8.dnd=true;_c9.find("div.tree-node").draggable({disabled:false,revert:true,cursor:"pointer",proxy:function proxy(_ca){var p=$("<div class=\"tree-node-proxy\"></div>").appendTo("body");p.html("<span class=\"tree-dnd-icon tree-dnd-no\">&nbsp;</span>"+$(_ca).find(".tree-title").html());p.hide();return p;},deltaX:15,deltaY:15,onBeforeDrag:function onBeforeDrag(e){if(_c8.onBeforeDrag.call(_c6,_c0(_c6,this))==false){return false;}if($(e.target).hasClass("tree-hit")||$(e.target).hasClass("tree-checkbox")){return false;}if(e.which!=1){return false;}$(this).next("ul").find("div.tree-node").droppable({accept:"no-accept"});var _cb=$(this).find("span.tree-indent");if(_cb.length){e.data.offsetWidth-=_cb.length*_cb.width();}},onStartDrag:function onStartDrag(){$(this).draggable("proxy").css({left:-10000,top:-10000});_c8.onStartDrag.call(_c6,_c0(_c6,this));var _cc=_c0(_c6,this);if(_cc.id==undefined){_cc.id="easyui_tree_node_id_temp";_108(_c6,_cc);}_c7.draggingNodeId=_cc.id;},onDrag:function onDrag(e){var x1=e.pageX,y1=e.pageY,x2=e.data.startX,y2=e.data.startY;var d=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));if(d>3){$(this).draggable("proxy").show();}this.pageY=e.pageY;},onStopDrag:function onStopDrag(){$(this).next("ul").find("div.tree-node").droppable({accept:"div.tree-node"});for(var i=0;i<_c7.disabledNodes.length;i++){$(_c7.disabledNodes[i]).droppable("enable");}_c7.disabledNodes=[];var _cd=_162(_c6,_c7.draggingNodeId);if(_cd&&_cd.id=="easyui_tree_node_id_temp"){_cd.id="";_108(_c6,_cd);}_c8.onStopDrag.call(_c6,_cd);}}).droppable({accept:"div.tree-node",onDragEnter:function onDragEnter(e,_ce){if(_c8.onDragEnter.call(_c6,this,_cf(_ce))==false){_d0(_ce,false);$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");$(this).droppable("disable");_c7.disabledNodes.push(this);}},onDragOver:function onDragOver(e,_d1){if($(this).droppable("options").disabled){return;}var _d2=_d1.pageY;var top=$(this).offset().top;var _d3=top+$(this).outerHeight();_d0(_d1,true);$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");if(_d2>top+(_d3-top)/2){if(_d3-_d2<5){$(this).addClass("tree-node-bottom");}else {$(this).addClass("tree-node-append");}}else {if(_d2-top<5){$(this).addClass("tree-node-top");}else {$(this).addClass("tree-node-append");}}if(_c8.onDragOver.call(_c6,this,_cf(_d1))==false){_d0(_d1,false);$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");$(this).droppable("disable");_c7.disabledNodes.push(this);}},onDragLeave:function onDragLeave(e,_d4){_d0(_d4,false);$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");_c8.onDragLeave.call(_c6,this,_cf(_d4));},onDrop:function onDrop(e,_d5){var _d6=this;var _d7,_d8;if($(this).hasClass("tree-node-append")){_d7=_d9;_d8="append";}else {_d7=_da;_d8=$(this).hasClass("tree-node-top")?"top":"bottom";}if(_c8.onBeforeDrop.call(_c6,_d6,_cf(_d5),_d8)==false){$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");return;}_d7(_d5,_d6,_d8);$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");}});function _cf(_db,pop){return $(_db).closest("ul.tree").tree(pop?"pop":"getData",_db);};function _d0(_dc,_dd){var _de=$(_dc).draggable("proxy").find("span.tree-dnd-icon");_de.removeClass("tree-dnd-yes tree-dnd-no").addClass(_dd?"tree-dnd-yes":"tree-dnd-no");};function _d9(_df,_e0){if(_c0(_c6,_e0).state=="closed"){_11d(_c6,_e0,function(){_e1();});}else {_e1();}function _e1(){var _e2=_cf(_df,true);$(_c6).tree("append",{parent:_e0,data:[_e2]});_c8.onDrop.call(_c6,_e0,_e2,"append");};};function _da(_e3,_e4,_e5){var _e6={};if(_e5=="top"){_e6.before=_e4;}else {_e6.after=_e4;}var _e7=_cf(_e3,true);_e6.data=_e7;$(_c6).tree("insert",_e6);_c8.onDrop.call(_c6,_e4,_e7,_e5);};};function _e8(_e9,_ea,_eb){var _ec=$.data(_e9,"tree").options;if(!_ec.checkbox){return;}var _ed=_c0(_e9,_ea);if(_ec.onBeforeCheck.call(_e9,_ed,_eb)==false){return;}var _ee=$(_ea);var ck=_ee.find(".tree-checkbox");ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");if(_eb){ck.addClass("tree-checkbox1");}else {ck.addClass("tree-checkbox0");}if(_ec.cascadeCheck){_ef(_ee);_f0(_ee);}_ec.onCheck.call(_e9,_ed,_eb);function _f0(_f1){var _f2=_f1.next().find(".tree-checkbox");_f2.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");if(_f1.find(".tree-checkbox").hasClass("tree-checkbox1")){_f2.addClass("tree-checkbox1");}else {_f2.addClass("tree-checkbox0");}};function _ef(_f3){var _f4=_130(_e9,_f3[0]);if(_f4){var ck=$(_f4.target).find(".tree-checkbox");ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");if(_f5(_f3)){ck.addClass("tree-checkbox1");}else {if(_f6(_f3)){ck.addClass("tree-checkbox0");}else {ck.addClass("tree-checkbox2");}}_ef($(_f4.target));}function _f5(n){var ck=n.find(".tree-checkbox");if(ck.hasClass("tree-checkbox0")||ck.hasClass("tree-checkbox2")){return false;}var b=true;n.parent().siblings().each(function(){if(!$(this).children("div.tree-node").children(".tree-checkbox").hasClass("tree-checkbox1")){b=false;}});return b;};function _f6(n){var ck=n.find(".tree-checkbox");if(ck.hasClass("tree-checkbox1")||ck.hasClass("tree-checkbox2")){return false;}var b=true;n.parent().siblings().each(function(){if(!$(this).children("div.tree-node").children(".tree-checkbox").hasClass("tree-checkbox0")){b=false;}});return b;};};};function _f7(_f8,_f9){var _fa=$.data(_f8,"tree").options;if(!_fa.checkbox){return;}var _fb=$(_f9);if(_fc(_f8,_f9)){var ck=_fb.find(".tree-checkbox");if(ck.length){if(ck.hasClass("tree-checkbox1")){_e8(_f8,_f9,true);}else {_e8(_f8,_f9,false);}}else {if(_fa.onlyLeafCheck){$("<span class=\"tree-checkbox tree-checkbox0\"></span>").insertBefore(_fb.find(".tree-title"));}}}else {var ck=_fb.find(".tree-checkbox");if(_fa.onlyLeafCheck){ck.remove();}else {if(ck.hasClass("tree-checkbox1")){_e8(_f8,_f9,true);}else {if(ck.hasClass("tree-checkbox2")){var _fd=true;var _fe=true;var _ff=_100(_f8,_f9);for(var i=0;i<_ff.length;i++){if(_ff[i].checked){_fe=false;}else {_fd=false;}}if(_fd){_e8(_f8,_f9,true);}if(_fe){_e8(_f8,_f9,false);}}}}}};function _101(_102,ul,data,_103){var _104=$.data(_102,"tree");var opts=_104.options;var _105=$(ul).prevAll("div.tree-node:first");data=opts.loadFilter.call(_102,data,_105[0]);var _106=_107(_102,"domId",_105.attr("id"));if(!_103){_106?_106.children=data:_104.data=data;$(ul).empty();}else {if(_106){_106.children?_106.children=_106.children.concat(data):_106.children=data;}else {_104.data=_104.data.concat(data);}}opts.view.render.call(opts.view,_102,ul,data);if(opts.dnd){_c5(_102);}if(_106){_108(_102,_106);}var _109=[];var _10a=[];for(var i=0;i<data.length;i++){var node=data[i];if(!node.checked){_109.push(node);}}_10b(data,function(node){if(node.checked){_10a.push(node);}});var _10c=opts.onCheck;opts.onCheck=function(){};if(_109.length){_e8(_102,$("#"+_109[0].domId)[0],false);}for(var i=0;i<_10a.length;i++){_e8(_102,$("#"+_10a[i].domId)[0],true);}opts.onCheck=_10c;setTimeout(function(){_10d(_102,_102);},0);opts.onLoadSuccess.call(_102,_106,data);};function _10d(_10e,ul,_10f){var opts=$.data(_10e,"tree").options;if(opts.lines){$(_10e).addClass("tree-lines");}else {$(_10e).removeClass("tree-lines");return;}if(!_10f){_10f=true;$(_10e).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");$(_10e).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");var _110=$(_10e).tree("getRoots");if(_110.length>1){$(_110[0].target).addClass("tree-root-first");}else {if(_110.length==1){$(_110[0].target).addClass("tree-root-one");}}}$(ul).children("li").each(function(){var node=$(this).children("div.tree-node");var ul=node.next("ul");if(ul.length){if($(this).next().length){_111(node);}_10d(_10e,ul,_10f);}else {_112(node);}});var _113=$(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");_113.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");function _112(node,_114){var icon=node.find("span.tree-icon");icon.prev("span.tree-indent").addClass("tree-join");};function _111(node){var _115=node.find("span.tree-indent, span.tree-hit").length;node.next().find("div.tree-node").each(function(){$(this).children("span:eq("+(_115-1)+")").addClass("tree-line");});};};function _116(_117,ul,_118,_119){var opts=$.data(_117,"tree").options;_118=_118||{};var _11a=null;if(_117!=ul){var node=$(ul).prev();_11a=_c0(_117,node[0]);}if(opts.onBeforeLoad.call(_117,_11a,_118)==false){return;}var _11b=$(ul).prev().children("span.tree-folder");_11b.addClass("tree-loading");var _11c=opts.loader.call(_117,_118,function(data){_11b.removeClass("tree-loading");_101(_117,ul,data);if(_119){_119();}},function(){_11b.removeClass("tree-loading");opts.onLoadError.apply(_117,arguments);if(_119){_119();}});if(_11c==false){_11b.removeClass("tree-loading");}};function _11d(_11e,_11f,_120){var opts=$.data(_11e,"tree").options;var hit=$(_11f).children("span.tree-hit");if(hit.length==0){return;}if(hit.hasClass("tree-expanded")){return;}var node=_c0(_11e,_11f);if(opts.onBeforeExpand.call(_11e,node)==false){return;}hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");hit.next().addClass("tree-folder-open");var ul=$(_11f).next();if(ul.length){if(opts.animate){ul.slideDown("normal",function(){node.state="open";opts.onExpand.call(_11e,node);if(_120){_120();}});}else {ul.css("display","block");node.state="open";opts.onExpand.call(_11e,node);if(_120){_120();}}}else {var _121=$("<ul style=\"display:none\"></ul>").insertAfter(_11f);_116(_11e,_121[0],{id:node.id},function(){if(_121.is(":empty")){_121.remove();}if(opts.animate){_121.slideDown("normal",function(){node.state="open";opts.onExpand.call(_11e,node);if(_120){_120();}});}else {_121.css("display","block");node.state="open";opts.onExpand.call(_11e,node);if(_120){_120();}}});}};function _122(_123,_124){var opts=$.data(_123,"tree").options;var hit=$(_124).children("span.tree-hit");if(hit.length==0){return;}if(hit.hasClass("tree-collapsed")){return;}var node=_c0(_123,_124);if(opts.onBeforeCollapse.call(_123,node)==false){return;}hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");hit.next().removeClass("tree-folder-open");var ul=$(_124).next();if(opts.animate){ul.slideUp("normal",function(){node.state="closed";opts.onCollapse.call(_123,node);});}else {ul.css("display","none");node.state="closed";opts.onCollapse.call(_123,node);}};function _125(_126,_127){var hit=$(_127).children("span.tree-hit");if(hit.length==0){return;}if(hit.hasClass("tree-expanded")){_122(_126,_127);}else {_11d(_126,_127);}};function _128(_129,_12a){var _12b=_100(_129,_12a);if(_12a){_12b.unshift(_c0(_129,_12a));}for(var i=0;i<_12b.length;i++){_11d(_129,_12b[i].target);}};function _12c(_12d,_12e){var _12f=[];var p=_130(_12d,_12e);while(p){_12f.unshift(p);p=_130(_12d,p.target);}for(var i=0;i<_12f.length;i++){_11d(_12d,_12f[i].target);}};function _131(_132,_133){var c=$(_132).parent();while(c[0].tagName!="BODY"&&c.css("overflow-y")!="auto"){c=c.parent();}var n=$(_133);var ntop=n.offset().top;if(c[0].tagName!="BODY"){var ctop=c.offset().top;if(ntop<ctop){c.scrollTop(c.scrollTop()+ntop-ctop);}else {if(ntop+n.outerHeight()>ctop+c.outerHeight()-18){c.scrollTop(c.scrollTop()+ntop+n.outerHeight()-ctop-c.outerHeight()+18);}}}else {c.scrollTop(ntop);}};function _134(_135,_136){var _137=_100(_135,_136);if(_136){_137.unshift(_c0(_135,_136));}for(var i=0;i<_137.length;i++){_122(_135,_137[i].target);}};function _138(_139,_13a){var node=$(_13a.parent);var data=_13a.data;if(!data){return;}data=$.isArray(data)?data:[data];if(!data.length){return;}var ul;if(node.length==0){ul=$(_139);}else {if(_fc(_139,node[0])){var _13b=node.find("span.tree-icon");_13b.removeClass("tree-file").addClass("tree-folder tree-folder-open");var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_13b);if(hit.prev().length){hit.prev().remove();}}ul=node.next();if(!ul.length){ul=$("<ul></ul>").insertAfter(node);}}_101(_139,ul[0],data,true);_f7(_139,ul.prev());};function _13c(_13d,_13e){var ref=_13e.before||_13e.after;var _13f=_130(_13d,ref);var data=_13e.data;if(!data){return;}data=$.isArray(data)?data:[data];if(!data.length){return;}_138(_13d,{parent:_13f?_13f.target:null,data:data});var _140=_13f?_13f.children:$(_13d).tree("getRoots");for(var i=0;i<_140.length;i++){if(_140[i].domId==$(ref).attr("id")){for(var j=data.length-1;j>=0;j--){_140.splice(_13e.before?i:i+1,0,data[j]);}_140.splice(_140.length-data.length,data.length);break;}}var li=$();for(var i=0;i<data.length;i++){li=li.add($("#"+data[i].domId).parent());}if(_13e.before){li.insertBefore($(ref).parent());}else {li.insertAfter($(ref).parent());}};function _141(_142,_143){var _144=del(_143);$(_143).parent().remove();if(_144){if(!_144.children||!_144.children.length){var node=$(_144.target);node.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");node.find(".tree-hit").remove();$("<span class=\"tree-indent\"></span>").prependTo(node);node.next().remove();}_108(_142,_144);_f7(_142,_144.target);}_10d(_142,_142);function del(_145){var id=$(_145).attr("id");var _146=_130(_142,_145);var cc=_146?_146.children:$.data(_142,"tree").data;for(var i=0;i<cc.length;i++){if(cc[i].domId==id){cc.splice(i,1);break;}}return _146;};};function _108(_147,_148){var opts=$.data(_147,"tree").options;var node=$(_148.target);var data=_c0(_147,_148.target);var _149=data.checked;if(data.iconCls){node.find(".tree-icon").removeClass(data.iconCls);}$.extend(data,_148);node.find(".tree-title").html(opts.formatter.call(_147,data));if(data.iconCls){node.find(".tree-icon").addClass(data.iconCls);}if(_149!=data.checked){_e8(_147,_148.target,data.checked);}};function _14a(_14b){var _14c=_14d(_14b);return _14c.length?_14c[0]:null;};function _14d(_14e){var _14f=$.data(_14e,"tree").data;for(var i=0;i<_14f.length;i++){_150(_14f[i]);}return _14f;};function _100(_151,_152){var _153=[];var n=_c0(_151,_152);var data=n?n.children:$.data(_151,"tree").data;_10b(data,function(node){_153.push(_150(node));});return _153;};function _130(_154,_155){var p=$(_155).closest("ul").prevAll("div.tree-node:first");return _c0(_154,p[0]);};function _156(_157,_158){_158=_158||"checked";if(!$.isArray(_158)){_158=[_158];}var _159=[];for(var i=0;i<_158.length;i++){var s=_158[i];if(s=="checked"){_159.push("span.tree-checkbox1");}else {if(s=="unchecked"){_159.push("span.tree-checkbox0");}else {if(s=="indeterminate"){_159.push("span.tree-checkbox2");}}}}var _15a=[];$(_157).find(_159.join(",")).each(function(){var node=$(this).parent();_15a.push(_c0(_157,node[0]));});return _15a;};function _15b(_15c){var node=$(_15c).find("div.tree-node-selected");return node.length?_c0(_15c,node[0]):null;};function _15d(_15e,_15f){var data=_c0(_15e,_15f);if(data&&data.children){_10b(data.children,function(node){_150(node);});}return data;};function _c0(_160,_161){return _107(_160,"domId",$(_161).attr("id"));};function _162(_163,id){return _107(_163,"id",id);};function _107(_164,_165,_166){var data=$.data(_164,"tree").data;var _167=null;_10b(data,function(node){if(node[_165]==_166){_167=_150(node);return false;}});return _167;};function _150(node){var d=$("#"+node.domId);node.target=d[0];node.checked=d.find(".tree-checkbox").hasClass("tree-checkbox1");return node;};function _10b(data,_168){var _169=[];for(var i=0;i<data.length;i++){_169.push(data[i]);}while(_169.length){var node=_169.shift();if(_168(node)==false){return;}if(node.children){for(var i=node.children.length-1;i>=0;i--){_169.unshift(node.children[i]);}}}};function _16a(_16b,_16c){var opts=$.data(_16b,"tree").options;var node=_c0(_16b,_16c);if(opts.onBeforeSelect.call(_16b,node)==false){return;}$(_16b).find("div.tree-node-selected").removeClass("tree-node-selected");$(_16c).addClass("tree-node-selected");opts.onSelect.call(_16b,node);};function _fc(_16d,_16e){return $(_16e).children("span.tree-hit").length==0;};function _16f(_170,_171){var opts=$.data(_170,"tree").options;var node=_c0(_170,_171);if(opts.onBeforeEdit.call(_170,node)==false){return;}$(_171).css("position","relative");var nt=$(_171).find(".tree-title");var _172=nt.outerWidth();nt.empty();var _173=$("<input class=\"tree-editor\">").appendTo(nt);_173.val(node.text).focus();_173.width(_172+20);_173.height(document.compatMode=="CSS1Compat"?18-(_173.outerHeight()-_173.height()):18);_173.bind("click",function(e){return false;}).bind("mousedown",function(e){e.stopPropagation();}).bind("mousemove",function(e){e.stopPropagation();}).bind("keydown",function(e){if(e.keyCode==13){_174(_170,_171);return false;}else {if(e.keyCode==27){_178(_170,_171);return false;}}}).bind("blur",function(e){e.stopPropagation();_174(_170,_171);});};function _174(_175,_176){var opts=$.data(_175,"tree").options;$(_176).css("position","");var _177=$(_176).find("input.tree-editor");var val=_177.val();_177.remove();var node=_c0(_175,_176);node.text=val;_108(_175,node);opts.onAfterEdit.call(_175,node);};function _178(_179,_17a){var opts=$.data(_179,"tree").options;$(_17a).css("position","");$(_17a).find("input.tree-editor").remove();var node=_c0(_179,_17a);_108(_179,node);opts.onCancelEdit.call(_179,node);};$.fn.tree=function(_17b,_17c){if(typeof _17b=="string"){return $.fn.tree.methods[_17b](this,_17c);}var _17b=_17b||{};return this.each(function(){var _17d=$.data(this,"tree");var opts;if(_17d){opts=$.extend(_17d.options,_17b);_17d.options=opts;}else {opts=$.extend({},$.fn.tree.defaults,$.fn.tree.parseOptions(this),_17b);$.data(this,"tree",{options:opts,tree:_b5(this),data:[]});var data=$.fn.tree.parseData(this);if(data.length){_101(this,this,data);}}_b8(this);if(opts.data){_101(this,this,$.extend(true,[],opts.data));}_116(this,this);});};$.fn.tree.methods={options:function options(jq){return $.data(jq[0],"tree").options;},loadData:function loadData(jq,data){return jq.each(function(){_101(this,this,data);});},getNode:function getNode(jq,_17e){return _c0(jq[0],_17e);},getData:function getData(jq,_17f){return _15d(jq[0],_17f);},reload:function reload(jq,_180){return jq.each(function(){if(_180){var node=$(_180);var hit=node.children("span.tree-hit");hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");node.next().remove();_11d(this,_180);}else {$(this).empty();_116(this,this);}});},getRoot:function getRoot(jq){return _14a(jq[0]);},getRoots:function getRoots(jq){return _14d(jq[0]);},getParent:function getParent(jq,_181){return _130(jq[0],_181);},getChildren:function getChildren(jq,_182){return _100(jq[0],_182);},getChecked:function getChecked(jq,_183){return _156(jq[0],_183);},getSelected:function getSelected(jq){return _15b(jq[0]);},isLeaf:function isLeaf(jq,_184){return _fc(jq[0],_184);},find:function find(jq,id){return _162(jq[0],id);},select:function select(jq,_185){return jq.each(function(){_16a(this,_185);});},check:function check(jq,_186){return jq.each(function(){_e8(this,_186,true);});},uncheck:function uncheck(jq,_187){return jq.each(function(){_e8(this,_187,false);});},collapse:function collapse(jq,_188){return jq.each(function(){_122(this,_188);});},expand:function expand(jq,_189){return jq.each(function(){_11d(this,_189);});},collapseAll:function collapseAll(jq,_18a){return jq.each(function(){_134(this,_18a);});},expandAll:function expandAll(jq,_18b){return jq.each(function(){_128(this,_18b);});},expandTo:function expandTo(jq,_18c){return jq.each(function(){_12c(this,_18c);});},scrollTo:function scrollTo(jq,_18d){return jq.each(function(){_131(this,_18d);});},toggle:function toggle(jq,_18e){return jq.each(function(){_125(this,_18e);});},append:function append(jq,_18f){return jq.each(function(){_138(this,_18f);});},insert:function insert(jq,_190){return jq.each(function(){_13c(this,_190);});},remove:function remove(jq,_191){return jq.each(function(){_141(this,_191);});},pop:function pop(jq,_192){var node=jq.tree("getData",_192);jq.tree("remove",_192);return node;},update:function update(jq,_193){return jq.each(function(){_108(this,_193);});},enableDnd:function enableDnd(jq){return jq.each(function(){_c5(this);});},disableDnd:function disableDnd(jq){return jq.each(function(){_c1(this);});},beginEdit:function beginEdit(jq,_194){return jq.each(function(){_16f(this,_194);});},endEdit:function endEdit(jq,_195){return jq.each(function(){_174(this,_195);});},cancelEdit:function cancelEdit(jq,_196){return jq.each(function(){_178(this,_196);});}};$.fn.tree.parseOptions=function(_197){var t=$(_197);return $.extend({},$.parser.parseOptions(_197,["url","method",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean",lines:"boolean",dnd:"boolean"}]));};$.fn.tree.parseData=function(_198){var data=[];_199(data,$(_198));return data;function _199(aa,tree){tree.children("li").each(function(){var node=$(this);var item=$.extend({},$.parser.parseOptions(this,["id","iconCls","state"]),{checked:node.attr("checked")?true:undefined});item.text=node.children("span").html();if(!item.text){item.text=node.html();}var _19a=node.children("ul");if(_19a.length){item.children=[];_199(item.children,_19a);}aa.push(item);});};};var _19b=1;var _19c={render:function render(_19d,ul,data){var opts=$.data(_19d,"tree").options;var _19e=$(ul).prev("div.tree-node").find("span.tree-indent, span.tree-hit").length;var cc=_19f(_19e,data);$(ul).append(cc.join(""));function _19f(_1a0,_1a1){var cc=[];for(var i=0;i<_1a1.length;i++){var item=_1a1[i];if(item.state!="open"&&item.state!="closed"){item.state="open";}item.domId="_easyui_tree_"+_19b++;cc.push("<li>");cc.push("<div id=\""+item.domId+"\" class=\"tree-node\">");for(var j=0;j<_1a0;j++){cc.push("<span class=\"tree-indent\"></span>");}var _1a2=false;if(item.state=="closed"){cc.push("<span class=\"tree-hit tree-collapsed\"></span>");cc.push("<span class=\"tree-icon tree-folder "+(item.iconCls?item.iconCls:"")+"\"></span>");}else {if(item.children&&item.children.length){cc.push("<span class=\"tree-hit tree-expanded\"></span>");cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(item.iconCls?item.iconCls:"")+"\"></span>");}else {cc.push("<span class=\"tree-indent\"></span>");cc.push("<span class=\"tree-icon tree-file "+(item.iconCls?item.iconCls:"")+"\"></span>");_1a2=true;}}if(opts.checkbox){if(!opts.onlyLeafCheck||_1a2){cc.push("<span class=\"tree-checkbox tree-checkbox0\"></span>");}}cc.push("<span class=\"tree-title\">"+opts.formatter.call(_19d,item)+"</span>");cc.push("</div>");if(item.children&&item.children.length){var tmp=_19f(_1a0+1,item.children);cc.push("<ul style=\"display:"+(item.state=="closed"?"none":"block")+"\">");cc=cc.concat(tmp);cc.push("</ul>");}cc.push("</li>");}return cc;};}};$.fn.tree.defaults={url:null,method:"post",animate:false,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,dnd:false,data:null,formatter:function formatter(node){return node.text;},loader:function loader(_1a3,_1a4,_1a5){var opts=$(this).tree("options");if(!opts.url){return false;}$.ajax({type:opts.method,url:opts.url,data:_1a3,dataType:"json",success:function success(data){_1a4(data);},error:function error(){_1a5.apply(this,arguments);}});},loadFilter:function loadFilter(data,_1a6){return data;},view:_19c,onBeforeLoad:function onBeforeLoad(node,_1a7){},onLoadSuccess:function onLoadSuccess(node,data){},onLoadError:function onLoadError(){},onClick:function onClick(node){},onDblClick:function onDblClick(node){},onBeforeExpand:function onBeforeExpand(node){},onExpand:function onExpand(node){},onBeforeCollapse:function onBeforeCollapse(node){},onCollapse:function onCollapse(node){},onBeforeCheck:function onBeforeCheck(node,_1a8){},onCheck:function onCheck(node,_1a9){},onBeforeSelect:function onBeforeSelect(node){},onSelect:function onSelect(node){},onContextMenu:function onContextMenu(e,node){},onBeforeDrag:function onBeforeDrag(node){},onStartDrag:function onStartDrag(node){},onStopDrag:function onStopDrag(node){},onDragEnter:function onDragEnter(_1aa,_1ab){},onDragOver:function onDragOver(_1ac,_1ad){},onDragLeave:function onDragLeave(_1ae,_1af){},onBeforeDrop:function onBeforeDrop(_1b0,_1b1,_1b2){},onDrop:function onDrop(_1b3,_1b4,_1b5){},onBeforeEdit:function onBeforeEdit(node){},onAfterEdit:function onAfterEdit(node){},onCancelEdit:function onCancelEdit(node){}};})(jQuery);(function($){function init(_1b6){$(_1b6).addClass("progressbar");$(_1b6).html("<div class=\"progressbar-text\"></div><div class=\"progressbar-value\"><div class=\"progressbar-text\"></div></div>");return $(_1b6);};function _1b7(_1b8,_1b9){var opts=$.data(_1b8,"progressbar").options;var bar=$.data(_1b8,"progressbar").bar;if(_1b9){opts.width=_1b9;}bar._outerWidth(opts.width)._outerHeight(opts.height);bar.find("div.progressbar-text").width(bar.width());bar.find("div.progressbar-text,div.progressbar-value").css({height:bar.height()+"px",lineHeight:bar.height()+"px"});};$.fn.progressbar=function(_1ba,_1bb){if(typeof _1ba=="string"){var _1bc=$.fn.progressbar.methods[_1ba];if(_1bc){return _1bc(this,_1bb);}}_1ba=_1ba||{};return this.each(function(){var _1bd=$.data(this,"progressbar");if(_1bd){$.extend(_1bd.options,_1ba);}else {_1bd=$.data(this,"progressbar",{options:$.extend({},$.fn.progressbar.defaults,$.fn.progressbar.parseOptions(this),_1ba),bar:init(this)});}$(this).progressbar("setValue",_1bd.options.value);_1b7(this);});};$.fn.progressbar.methods={options:function options(jq){return $.data(jq[0],"progressbar").options;},resize:function resize(jq,_1be){return jq.each(function(){_1b7(this,_1be);});},getValue:function getValue(jq){return $.data(jq[0],"progressbar").options.value;},setValue:function setValue(jq,_1bf){if(_1bf<0){_1bf=0;}if(_1bf>100){_1bf=100;}return jq.each(function(){var opts=$.data(this,"progressbar").options;var text=opts.text.replace(/{value}/,_1bf);var _1c0=opts.value;opts.value=_1bf;$(this).find("div.progressbar-value").width(_1bf+"%");$(this).find("div.progressbar-text").html(text);if(_1c0!=_1bf){opts.onChange.call(this,_1bf,_1c0);}});}};$.fn.progressbar.parseOptions=function(_1c1){return $.extend({},$.parser.parseOptions(_1c1,["width","height","text",{value:"number"}]));};$.fn.progressbar.defaults={width:"auto",height:22,value:0,text:"{value}%",onChange:function onChange(_1c2,_1c3){}};})(jQuery);(function($){function init(_1c4){$(_1c4).addClass("tooltip-f");};function _1c5(_1c6){var opts=$.data(_1c6,"tooltip").options;$(_1c6).unbind(".tooltip").bind(opts.showEvent+".tooltip",function(e){_1cd(_1c6,e);}).bind(opts.hideEvent+".tooltip",function(e){_1d3(_1c6,e);}).bind("mousemove.tooltip",function(e){if(opts.trackMouse){opts.trackMouseX=e.pageX;opts.trackMouseY=e.pageY;_1c7(_1c6);}});};function _1c8(_1c9){var _1ca=$.data(_1c9,"tooltip");if(_1ca.showTimer){clearTimeout(_1ca.showTimer);_1ca.showTimer=null;}if(_1ca.hideTimer){clearTimeout(_1ca.hideTimer);_1ca.hideTimer=null;}};function _1c7(_1cb){var _1cc=$.data(_1cb,"tooltip");if(!_1cc||!_1cc.tip){return;}var opts=_1cc.options;var tip=_1cc.tip;if(opts.trackMouse){t=$();var left=opts.trackMouseX+opts.deltaX;var top=opts.trackMouseY+opts.deltaY;}else {var t=$(_1cb);var left=t.offset().left+opts.deltaX;var top=t.offset().top+opts.deltaY;}switch(opts.position){case "right":left+=t._outerWidth()+12+(opts.trackMouse?12:0);top-=(tip._outerHeight()-t._outerHeight())/2;break;case "left":left-=tip._outerWidth()+12+(opts.trackMouse?12:0);top-=(tip._outerHeight()-t._outerHeight())/2;break;case "top":left-=(tip._outerWidth()-t._outerWidth())/2;top-=tip._outerHeight()+12+(opts.trackMouse?12:0);break;case "bottom":left-=(tip._outerWidth()-t._outerWidth())/2;top+=t._outerHeight()+12+(opts.trackMouse?12:0);break;}if(!$(_1cb).is(":visible")){left=-100000;top=-100000;}tip.css({left:left,top:top,zIndex:opts.zIndex!=undefined?opts.zIndex:$.fn.window?$.fn.window.defaults.zIndex++:""});opts.onPosition.call(_1cb,left,top);};function _1cd(_1ce,e){var _1cf=$.data(_1ce,"tooltip");var opts=_1cf.options;var tip=_1cf.tip;if(!tip){tip=$("<div tabindex=\"-1\" class=\"tooltip\">"+"<div class=\"tooltip-content\"></div>"+"<div class=\"tooltip-arrow-outer\"></div>"+"<div class=\"tooltip-arrow\"></div>"+"</div>").appendTo("body");_1cf.tip=tip;_1d0(_1ce);}tip.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-"+opts.position);_1c8(_1ce);_1cf.showTimer=setTimeout(function(){_1c7(_1ce);tip.show();opts.onShow.call(_1ce,e);var _1d1=tip.children(".tooltip-arrow-outer");var _1d2=tip.children(".tooltip-arrow");var bc="border-"+opts.position+"-color";_1d1.add(_1d2).css({borderTopColor:"",borderBottomColor:"",borderLeftColor:"",borderRightColor:""});_1d1.css(bc,tip.css(bc));_1d2.css(bc,tip.css("backgroundColor"));},opts.showDelay);};function _1d3(_1d4,e){var _1d5=$.data(_1d4,"tooltip");if(_1d5&&_1d5.tip){_1c8(_1d4);_1d5.hideTimer=setTimeout(function(){_1d5.tip.hide();_1d5.options.onHide.call(_1d4,e);},_1d5.options.hideDelay);}};function _1d0(_1d6,_1d7){var _1d8=$.data(_1d6,"tooltip");var opts=_1d8.options;if(_1d7){opts.content=_1d7;}if(!_1d8.tip){return;}var cc=typeof opts.content=="function"?opts.content.call(_1d6):opts.content;_1d8.tip.children(".tooltip-content").html(cc);opts.onUpdate.call(_1d6,cc);};function _1d9(_1da){var _1db=$.data(_1da,"tooltip");if(_1db){_1c8(_1da);var opts=_1db.options;if(_1db.tip){_1db.tip.remove();}if(opts._title){$(_1da).attr("title",opts._title);}$.removeData(_1da,"tooltip");$(_1da).unbind(".tooltip").removeClass("tooltip-f");opts.onDestroy.call(_1da);}};$.fn.tooltip=function(_1dc,_1dd){if(typeof _1dc=="string"){return $.fn.tooltip.methods[_1dc](this,_1dd);}_1dc=_1dc||{};return this.each(function(){var _1de=$.data(this,"tooltip");if(_1de){$.extend(_1de.options,_1dc);}else {$.data(this,"tooltip",{options:$.extend({},$.fn.tooltip.defaults,$.fn.tooltip.parseOptions(this),_1dc)});init(this);}_1c5(this);_1d0(this);});};$.fn.tooltip.methods={options:function options(jq){return $.data(jq[0],"tooltip").options;},tip:function tip(jq){return $.data(jq[0],"tooltip").tip;},arrow:function arrow(jq){return jq.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow");},show:function show(jq,e){return jq.each(function(){_1cd(this,e);});},hide:function hide(jq,e){return jq.each(function(){_1d3(this,e);});},update:function update(jq,_1df){return jq.each(function(){_1d0(this,_1df);});},reposition:function reposition(jq){return jq.each(function(){_1c7(this);});},destroy:function destroy(jq){return jq.each(function(){_1d9(this);});}};$.fn.tooltip.parseOptions=function(_1e0){var t=$(_1e0);var opts=$.extend({},$.parser.parseOptions(_1e0,["position","showEvent","hideEvent","content",{deltaX:"number",deltaY:"number",showDelay:"number",hideDelay:"number"}]),{_title:t.attr("title")});t.attr("title","");if(!opts.content){opts.content=opts._title;}return opts;};$.fn.tooltip.defaults={position:"bottom",content:null,trackMouse:false,deltaX:0,deltaY:0,showEvent:"mouseenter",hideEvent:"mouseleave",showDelay:200,hideDelay:100,onShow:function onShow(e){},onHide:function onHide(e){},onUpdate:function onUpdate(_1e1){},onPosition:function onPosition(left,top){},onDestroy:function onDestroy(){}};})(jQuery);(function($){var _$$fn$panel$defaults;$.fn._remove=function(){return this.each(function(){$(this).remove();try{this.outerHTML="";}catch(err){}});};function _1e2(node){node._remove();};function _1e3(_1e4,_1e5){var opts=$.data(_1e4,"panel").options;var _1e6=$.data(_1e4,"panel").panel;var _1e7=_1e6.children("div.panel-header");var _1e8=_1e6.children("div.panel-bodys");if(_1e5){$.extend(opts,{width:_1e5.width,height:_1e5.height,left:_1e5.left,top:_1e5.top});}opts.fit?$.extend(opts,_1e6._fit()):_1e6._fit(false);_1e6.css({left:opts.left,top:opts.top});if(!isNaN(opts.width)){_1e6._outerWidth(opts.width);}else {_1e6.width("auto");}_1e7.add(_1e8)._outerWidth(_1e6.width());if(!isNaN(opts.height)){_1e6._outerHeight(opts.height);_1e8._outerHeight(_1e6.height()-_1e7._outerHeight());}else {_1e8.height("auto");}_1e6.css("height","");opts.onResize.apply(_1e4,[opts.width,opts.height]);$(_1e4).find(">div:visible,>form>div:visible").triggerHandler("_resize");};function _1e9(_1ea,_1eb){var opts=$.data(_1ea,"panel").options;var _1ec=$.data(_1ea,"panel").panel;if(_1eb){if(_1eb.left!=null){opts.left=_1eb.left;}if(_1eb.top!=null){opts.top=_1eb.top;}}_1ec.css({left:opts.left,top:opts.top});opts.onMove.apply(_1ea,[opts.left,opts.top]);};function _1ed(_1ee){$(_1ee).addClass("panel-bodys");var _1ef=$("<div class=\"panel\"></div>").insertBefore(_1ee);_1ef[0].appendChild(_1ee);_1ef.bind("_resize",function(){var opts=$.data(_1ee,"panel").options;if(opts.fit==true){_1e3(_1ee);}return false;});return _1ef;};function _1f0(_1f1){var opts=$.data(_1f1,"panel").options;var _1f2=$.data(_1f1,"panel").panel;if(opts.tools&&typeof opts.tools=="string"){_1f2.find(">div.panel-header>div.panel-tool .panel-tool-a").appendTo(opts.tools);}_1e2(_1f2.children("div.panel-header"));if(opts.title&&!opts.noheader){var _1f3=$("<div class=\"panel-header\"><div class=\"panel-title\">"+opts.title+"</div></div>").prependTo(_1f2);if(opts.iconCls){_1f3.find(".panel-title").addClass("panel-with-icon");$("<div class=\"panel-icon\"></div>").addClass(opts.iconCls).appendTo(_1f3);}var tool=$("<div class=\"panel-tool\"></div>").appendTo(_1f3);tool.bind("click",function(e){e.stopPropagation();});if(opts.tools){if($.isArray(opts.tools)){for(var i=0;i<opts.tools.length;i++){var t=$("<a href=\"javascript:void(0)\"></a>").addClass(opts.tools[i].iconCls).appendTo(tool);if(opts.tools[i].handler){t.bind("click",eval(opts.tools[i].handler));}}}else {$(opts.tools).children().each(function(){$(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(tool);});}}if(opts.collapsible){$("<a class=\"panel-tool-collapse\" href=\"javascript:void(0)\"></a>").appendTo(tool).bind("click",function(){if(opts.collapsed==true){_210(_1f1,true);}else {_205(_1f1,true);}return false;});}if(opts.minimizable){$("<a class=\"panel-tool-min\" href=\"javascript:void(0)\"></a>").appendTo(tool).bind("click",function(){_216(_1f1);return false;});}if(opts.maximizable){$("<a class=\"panel-tool-max\" href=\"javascript:void(0)\"></a>").appendTo(tool).bind("click",function(){if(opts.maximized==true){_219(_1f1);}else {_204(_1f1);}return false;});}if(opts.closable){$("<a class=\"panel-tool-close\" href=\"javascript:void(0)\"></a>").appendTo(tool).bind("click",function(){_1f4(_1f1);return false;});}_1f2.children("div.panel-bodys").removeClass("panel-bodys-noheader");}else {_1f2.children("div.panel-bodys").addClass("panel-bodys-noheader");}};function _1f5(_1f6,_1f7){var _1f8=$.data(_1f6,"panel");var opts=_1f8.options;if(_1f9){opts.queryParams=_1f7;}if(opts.href){if(!_1f8.isLoaded||!opts.cache){var _1f9=$.extend({},opts.queryParams);if(opts.onBeforeLoad.call(_1f6,_1f9)==false){return;}_1f8.isLoaded=false;_1fa(_1f6);if(opts.loadingMessage){$(_1f6).html($("<div class=\"panel-loading\"></div>").html(opts.loadingMessage));}opts.loader.call(_1f6,_1f9,function(data){_1fb(opts.extractor.call(_1f6,data));opts.onLoad.apply(_1f6,arguments);_1f8.isLoaded=true;},function(){opts.onLoadError.apply(_1f6,arguments);});}}else {if(opts.content){if(!_1f8.isLoaded){_1fa(_1f6);_1fb(opts.content);_1f8.isLoaded=true;}}}function _1fb(_1fc){$(_1f6).html(_1fc);$.parser.parse($(_1f6));};};function _1fa(_1fd){var t=$(_1fd);t.find(".combo-f").each(function(){$(this).combo("destroy");});t.find(".m-btn").each(function(){$(this).menubutton("destroy");});t.find(".s-btn").each(function(){$(this).splitbutton("destroy");});t.find(".tooltip-f").each(function(){$(this).tooltip("destroy");});t.children("div").each(function(){$(this)._fit(false);});};function _1fe(_1ff){$(_1ff).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible").each(function(){$(this).triggerHandler("_resize",[true]);});};function _200(_201,_202){var opts=$.data(_201,"panel").options;var _203=$.data(_201,"panel").panel;if(_202!=true){if(opts.onBeforeOpen.call(_201)==false){return;}}_203.show();opts.closed=false;opts.minimized=false;var tool=_203.children("div.panel-header").find("a.panel-tool-restore");if(tool.length){opts.maximized=true;}opts.onOpen.call(_201);if(opts.maximized==true){opts.maximized=false;_204(_201);}if(opts.collapsed==true){opts.collapsed=false;_205(_201);}if(!opts.collapsed){_1f5(_201);_1fe(_201);}};function _1f4(_206,_207){var opts=$.data(_206,"panel").options;var _208=$.data(_206,"panel").panel;if(_207!=true){if(opts.onBeforeClose.call(_206)==false){return;}}_208._fit(false);_208.hide();opts.closed=true;opts.onClose.call(_206);};function _209(_20a,_20b){var opts=$.data(_20a,"panel").options;var _20c=$.data(_20a,"panel").panel;if(_20b!=true){if(opts.onBeforeDestroy.call(_20a)==false){return;}}_1fa(_20a);_1e2(_20c);opts.onDestroy.call(_20a);};function _205(_20d,_20e){var opts=$.data(_20d,"panel").options;var _20f=$.data(_20d,"panel").panel;var body=_20f.children("div.panel-bodys");var tool=_20f.children("div.panel-header").find("a.panel-tool-collapse");if(opts.collapsed==true){return;}body.stop(true,true);if(opts.onBeforeCollapse.call(_20d)==false){return;}tool.addClass("panel-tool-expand");if(_20e==true){body.slideUp("normal",function(){opts.collapsed=true;opts.onCollapse.call(_20d);});}else {body.hide();opts.collapsed=true;opts.onCollapse.call(_20d);}};function _210(_211,_212){var opts=$.data(_211,"panel").options;var _213=$.data(_211,"panel").panel;var body=_213.children("div.panel-bodys");var tool=_213.children("div.panel-header").find("a.panel-tool-collapse");if(opts.collapsed==false){return;}body.stop(true,true);if(opts.onBeforeExpand.call(_211)==false){return;}tool.removeClass("panel-tool-expand");if(_212==true){body.slideDown("normal",function(){opts.collapsed=false;opts.onExpand.call(_211);_1f5(_211);_1fe(_211);});}else {body.show();opts.collapsed=false;opts.onExpand.call(_211);_1f5(_211);_1fe(_211);}};function _204(_214){var opts=$.data(_214,"panel").options;var _215=$.data(_214,"panel").panel;var tool=_215.children("div.panel-header").find("a.panel-tool-max");if(opts.maximized==true){return;}tool.addClass("panel-tool-restore");if(!$.data(_214,"panel").original){$.data(_214,"panel").original={width:opts.width,height:opts.height,left:opts.left,top:opts.top,fit:opts.fit};}opts.left=0;opts.top=0;opts.fit=true;_1e3(_214);opts.minimized=false;opts.maximized=true;opts.onMaximize.call(_214);};function _216(_217){var opts=$.data(_217,"panel").options;var _218=$.data(_217,"panel").panel;_218._fit(false);_218.hide();opts.minimized=true;opts.maximized=false;opts.onMinimize.call(_217);};function _219(_21a){var opts=$.data(_21a,"panel").options;var _21b=$.data(_21a,"panel").panel;var tool=_21b.children("div.panel-header").find("a.panel-tool-max");if(opts.maximized==false){return;}_21b.show();tool.removeClass("panel-tool-restore");$.extend(opts,$.data(_21a,"panel").original);_1e3(_21a);opts.minimized=false;opts.maximized=false;$.data(_21a,"panel").original=null;opts.onRestore.call(_21a);};function _21c(_21d){var opts=$.data(_21d,"panel").options;var _21e=$.data(_21d,"panel").panel;var _21f=$(_21d).panel("header");var body=$(_21d).panel("body");_21e.css(opts.style);_21e.addClass(opts.cls);if(opts.border){_21f.removeClass("panel-header-noborder");body.removeClass("panel-bodys-noborder");}else {_21f.addClass("panel-header-noborder");body.addClass("panel-bodys-noborder");}_21f.addClass(opts.headerCls);body.addClass(opts.bodyCls);if(opts.id){$(_21d).attr("id",opts.id);}else {$(_21d).attr("id","");}};function _220(_221,_222){$.data(_221,"panel").options.title=_222;$(_221).panel("header").find("div.panel-title").html(_222);};var TO=false;var _223=true;$(window).unbind(".panel").bind("resize.panel",function(){if(!_223){return;}if(TO!==false){clearTimeout(TO);}TO=setTimeout(function(){_223=false;var _224=$("body.layout");if(_224.length){_224.layout("resize");}else {$("body").children("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible").triggerHandler("_resize");}_223=true;TO=false;},200);});$.fn.panel=function(_225,_226){if(typeof _225=="string"){return $.fn.panel.methods[_225](this,_226);}_225=_225||{};return this.each(function(){var _227=$.data(this,"panel");var opts;if(_227){opts=$.extend(_227.options,_225);_227.isLoaded=false;}else {opts=$.extend({},$.fn.panel.defaults,$.fn.panel.parseOptions(this),_225);$(this).attr("title","");_227=$.data(this,"panel",{options:opts,panel:_1ed(this),isLoaded:false});}_1f0(this);_21c(this);if(opts.doSize==true){_227.panel.css("display","block");_1e3(this);}if(opts.closed==true||opts.minimized==true){_227.panel.hide();}else {_200(this);}});};$.fn.panel.methods={options:function options(jq){return $.data(jq[0],"panel").options;},panel:function panel(jq){return $.data(jq[0],"panel").panel;},header:function header(jq){return $.data(jq[0],"panel").panel.find(">div.panel-header");},body:function body(jq){return $.data(jq[0],"panel").panel.find(">div.panel-bodys");},setTitle:function setTitle(jq,_228){return jq.each(function(){_220(this,_228);});},open:function open(jq,_229){return jq.each(function(){_200(this,_229);});},close:function close(jq,_22a){return jq.each(function(){_1f4(this,_22a);});},destroy:function destroy(jq,_22b){return jq.each(function(){_209(this,_22b);});},refresh:function refresh(jq,href){return jq.each(function(){var _22c=$.data(this,"panel");_22c.isLoaded=false;if(href){if(typeof href=="string"){_22c.options.href=href;}else {_22c.options.queryParams=href;}}_1f5(this);});},resize:function resize(jq,_22d){return jq.each(function(){_1e3(this,_22d);});},move:function move(jq,_22e){return jq.each(function(){_1e9(this,_22e);});},maximize:function maximize(jq){return jq.each(function(){_204(this);});},minimize:function minimize(jq){return jq.each(function(){_216(this);});},restore:function restore(jq){return jq.each(function(){_219(this);});},collapse:function collapse(jq,_22f){return jq.each(function(){_205(this,_22f);});},expand:function expand(jq,_230){return jq.each(function(){_210(this,_230);});}};$.fn.panel.parseOptions=function(_231){var t=$(_231);return $.extend({},$.parser.parseOptions(_231,["id","width","height","left","top","title","iconCls","cls","headerCls","bodyCls","tools","href","method",{cache:"boolean",fit:"boolean",border:"boolean",noheader:"boolean"},{collapsible:"boolean",minimizable:"boolean",maximizable:"boolean"},{closable:"boolean",collapsed:"boolean",minimized:"boolean",maximized:"boolean",closed:"boolean"}]),{loadingMessage:t.attr("loadingMessage")!=undefined?t.attr("loadingMessage"):undefined});};$.fn.panel.defaults=(_$$fn$panel$defaults={id:null,title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},href:null,cache:true,fit:false,border:true,doSize:true,noheader:false,content:null,collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,tools:null,queryParams:{},method:"get"},_defineProperty(_$$fn$panel$defaults,"href",null),_defineProperty(_$$fn$panel$defaults,"loadingMessage","Loading..."),_defineProperty(_$$fn$panel$defaults,"loader",function loader(_232,_233,_234){var opts=$(this).panel("options");if(!opts.href){return false;}$.ajax({type:opts.method,url:opts.href,cache:false,data:_232,dataType:"html",success:function success(data){_233(data);},error:function error(){_234.apply(this,arguments);}});}),_defineProperty(_$$fn$panel$defaults,"extractor",function extractor(data){var _235=/<body[^>]*>((.|[\n\r])*)<\/body>/im;var _236=_235.exec(data);if(_236){return _236[1];}else {return data;}}),_defineProperty(_$$fn$panel$defaults,"onBeforeLoad",function onBeforeLoad(_237){}),_defineProperty(_$$fn$panel$defaults,"onLoad",function onLoad(){}),_defineProperty(_$$fn$panel$defaults,"onLoadError",function onLoadError(){}),_defineProperty(_$$fn$panel$defaults,"onBeforeOpen",function onBeforeOpen(){}),_defineProperty(_$$fn$panel$defaults,"onOpen",function onOpen(){}),_defineProperty(_$$fn$panel$defaults,"onBeforeClose",function onBeforeClose(){}),_defineProperty(_$$fn$panel$defaults,"onClose",function onClose(){}),_defineProperty(_$$fn$panel$defaults,"onBeforeDestroy",function onBeforeDestroy(){}),_defineProperty(_$$fn$panel$defaults,"onDestroy",function onDestroy(){}),_defineProperty(_$$fn$panel$defaults,"onResize",function onResize(_238,_239){}),_defineProperty(_$$fn$panel$defaults,"onMove",function onMove(left,top){}),_defineProperty(_$$fn$panel$defaults,"onMaximize",function onMaximize(){}),_defineProperty(_$$fn$panel$defaults,"onRestore",function onRestore(){}),_defineProperty(_$$fn$panel$defaults,"onMinimize",function onMinimize(){}),_defineProperty(_$$fn$panel$defaults,"onBeforeCollapse",function onBeforeCollapse(){}),_defineProperty(_$$fn$panel$defaults,"onBeforeExpand",function onBeforeExpand(){}),_defineProperty(_$$fn$panel$defaults,"onCollapse",function onCollapse(){}),_defineProperty(_$$fn$panel$defaults,"onExpand",function onExpand(){}),_$$fn$panel$defaults);})(jQuery);(function($){function _23a(_23b,_23c){var opts=$.data(_23b,"window").options;if(_23c){$.extend(opts,_23c);}$(_23b).panel("resize",opts);};function _23d(_23e,_23f){var _240=$.data(_23e,"window");if(_23f){if(_23f.left!=null){_240.options.left=_23f.left;}if(_23f.top!=null){_240.options.top=_23f.top;}}$(_23e).panel("move",_240.options);if(_240.shadow){_240.shadow.css({left:_240.options.left,top:_240.options.top});}};function _241(_242,_243){var _244=$.data(_242,"window");var opts=_244.options;var _245=opts.width;if(isNaN(_245)){_245=_244.window._outerWidth();}if(opts.inline){var _246=_244.window.parent();opts.left=(_246.width()-_245)/2+_246.scrollLeft();}else {opts.left=($(window)._outerWidth()-_245)/2+$(document).scrollLeft();}if(_243){_23d(_242);}};function _247(_248,_249){var _24a=$.data(_248,"window");var opts=_24a.options;var _24b=opts.height;if(isNaN(_24b)){_24b=_24a.window._outerHeight();}if(opts.inline){var _24c=_24a.window.parent();opts.top=(_24c.height()-_24b)/2+_24c.scrollTop();}else {opts.top=($(window)._outerHeight()-_24b)/2+$(document).scrollTop();}if(_249){_23d(_248);}};function _24d(_24e){var _24f=$.data(_24e,"window");var _250=_24f.options.closed;var win=$(_24e).panel($.extend({},_24f.options,{border:false,doSize:true,closed:true,cls:"window",headerCls:"window-header",bodyCls:"window-body "+(_24f.options.noheader?"window-body-noheader":""),onBeforeDestroy:function onBeforeDestroy(){if(_24f.options.onBeforeDestroy.call(_24e)==false){return false;}if(_24f.shadow){_24f.shadow.remove();}if(_24f.mask){_24f.mask.remove();}},onClose:function onClose(){if(_24f.shadow){_24f.shadow.hide();}if(_24f.mask){_24f.mask.hide();}_24f.options.onClose.call(_24e);},onOpen:function onOpen(){if(_24f.mask){_24f.mask.css({display:"block",zIndex:$.fn.window.defaults.zIndex++});}if(_24f.shadow){_24f.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:_24f.options.left,top:_24f.options.top,width:_24f.window._outerWidth(),height:_24f.window._outerHeight()});}_24f.window.css("z-index",$.fn.window.defaults.zIndex++);_24f.options.onOpen.call(_24e);},onResize:function onResize(_251,_252){var opts=$(this).panel("options");$.extend(_24f.options,{width:opts.width,height:opts.height,left:opts.left,top:opts.top});if(_24f.shadow){_24f.shadow.css({left:_24f.options.left,top:_24f.options.top,width:_24f.window._outerWidth(),height:_24f.window._outerHeight()});}_24f.options.onResize.call(_24e,_251,_252);},onMinimize:function onMinimize(){if(_24f.shadow){_24f.shadow.hide();}if(_24f.mask){_24f.mask.hide();}_24f.options.onMinimize.call(_24e);},onBeforeCollapse:function onBeforeCollapse(){if(_24f.options.onBeforeCollapse.call(_24e)==false){return false;}if(_24f.shadow){_24f.shadow.hide();}},onExpand:function onExpand(){if(_24f.shadow){_24f.shadow.show();}_24f.options.onExpand.call(_24e);}}));_24f.window=win.panel("panel");if(_24f.mask){_24f.mask.remove();}if(_24f.options.modal==true){_24f.mask=$("<div class=\"window-mask\"></div>").insertAfter(_24f.window);_24f.mask.css({width:_24f.options.inline?_24f.mask.parent().width():_253().width,height:_24f.options.inline?_24f.mask.parent().height():_253().height,display:"none"});}if(_24f.shadow){_24f.shadow.remove();}if(_24f.options.shadow==true){_24f.shadow=$("<div class=\"window-shadow\"></div>").insertAfter(_24f.window);_24f.shadow.css({display:"none"});}if(_24f.options.left==null){_241(_24e);}if(_24f.options.top==null){_247(_24e);}_23d(_24e);if(!_250){win.window("open");}};function _254(_255){var _256=$.data(_255,"window");_256.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_256.options.draggable==false,onStartDrag:function onStartDrag(e){if(_256.mask){_256.mask.css("z-index",$.fn.window.defaults.zIndex++);}if(_256.shadow){_256.shadow.css("z-index",$.fn.window.defaults.zIndex++);}_256.window.css("z-index",$.fn.window.defaults.zIndex++);if(!_256.proxy){_256.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_256.window);}_256.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});_256.proxy._outerWidth(_256.window._outerWidth());_256.proxy._outerHeight(_256.window._outerHeight());setTimeout(function(){if(_256.proxy){_256.proxy.show();}},500);},onDrag:function onDrag(e){_256.proxy.css({display:"block",left:e.data.left,top:e.data.top});return false;},onStopDrag:function onStopDrag(e){_256.options.left=e.data.left;_256.options.top=e.data.top;$(_255).window("move");_256.proxy.remove();_256.proxy=null;}});_256.window.resizable({disabled:_256.options.resizable==false,onStartResize:function onStartResize(e){_256.pmask=$("<div class=\"window-proxy-mask\"></div>").insertAfter(_256.window);_256.pmask.css({zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:_256.window._outerWidth(),height:_256.window._outerHeight()});if(!_256.proxy){_256.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_256.window);}_256.proxy.css({zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});_256.proxy._outerWidth(e.data.width);_256.proxy._outerHeight(e.data.height);},onResize:function onResize(e){_256.proxy.css({left:e.data.left,top:e.data.top});_256.proxy._outerWidth(e.data.width);_256.proxy._outerHeight(e.data.height);return false;},onStopResize:function onStopResize(e){$.extend(_256.options,{left:e.data.left,top:e.data.top,width:e.data.width,height:e.data.height});_23a(_255);_256.pmask.remove();_256.pmask=null;_256.proxy.remove();_256.proxy=null;}});};function _253(){if(document.compatMode=="BackCompat"){return {width:Math.max(document.body.scrollWidth,document.body.clientWidth),height:Math.max(document.body.scrollHeight,document.body.clientHeight)};}else {return {width:Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth),height:Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)};}};$(window).resize(function(){$("body>div.window-mask").css({width:$(window)._outerWidth(),height:$(window)._outerHeight()});setTimeout(function(){$("body>div.window-mask").css({width:_253().width,height:_253().height});},50);});$.fn.window=function(_257,_258){if(typeof _257=="string"){var _259=$.fn.window.methods[_257];if(_259){return _259(this,_258);}else {return this.panel(_257,_258);}}_257=_257||{};return this.each(function(){var _25a=$.data(this,"window");if(_25a){$.extend(_25a.options,_257);}else {_25a=$.data(this,"window",{options:$.extend({},$.fn.window.defaults,$.fn.window.parseOptions(this),_257)});if(!_25a.options.inline){document.body.appendChild(this);}}_24d(this);_254(this);});};$.fn.window.methods={options:function options(jq){var _25b=jq.panel("options");var _25c=$.data(jq[0],"window").options;return $.extend(_25c,{closed:_25b.closed,collapsed:_25b.collapsed,minimized:_25b.minimized,maximized:_25b.maximized});},window:function window(jq){return $.data(jq[0],"window").window;},resize:function resize(jq,_25d){return jq.each(function(){_23a(this,_25d);});},move:function move(jq,_25e){return jq.each(function(){_23d(this,_25e);});},hcenter:function hcenter(jq){return jq.each(function(){_241(this,true);});},vcenter:function vcenter(jq){return jq.each(function(){_247(this,true);});},center:function center(jq){return jq.each(function(){_241(this);_247(this);_23d(this);});}};$.fn.window.parseOptions=function(_25f){return $.extend({},$.fn.panel.parseOptions(_25f),$.parser.parseOptions(_25f,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]));};$.fn.window.defaults=$.extend({},$.fn.panel.defaults,{zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,inline:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false});})(jQuery);(function($){function _260(_261){var cp=document.createElement("div");while(_261.firstChild){cp.appendChild(_261.firstChild);}_261.appendChild(cp);var _262=$(cp);_262.attr("style",$(_261).attr("style"));$(_261).removeAttr("style").css("overflow","hidden");_262.panel({border:false,doSize:false,bodyCls:"dialog-content"});return _262;};function _263(_264){var opts=$.data(_264,"dialog").options;var _265=$.data(_264,"dialog").contentPanel;if(opts.toolbar){if($.isArray(opts.toolbar)){$(_264).find("div.dialog-toolbar").remove();var _266=$("<div class=\"dialog-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_264);var tr=_266.find("tr");for(var i=0;i<opts.toolbar.length;i++){var btn=opts.toolbar[i];if(btn=="-"){$("<td><div class=\"dialog-tool-separator\"></div></td>").appendTo(tr);}else {var td=$("<td></td>").appendTo(tr);var tool=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);tool[0].onclick=eval(btn.handler||function(){});tool.linkbutton($.extend({},btn,{plain:true}));}}}else {$(opts.toolbar).addClass("dialog-toolbar").prependTo(_264);$(opts.toolbar).show();}}else {$(_264).find("div.dialog-toolbar").remove();}if(opts.buttons){if($.isArray(opts.buttons)){$(_264).find("div.dialog-button").remove();var _267=$("<div class=\"dialog-button\"></div>").appendTo(_264);for(var i=0;i<opts.buttons.length;i++){var p=opts.buttons[i];var _268=$("<a href=\"javascript:void(0)\"></a>").appendTo(_267);if(p.handler){_268[0].onclick=p.handler;}_268.linkbutton(p);}}else {$(opts.buttons).addClass("dialog-button").appendTo(_264);$(opts.buttons).show();}}else {$(_264).find("div.dialog-button").remove();}var _269=opts.href;var _26a=opts.content;opts.href=null;opts.content=null;_265.panel({closed:opts.closed,cache:opts.cache,href:_269,content:_26a,onLoad:function onLoad(){if(opts.height=="auto"){$(_264).window("resize");}opts.onLoad.apply(_264,arguments);}});$(_264).window($.extend({},opts,{onOpen:function onOpen(){if(_265.panel("options").closed){_265.panel("open");}if(opts.onOpen){opts.onOpen.call(_264);}},onResize:function onResize(_26b,_26c){var _26d=$(_264);_265.panel("panel").show();_265.panel("resize",{width:_26d.width(),height:_26c=="auto"?"auto":_26d.height()-_26d.children("div.dialog-toolbar")._outerHeight()-_26d.children("div.dialog-button")._outerHeight()});if(opts.onResize){opts.onResize.call(_264,_26b,_26c);}}}));opts.href=_269;opts.content=_26a;};function _26e(_26f,href){var _270=$.data(_26f,"dialog").contentPanel;_270.panel("refresh",href);};$.fn.dialog=function(_271,_272){if(typeof _271=="string"){var _273=$.fn.dialog.methods[_271];if(_273){return _273(this,_272);}else {return this.window(_271,_272);}}_271=_271||{};return this.each(function(){var _274=$.data(this,"dialog");if(_274){$.extend(_274.options,_271);}else {$.data(this,"dialog",{options:$.extend({},$.fn.dialog.defaults,$.fn.dialog.parseOptions(this),_271),contentPanel:_260(this)});}_263(this);});};$.fn.dialog.methods={options:function options(jq){var _275=$.data(jq[0],"dialog").options;var _276=jq.panel("options");$.extend(_275,{closed:_276.closed,collapsed:_276.collapsed,minimized:_276.minimized,maximized:_276.maximized});var _277=$.data(jq[0],"dialog").contentPanel;return _275;},dialog:function dialog(jq){return jq.window("window");},refresh:function refresh(jq,href){return jq.each(function(){_26e(this,href);});}};$.fn.dialog.parseOptions=function(_278){return $.extend({},$.fn.window.parseOptions(_278),$.parser.parseOptions(_278,["toolbar","buttons"]));};$.fn.dialog.defaults=$.extend({},$.fn.window.defaults,{title:"New Dialog",collapsible:false,minimizable:false,maximizable:false,resizable:false,toolbar:null,buttons:null});})(jQuery);(function($){function show(el,type,_279,_27a){var win=$(el).window("window");if(!win){return;}switch(type){case null:win.show();break;case "slide":win.slideDown(_279);break;case "fade":win.fadeIn(_279);break;case "show":win.show(_279);break;}var _27b=null;if(_27a>0){_27b=setTimeout(function(){hide(el,type,_279);},_27a);}win.hover(function(){if(_27b){clearTimeout(_27b);}},function(){if(_27a>0){_27b=setTimeout(function(){hide(el,type,_279);},_27a);}});};function hide(el,type,_27c){if(el.locked==true){return;}el.locked=true;var win=$(el).window("window");if(!win){return;}switch(type){case null:win.hide();break;case "slide":win.slideUp(_27c);break;case "fade":win.fadeOut(_27c);break;case "show":win.hide(_27c);break;}setTimeout(function(){$(el).window("destroy");},_27c);};function _27d(_27e){var opts=$.extend({},$.fn.window.defaults,{collapsible:false,minimizable:false,maximizable:false,shadow:false,draggable:false,resizable:false,closed:true,style:{left:"",top:"",right:0,zIndex:$.fn.window.defaults.zIndex++,bottom:-document.body.scrollTop-document.documentElement.scrollTop},onBeforeOpen:function onBeforeOpen(){show(this,opts.showType,opts.showSpeed,opts.timeout);return false;},onBeforeClose:function onBeforeClose(){hide(this,opts.showType,opts.showSpeed);return false;}},{title:"",width:250,height:100,showType:"slide",showSpeed:600,msg:"",timeout:4000},_27e);opts.style.zIndex=$.fn.window.defaults.zIndex++;var win=$("<div class=\"messager-body\"></div>").html(opts.msg).appendTo("body");win.window(opts);win.window("window").css(opts.style);win.window("open");return win;};function _27f(_280,_281,_282){var win=$("<div class=\"messager-body\"></div>").appendTo("body");win.append(_281);if(_282){var tb=$("<div class=\"messager-button\"></div>").appendTo(win);for(var _283 in _282){$("<a></a>").attr("href","javascript:void(0)").text(_283).css("margin-left",10).bind("click",eval(_282[_283])).appendTo(tb).linkbutton();}}win.window({title:_280,noheader:_280?false:true,width:300,height:"auto",modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,onClose:function onClose(){setTimeout(function(){win.window("destroy");},100);}});win.window("window").addClass("messager-window");win.children("div.messager-button").children("a:first").focus();return win;};$.messager={show:function show(_284){return _27d(_284);},alert:function alert(_285,msg,icon,fn){var _286="<div>"+msg+"</div>";switch(icon){case "error":_286="<div class=\"messager-icon messager-error\"></div>"+_286;break;case "info":_286="<div class=\"messager-icon messager-info\"></div>"+_286;break;case "question":_286="<div class=\"messager-icon messager-question\"></div>"+_286;break;case "warning":_286="<div class=\"messager-icon messager-warning\"></div>"+_286;break;}_286+="<div style=\"clear:both;\"/>";var _287={};_287[$.messager.defaults.ok]=function(){win.window("close");if(fn){fn();return false;}};var win=_27f(_285,_286,_287);return win;},confirm:function confirm(_288,msg,fn){var _289="<div class=\"messager-icon messager-question\"></div>"+"<div>"+msg+"</div>"+"<div style=\"clear:both;\"/>";var _28a={};_28a[$.messager.defaults.ok]=function(){win.window("close");if(fn){fn(true);return false;}};_28a[$.messager.defaults.cancel]=function(){win.window("close");if(fn){fn(false);return false;}};var win=_27f(_288,_289,_28a);return win;},prompt:function prompt(_28b,msg,fn){var _28c="<div class=\"messager-icon messager-question\"></div>"+"<div>"+msg+"</div>"+"<br/>"+"<div style=\"clear:both;\"/>"+"<div><input class=\"messager-input\" type=\"text\"/></div>";var _28d={};_28d[$.messager.defaults.ok]=function(){win.window("close");if(fn){fn($(".messager-input",win).val());return false;}};_28d[$.messager.defaults.cancel]=function(){win.window("close");if(fn){fn();return false;}};var win=_27f(_28b,_28c,_28d);win.children("input.messager-input").focus();return win;},progress:function progress(_28e){var _28f={bar:function bar(){return $("body>div.messager-window").find("div.messager-p-bar");},close:function close(){var win=$("body>div.messager-window>div.messager-body:has(div.messager-progress)");if(win.length){win.window("close");}}};if(typeof _28e=="string"){var _290=_28f[_28e];return _290();}var opts=$.extend({title:"",msg:"",text:undefined,interval:300},_28e||{});var _291="<div class=\"messager-progress\"><div class=\"messager-p-msg\"></div><div class=\"messager-p-bar\"></div></div>";var win=_27f(opts.title,_291,null);win.find("div.messager-p-msg").html(opts.msg);var bar=win.find("div.messager-p-bar");bar.progressbar({text:opts.text});win.window({closable:false,onClose:function onClose(){if(this.timer){clearInterval(this.timer);}$(this).window("destroy");}});if(opts.interval){win[0].timer=setInterval(function(){var v=bar.progressbar("getValue");v+=10;if(v>100){v=0;}bar.progressbar("setValue",v);},opts.interval);}return win;}};$.messager.defaults={ok:"Ok",cancel:"Cancel"};})(jQuery);(function($){function _292(_293){var _294=$.data(_293,"accordion");var opts=_294.options;var _295=_294.panels;var cc=$(_293);opts.fit?$.extend(opts,cc._fit()):cc._fit(false);if(!isNaN(opts.width)){cc._outerWidth(opts.width);}else {cc.css("width","");}var _296=0;var _297="auto";var _298=cc.find(">div.panel>div.accordion-header");if(_298.length){_296=$(_298[0]).css("height","")._outerHeight();}if(!isNaN(opts.height)){cc._outerHeight(opts.height);_297=cc.height()-_296*_298.length;}else {cc.css("height","");}_299(true,_297-_299(false)+1);function _299(_29a,_29b){var _29c=0;for(var i=0;i<_295.length;i++){var p=_295[i];var h=p.panel("header")._outerHeight(_296);if(p.panel("options").collapsible==_29a){var _29d=isNaN(_29b)?undefined:_29b+_296*h.length;p.panel("resize",{width:cc.width(),height:_29a?_29d:undefined});_29c+=p.panel("panel").outerHeight()-_296;}}return _29c;};};function _29e(_29f,_2a0,_2a1,all){var _2a2=$.data(_29f,"accordion").panels;var pp=[];for(var i=0;i<_2a2.length;i++){var p=_2a2[i];if(_2a0){if(p.panel("options")[_2a0]==_2a1){pp.push(p);}}else {if(p[0]==$(_2a1)[0]){return i;}}}if(_2a0){return all?pp:pp.length?pp[0]:null;}else {return -1;}};function _2a3(_2a4){return _29e(_2a4,"collapsed",false,true);};function _2a5(_2a6){var pp=_2a3(_2a6);return pp.length?pp[0]:null;};function _2a7(_2a8,_2a9){return _29e(_2a8,null,_2a9);};function _2aa(_2ab,_2ac){var _2ad=$.data(_2ab,"accordion").panels;if(typeof _2ac=="number"){if(_2ac<0||_2ac>=_2ad.length){return null;}else {return _2ad[_2ac];}}return _29e(_2ab,"title",_2ac);};function _2ae(_2af){var opts=$.data(_2af,"accordion").options;var cc=$(_2af);if(opts.border){cc.removeClass("accordion-noborder");}else {cc.addClass("accordion-noborder");}};function init(_2b0){var _2b1=$.data(_2b0,"accordion");var cc=$(_2b0);cc.addClass("accordion");_2b1.panels=[];cc.children("div").each(function(){var opts=$.extend({},$.parser.parseOptions(this),{selected:$(this).attr("selected")?true:undefined});var pp=$(this);_2b1.panels.push(pp);_2b3(_2b0,pp,opts);});cc.bind("_resize",function(e,_2b2){var opts=$.data(_2b0,"accordion").options;if(opts.fit==true||_2b2){_292(_2b0);}return false;});};function _2b3(_2b4,pp,_2b5){var opts=$.data(_2b4,"accordion").options;pp.panel($.extend({},{collapsible:true,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:true,headerCls:"accordion-header",bodyCls:"accordion-body"},_2b5,{onBeforeExpand:function onBeforeExpand(){if(_2b5.onBeforeExpand){if(_2b5.onBeforeExpand.call(this)==false){return false;}}if(!opts.multiple){var all=$.grep(_2a3(_2b4),function(p){return p.panel("options").collapsible;});for(var i=0;i<all.length;i++){_2be(_2b4,_2a7(_2b4,all[i]));}}var _2b6=$(this).panel("header");_2b6.addClass("accordion-header-selected");_2b6.find(".accordion-collapse").removeClass("accordion-expand");},onExpand:function onExpand(){if(_2b5.onExpand){_2b5.onExpand.call(this);}opts.onSelect.call(_2b4,$(this).panel("options").title,_2a7(_2b4,this));},onBeforeCollapse:function onBeforeCollapse(){if(_2b5.onBeforeCollapse){if(_2b5.onBeforeCollapse.call(this)==false){return false;}}var _2b7=$(this).panel("header");_2b7.removeClass("accordion-header-selected");_2b7.find(".accordion-collapse").addClass("accordion-expand");},onCollapse:function onCollapse(){if(_2b5.onCollapse){_2b5.onCollapse.call(this);}opts.onUnselect.call(_2b4,$(this).panel("options").title,_2a7(_2b4,this));}}));var _2b8=pp.panel("header");var tool=_2b8.children("div.panel-tool");tool.children("a.panel-tool-collapse").hide();var t=$("<a href=\"javascript:void(0)\"></a>").addClass("accordion-collapse accordion-expand").appendTo(tool);t.bind("click",function(){var _2b9=_2a7(_2b4,pp);if(pp.panel("options").collapsed){_2ba(_2b4,_2b9);}else {_2be(_2b4,_2b9);}return false;});pp.panel("options").collapsible?t.show():t.hide();_2b8.click(function(){$(this).find("a.accordion-collapse:visible").triggerHandler("click");return false;});};function _2ba(_2bb,_2bc){var p=_2aa(_2bb,_2bc);if(!p){return;}_2bd(_2bb);var opts=$.data(_2bb,"accordion").options;p.panel("expand",opts.animate);};function _2be(_2bf,_2c0){var p=_2aa(_2bf,_2c0);if(!p){return;}_2bd(_2bf);var opts=$.data(_2bf,"accordion").options;p.panel("collapse",opts.animate);};function _2c1(_2c2){var opts=$.data(_2c2,"accordion").options;var p=_29e(_2c2,"selected",true);if(p){_2c3(_2a7(_2c2,p));}else {_2c3(opts.selected);}function _2c3(_2c4){var _2c5=opts.animate;opts.animate=false;_2ba(_2c2,_2c4);opts.animate=_2c5;};};function _2bd(_2c6){var _2c7=$.data(_2c6,"accordion").panels;for(var i=0;i<_2c7.length;i++){_2c7[i].stop(true,true);}};function _add(_2c8,_2c9){var _2ca=$.data(_2c8,"accordion");var opts=_2ca.options;var _2cb=_2ca.panels;if(_2c9.selected==undefined){_2c9.selected=true;}_2bd(_2c8);var pp=$("<div></div>").appendTo(_2c8);_2cb.push(pp);_2b3(_2c8,pp,_2c9);_292(_2c8);opts.onAdd.call(_2c8,_2c9.title,_2cb.length-1);if(_2c9.selected){_2ba(_2c8,_2cb.length-1);}};function _2cc(_2cd,_2ce){var _2cf=$.data(_2cd,"accordion");var opts=_2cf.options;var _2d0=_2cf.panels;_2bd(_2cd);var _2d1=_2aa(_2cd,_2ce);var _2d2=_2d1.panel("options").title;var _2d3=_2a7(_2cd,_2d1);if(!_2d1){return;}if(opts.onBeforeRemove.call(_2cd,_2d2,_2d3)==false){return;}_2d0.splice(_2d3,1);_2d1.panel("destroy");if(_2d0.length){_292(_2cd);var curr=_2a5(_2cd);if(!curr){_2ba(_2cd,0);}}opts.onRemove.call(_2cd,_2d2,_2d3);};$.fn.accordion=function(_2d4,_2d5){if(typeof _2d4=="string"){return $.fn.accordion.methods[_2d4](this,_2d5);}_2d4=_2d4||{};return this.each(function(){var _2d6=$.data(this,"accordion");if(_2d6){$.extend(_2d6.options,_2d4);}else {$.data(this,"accordion",{options:$.extend({},$.fn.accordion.defaults,$.fn.accordion.parseOptions(this),_2d4),accordion:$(this).addClass("accordion"),panels:[]});init(this);}_2ae(this);_292(this);_2c1(this);});};$.fn.accordion.methods={options:function options(jq){return $.data(jq[0],"accordion").options;},panels:function panels(jq){return $.data(jq[0],"accordion").panels;},resize:function resize(jq){return jq.each(function(){_292(this);});},getSelections:function getSelections(jq){return _2a3(jq[0]);},getSelected:function getSelected(jq){return _2a5(jq[0]);},getPanel:function getPanel(jq,_2d7){return _2aa(jq[0],_2d7);},getPanelIndex:function getPanelIndex(jq,_2d8){return _2a7(jq[0],_2d8);},select:function select(jq,_2d9){return jq.each(function(){_2ba(this,_2d9);});},unselect:function unselect(jq,_2da){return jq.each(function(){_2be(this,_2da);});},add:function add(jq,_2db){return jq.each(function(){_add(this,_2db);});},remove:function remove(jq,_2dc){return jq.each(function(){_2cc(this,_2dc);});}};$.fn.accordion.parseOptions=function(_2dd){var t=$(_2dd);return $.extend({},$.parser.parseOptions(_2dd,["width","height",{fit:"boolean",border:"boolean",animate:"boolean",multiple:"boolean",selected:"number"}]));};$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true,animate:true,multiple:false,selected:0,onSelect:function onSelect(_2de,_2df){},onUnselect:function onUnselect(_2e0,_2e1){},onAdd:function onAdd(_2e2,_2e3){},onBeforeRemove:function onBeforeRemove(_2e4,_2e5){},onRemove:function onRemove(_2e6,_2e7){}};})(jQuery);(function($){function _2e8(_2e9){var opts=$.data(_2e9,"tabs").options;if(opts.tabPosition=="left"||opts.tabPosition=="right"||!opts.showHeader){return;}var _2ea=$(_2e9).children("div.tabs-header");var tool=_2ea.children("div.tabs-tool");var _2eb=_2ea.children("div.tabs-scroller-left");var _2ec=_2ea.children("div.tabs-scroller-right");var wrap=_2ea.children("div.tabs-wrap");var _2ed=_2ea.outerHeight();if(opts.plain){_2ed-=_2ed-_2ea.height();}tool._outerHeight(_2ed);var _2ee=0;$("ul.tabs li",_2ea).each(function(){_2ee+=$(this).outerWidth(true);});var _2ef=_2ea.width()-tool._outerWidth();if(_2ee>_2ef){_2eb.add(_2ec).show()._outerHeight(_2ed);if(opts.toolPosition=="left"){tool.css({left:_2eb.outerWidth(),right:""});wrap.css({marginLeft:_2eb.outerWidth()+tool._outerWidth(),marginRight:_2ec._outerWidth(),width:_2ef-_2eb.outerWidth()-_2ec.outerWidth()});}else {tool.css({left:"",right:_2ec.outerWidth()});wrap.css({marginLeft:_2eb.outerWidth(),marginRight:_2ec.outerWidth()+tool._outerWidth(),width:_2ef-_2eb.outerWidth()-_2ec.outerWidth()});}}else {_2eb.add(_2ec).hide();if(opts.toolPosition=="left"){tool.css({left:0,right:""});wrap.css({marginLeft:tool._outerWidth(),marginRight:0,width:_2ef});}else {tool.css({left:"",right:0});wrap.css({marginLeft:0,marginRight:tool._outerWidth(),width:_2ef});}}};function _2f0(_2f1){var opts=$.data(_2f1,"tabs").options;var _2f2=$(_2f1).children("div.tabs-header");if(opts.tools){if(typeof opts.tools=="string"){$(opts.tools).addClass("tabs-tool").appendTo(_2f2);$(opts.tools).show();}else {_2f2.children("div.tabs-tool").remove();var _2f3=$("<div class=\"tabs-tool\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"height:100%\"><tr></tr></table></div>").appendTo(_2f2);var tr=_2f3.find("tr");for(var i=0;i<opts.tools.length;i++){var td=$("<td></td>").appendTo(tr);var tool=$("<a href=\"javascript:void(0);\"></a>").appendTo(td);tool[0].onclick=eval(opts.tools[i].handler||function(){});tool.linkbutton($.extend({},opts.tools[i],{plain:true}));}}}else {_2f2.children("div.tabs-tool").remove();}};function _2f4(_2f5){var _2f6=$.data(_2f5,"tabs");var opts=_2f6.options;var cc=$(_2f5);opts.fit?$.extend(opts,cc._fit()):cc._fit(false);cc.width(opts.width).height(opts.height);var _2f7=$(_2f5).children("div.tabs-header");var _2f8=$(_2f5).children("div.tabs-panels");var wrap=_2f7.find("div.tabs-wrap");var ul=wrap.find(".tabs");for(var i=0;i<_2f6.tabs.length;i++){var _2f9=_2f6.tabs[i].panel("options");var p_t=_2f9.tab.find("a.tabs-inner");var _2fa=parseInt(_2f9.tabWidth||opts.tabWidth)||undefined;if(_2fa){p_t._outerWidth(_2fa);}else {p_t.css("width","");}p_t._outerHeight(opts.tabHeight);p_t.css("lineHeight",p_t.height()+"px");}if(opts.tabPosition=="left"||opts.tabPosition=="right"){_2f7._outerWidth(opts.showHeader?opts.headerWidth:0);_2f8._outerWidth(cc.width()-_2f7.outerWidth());_2f7.add(_2f8)._outerHeight(opts.height);wrap._outerWidth(_2f7.width());ul._outerWidth(wrap.width()).css("height","");}else {var lrt=_2f7.children("div.tabs-scroller-left,div.tabs-scroller-right,div.tabs-tool");_2f7._outerWidth(opts.width).css("height","");if(opts.showHeader){_2f7.css("background-color","");wrap.css("height","");lrt.show();}else {_2f7.css("background-color","transparent");_2f7._outerHeight(0);wrap._outerHeight(0);lrt.hide();}ul._outerHeight(opts.tabHeight).css("width","");_2e8(_2f5);var _2fb=opts.height;if(!isNaN(_2fb)){_2f8._outerHeight(_2fb-_2f7.outerHeight());}else {_2f8.height("auto");}var _2fa=opts.width;if(!isNaN(_2fa)){_2f8._outerWidth(_2fa);}else {_2f8.width("auto");}}};function _2fc(_2fd){var opts=$.data(_2fd,"tabs").options;var tab=_2fe(_2fd);if(tab){var _2ff=$(_2fd).children("div.tabs-panels");var _300=opts.width=="auto"?"auto":_2ff.width();var _301=opts.height=="auto"?"auto":_2ff.height();tab.panel("resize",{width:_300,height:_301});}};function _302(_303){var tabs=$.data(_303,"tabs").tabs;var cc=$(_303);cc.addClass("tabs-container");var pp=$("<div class=\"tabs-panels\"></div>").insertBefore(cc);cc.children("div").each(function(){pp[0].appendChild(this);});cc[0].appendChild(pp[0]);$("<div class=\"tabs-header\">"+"<div class=\"tabs-scroller-left\"></div>"+"<div class=\"tabs-scroller-right\"></div>"+"<div class=\"tabs-wrap\">"+"<ul class=\"tabs\"></ul>"+"</div>"+"</div>").prependTo(_303);cc.children("div.tabs-panels").children("div").each(function(i){var opts=$.extend({},$.parser.parseOptions(this),{selected:$(this).attr("selected")?true:undefined});var pp=$(this);tabs.push(pp);_310(_303,pp,opts);});cc.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function(){$(this).addClass("tabs-scroller-over");},function(){$(this).removeClass("tabs-scroller-over");});cc.bind("_resize",function(e,_304){var opts=$.data(_303,"tabs").options;if(opts.fit==true||_304){_2f4(_303);_2fc(_303);}return false;});};function _305(_306){var _307=$.data(_306,"tabs");var opts=_307.options;$(_306).children("div.tabs-header").unbind().bind("click",function(e){if($(e.target).hasClass("tabs-scroller-left")){$(_306).tabs("scrollBy",-opts.scrollIncrement);}else {if($(e.target).hasClass("tabs-scroller-right")){$(_306).tabs("scrollBy",opts.scrollIncrement);}else {var li=$(e.target).closest("li");if(li.hasClass("tabs-disabled")){return;}var a=$(e.target).closest("a.tabs-close");if(a.length){_321(_306,_308(li));}else {if(li.length){var _309=_308(li);var _30a=_307.tabs[_309].panel("options");if(_30a.collapsible){_30a.closed?_317(_306,_309):_338(_306,_309);}else {_317(_306,_309);}}}}}}).bind("contextmenu",function(e){var li=$(e.target).closest("li");if(li.hasClass("tabs-disabled")){return;}if(li.length){opts.onContextMenu.call(_306,e,li.find("span.tabs-title").html(),_308(li));}});function _308(li){var _30b=0;li.parent().children("li").each(function(i){if(li[0]==this){_30b=i;return false;}});return _30b;};};function _30c(_30d){var opts=$.data(_30d,"tabs").options;var _30e=$(_30d).children("div.tabs-header");var _30f=$(_30d).children("div.tabs-panels");_30e.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right");_30f.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right");if(opts.tabPosition=="top"){_30e.insertBefore(_30f);}else {if(opts.tabPosition=="bottom"){_30e.insertAfter(_30f);_30e.addClass("tabs-header-bottom");_30f.addClass("tabs-panels-top");}else {if(opts.tabPosition=="left"){_30e.addClass("tabs-header-left");_30f.addClass("tabs-panels-right");}else {if(opts.tabPosition=="right"){_30e.addClass("tabs-header-right");_30f.addClass("tabs-panels-left");}}}}if(opts.plain==true){_30e.addClass("tabs-header-plain");}else {_30e.removeClass("tabs-header-plain");}if(opts.border==true){_30e.removeClass("tabs-header-noborder");_30f.removeClass("tabs-panels-noborder");}else {_30e.addClass("tabs-header-noborder");_30f.addClass("tabs-panels-noborder");}};function _310(_311,pp,_312){var _313=$.data(_311,"tabs");_312=_312||{};pp.panel($.extend({},_312,{border:false,noheader:true,closed:true,doSize:false,iconCls:_312.icon?_312.icon:undefined,onLoad:function onLoad(){if(_312.onLoad){_312.onLoad.call(this,arguments);}_313.options.onLoad.call(_311,$(this));}}));var opts=pp.panel("options");var tabs=$(_311).children("div.tabs-header").find("ul.tabs");opts.tab=$("<li></li>").appendTo(tabs);opts.tab.append("<a href=\"javascript:void(0)\" class=\"tabs-inner\">"+"<span class=\"tabs-title\"></span>"+"<span class=\"tabs-icon\"></span>"+"</a>");$(_311).tabs("update",{tab:pp,options:opts});};function _314(_315,_316){var opts=$.data(_315,"tabs").options;var tabs=$.data(_315,"tabs").tabs;if(_316.selected==undefined){_316.selected=true;}var pp=$("<div></div>").appendTo($(_315).children("div.tabs-panels"));tabs.push(pp);_310(_315,pp,_316);opts.onAdd.call(_315,_316.title,tabs.length-1);_2f4(_315);if(_316.selected){_317(_315,tabs.length-1);}};function _318(_319,_31a){var _31b=$.data(_319,"tabs").selectHis;var pp=_31a.tab;var _31c=pp.panel("options").title;pp.panel($.extend({},_31a.options,{iconCls:_31a.options.icon?_31a.options.icon:undefined}));var opts=pp.panel("options");var tab=opts.tab;var _31d=tab.find("span.tabs-title");var _31e=tab.find("span.tabs-icon");_31d.html(opts.title);_31e.attr("class","tabs-icon");tab.find("a.tabs-close").remove();if(opts.closable){_31d.addClass("tabs-closable");$("<a href=\"javascript:void(0)\" class=\"tabs-close\"></a>").appendTo(tab);}else {_31d.removeClass("tabs-closable");}if(opts.iconCls){_31d.addClass("tabs-with-icon");_31e.addClass(opts.iconCls);}else {_31d.removeClass("tabs-with-icon");}if(_31c!=opts.title){for(var i=0;i<_31b.length;i++){if(_31b[i]==_31c){_31b[i]=opts.title;}}}tab.find("span.tabs-p-tool").remove();if(opts.tools){var _31f=$("<span class=\"tabs-p-tool\"></span>").insertAfter(tab.find("a.tabs-inner"));if($.isArray(opts.tools)){for(var i=0;i<opts.tools.length;i++){var t=$("<a href=\"javascript:void(0)\"></a>").appendTo(_31f);t.addClass(opts.tools[i].iconCls);if(opts.tools[i].handler){t.bind("click",{handler:opts.tools[i].handler},function(e){if($(this).parents("li").hasClass("tabs-disabled")){return;}e.data.handler.call(this);});}}}else {$(opts.tools).children().appendTo(_31f);}var pr=_31f.children().length*12;if(opts.closable){pr+=8;}else {pr-=3;_31f.css("right","5px");}_31d.css("padding-right",pr+"px");}_2f4(_319);$.data(_319,"tabs").options.onUpdate.call(_319,opts.title,_320(_319,pp));};function _321(_322,_323){var opts=$.data(_322,"tabs").options;var tabs=$.data(_322,"tabs").tabs;var _324=$.data(_322,"tabs").selectHis;if(!_325(_322,_323)){return;}var tab=_326(_322,_323);var _327=tab.panel("options").title;var _328=_320(_322,tab);if(opts.onBeforeClose.call(_322,_327,_328)==false){return;}var tab=_326(_322,_323,true);tab.panel("options").tab.remove();tab.panel("destroy");opts.onClose.call(_322,_327,_328);_2f4(_322);for(var i=0;i<_324.length;i++){if(_324[i]==_327){_324.splice(i,1);i--;}}var _329=_324.pop();if(_329){_317(_322,_329);}else {if(tabs.length){_317(_322,0);}}};function _326(_32a,_32b,_32c){var tabs=$.data(_32a,"tabs").tabs;if(typeof _32b=="number"){if(_32b<0||_32b>=tabs.length){return null;}else {var tab=tabs[_32b];if(_32c){tabs.splice(_32b,1);}return tab;}}for(var i=0;i<tabs.length;i++){var tab=tabs[i];if(tab.panel("options").title==_32b){if(_32c){tabs.splice(i,1);}return tab;}}return null;};function _320(_32d,tab){var tabs=$.data(_32d,"tabs").tabs;for(var i=0;i<tabs.length;i++){if(tabs[i][0]==$(tab)[0]){return i;}}return -1;};function _2fe(_32e){var tabs=$.data(_32e,"tabs").tabs;for(var i=0;i<tabs.length;i++){var tab=tabs[i];if(tab.panel("options").closed==false){return tab;}}return null;};function _32f(_330){var _331=$.data(_330,"tabs");var tabs=_331.tabs;for(var i=0;i<tabs.length;i++){if(tabs[i].panel("options").selected){_317(_330,i);return;}}_317(_330,_331.options.selected);};function _317(_332,_333){var _334=$.data(_332,"tabs");var opts=_334.options;var tabs=_334.tabs;var _335=_334.selectHis;if(tabs.length==0){return;}var _336=_326(_332,_333);if(!_336){return;}var _337=_2fe(_332);if(_337){if(_336[0]==_337[0]){_2fc(_332);return;}_338(_332,_320(_332,_337));if(!_337.panel("options").closed){return;}}_336.panel("open");var _339=_336.panel("options").title;_335.push(_339);var tab=_336.panel("options").tab;tab.addClass("tabs-selected");var wrap=$(_332).find(">div.tabs-header>div.tabs-wrap");var left=tab.position().left;var _33a=left+tab.outerWidth();if(left<0||_33a>wrap.width()){var _33b=left-(wrap.width()-tab.width())/2;$(_332).tabs("scrollBy",_33b);}else {$(_332).tabs("scrollBy",0);}_2fc(_332);opts.onSelect.call(_332,_339,_320(_332,_336));};function _338(_33c,_33d){var _33e=$.data(_33c,"tabs");var p=_326(_33c,_33d);if(p){var opts=p.panel("options");if(!opts.closed){p.panel("close");if(opts.closed){opts.tab.removeClass("tabs-selected");_33e.options.onUnselect.call(_33c,opts.title,_320(_33c,p));}}}};function _325(_33f,_340){return _326(_33f,_340)!=null;};function _341(_342,_343){var opts=$.data(_342,"tabs").options;opts.showHeader=_343;$(_342).tabs("resize");};$.fn.tabs=function(_344,_345){if(typeof _344=="string"){return $.fn.tabs.methods[_344](this,_345);}_344=_344||{};return this.each(function(){var _346=$.data(this,"tabs");var opts;if(_346){opts=$.extend(_346.options,_344);_346.options=opts;}else {$.data(this,"tabs",{options:$.extend({},$.fn.tabs.defaults,$.fn.tabs.parseOptions(this),_344),tabs:[],selectHis:[]});_302(this);}_2f0(this);_30c(this);_2f4(this);_305(this);_32f(this);});};$.fn.tabs.methods={options:function options(jq){var cc=jq[0];var opts=$.data(cc,"tabs").options;var s=_2fe(cc);opts.selected=s?_320(cc,s):-1;return opts;},tabs:function tabs(jq){return $.data(jq[0],"tabs").tabs;},resize:function resize(jq){return jq.each(function(){_2f4(this);_2fc(this);});},add:function add(jq,_347){return jq.each(function(){_314(this,_347);});},close:function close(jq,_348){return jq.each(function(){_321(this,_348);});},getTab:function getTab(jq,_349){return _326(jq[0],_349);},getTabIndex:function getTabIndex(jq,tab){return _320(jq[0],tab);},getSelected:function getSelected(jq){return _2fe(jq[0]);},select:function select(jq,_34a){return jq.each(function(){_317(this,_34a);});},unselect:function unselect(jq,_34b){return jq.each(function(){_338(this,_34b);});},exists:function exists(jq,_34c){return _325(jq[0],_34c);},update:function update(jq,_34d){return jq.each(function(){_318(this,_34d);});},enableTab:function enableTab(jq,_34e){return jq.each(function(){$(this).tabs("getTab",_34e).panel("options").tab.removeClass("tabs-disabled");});},disableTab:function disableTab(jq,_34f){return jq.each(function(){$(this).tabs("getTab",_34f).panel("options").tab.addClass("tabs-disabled");});},showHeader:function showHeader(jq){return jq.each(function(){_341(this,true);});},hideHeader:function hideHeader(jq){return jq.each(function(){_341(this,false);});},scrollBy:function scrollBy(jq,_350){return jq.each(function(){var opts=$(this).tabs("options");var wrap=$(this).find(">div.tabs-header>div.tabs-wrap");var pos=Math.min(wrap._scrollLeft()+_350,_351());wrap.animate({scrollLeft:pos},opts.scrollDuration);function _351(){var w=0;var ul=wrap.children("ul");ul.children("li").each(function(){w+=$(this).outerWidth(true);});return w-wrap.width()+(ul.outerWidth()-ul.width());};});}};$.fn.tabs.parseOptions=function(_352){return $.extend({},$.parser.parseOptions(_352,["width","height","tools","toolPosition","tabPosition",{fit:"boolean",border:"boolean",plain:"boolean",headerWidth:"number",tabWidth:"number",tabHeight:"number",selected:"number",showHeader:"boolean"}]));};$.fn.tabs.defaults={width:"auto",height:"auto",headerWidth:150,tabWidth:"auto",tabHeight:27,selected:0,showHeader:true,plain:false,fit:false,border:true,tools:null,toolPosition:"right",tabPosition:"top",scrollIncrement:100,scrollDuration:400,onLoad:function onLoad(_353){},onSelect:function onSelect(_354,_355){},onUnselect:function onUnselect(_356,_357){},onBeforeClose:function onBeforeClose(_358,_359){},onClose:function onClose(_35a,_35b){},onAdd:function onAdd(_35c,_35d){},onUpdate:function onUpdate(_35e,_35f){},onContextMenu:function onContextMenu(e,_360,_361){}};})(jQuery);(function($){var _362=false;function _363(_364){var _365=$.data(_364,"layout");var opts=_365.options;var _366=_365.panels;var cc=$(_364);if(_364.tagName=="BODY"){cc._fit();}else {opts.fit?cc.css(cc._fit()):cc._fit(false);}var cpos={top:0,left:0,width:cc.width(),height:cc.height()};_367(_368(_366.expandNorth)?_366.expandNorth:_366.north,"n");_367(_368(_366.expandSouth)?_366.expandSouth:_366.south,"s");_369(_368(_366.expandEast)?_366.expandEast:_366.east,"e");_369(_368(_366.expandWest)?_366.expandWest:_366.west,"w");_366.center.panel("resize",cpos);function _36a(pp){var opts=pp.panel("options");return Math.min(Math.max(opts.height,opts.minHeight),opts.maxHeight);};function _36b(pp){var opts=pp.panel("options");return Math.min(Math.max(opts.width,opts.minWidth),opts.maxWidth);};function _367(pp,type){if(!pp.length||!_368(pp)){return;}var opts=pp.panel("options");var _36c=_36a(pp);pp.panel("resize",{width:cc.width(),height:_36c,left:0,top:type=="n"?0:cc.height()-_36c});cpos.height-=_36c;if(type=="n"){cpos.top+=_36c;if(!opts.split&&opts.border){cpos.top--;}}if(!opts.split&&opts.border){cpos.height++;}};function _369(pp,type){if(!pp.length||!_368(pp)){return;}var opts=pp.panel("options");var _36d=_36b(pp);pp.panel("resize",{width:_36d,height:cpos.height,left:type=="e"?cc.width()-_36d:0,top:cpos.top});cpos.width-=_36d;if(type=="w"){cpos.left+=_36d;if(!opts.split&&opts.border){cpos.left--;}}if(!opts.split&&opts.border){cpos.width++;}};};function init(_36e){var cc=$(_36e);cc.addClass("layout");function _36f(cc){cc.children("div").each(function(){var opts=$.fn.layout.parsePanelOptions(this);if("north,south,east,west,center".indexOf(opts.region)>=0){_371(_36e,opts,this);}});};cc.children("form").length?_36f(cc.children("form")):_36f(cc);cc.append("<div class=\"layout-split-proxy-h\"></div><div class=\"layout-split-proxy-v\"></div>");cc.bind("_resize",function(e,_370){var opts=$.data(_36e,"layout").options;if(opts.fit==true||_370){_363(_36e);}return false;});};function _371(_372,_373,el){_373.region=_373.region||"center";var _374=$.data(_372,"layout").panels;var cc=$(_372);var dir=_373.region;if(_374[dir].length){return;}var pp=$(el);if(!pp.length){pp=$("<div></div>").appendTo(cc);}var _375=$.extend({},$.fn.layout.paneldefaults,{width:pp.length?parseInt(pp[0].style.width)||pp.outerWidth():"auto",height:pp.length?parseInt(pp[0].style.height)||pp.outerHeight():"auto",doSize:false,collapsible:true,cls:"layout-panel layout-panel-"+dir,bodyCls:"layout-body",onOpen:function onOpen(){var tool=$(this).panel("header").children("div.panel-tool");tool.children("a.panel-tool-collapse").hide();var _376={north:"up",south:"down",east:"right",west:"left"};if(!_376[dir]){return;}var _377="layout-button-"+_376[dir];var t=tool.children("a."+_377);if(!t.length){t=$("<a href=\"javascript:void(0)\"></a>").addClass(_377).appendTo(tool);t.bind("click",{dir:dir},function(e){_383(_372,e.data.dir);return false;});}$(this).panel("options").collapsible?t.show():t.hide();}},_373);pp.panel(_375);_374[dir]=pp;if(pp.panel("options").split){var _378=pp.panel("panel");_378.addClass("layout-split-"+dir);var _379="";if(dir=="north"){_379="s";}if(dir=="south"){_379="n";}if(dir=="east"){_379="w";}if(dir=="west"){_379="e";}_378.resizable($.extend({},{handles:_379,onStartResize:function onStartResize(e){_362=true;if(dir=="north"||dir=="south"){var _37a=$(">div.layout-split-proxy-v",_372);}else {var _37a=$(">div.layout-split-proxy-h",_372);}var top=0,left=0,_37b=0,_37c=0;var pos={display:"block"};if(dir=="north"){pos.top=parseInt(_378.css("top"))+_378.outerHeight()-_37a.height();pos.left=parseInt(_378.css("left"));pos.width=_378.outerWidth();pos.height=_37a.height();}else {if(dir=="south"){pos.top=parseInt(_378.css("top"));pos.left=parseInt(_378.css("left"));pos.width=_378.outerWidth();pos.height=_37a.height();}else {if(dir=="east"){pos.top=parseInt(_378.css("top"))||0;pos.left=parseInt(_378.css("left"))||0;pos.width=_37a.width();pos.height=_378.outerHeight();}else {if(dir=="west"){pos.top=parseInt(_378.css("top"))||0;pos.left=_378.outerWidth()-_37a.width();pos.width=_37a.width();pos.height=_378.outerHeight();}}}}_37a.css(pos);$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);},onResize:function onResize(e){if(dir=="north"||dir=="south"){var _37d=$(">div.layout-split-proxy-v",_372);_37d.css("top",e.pageY-$(_372).offset().top-_37d.height()/2);}else {var _37d=$(">div.layout-split-proxy-h",_372);_37d.css("left",e.pageX-$(_372).offset().left-_37d.width()/2);}return false;},onStopResize:function onStopResize(e){cc.children("div.layout-split-proxy-v,div.layout-split-proxy-h").hide();pp.panel("resize",e.data);_363(_372);_362=false;cc.find(">div.layout-mask").remove();}},_373));}};function _37e(_37f,_380){var _381=$.data(_37f,"layout").panels;if(_381[_380].length){_381[_380].panel("destroy");_381[_380]=$();var _382="expand"+_380.substring(0,1).toUpperCase()+_380.substring(1);if(_381[_382]){_381[_382].panel("destroy");_381[_382]=undefined;}}};function _383(_384,_385,_386){if(_386==undefined){_386="normal";}var _387=$.data(_384,"layout").panels;var p=_387[_385];var _388=p.panel("options");if(_388.onBeforeCollapse.call(p)==false){return;}var _389="expand"+_385.substring(0,1).toUpperCase()+_385.substring(1);if(!_387[_389]){_387[_389]=_38a(_385);_387[_389].panel("panel").bind("click",function(){var _38b=_38c();p.panel("expand",false).panel("open").panel("resize",_38b.collapse);p.panel("panel").animate(_38b.expand,function(){$(this).unbind(".layout").bind("mouseleave.layout",{region:_385},function(e){if(_362==true){return;}_383(_384,e.data.region);});});return false;});}var _38d=_38c();if(!_368(_387[_389])){_387.center.panel("resize",_38d.resizeC);}p.panel("panel").animate(_38d.collapse,_386,function(){p.panel("collapse",false).panel("close");_387[_389].panel("open").panel("resize",_38d.expandP);$(this).unbind(".layout");});function _38a(dir){var icon;if(dir=="east"){icon="layout-button-left";}else {if(dir=="west"){icon="layout-button-right";}else {if(dir=="north"){icon="layout-button-down";}else {if(dir=="south"){icon="layout-button-up";}}}}var p=$("<div></div>").appendTo(_384);p.panel($.extend({},$.fn.layout.paneldefaults,{cls:"layout-expand layout-expand-"+dir,title:"&nbsp;",closed:true,minWidth:0,minHeight:0,doSize:false,tools:[{iconCls:icon,handler:function handler(){_390(_384,_385);return false;}}]}));p.panel("panel").hover(function(){$(this).addClass("layout-expand-over");},function(){$(this).removeClass("layout-expand-over");});return p;};function _38c(){var cc=$(_384);var _38e=_387.center.panel("options");var _38f=_388.collapsedSize;if(_385=="east"){var ww=_38e.width+_388.width-_38f;if(_388.split||!_388.border){ww++;}return {resizeC:{width:ww},expand:{left:cc.width()-_388.width},expandP:{top:_38e.top,left:cc.width()-_38f,width:_38f,height:_38e.height},collapse:{left:cc.width(),top:_38e.top,height:_38e.height}};}else {if(_385=="west"){var ww=_38e.width+_388.width-_38f;if(_388.split||!_388.border){ww++;}return {resizeC:{width:ww,left:_38f-1},expand:{left:0},expandP:{left:0,top:_38e.top,width:_38f,height:_38e.height},collapse:{left:-_388.width,top:_38e.top,height:_38e.height}};}else {if(_385=="north"){var hh=_38e.height;if(!_368(_387.expandNorth)){hh+=_388.height-_38f+(_388.split||!_388.border?1:0);}_387.east.add(_387.west).add(_387.expandEast).add(_387.expandWest).panel("resize",{top:_38f-1,height:hh});return {resizeC:{top:_38f-1,height:hh},expand:{top:0},expandP:{top:0,left:0,width:cc.width(),height:_38f},collapse:{top:-_388.height,width:cc.width()}};}else {if(_385=="south"){var hh=_38e.height;if(!_368(_387.expandSouth)){hh+=_388.height-_38f+(_388.split||!_388.border?1:0);}_387.east.add(_387.west).add(_387.expandEast).add(_387.expandWest).panel("resize",{height:hh});return {resizeC:{height:hh},expand:{top:cc.height()-_388.height},expandP:{top:cc.height()-_38f,left:0,width:cc.width(),height:_38f},collapse:{top:cc.height(),width:cc.width()}};}}}}};};function _390(_391,_392){var _393=$.data(_391,"layout").panels;var p=_393[_392];var _394=p.panel("options");if(_394.onBeforeExpand.call(p)==false){return;}var _395=_396();var _397="expand"+_392.substring(0,1).toUpperCase()+_392.substring(1);if(_393[_397]){_393[_397].panel("close");p.panel("panel").stop(true,true);p.panel("expand",false).panel("open").panel("resize",_395.collapse);p.panel("panel").animate(_395.expand,function(){_363(_391);});}function _396(){var cc=$(_391);var _398=_393.center.panel("options");if(_392=="east"&&_393.expandEast){return {collapse:{left:cc.width(),top:_398.top,height:_398.height},expand:{left:cc.width()-_393["east"].panel("options").width}};}else {if(_392=="west"&&_393.expandWest){return {collapse:{left:-_393["west"].panel("options").width,top:_398.top,height:_398.height},expand:{left:0}};}else {if(_392=="north"&&_393.expandNorth){return {collapse:{top:-_393["north"].panel("options").height,width:cc.width()},expand:{top:0}};}else {if(_392=="south"&&_393.expandSouth){return {collapse:{top:cc.height(),width:cc.width()},expand:{top:cc.height()-_393["south"].panel("options").height}};}}}}};};function _368(pp){if(!pp){return false;}if(pp.length){return pp.panel("panel").is(":visible");}else {return false;}};function _399(_39a){var _39b=$.data(_39a,"layout").panels;if(_39b.east.length&&_39b.east.panel("options").collapsed){_383(_39a,"east",0);}if(_39b.west.length&&_39b.west.panel("options").collapsed){_383(_39a,"west",0);}if(_39b.north.length&&_39b.north.panel("options").collapsed){_383(_39a,"north",0);}if(_39b.south.length&&_39b.south.panel("options").collapsed){_383(_39a,"south",0);}};$.fn.layout=function(_39c,_39d){if(typeof _39c=="string"){return $.fn.layout.methods[_39c](this,_39d);}_39c=_39c||{};return this.each(function(){var _39e=$.data(this,"layout");if(_39e){$.extend(_39e.options,_39c);}else {var opts=$.extend({},$.fn.layout.defaults,$.fn.layout.parseOptions(this),_39c);$.data(this,"layout",{options:opts,panels:{center:$(),north:$(),south:$(),east:$(),west:$()}});init(this);}_363(this);_399(this);});};$.fn.layout.methods={resize:function resize(jq){return jq.each(function(){_363(this);});},panel:function panel(jq,_39f){return $.data(jq[0],"layout").panels[_39f];},collapse:function collapse(jq,_3a0){return jq.each(function(){_383(this,_3a0);});},expand:function expand(jq,_3a1){return jq.each(function(){_390(this,_3a1);});},add:function add(jq,_3a2){return jq.each(function(){_371(this,_3a2);_363(this);if($(this).layout("panel",_3a2.region).panel("options").collapsed){_383(this,_3a2.region,0);}});},remove:function remove(jq,_3a3){return jq.each(function(){_37e(this,_3a3);_363(this);});}};$.fn.layout.parseOptions=function(_3a4){return $.extend({},$.parser.parseOptions(_3a4,[{fit:"boolean"}]));};$.fn.layout.defaults={fit:false};$.fn.layout.parsePanelOptions=function(_3a5){var t=$(_3a5);return $.extend({},$.fn.panel.parseOptions(_3a5),$.parser.parseOptions(_3a5,["region",{split:"boolean",collpasedSize:"number",minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number"}]));};$.fn.layout.paneldefaults=$.extend({},$.fn.panel.defaults,{region:null,split:false,collapsedSize:28,minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000});})(jQuery);(function($){function init(_3a6){$(_3a6).appendTo("body");$(_3a6).addClass("menu-top");$(document).unbind(".menu").bind("mousedown.menu",function(e){var m=$(e.target).closest("div.menu,div.combo-p");if(m.length){return;}$("body>div.menu-top:visible").menu("hide");});var _3a7=_3a8($(_3a6));for(var i=0;i<_3a7.length;i++){_3a9(_3a7[i]);}function _3a8(menu){var _3aa=[];menu.addClass("menu");_3aa.push(menu);if(!menu.hasClass("menu-content")){menu.children("div").each(function(){var _3ab=$(this).children("div");if(_3ab.length){_3ab.insertAfter(_3a6);this.submenu=_3ab;var mm=_3a8(_3ab);_3aa=_3aa.concat(mm);}});}return _3aa;};function _3a9(menu){var wh=$.parser.parseOptions(menu[0],["width","height"]);menu[0].originalHeight=wh.height||0;if(menu.hasClass("menu-content")){menu[0].originalWidth=wh.width||menu._outerWidth();}else {menu[0].originalWidth=wh.width||0;menu.children("div").each(function(){var item=$(this);var _3ac=$.extend({},$.parser.parseOptions(this,["name","iconCls","href",{separator:"boolean"}]),{disabled:item.attr("disabled")?true:undefined});if(_3ac.separator){item.addClass("menu-sep");}if(!item.hasClass("menu-sep")){item[0].itemName=_3ac.name||"";item[0].itemHref=_3ac.href||"";var text=item.addClass("menu-item").html();item.empty().append($("<div class=\"menu-text\"></div>").html(text));if(_3ac.iconCls){$("<div class=\"menu-icon\"></div>").addClass(_3ac.iconCls).appendTo(item);}if(_3ac.disabled){_3ad(_3a6,item[0],true);}if(item[0].submenu){$("<div class=\"menu-rightarrow\"></div>").appendTo(item);}_3ae(_3a6,item);}});$("<div class=\"menu-line\"></div>").prependTo(menu);}_3af(_3a6,menu);menu.hide();_3b0(_3a6,menu);};};function _3af(_3b1,menu){var opts=$.data(_3b1,"menu").options;var _3b2=menu.attr("style")||"";menu.css({display:"block",left:-10000,height:"auto",overflow:"hidden"});var el=menu[0];var _3b3=el.originalWidth||0;if(!_3b3){_3b3=0;menu.find("div.menu-text").each(function(){if(_3b3<$(this)._outerWidth()){_3b3=$(this)._outerWidth();}$(this).closest("div.menu-item")._outerHeight($(this)._outerHeight()+2);});_3b3+=40;}_3b3=Math.max(_3b3,opts.minWidth);var _3b4=el.originalHeight||menu.outerHeight();var _3b5=Math.max(el.originalHeight,menu.outerHeight())-2;menu._outerWidth(_3b3)._outerHeight(_3b4);menu.children("div.menu-line")._outerHeight(_3b5);_3b2+=";width:"+el.style.width+";height:"+el.style.height;menu.attr("style",_3b2);};function _3b0(_3b6,menu){var _3b7=$.data(_3b6,"menu");menu.unbind(".menu").bind("mouseenter.menu",function(){if(_3b7.timer){clearTimeout(_3b7.timer);_3b7.timer=null;}}).bind("mouseleave.menu",function(){if(_3b7.options.hideOnUnhover){_3b7.timer=setTimeout(function(){_3b8(_3b6);},100);}});};function _3ae(_3b9,item){if(!item.hasClass("menu-item")){return;}item.unbind(".menu");item.bind("click.menu",function(){if($(this).hasClass("menu-item-disabled")){return;}if(!this.submenu){_3b8(_3b9);var href=$(this).attr("href");if(href){location.href=href;}}var item=$(_3b9).menu("getItem",this);$.data(_3b9,"menu").options.onClick.call(_3b9,item);}).bind("mouseenter.menu",function(e){item.siblings().each(function(){if(this.submenu){_3bc(this.submenu);}$(this).removeClass("menu-active");});item.addClass("menu-active");if($(this).hasClass("menu-item-disabled")){item.addClass("menu-active-disabled");return;}var _3ba=item[0].submenu;if(_3ba){$(_3b9).menu("show",{menu:_3ba,parent:item});}}).bind("mouseleave.menu",function(e){item.removeClass("menu-active menu-active-disabled");var _3bb=item[0].submenu;if(_3bb){if(e.pageX>=parseInt(_3bb.css("left"))){item.addClass("menu-active");}else {_3bc(_3bb);}}else {item.removeClass("menu-active");}});};function _3b8(_3bd){var _3be=$.data(_3bd,"menu");if(_3be){if($(_3bd).is(":visible")){_3bc($(_3bd));_3be.options.onHide.call(_3bd);}}return false;};function _3bf(_3c0,_3c1){var left,top;_3c1=_3c1||{};var menu=$(_3c1.menu||_3c0);if(menu.hasClass("menu-top")){var opts=$.data(_3c0,"menu").options;$.extend(opts,_3c1);left=opts.left;top=opts.top;if(opts.alignTo){var at=$(opts.alignTo);left=at.offset().left;top=at.offset().top+at._outerHeight();if(opts.align=="right"){left+=at.outerWidth()-menu.outerWidth();}}if(left+menu.outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){left=$(window)._outerWidth()+$(document).scrollLeft()-menu.outerWidth()-5;}if(left<0){left=0;}if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){top=$(window)._outerHeight()+$(document).scrollTop()-menu.outerHeight()-5;}}else {var _3c2=_3c1.parent;left=_3c2.offset().left+_3c2.outerWidth()-2;if(left+menu.outerWidth()+5>$(window)._outerWidth()+$(document).scrollLeft()){left=_3c2.offset().left-menu.outerWidth()+2;}var top=_3c2.offset().top-3;if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){top=$(window)._outerHeight()+$(document).scrollTop()-menu.outerHeight()-5;}}menu.css({left:left,top:top});menu.show(0,function(){if(!menu[0].shadow){menu[0].shadow=$("<div class=\"menu-shadow\"></div>").insertAfter(menu);}menu[0].shadow.css({display:"block",zIndex:$.fn.menu.defaults.zIndex++,left:menu.css("left"),top:menu.css("top"),width:menu.outerWidth(),height:menu.outerHeight()});menu.css("z-index",$.fn.menu.defaults.zIndex++);if(menu.hasClass("menu-top")){$.data(menu[0],"menu").options.onShow.call(menu[0]);}});};function _3bc(menu){if(!menu){return;}_3c3(menu);menu.find("div.menu-item").each(function(){if(this.submenu){_3bc(this.submenu);}$(this).removeClass("menu-active");});function _3c3(m){m.stop(true,true);if(m[0].shadow){m[0].shadow.hide();}m.hide();};};function _3c4(_3c5,text){var _3c6=null;var tmp=$("<div></div>");function find(menu){menu.children("div.menu-item").each(function(){var item=$(_3c5).menu("getItem",this);var s=tmp.empty().html(item.text).text();if(text==$.trim(s)){_3c6=item;}else {if(this.submenu&&!_3c6){find(this.submenu);}}});};find($(_3c5));tmp.remove();return _3c6;};function _3ad(_3c7,_3c8,_3c9){var t=$(_3c8);if(!t.hasClass("menu-item")){return;}if(_3c9){t.addClass("menu-item-disabled");if(_3c8.onclick){_3c8.onclick1=_3c8.onclick;_3c8.onclick=null;}}else {t.removeClass("menu-item-disabled");if(_3c8.onclick1){_3c8.onclick=_3c8.onclick1;_3c8.onclick1=null;}}};function _3ca(_3cb,_3cc){var menu=$(_3cb);if(_3cc.parent){if(!_3cc.parent.submenu){var _3cd=$("<div class=\"menu\"><div class=\"menu-line\"></div></div>").appendTo("body");_3cd.hide();_3cc.parent.submenu=_3cd;$("<div class=\"menu-rightarrow\"></div>").appendTo(_3cc.parent);}menu=_3cc.parent.submenu;}if(_3cc.separator){var item=$("<div class=\"menu-sep\"></div>").appendTo(menu);}else {var item=$("<div class=\"menu-item\"></div>").appendTo(menu);$("<div class=\"menu-text\"></div>").html(_3cc.text).appendTo(item);}if(_3cc.iconCls){$("<div class=\"menu-icon\"></div>").addClass(_3cc.iconCls).appendTo(item);}if(_3cc.id){item.attr("id",_3cc.id);}if(_3cc.name){item[0].itemName=_3cc.name;}if(_3cc.href){item[0].itemHref=_3cc.href;}if(_3cc.onclick){if(typeof _3cc.onclick=="string"){item.attr("onclick",_3cc.onclick);}else {item[0].onclick=eval(_3cc.onclick);}}if(_3cc.handler){item[0].onclick=eval(_3cc.handler);}if(_3cc.disabled){_3ad(_3cb,item[0],true);}_3ae(_3cb,item);_3b0(_3cb,menu);_3af(_3cb,menu);};function _3ce(_3cf,_3d0){function _3d1(el){if(el.submenu){el.submenu.children("div.menu-item").each(function(){_3d1(this);});var _3d2=el.submenu[0].shadow;if(_3d2){_3d2.remove();}el.submenu.remove();}$(el).remove();};_3d1(_3d0);};function _3d3(_3d4){$(_3d4).children("div.menu-item").each(function(){_3ce(_3d4,this);});if(_3d4.shadow){_3d4.shadow.remove();}$(_3d4).remove();};$.fn.menu=function(_3d5,_3d6){if(typeof _3d5=="string"){return $.fn.menu.methods[_3d5](this,_3d6);}_3d5=_3d5||{};return this.each(function(){var _3d7=$.data(this,"menu");if(_3d7){$.extend(_3d7.options,_3d5);}else {_3d7=$.data(this,"menu",{options:$.extend({},$.fn.menu.defaults,$.fn.menu.parseOptions(this),_3d5)});init(this);}$(this).css({left:_3d7.options.left,top:_3d7.options.top});});};$.fn.menu.methods={options:function options(jq){return $.data(jq[0],"menu").options;},show:function show(jq,pos){return jq.each(function(){_3bf(this,pos);});},hide:function hide(jq){return jq.each(function(){_3b8(this);});},destroy:function destroy(jq){return jq.each(function(){_3d3(this);});},setText:function setText(jq,_3d8){return jq.each(function(){$(_3d8.target).children("div.menu-text").html(_3d8.text);});},setIcon:function setIcon(jq,_3d9){return jq.each(function(){$(_3d9.target).children("div.menu-icon").remove();if(_3d9.iconCls){$("<div class=\"menu-icon\"></div>").addClass(_3d9.iconCls).appendTo(_3d9.target);}});},getItem:function getItem(jq,_3da){var t=$(_3da);var item={target:_3da,id:t.attr("id"),text:$.trim(t.children("div.menu-text").html()),disabled:t.hasClass("menu-item-disabled"),name:_3da.itemName,href:_3da.itemHref,onclick:_3da.onclick};var icon=t.children("div.menu-icon");if(icon.length){var cc=[];var aa=icon.attr("class").split(" ");for(var i=0;i<aa.length;i++){if(aa[i]!="menu-icon"){cc.push(aa[i]);}}item.iconCls=cc.join(" ");}return item;},findItem:function findItem(jq,text){return _3c4(jq[0],text);},appendItem:function appendItem(jq,_3db){return jq.each(function(){_3ca(this,_3db);});},removeItem:function removeItem(jq,_3dc){return jq.each(function(){_3ce(this,_3dc);});},enableItem:function enableItem(jq,_3dd){return jq.each(function(){_3ad(this,_3dd,false);});},disableItem:function disableItem(jq,_3de){return jq.each(function(){_3ad(this,_3de,true);});}};$.fn.menu.parseOptions=function(_3df){return $.extend({},$.parser.parseOptions(_3df,["left","top",{minWidth:"number",hideOnUnhover:"boolean"}]));};$.fn.menu.defaults={zIndex:110000,left:0,top:0,alignTo:null,align:"left",minWidth:120,hideOnUnhover:true,onShow:function onShow(){},onHide:function onHide(){},onClick:function onClick(item){}};})(jQuery);(function($){function init(_3e0){var opts=$.data(_3e0,"menubutton").options;var btn=$(_3e0);btn.linkbutton(opts);btn.removeClass(opts.cls.btn1+" "+opts.cls.btn2).addClass("m-btn");btn.removeClass("m-btn-small m-btn-medium m-btn-large").addClass("m-btn-"+opts.size);var _3e1=btn.find(".l-btn-left");$("<span></span>").addClass(opts.cls.arrow).appendTo(_3e1);$("<span></span>").addClass("m-btn-line").appendTo(_3e1);if(opts.menu){$(opts.menu).menu();var _3e2=$(opts.menu).menu("options");var _3e3=_3e2.onShow;var _3e4=_3e2.onHide;$.extend(_3e2,{onShow:function onShow(){var _3e5=$(this).menu("options");var btn=$(_3e5.alignTo);var opts=btn.menubutton("options");btn.addClass(opts.plain==true?opts.cls.btn2:opts.cls.btn1);_3e3.call(this);},onHide:function onHide(){var _3e6=$(this).menu("options");var btn=$(_3e6.alignTo);var opts=btn.menubutton("options");btn.removeClass(opts.plain==true?opts.cls.btn2:opts.cls.btn1);_3e4.call(this);}});}_3e7(_3e0,opts.disabled);};function _3e7(_3e8,_3e9){var opts=$.data(_3e8,"menubutton").options;opts.disabled=_3e9;var btn=$(_3e8);var t=btn.find("."+opts.cls.trigger);if(!t.length){t=btn;}t.unbind(".menubutton");if(_3e9){btn.linkbutton("disable");}else {btn.linkbutton("enable");var _3ea=null;t.bind("click.menubutton",function(){_3eb(_3e8);return false;}).bind("mouseenter.menubutton",function(){_3ea=setTimeout(function(){_3eb(_3e8);},opts.duration);return false;}).bind("mouseleave.menubutton",function(){if(_3ea){clearTimeout(_3ea);}});}};function _3eb(_3ec){var opts=$.data(_3ec,"menubutton").options;if(opts.disabled||!opts.menu){return;}$("body>div.menu-top").menu("hide");var btn=$(_3ec);var mm=$(opts.menu);if(mm.length){mm.menu("options").alignTo=btn;mm.menu("show",{alignTo:btn,align:opts.menuAlign});}btn.blur();};$.fn.menubutton=function(_3ed,_3ee){if(typeof _3ed=="string"){var _3ef=$.fn.menubutton.methods[_3ed];if(_3ef){return _3ef(this,_3ee);}else {return this.linkbutton(_3ed,_3ee);}}_3ed=_3ed||{};return this.each(function(){var _3f0=$.data(this,"menubutton");if(_3f0){$.extend(_3f0.options,_3ed);}else {$.data(this,"menubutton",{options:$.extend({},$.fn.menubutton.defaults,$.fn.menubutton.parseOptions(this),_3ed)});$(this).removeAttr("disabled");}init(this);});};$.fn.menubutton.methods={options:function options(jq){var _3f1=jq.linkbutton("options");var _3f2=$.data(jq[0],"menubutton").options;_3f2.toggle=_3f1.toggle;_3f2.selected=_3f1.selected;return _3f2;},enable:function enable(jq){return jq.each(function(){_3e7(this,false);});},disable:function disable(jq){return jq.each(function(){_3e7(this,true);});},destroy:function destroy(jq){return jq.each(function(){var opts=$(this).menubutton("options");if(opts.menu){$(opts.menu).menu("destroy");}$(this).remove();});}};$.fn.menubutton.parseOptions=function(_3f3){var t=$(_3f3);return $.extend({},$.fn.linkbutton.parseOptions(_3f3),$.parser.parseOptions(_3f3,["menu",{plain:"boolean",duration:"number"}]));};$.fn.menubutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,menuAlign:"left",duration:100,cls:{btn1:"m-btn-active",btn2:"m-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn"}});})(jQuery);(function($){function init(_3f4){var opts=$.data(_3f4,"splitbutton").options;$(_3f4).menubutton(opts);$(_3f4).addClass("s-btn");};$.fn.splitbutton=function(_3f5,_3f6){if(typeof _3f5=="string"){var _3f7=$.fn.splitbutton.methods[_3f5];if(_3f7){return _3f7(this,_3f6);}else {return this.menubutton(_3f5,_3f6);}}_3f5=_3f5||{};return this.each(function(){var _3f8=$.data(this,"splitbutton");if(_3f8){$.extend(_3f8.options,_3f5);}else {$.data(this,"splitbutton",{options:$.extend({},$.fn.splitbutton.defaults,$.fn.splitbutton.parseOptions(this),_3f5)});$(this).removeAttr("disabled");}init(this);});};$.fn.splitbutton.methods={options:function options(jq){var _3f9=jq.menubutton("options");var _3fa=$.data(jq[0],"splitbutton").options;$.extend(_3fa,{disabled:_3f9.disabled,toggle:_3f9.toggle,selected:_3f9.selected});return _3fa;}};$.fn.splitbutton.parseOptions=function(_3fb){var t=$(_3fb);return $.extend({},$.fn.linkbutton.parseOptions(_3fb),$.parser.parseOptions(_3fb,["menu",{plain:"boolean",duration:"number"}]));};$.fn.splitbutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,duration:100,cls:{btn1:"m-btn-active s-btn-active",btn2:"m-btn-plain-active s-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn-line"}});})(jQuery);(function($){function init(_3fc){$(_3fc).addClass("searchbox-f").hide();var span=$("<span class=\"searchbox\"></span>").insertAfter(_3fc);var _3fd=$("<input type=\"text\" class=\"searchbox-text\">").appendTo(span);$("<span><span class=\"searchbox-button\"></span></span>").appendTo(span);var name=$(_3fc).attr("name");if(name){_3fd.attr("name",name);$(_3fc).removeAttr("name").attr("searchboxName",name);}return span;};function _3fe(_3ff,_400){var opts=$.data(_3ff,"searchbox").options;var sb=$.data(_3ff,"searchbox").searchbox;if(_400){opts.width=_400;}sb.appendTo("body");if(isNaN(opts.width)){opts.width=sb._outerWidth();}var _401=sb.find("span.searchbox-button");var menu=sb.find("a.searchbox-menu");var _402=sb.find("input.searchbox-text");sb._outerWidth(opts.width)._outerHeight(opts.height);_402._outerWidth(sb.width()-menu._outerWidth()-_401._outerWidth());_402.css({height:sb.height()+"px",lineHeight:sb.height()+"px"});menu._outerHeight(sb.height());_401._outerHeight(sb.height());var _403=menu.find("span.l-btn-left");_403._outerHeight(sb.height());_403.find("span.l-btn-text").css({height:_403.height()+"px",lineHeight:_403.height()+"px"});sb.insertAfter(_3ff);};function _404(_405){var _406=$.data(_405,"searchbox");var opts=_406.options;if(opts.menu){_406.menu=$(opts.menu).menu({onClick:function onClick(item){_407(item);}});var item=_406.menu.children("div.menu-item:first");_406.menu.children("div.menu-item").each(function(){var _408=$.extend({},$.parser.parseOptions(this),{selected:$(this).attr("selected")?true:undefined});if(_408.selected){item=$(this);return false;}});item.triggerHandler("click");}else {_406.searchbox.find("a.searchbox-menu").remove();_406.menu=null;}function _407(item){_406.searchbox.find("a.searchbox-menu").remove();var mb=$("<a class=\"searchbox-menu\" href=\"javascript:void(0)\"></a>").html(item.text);mb.prependTo(_406.searchbox).menubutton({menu:_406.menu,iconCls:item.iconCls});_406.searchbox.find("input.searchbox-text").attr("name",item.name||item.text);_3fe(_405);};};function _409(_40a){var _40b=$.data(_40a,"searchbox");var opts=_40b.options;var _40c=_40b.searchbox.find("input.searchbox-text");var _40d=_40b.searchbox.find(".searchbox-button");_40c.unbind(".searchbox");_40d.unbind(".searchbox");if(!opts.disabled){_40c.bind("blur.searchbox",function(e){opts.value=$(this).val();if(opts.value==""){$(this).val(opts.prompt);$(this).addClass("searchbox-prompt");}else {$(this).removeClass("searchbox-prompt");}}).bind("focus.searchbox",function(e){if($(this).val()!=opts.value){$(this).val(opts.value);}$(this).removeClass("searchbox-prompt");}).bind("keydown.searchbox",function(e){if(e.keyCode==13){e.preventDefault();opts.value=$(this).val();opts.searcher.call(_40a,opts.value,_40c._propAttr("name"));return false;}});_40d.bind("click.searchbox",function(){opts.searcher.call(_40a,opts.value,_40c._propAttr("name"));}).bind("mouseenter.searchbox",function(){$(this).addClass("searchbox-button-hover");}).bind("mouseleave.searchbox",function(){$(this).removeClass("searchbox-button-hover");});}};function _40e(_40f,_410){var _411=$.data(_40f,"searchbox");var opts=_411.options;var _412=_411.searchbox.find("input.searchbox-text");var mb=_411.searchbox.find("a.searchbox-menu");if(_410){opts.disabled=true;$(_40f).attr("disabled",true);_412.attr("disabled",true);if(mb.length){mb.menubutton("disable");}}else {opts.disabled=false;$(_40f).removeAttr("disabled");_412.removeAttr("disabled");if(mb.length){mb.menubutton("enable");}}};function _413(_414){var _415=$.data(_414,"searchbox");var opts=_415.options;var _416=_415.searchbox.find("input.searchbox-text");opts.originalValue=opts.value;if(opts.value){_416.val(opts.value);_416.removeClass("searchbox-prompt");}else {_416.val(opts.prompt);_416.addClass("searchbox-prompt");}};$.fn.searchbox=function(_417,_418){if(typeof _417=="string"){return $.fn.searchbox.methods[_417](this,_418);}_417=_417||{};return this.each(function(){var _419=$.data(this,"searchbox");if(_419){$.extend(_419.options,_417);}else {_419=$.data(this,"searchbox",{options:$.extend({},$.fn.searchbox.defaults,$.fn.searchbox.parseOptions(this),_417),searchbox:init(this)});}_404(this);_413(this);_409(this);_40e(this,_419.options.disabled);_3fe(this);});};$.fn.searchbox.methods={options:function options(jq){return $.data(jq[0],"searchbox").options;},menu:function menu(jq){return $.data(jq[0],"searchbox").menu;},textbox:function textbox(jq){return $.data(jq[0],"searchbox").searchbox.find("input.searchbox-text");},getValue:function getValue(jq){return $.data(jq[0],"searchbox").options.value;},setValue:function setValue(jq,_41a){return jq.each(function(){$(this).searchbox("options").value=_41a;$(this).searchbox("textbox").val(_41a);$(this).searchbox("textbox").blur();});},clear:function clear(jq){return jq.each(function(){$(this).searchbox("setValue","");});},reset:function reset(jq){return jq.each(function(){var opts=$(this).searchbox("options");$(this).searchbox("setValue",opts.originalValue);});},getName:function getName(jq){return $.data(jq[0],"searchbox").searchbox.find("input.searchbox-text").attr("name");},selectName:function selectName(jq,name){return jq.each(function(){var menu=$.data(this,"searchbox").menu;if(menu){menu.children("div.menu-item[name=\""+name+"\"]").triggerHandler("click");}});},destroy:function destroy(jq){return jq.each(function(){var menu=$(this).searchbox("menu");if(menu){menu.menu("destroy");}$.data(this,"searchbox").searchbox.remove();$(this).remove();});},resize:function resize(jq,_41b){return jq.each(function(){_3fe(this,_41b);});},disable:function disable(jq){return jq.each(function(){_40e(this,true);_409(this);});},enable:function enable(jq){return jq.each(function(){_40e(this,false);_409(this);});}};$.fn.searchbox.parseOptions=function(_41c){var t=$(_41c);return $.extend({},$.parser.parseOptions(_41c,["width","height","prompt","menu"]),{value:t.val()||undefined,disabled:t.attr("disabled")?true:undefined,searcher:t.attr("searcher")?eval(t.attr("searcher")):undefined});};$.fn.searchbox.defaults={width:"auto",height:22,prompt:"",value:"",menu:null,disabled:false,searcher:function searcher(_41d,name){}};})(jQuery);(function($){function init(_41e){$(_41e).addClass("validatebox-text");};function _41f(_420){var _421=$.data(_420,"validatebox");_421.validating=false;if(_421.timer){clearTimeout(_421.timer);}$(_420).tooltip("destroy");$(_420).unbind();$(_420).remove();};function _422(_423){var box=$(_423);var _424=$.data(_423,"validatebox");box.unbind(".validatebox");if(_424.options.novalidate){return;}box.bind("focus.validatebox",function(){_424.validating=true;_424.value=undefined;(function(){if(_424.validating){if(_424.value!=box.val()){_424.value=box.val();if(_424.timer){clearTimeout(_424.timer);}_424.timer=setTimeout(function(){$(_423).validatebox("validate");},_424.options.delay);}else {_429(_423);}setTimeout(arguments.callee,200);}})();}).bind("blur.validatebox",function(){if(_424.timer){clearTimeout(_424.timer);_424.timer=undefined;}_424.validating=false;_425(_423);}).bind("mouseenter.validatebox",function(){if(box.hasClass("validatebox-invalid")){_426(_423);}}).bind("mouseleave.validatebox",function(){if(!_424.validating){_425(_423);}});};function _426(_427){var _428=$.data(_427,"validatebox");var opts=_428.options;$(_427).tooltip($.extend({},opts.tipOptions,{content:_428.message,position:opts.tipPosition,deltaX:opts.deltaX})).tooltip("show");_428.tip=true;};function _429(_42a){var _42b=$.data(_42a,"validatebox");if(_42b&&_42b.tip){$(_42a).tooltip("reposition");}};function _425(_42c){var _42d=$.data(_42c,"validatebox");_42d.tip=false;$(_42c).tooltip("hide");};function _42e(_42f){var _430=$.data(_42f,"validatebox");var opts=_430.options;var box=$(_42f);var _431=box.val();function _432(msg){_430.message=msg;};function _433(_434,_435){var _436=/([a-zA-Z_]+)(.*)/.exec(_434);var rule=opts.rules[_436[1]];if(rule&&_431){var _437=_435||opts.validParams||eval(_436[2]);if(!rule["validator"].call(_42f,_431,_437)){box.addClass("validatebox-invalid");var _438=rule["message"];if(_437){for(var i=0;i<_437.length;i++){_438=_438.replace(new RegExp("\\{"+i+"\\}","g"),_437[i]);}}_432(opts.invalidMessage||_438);if(_430.validating){_426(_42f);}return false;}}return true;};box.removeClass("validatebox-invalid");_425(_42f);if(opts.novalidate||box.is(":disabled")){return true;}if(opts.required){if(_431==""){box.addClass("validatebox-invalid");_432(opts.missingMessage);if(_430.validating){_426(_42f);}return false;}}if(opts.validType){if($.isArray(opts.validType)){for(var i=0;i<opts.validType.length;i++){if(!_433(opts.validType[i])){return false;}}}else {if(typeof opts.validType=="string"){if(!_433(opts.validType)){return false;}}else {for(var _439 in opts.validType){var _43a=opts.validType[_439];if(!_433(_439,_43a)){return false;}}}}}return true;};function _43b(_43c,_43d){var opts=$.data(_43c,"validatebox").options;if(_43d!=undefined){opts.novalidate=_43d;}if(opts.novalidate){$(_43c).removeClass("validatebox-invalid");_425(_43c);}_422(_43c);};$.fn.validatebox=function(_43e,_43f){if(typeof _43e=="string"){return $.fn.validatebox.methods[_43e](this,_43f);}_43e=_43e||{};return this.each(function(){var _440=$.data(this,"validatebox");if(_440){$.extend(_440.options,_43e);}else {init(this);$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,$.fn.validatebox.parseOptions(this),_43e)});}_43b(this);_42e(this);});};$.fn.validatebox.methods={options:function options(jq){return $.data(jq[0],"validatebox").options;},destroy:function destroy(jq){return jq.each(function(){_41f(this);});},validate:function validate(jq){return jq.each(function(){_42e(this);});},isValid:function isValid(jq){return _42e(jq[0]);},enableValidation:function enableValidation(jq){return jq.each(function(){_43b(this,false);});},disableValidation:function disableValidation(jq){return jq.each(function(){_43b(this,true);});}};$.fn.validatebox.parseOptions=function(_441){var t=$(_441);return $.extend({},$.parser.parseOptions(_441,["validType","missingMessage","invalidMessage","tipPosition",{delay:"number",deltaX:"number"}]),{required:t.attr("required")?true:undefined,novalidate:t.attr("novalidate")!=undefined?true:undefined});};$.fn.validatebox.defaults={required:false,validType:null,validParams:null,delay:200,missingMessage:"This field is required.",invalidMessage:null,tipPosition:"right",deltaX:0,novalidate:false,tipOptions:{showEvent:"none",hideEvent:"none",showDelay:0,hideDelay:0,zIndex:"",onShow:function onShow(){$(this).tooltip("tip").css({color:"#000",borderColor:"#CC9933",backgroundColor:"#FFFFCC"});},onHide:function onHide(){$(this).tooltip("destroy");}},rules:{email:{validator:function validator(_442){return (/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_442));},message:"Please enter a valid email address."},url:{validator:function validator(_443){return (/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_443));},message:"Please enter a valid URL."},length:{validator:function validator(_444,_445){var len=$.trim(_444).length;return len>=_445[0]&&len<=_445[1];},message:"Please enter a value between {0} and {1}."},remote:{validator:function validator(_446,_447){var data={};data[_447[1]]=_446;var _448=$.ajax({url:_447[0],dataType:"json",data:data,async:false,cache:false,type:"post"}).responseText;return _448=="true";},message:"Please fix this field."}}};})(jQuery);(function($){function _449(_44a,_44b){_44b=_44b||{};var _44c={};if(_44b.onSubmit){if(_44b.onSubmit.call(_44a,_44c)==false){return;}}var form=$(_44a);if(_44b.url){form.attr("action",_44b.url);}var _44d="easyui_frame_"+new Date().getTime();var _44e=$("<iframe id="+_44d+" name="+_44d+"></iframe>").attr("src",window.ActiveXObject?"javascript:false":"about:blank").css({position:"absolute",top:-1000,left:-1000});var t=form.attr("target"),a=form.attr("action");form.attr("target",_44d);var _44f=$();try{_44e.appendTo("body");_44e.bind("load",cb);for(var n in _44c){var f=$("<input type=\"hidden\" name=\""+n+"\">").val(_44c[n]).appendTo(form);_44f=_44f.add(f);}_450();form[0].submit();}finally {form.attr("action",a);t?form.attr("target",t):form.removeAttr("target");_44f.remove();}function _450(){var f=$("#"+_44d);if(!f.length){return;}try{var s=f.contents()[0].readyState;if(s&&s.toLowerCase()=="uninitialized"){setTimeout(_450,100);}}catch(e){cb();}};var _451=10;function cb(){var _452=$("#"+_44d);if(!_452.length){return;}_452.unbind();var data="";try{var body=_452.contents().find("body");data=body.html();if(data==""){if(--_451){setTimeout(cb,100);return;}}var ta=body.find(">textarea");if(ta.length){data=ta.val();}else {var pre=body.find(">pre");if(pre.length){data=pre.html();}}}catch(e){}if(_44b.success){_44b.success(data);}setTimeout(function(){_452.unbind();_452.remove();},100);};};function _load(_453,data){if(!$.data(_453,"form")){$.data(_453,"form",{options:$.extend({},$.fn.form.defaults)});}var opts=$.data(_453,"form").options;if(typeof data=="string"){var _454={};if(opts.onBeforeLoad.call(_453,_454)==false){return;}$.ajax({url:data,data:_454,dataType:"json",success:function success(data){_455(data);},error:function error(){opts.onLoadError.apply(_453,arguments);}});}else {_455(data);}function _455(data){var form=$(_453);for(var name in data){var val=data[name];var rr=_456(name,val);if(!rr.length){var _457=_458(name,val);if(!_457){$("input[name=\""+name+"\"]",form).val(val);$("textarea[name=\""+name+"\"]",form).val(val);$("select[name=\""+name+"\"]",form).val(val);}}_459(name,val);}opts.onLoadSuccess.call(_453,data);_460(_453);};function _456(name,val){var rr=$(_453).find("input[name=\""+name+"\"][type=radio], input[name=\""+name+"\"][type=checkbox]");rr._propAttr("checked",false);rr.each(function(){var f=$(this);if(f.val()==String(val)||$.inArray(f.val(),$.isArray(val)?val:[val])>=0){f._propAttr("checked",true);}});return rr;};function _458(name,val){var _45a=0;var pp=["numberbox","slider"];for(var i=0;i<pp.length;i++){var p=pp[i];var f=$(_453).find("input["+p+"Name=\""+name+"\"]");if(f.length){f[p]("setValue",val);_45a+=f.length;}}return _45a;};function _459(name,val){var form=$(_453);var cc=["combobox","combotree","combogrid","datetimebox","datebox","combo"];var c=form.find("[comboName=\""+name+"\"]");if(c.length){for(var i=0;i<cc.length;i++){var type=cc[i];if(c.hasClass(type+"-f")){if(c[type]("options").multiple){c[type]("setValues",val);}else {c[type]("setValue",val);}return;}}}};};function _45b(_45c){$("input,select,textarea",_45c).each(function(){var t=this.type,tag=this.tagName.toLowerCase();if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){this.value="";}else {if(t=="file"){var file=$(this);var _45d=file.clone().val("");_45d.insertAfter(file);if(file.data("validatebox")){file.validatebox("destroy");_45d.validatebox();}else {file.remove();}}else {if(t=="checkbox"||t=="radio"){this.checked=false;}else {if(tag=="select"){this.selectedIndex=-1;}}}}});var t=$(_45c);var _45e=["combo","combobox","combotree","combogrid","slider"];for(var i=0;i<_45e.length;i++){var _45f=_45e[i];var r=t.find("."+_45f+"-f");if(r.length&&r[_45f]){r[_45f]("clear");}}_460(_45c);};function _461(_462){_462.reset();var t=$(_462);var _463=["combo","combobox","combotree","combogrid","datebox","datetimebox","spinner","timespinner","numberbox","numberspinner","slider"];for(var i=0;i<_463.length;i++){var _464=_463[i];var r=t.find("."+_464+"-f");if(r.length&&r[_464]){r[_464]("reset");}}_460(_462);};function _465(_466){var _467=$.data(_466,"form").options;var form=$(_466);form.unbind(".form").bind("submit.form",function(){setTimeout(function(){_449(_466,_467);},0);return false;});};function _460(_468){if($.fn.validatebox){var t=$(_468);t.find(".validatebox-text:not(:disabled)").validatebox("validate");var _469=t.find(".validatebox-invalid");_469.filter(":not(:disabled):first").focus();return _469.length==0;}return true;};function _46a(_46b,_46c){$(_46b).find(".validatebox-text:not(:disabled)").validatebox(_46c?"disableValidation":"enableValidation");};$.fn.form=function(_46d,_46e){if(typeof _46d=="string"){return $.fn.form.methods[_46d](this,_46e);}_46d=_46d||{};return this.each(function(){if(!$.data(this,"form")){$.data(this,"form",{options:$.extend({},$.fn.form.defaults,_46d)});}_465(this);});};$.fn.form.methods={submit:function submit(jq,_46f){return jq.each(function(){var opts=$.extend({},$.fn.form.defaults,$.data(this,"form")?$.data(this,"form").options:{},_46f||{});_449(this,opts);});},load:function load(jq,data){return jq.each(function(){_load(this,data);});},clear:function clear(jq){return jq.each(function(){_45b(this);});},reset:function reset(jq){return jq.each(function(){_461(this);});},validate:function validate(jq){return _460(jq[0]);},disableValidation:function disableValidation(jq){return jq.each(function(){_46a(this,true);});},enableValidation:function enableValidation(jq){return jq.each(function(){_46a(this,false);});}};$.fn.form.defaults={url:null,onSubmit:function onSubmit(_470){return $(this).form("validate");},success:function success(data){},onBeforeLoad:function onBeforeLoad(_471){},onLoadSuccess:function onLoadSuccess(data){},onLoadError:function onLoadError(){}};})(jQuery);(function($){function init(_472){$(_472).addClass("numberbox numberbox-f");var v=$("<input type=\"hidden\">").insertAfter(_472);var name=$(_472).attr("name");if(name){v.attr("name",name);$(_472).removeAttr("name").attr("numberboxName",name);}return v;};function _473(_474){var opts=$.data(_474,"numberbox").options;var fn=opts.onChange;opts.onChange=function(){};_475(_474,opts.parser.call(_474,opts.value));opts.onChange=fn;opts.originalValue=_476(_474);};function _477(_478,_479){var opts=$.data(_478,"numberbox").options;if(_479){opts.width=_479;}var t=$(_478);var _47a=$("<div style=\"display:none\"></div>").insertBefore(t);t.appendTo("body");if(isNaN(opts.width)){opts.width=t.outerWidth();}t._outerWidth(opts.width)._outerHeight(opts.height);t.css("line-height",t.height()+"px");t.insertAfter(_47a);_47a.remove();};function _476(_47b){return $.data(_47b,"numberbox").field.val();};function _475(_47c,_47d){var _47e=$.data(_47c,"numberbox");var opts=_47e.options;var _47f=_476(_47c);_47d=opts.parser.call(_47c,_47d);opts.value=_47d;_47e.field.val(_47d);$(_47c).val(opts.formatter.call(_47c,_47d));if(_47f!=_47d){opts.onChange.call(_47c,_47d,_47f);}};function _480(_481){var opts=$.data(_481,"numberbox").options;$(_481).unbind(".numberbox").bind("keypress.numberbox",function(e){return opts.filter.call(_481,e);}).bind("blur.numberbox",function(){_475(_481,$(this).val());$(this).val(opts.formatter.call(_481,_476(_481)));}).bind("focus.numberbox",function(){var vv=_476(_481);if(vv!=opts.parser.call(_481,$(this).val())){$(this).val(opts.formatter.call(_481,vv));}});};function _482(_483){if($.fn.validatebox){var opts=$.data(_483,"numberbox").options;$(_483).validatebox(opts);}};function _484(_485,_486){var opts=$.data(_485,"numberbox").options;if(_486){opts.disabled=true;$(_485).attr("disabled",true);}else {opts.disabled=false;$(_485).removeAttr("disabled");}};$.fn.numberbox=function(_487,_488){if(typeof _487=="string"){var _489=$.fn.numberbox.methods[_487];if(_489){return _489(this,_488);}else {return this.validatebox(_487,_488);}}_487=_487||{};return this.each(function(){var _48a=$.data(this,"numberbox");if(_48a){$.extend(_48a.options,_487);}else {_48a=$.data(this,"numberbox",{options:$.extend({},$.fn.numberbox.defaults,$.fn.numberbox.parseOptions(this),_487),field:init(this)});$(this).removeAttr("disabled");$(this).css({imeMode:"disabled"});}_484(this,_48a.options.disabled);_477(this);_480(this);_482(this);_473(this);});};$.fn.numberbox.methods={options:function options(jq){return $.data(jq[0],"numberbox").options;},destroy:function destroy(jq){return jq.each(function(){$.data(this,"numberbox").field.remove();$(this).validatebox("destroy");$(this).remove();});},resize:function resize(jq,_48b){return jq.each(function(){_477(this,_48b);});},disable:function disable(jq){return jq.each(function(){_484(this,true);});},enable:function enable(jq){return jq.each(function(){_484(this,false);});},fix:function fix(jq){return jq.each(function(){_475(this,$(this).val());});},setValue:function setValue(jq,_48c){return jq.each(function(){_475(this,_48c);});},getValue:function getValue(jq){return _476(jq[0]);},clear:function clear(jq){return jq.each(function(){var _48d=$.data(this,"numberbox");_48d.field.val("");$(this).val("");});},reset:function reset(jq){return jq.each(function(){var opts=$(this).numberbox("options");$(this).numberbox("setValue",opts.originalValue);});}};$.fn.numberbox.parseOptions=function(_48e){var t=$(_48e);return $.extend({},$.fn.validatebox.parseOptions(_48e),$.parser.parseOptions(_48e,["width","height","decimalSeparator","groupSeparator","suffix",{min:"number",max:"number",precision:"number"}]),{prefix:t.attr("prefix")?t.attr("prefix"):undefined,disabled:t.attr("disabled")?true:undefined,value:t.val()||undefined});};$.fn.numberbox.defaults=$.extend({},$.fn.validatebox.defaults,{width:"auto",height:22,disabled:false,value:"",min:null,max:null,precision:0,decimalSeparator:".",groupSeparator:"",prefix:"",suffix:"",filter:function filter(e){var opts=$(this).numberbox("options");if(e.which==45){return $(this).val().indexOf("-")==-1?true:false;}var c=String.fromCharCode(e.which);if(c==opts.decimalSeparator){return $(this).val().indexOf(c)==-1?true:false;}else {if(c==opts.groupSeparator){return true;}else {if(e.which>=48&&e.which<=57&&e.ctrlKey==false&&e.shiftKey==false||e.which==0||e.which==8){return true;}else {if(e.ctrlKey==true&&(e.which==99||e.which==118)){return true;}else {return false;}}}}},formatter:function formatter(_48f){if(!_48f){return _48f;}_48f=_48f+"";var opts=$(this).numberbox("options");var s1=_48f,s2="";var dpos=_48f.indexOf(".");if(dpos>=0){s1=_48f.substring(0,dpos);s2=_48f.substring(dpos+1,_48f.length);}if(opts.groupSeparator){var p=/(\d+)(\d{3})/;while(p.test(s1)){s1=s1.replace(p,"$1"+opts.groupSeparator+"$2");}}if(s2){return opts.prefix+s1+opts.decimalSeparator+s2+opts.suffix;}else {return opts.prefix+s1+opts.suffix;}},parser:function parser(s){s=s+"";var opts=$(this).numberbox("options");if(parseFloat(s)!=s){if(opts.prefix){s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.prefix),"g"),""));}if(opts.suffix){s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.suffix),"g"),""));}if(opts.groupSeparator){s=$.trim(s.replace(new RegExp("\\"+opts.groupSeparator,"g"),""));}if(opts.decimalSeparator){s=$.trim(s.replace(new RegExp("\\"+opts.decimalSeparator,"g"),"."));}s=s.replace(/\s/g,"");}var val=parseFloat(s).toFixed(opts.precision);if(isNaN(val)){val="";}else {if(typeof opts.min=="number"&&val<opts.min){val=opts.min.toFixed(opts.precision);}else {if(typeof opts.max=="number"&&val>opts.max){val=opts.max.toFixed(opts.precision);}}}return val;},onChange:function onChange(_490,_491){}});})(jQuery);(function($){function _492(_493){var opts=$.data(_493,"calendar").options;var t=$(_493);opts.fit?$.extend(opts,t._fit()):t._fit(false);var _494=t.find(".calendar-header");t._outerWidth(opts.width);t._outerHeight(opts.height);t.find(".calendar-body")._outerHeight(t.height()-_494._outerHeight());};function init(_495){var opts=$.data(_495,"calendar").options;$(_495).addClass("calendar").html("<div class=\"calendar-header\">"+"<div class=\"calendar-prevmonth\"></div>"+"<div class=\"calendar-nextmonth\"></div>"+"<div class=\"calendar-prevyear\"></div>"+"<div class=\"calendar-nextyear\"></div>"+"<div class=\"calendar-title\">"+"<span>Aprial 2010</span>"+"</div>"+"</div>"+"<div class=\"calendar-body\">"+"<div class=\"calendar-menu\">"+"<div class=\"calendar-menu-year-inner\">"+"<span class=\"calendar-menu-prev\"></span>"+"<span><input class=\"calendar-menu-year\" type=\"text\"></input></span>"+"<span class=\"calendar-menu-next\"></span>"+"</div>"+"<div class=\"calendar-menu-month-inner\">"+"</div>"+"</div>"+"</div>");$(_495).find(".calendar-title span").hover(function(){$(this).addClass("calendar-menu-hover");},function(){$(this).removeClass("calendar-menu-hover");}).click(function(){var menu=$(_495).find(".calendar-menu");if(menu.is(":visible")){menu.hide();}else {_49c(_495);}});$(".calendar-prevmonth,.calendar-nextmonth,.calendar-prevyear,.calendar-nextyear",_495).hover(function(){$(this).addClass("calendar-nav-hover");},function(){$(this).removeClass("calendar-nav-hover");});$(_495).find(".calendar-nextmonth").click(function(){_496(_495,1);});$(_495).find(".calendar-prevmonth").click(function(){_496(_495,-1);});$(_495).find(".calendar-nextyear").click(function(){_499(_495,1);});$(_495).find(".calendar-prevyear").click(function(){_499(_495,-1);});$(_495).bind("_resize",function(){var opts=$.data(_495,"calendar").options;if(opts.fit==true){_492(_495);}return false;});};function _496(_497,_498){var opts=$.data(_497,"calendar").options;opts.month+=_498;if(opts.month>12){opts.year++;opts.month=1;}else {if(opts.month<1){opts.year--;opts.month=12;}}show(_497);var menu=$(_497).find(".calendar-menu-month-inner");menu.find("td.calendar-selected").removeClass("calendar-selected");menu.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");};function _499(_49a,_49b){var opts=$.data(_49a,"calendar").options;opts.year+=_49b;show(_49a);var menu=$(_49a).find(".calendar-menu-year");menu.val(opts.year);};function _49c(_49d){var opts=$.data(_49d,"calendar").options;$(_49d).find(".calendar-menu").show();if($(_49d).find(".calendar-menu-month-inner").is(":empty")){$(_49d).find(".calendar-menu-month-inner").empty();var t=$("<table class=\"calendar-mtable\"></table>").appendTo($(_49d).find(".calendar-menu-month-inner"));var idx=0;for(var i=0;i<3;i++){var tr=$("<tr></tr>").appendTo(t);for(var j=0;j<4;j++){$("<td class=\"calendar-menu-month\"></td>").html(opts.months[idx++]).attr("abbr",idx).appendTo(tr);}}$(_49d).find(".calendar-menu-prev,.calendar-menu-next").hover(function(){$(this).addClass("calendar-menu-hover");},function(){$(this).removeClass("calendar-menu-hover");});$(_49d).find(".calendar-menu-next").click(function(){var y=$(_49d).find(".calendar-menu-year");if(!isNaN(y.val())){y.val(parseInt(y.val())+1);_49e();}});$(_49d).find(".calendar-menu-prev").click(function(){var y=$(_49d).find(".calendar-menu-year");if(!isNaN(y.val())){y.val(parseInt(y.val()-1));_49e();}});$(_49d).find(".calendar-menu-year").keypress(function(e){if(e.keyCode==13){_49e(true);}});$(_49d).find(".calendar-menu-month").hover(function(){$(this).addClass("calendar-menu-hover");},function(){$(this).removeClass("calendar-menu-hover");}).click(function(){var menu=$(_49d).find(".calendar-menu");menu.find(".calendar-selected").removeClass("calendar-selected");$(this).addClass("calendar-selected");_49e(true);});}function _49e(_49f){var menu=$(_49d).find(".calendar-menu");var year=menu.find(".calendar-menu-year").val();var _4a0=menu.find(".calendar-selected").attr("abbr");if(!isNaN(year)){opts.year=parseInt(year);opts.month=parseInt(_4a0);show(_49d);}if(_49f){menu.hide();}};var body=$(_49d).find(".calendar-body");var sele=$(_49d).find(".calendar-menu");var _4a1=sele.find(".calendar-menu-year-inner");var _4a2=sele.find(".calendar-menu-month-inner");_4a1.find("input").val(opts.year).focus();_4a2.find("td.calendar-selected").removeClass("calendar-selected");_4a2.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");sele._outerWidth(body._outerWidth());sele._outerHeight(body._outerHeight());_4a2._outerHeight(sele.height()-_4a1._outerHeight());};function _4a3(_4a4,year,_4a5){var opts=$.data(_4a4,"calendar").options;var _4a6=[];var _4a7=new Date(year,_4a5,0).getDate();for(var i=1;i<=_4a7;i++){_4a6.push([year,_4a5,i]);}var _4a8=[],week=[];var _4a9=-1;while(_4a6.length>0){var date=_4a6.shift();week.push(date);var day=new Date(date[0],date[1]-1,date[2]).getDay();if(_4a9==day){day=0;}else {if(day==(opts.firstDay==0?7:opts.firstDay)-1){_4a8.push(week);week=[];}}_4a9=day;}if(week.length){_4a8.push(week);}var _4aa=_4a8[0];if(_4aa.length<7){while(_4aa.length<7){var _4ab=_4aa[0];var date=new Date(_4ab[0],_4ab[1]-1,_4ab[2]-1);_4aa.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);}}else {var _4ab=_4aa[0];var week=[];for(var i=1;i<=7;i++){var date=new Date(_4ab[0],_4ab[1]-1,_4ab[2]-i);week.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);}_4a8.unshift(week);}var _4ac=_4a8[_4a8.length-1];while(_4ac.length<7){var _4ad=_4ac[_4ac.length-1];var date=new Date(_4ad[0],_4ad[1]-1,_4ad[2]+1);_4ac.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);}if(_4a8.length<6){var _4ad=_4ac[_4ac.length-1];var week=[];for(var i=1;i<=7;i++){var date=new Date(_4ad[0],_4ad[1]-1,_4ad[2]+i);week.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);}_4a8.push(week);}return _4a8;};function show(_4ae){var opts=$.data(_4ae,"calendar").options;if(opts.current&&!opts.validator.call(_4ae,opts.current)){opts.current=null;}var now=new Date();var _4af=now.getFullYear()+","+(now.getMonth()+1)+","+now.getDate();var _4af2=now.getFullYear()+","+(now.getMonth()+1<10?"0"+(now.getMonth()+1):now.getMonth()+1)+","+(now.getDate()<10?"0"+now.getDate():now.getDate());var _4b0=opts.current?opts.current.getFullYear()+","+(opts.current.getMonth()+1)+","+opts.current.getDate():"";var _4b1=6-opts.firstDay;var _4b2=_4b1+1;if(_4b1>=7){_4b1-=7;}if(_4b2>=7){_4b2-=7;}if(opts.endtoday){var today=new Date();var month=today.getMonth()+1;var todayStr=today.getFullYear()+","+(month<10?"0"+month:month);var currentStr=opts.year+","+(opts.month<10?"0"+opts.month:opts.month); //alert(todayStr+"#"+currentStr);
	if(todayStr==currentStr){$(_4ae).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);$(".calendar-nextmonth").hide();$(".calendar-nextyear").hide();}else if(todayStr>currentStr){$(_4ae).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);$(".calendar-nextmonth").show();$(".calendar-nextyear").show();}else {opts.year=today.getFullYear();opts.month=month;$(_4ae).find(".calendar-title span").html(opts.months[month-1]+" "+today.getFullYear());$(".calendar-nextmonth").hide();$(".calendar-nextyear").hide();}}else $(_4ae).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);var body=$(_4ae).find("div.calendar-body");body.children("table").remove();var data=["<table class=\"calendar-dtable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];data.push("<thead><tr>");for(var i=opts.firstDay;i<opts.weeks.length;i++){data.push("<th>"+opts.weeks[i]+"</th>");}for(var i=0;i<opts.firstDay;i++){data.push("<th>"+opts.weeks[i]+"</th>");}data.push("</tr></thead>");data.push("<tbody>");var _4b3=_4a3(_4ae,opts.year,opts.month);for(var i=0;i<_4b3.length;i++){var week=_4b3[i];var cls="";if(i==0){cls="calendar-first";}else {if(i==_4b3.length-1){cls="calendar-last";}}data.push("<tr class=\""+cls+"\">");for(var j=0;j<week.length;j++){var day=week[j];var s=day[0]+","+day[1]+","+day[2];var s2=day[0]+","+(day[1]<10?"0"+day[1]:day[1])+","+(day[2]<10?"0"+day[2]:day[2]);var _4b4=new Date(day[0],parseInt(day[1])-1,day[2]);var d=opts.formatter.call(_4ae,_4b4);var css=opts.styler.call(_4ae,_4b4);var _4b5="";var _4b6="";if(typeof css=="string"){_4b6=css;}else {if(css){_4b5=css["class"]||"";_4b6=css["style"]||"";}}var cls="calendar-day";if(!(opts.year==day[0]&&opts.month==day[1])){cls+=" calendar-other-month";}if(s==_4af){cls+=" calendar-today";}if(s==_4b0){cls+=" calendar-selected";}if(j==_4b1){cls+=" calendar-saturday";}else {if(j==_4b2){cls+=" calendar-sunday";}}if(j==0){cls+=" calendar-first";}else {if(j==week.length-1){cls+=" calendar-last";}}cls+=" "+_4b5;if(!opts.validator.call(_4ae,_4b4)){cls+=" calendar-disabled";}if(opts.endtoday&&s2>_4af2){ //alert(s2+"#"+_4af2);
	cls+=" calendar-disabled";if(_4b6!="")_4b6+=";color:#ccc";else _4b6="color:#ccc";}data.push("<td class=\""+cls+"\" abbr=\""+s+"\" style=\""+_4b6+"\">"+d+"</td>");}data.push("</tr>");}data.push("</tbody>");data.push("</table>");body.append(data.join(""));var t=body.children("table.calendar-dtable").prependTo(body);t.find("td.calendar-day:not(.calendar-disabled)").hover(function(){$(this).addClass("calendar-hover");},function(){$(this).removeClass("calendar-hover");}).click(function(){var _4b7=opts.current;t.find(".calendar-selected").removeClass("calendar-selected");$(this).addClass("calendar-selected");var _4b8=$(this).attr("abbr").split(",");opts.current=new Date(_4b8[0],parseInt(_4b8[1])-1,_4b8[2]);opts.onSelect.call(_4ae,opts.current);if(!_4b7||_4b7.getTime()!=opts.current.getTime()){opts.onChange.call(_4ae,opts.current,_4b7);}});};$.fn.calendar=function(_4b9,_4ba){if(typeof _4b9=="string"){return $.fn.calendar.methods[_4b9](this,_4ba);}_4b9=_4b9||{};return this.each(function(){var _4bb=$.data(this,"calendar");if(_4bb){$.extend(_4bb.options,_4b9);}else {_4bb=$.data(this,"calendar",{options:$.extend({},$.fn.calendar.defaults,$.fn.calendar.parseOptions(this),_4b9)});init(this);}if(_4bb.options.border==false){$(this).addClass("calendar-noborder");}_492(this);show(this);$(this).find("div.calendar-menu").hide();});};$.fn.calendar.methods={options:function options(jq){return $.data(jq[0],"calendar").options;},resize:function resize(jq){return jq.each(function(){_492(this);});},moveTo:function moveTo(jq,date){return jq.each(function(){var opts=$(this).calendar("options");if(opts.validator.call(this,date)){var _4bc=opts.current;$(this).calendar({year:date.getFullYear(),month:date.getMonth()+1,current:date});if(!_4bc||_4bc.getTime()!=date.getTime()){opts.onChange.call(this,opts.current,_4bc);}}});}};$.fn.calendar.parseOptions=function(_4bd){var t=$(_4bd);return $.extend({},$.parser.parseOptions(_4bd,["width","height",{firstDay:"number",fit:"boolean",border:"boolean"}]));};$.fn.calendar.defaults={width:180,height:180,fit:false,border:true,firstDay:0,weeks:["S","M","T","W","T","F","S"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:new Date().getFullYear(),month:new Date().getMonth()+1,current:function(){var d=new Date();return new Date(d.getFullYear(),d.getMonth(),d.getDate());}(),formatter:function formatter(date){return date.getDate();},styler:function styler(date){return "";},validator:function validator(date){return true;},onSelect:function onSelect(date){},onChange:function onChange(_4be,_4bf){}};})(jQuery);(function($){function init(_4c0){var _4c1=$("<span class=\"spinner\">"+"<span class=\"spinner-arrow\">"+"<span class=\"spinner-arrow-up\"></span>"+"<span class=\"spinner-arrow-down\"></span>"+"</span>"+"</span>").insertAfter(_4c0);$(_4c0).addClass("spinner-text spinner-f").prependTo(_4c1);return _4c1;};function _4c2(_4c3,_4c4){var opts=$.data(_4c3,"spinner").options;var _4c5=$.data(_4c3,"spinner").spinner;if(_4c4){opts.width=_4c4;}var _4c6=$("<div style=\"display:none\"></div>").insertBefore(_4c5);_4c5.appendTo("body");if(isNaN(opts.width)){opts.width=$(_4c3).outerWidth();}var _4c7=_4c5.find(".spinner-arrow");_4c5._outerWidth(opts.width)._outerHeight(opts.height);$(_4c3)._outerWidth(_4c5.width()-_4c7.outerWidth());$(_4c3).css({height:_4c5.height()+"px",lineHeight:_4c5.height()+"px"});_4c7._outerHeight(_4c5.height());_4c7.find("span")._outerHeight(_4c7.height()/2);_4c5.insertAfter(_4c6);_4c6.remove();};function _4c8(_4c9){var opts=$.data(_4c9,"spinner").options;var _4ca=$.data(_4c9,"spinner").spinner;$(_4c9).unbind(".spinner");_4ca.find(".spinner-arrow-up,.spinner-arrow-down").unbind(".spinner");if(!opts.disabled&&!opts.readonly){_4ca.find(".spinner-arrow-up").bind("mouseenter.spinner",function(){$(this).addClass("spinner-arrow-hover");}).bind("mouseleave.spinner",function(){$(this).removeClass("spinner-arrow-hover");}).bind("click.spinner",function(){opts.spin.call(_4c9,false);opts.onSpinUp.call(_4c9);$(_4c9).validatebox("validate");});_4ca.find(".spinner-arrow-down").bind("mouseenter.spinner",function(){$(this).addClass("spinner-arrow-hover");}).bind("mouseleave.spinner",function(){$(this).removeClass("spinner-arrow-hover");}).bind("click.spinner",function(){opts.spin.call(_4c9,true);opts.onSpinDown.call(_4c9);$(_4c9).validatebox("validate");});$(_4c9).bind("change.spinner",function(){$(this).spinner("setValue",$(this).val());});}};function _4cb(_4cc,_4cd){var opts=$.data(_4cc,"spinner").options;if(_4cd){opts.disabled=true;$(_4cc).attr("disabled",true);}else {opts.disabled=false;$(_4cc).removeAttr("disabled");}};function _4ce(_4cf,mode){var _4d0=$.data(_4cf,"spinner");var opts=_4d0.options;opts.readonly=mode==undefined?true:mode;var _4d1=opts.readonly?true:!opts.editable;$(_4cf).attr("readonly",_4d1).css("cursor",_4d1?"pointer":"");};$.fn.spinner=function(_4d2,_4d3){if(typeof _4d2=="string"){var _4d4=$.fn.spinner.methods[_4d2];if(_4d4){return _4d4(this,_4d3);}else {return this.validatebox(_4d2,_4d3);}}_4d2=_4d2||{};return this.each(function(){var _4d5=$.data(this,"spinner");if(_4d5){$.extend(_4d5.options,_4d2);}else {_4d5=$.data(this,"spinner",{options:$.extend({},$.fn.spinner.defaults,$.fn.spinner.parseOptions(this),_4d2),spinner:init(this)});$(this).removeAttr("disabled");}_4d5.options.originalValue=_4d5.options.value;$(this).val(_4d5.options.value);_4cb(this,_4d5.options.disabled);_4ce(this,_4d5.options.readonly);_4c2(this);$(this).validatebox(_4d5.options);_4c8(this);});};$.fn.spinner.methods={options:function options(jq){var opts=$.data(jq[0],"spinner").options;return $.extend(opts,{value:jq.val()});},destroy:function destroy(jq){return jq.each(function(){var _4d6=$.data(this,"spinner").spinner;$(this).validatebox("destroy");_4d6.remove();});},resize:function resize(jq,_4d7){return jq.each(function(){_4c2(this,_4d7);});},enable:function enable(jq){return jq.each(function(){_4cb(this,false);_4c8(this);});},disable:function disable(jq){return jq.each(function(){_4cb(this,true);_4c8(this);});},readonly:function readonly(jq,mode){return jq.each(function(){_4ce(this,mode);_4c8(this);});},getValue:function getValue(jq){return jq.val();},setValue:function setValue(jq,_4d8){return jq.each(function(){var opts=$.data(this,"spinner").options;var _4d9=opts.value;opts.value=_4d8;$(this).val(_4d8);if(_4d9!=_4d8){opts.onChange.call(this,_4d8,_4d9);}});},clear:function clear(jq){return jq.each(function(){var opts=$.data(this,"spinner").options;opts.value="";$(this).val("");});},reset:function reset(jq){return jq.each(function(){var opts=$(this).spinner("options");$(this).spinner("setValue",opts.originalValue);});}};$.fn.spinner.parseOptions=function(_4da){var t=$(_4da);return $.extend({},$.fn.validatebox.parseOptions(_4da),$.parser.parseOptions(_4da,["width","height","min","max",{increment:"number",editable:"boolean"}]),{value:t.val()||undefined,disabled:t.attr("disabled")?true:undefined,readonly:t.attr("readonly")?true:undefined});};$.fn.spinner.defaults=$.extend({},$.fn.validatebox.defaults,{width:"auto",height:22,deltaX:19,value:"",min:null,max:null,increment:1,editable:true,disabled:false,readonly:false,spin:function spin(down){},onSpinUp:function onSpinUp(){},onSpinDown:function onSpinDown(){},onChange:function onChange(_4db,_4dc){}});})(jQuery);(function($){function _4dd(_4de){$(_4de).addClass("numberspinner-f");var opts=$.data(_4de,"numberspinner").options;$(_4de).spinner(opts).numberbox($.extend({},opts,{width:"auto"}));};function _4df(_4e0,down){var opts=$.data(_4e0,"numberspinner").options;var v=parseFloat($(_4e0).numberbox("getValue")||opts.value)||0;if(down==true){v-=opts.increment;}else {v+=opts.increment;}$(_4e0).numberbox("setValue",v);};$.fn.numberspinner=function(_4e1,_4e2){if(typeof _4e1=="string"){var _4e3=$.fn.numberspinner.methods[_4e1];if(_4e3){return _4e3(this,_4e2);}else {return this.spinner(_4e1,_4e2);}}_4e1=_4e1||{};return this.each(function(){var _4e4=$.data(this,"numberspinner");if(_4e4){$.extend(_4e4.options,_4e1);}else {$.data(this,"numberspinner",{options:$.extend({},$.fn.numberspinner.defaults,$.fn.numberspinner.parseOptions(this),_4e1)});}_4dd(this);});};$.fn.numberspinner.methods={options:function options(jq){var opts=$.data(jq[0],"numberspinner").options;return $.extend(opts,{value:jq.numberbox("getValue"),originalValue:jq.numberbox("options").originalValue});},setValue:function setValue(jq,_4e5){return jq.each(function(){$(this).numberbox("setValue",_4e5);});},getValue:function getValue(jq){return jq.numberbox("getValue");},clear:function clear(jq){return jq.each(function(){$(this).spinner("clear");$(this).numberbox("clear");});},reset:function reset(jq){return jq.each(function(){var opts=$(this).numberspinner("options");$(this).numberspinner("setValue",opts.originalValue);});}};$.fn.numberspinner.parseOptions=function(_4e6){return $.extend({},$.fn.spinner.parseOptions(_4e6),$.fn.numberbox.parseOptions(_4e6),{});};$.fn.numberspinner.defaults=$.extend({},$.fn.spinner.defaults,$.fn.numberbox.defaults,{spin:function spin(down){_4df(this,down);}});})(jQuery);(function($){function _4e7(_4e8){var opts=$.data(_4e8,"timespinner").options;$(_4e8).addClass("timespinner-f");$(_4e8).spinner(opts);$(_4e8).unbind(".timespinner");$(_4e8).bind("click.timespinner",function(){var _4e9=0;if(this.selectionStart!=null){_4e9=this.selectionStart;}else {if(this.createTextRange){var _4ea=_4e8.createTextRange();var s=document.selection.createRange();s.setEndPoint("StartToStart",_4ea);_4e9=s.text.length;}}if(_4e9>=0&&_4e9<=2){opts.highlight=0;}else {if(_4e9>=3&&_4e9<=5){opts.highlight=1;}else {if(_4e9>=6&&_4e9<=8){opts.highlight=2;}}}_4ec(_4e8);}).bind("blur.timespinner",function(){_4eb(_4e8);});};function _4ec(_4ed){var opts=$.data(_4ed,"timespinner").options;var _4ee=0,end=0;if(opts.highlight==0){_4ee=0;end=2;}else {if(opts.highlight==1){_4ee=3;end=5;}else {if(opts.highlight==2){_4ee=6;end=8;}}}if(_4ed.selectionStart!=null){_4ed.setSelectionRange(_4ee,end);}else {if(_4ed.createTextRange){var _4ef=_4ed.createTextRange();_4ef.collapse();_4ef.moveEnd("character",end);_4ef.moveStart("character",_4ee);_4ef.select();}}$(_4ed).focus();};function _4f0(_4f1,_4f2){var opts=$.data(_4f1,"timespinner").options;if(!_4f2){return null;}var vv=_4f2.split(opts.separator);for(var i=0;i<vv.length;i++){if(isNaN(vv[i])){return null;}}while(vv.length<3){vv.push(0);}return new Date(1900,0,0,vv[0],vv[1],vv[2]);};function _4eb(_4f3){var opts=$.data(_4f3,"timespinner").options;var _4f4=$(_4f3).val();var time=_4f0(_4f3,_4f4);if(!time){opts.value="";$(_4f3).spinner("setValue","");return;}var _4f5=_4f0(_4f3,opts.min);var _4f6=_4f0(_4f3,opts.max);if(_4f5&&_4f5>time){time=_4f5;}if(_4f6&&_4f6<time){time=_4f6;}var tt=[_4f7(time.getHours()),_4f7(time.getMinutes())];if(opts.showSeconds){tt.push(_4f7(time.getSeconds()));}var val=tt.join(opts.separator);opts.value=val;$(_4f3).spinner("setValue",val);function _4f7(_4f8){return (_4f8<10?"0":"")+_4f8;};};function _4f9(_4fa,down){var opts=$.data(_4fa,"timespinner").options;var val=$(_4fa).val();if(val==""){val=[0,0,0].join(opts.separator);}var vv=val.split(opts.separator);for(var i=0;i<vv.length;i++){vv[i]=parseInt(vv[i],10);}if(down==true){vv[opts.highlight]-=opts.increment;}else {vv[opts.highlight]+=opts.increment;}$(_4fa).val(vv.join(opts.separator));_4eb(_4fa);_4ec(_4fa);};$.fn.timespinner=function(_4fb,_4fc){if(typeof _4fb=="string"){var _4fd=$.fn.timespinner.methods[_4fb];if(_4fd){return _4fd(this,_4fc);}else {return this.spinner(_4fb,_4fc);}}_4fb=_4fb||{};return this.each(function(){var _4fe=$.data(this,"timespinner");if(_4fe){$.extend(_4fe.options,_4fb);}else {$.data(this,"timespinner",{options:$.extend({},$.fn.timespinner.defaults,$.fn.timespinner.parseOptions(this),_4fb)});}_4e7(this);});};$.fn.timespinner.methods={options:function options(jq){var opts=$.data(jq[0],"timespinner").options;return $.extend(opts,{value:jq.val(),originalValue:jq.spinner("options").originalValue});},setValue:function setValue(jq,_4ff){return jq.each(function(){$(this).val(_4ff);_4eb(this);});},getHours:function getHours(jq){var opts=$.data(jq[0],"timespinner").options;var vv=jq.val().split(opts.separator);return parseInt(vv[0],10);},getMinutes:function getMinutes(jq){var opts=$.data(jq[0],"timespinner").options;var vv=jq.val().split(opts.separator);return parseInt(vv[1],10);},getSeconds:function getSeconds(jq){var opts=$.data(jq[0],"timespinner").options;var vv=jq.val().split(opts.separator);return parseInt(vv[2],10)||0;}};$.fn.timespinner.parseOptions=function(_500){return $.extend({},$.fn.spinner.parseOptions(_500),$.parser.parseOptions(_500,["separator",{showSeconds:"boolean",highlight:"number"}]));};$.fn.timespinner.defaults=$.extend({},$.fn.spinner.defaults,{separator:":",showSeconds:false,highlight:0,spin:function spin(down){_4f9(this,down);}});})(jQuery);(function($){var _501=0;function _502(a,o){for(var i=0,len=a.length;i<len;i++){if(a[i]==o){return i;}}return -1;};function _503(a,o,id){if(typeof o=="string"){for(var i=0,len=a.length;i<len;i++){if(a[i][o]==id){a.splice(i,1);return;}}}else {var _504=_502(a,o);if(_504!=-1){a.splice(_504,1);}}};function _505(a,o,r){for(var i=0,len=a.length;i<len;i++){if(a[i][o]==r[o]){return;}}a.push(r);};function _506(_507){var _508=$.data(_507,"datagrid");var opts=_508.options;var _509=_508.panel;var dc=_508.dc;var ss=null;if(opts.sharedStyleSheet){ss=typeof opts.sharedStyleSheet=="boolean"?"head":opts.sharedStyleSheet;}else {ss=_509.closest("div.datagrid-view");if(!ss.length){ss=dc.view;}}var cc=$(ss);var _50a=$.data(cc[0],"ss");if(!_50a){_50a=$.data(cc[0],"ss",{cache:{},dirty:[]});}return {add:function add(_50b){var ss=["<style type=\"text/css\" easyui=\"true\">"];for(var i=0;i<_50b.length;i++){_50a.cache[_50b[i][0]]={width:_50b[i][1]};}var _50c=0;for(var s in _50a.cache){var item=_50a.cache[s];item.index=_50c++;ss.push(s+"{width:"+item.width+"}");}ss.push("</style>");$(ss.join("\n")).appendTo(cc);cc.children("style[easyui]:not(:last)").remove();},getRule:function getRule(_50d){var _50e=cc.children("style[easyui]:last")[0];var _50f=_50e.styleSheet?_50e.styleSheet:_50e.sheet||document.styleSheets[document.styleSheets.length-1];var _510=_50f.cssRules||_50f.rules;return _510[_50d];},set:function set(_511,_512){var item=_50a.cache[_511];if(item){item.width=_512;var rule=this.getRule(item.index);if(rule){rule.style["width"]=_512;}}},remove:function remove(_513){var tmp=[];for(var s in _50a.cache){if(s.indexOf(_513)==-1){tmp.push([s,_50a.cache[s].width]);}}_50a.cache={};this.add(tmp);},dirty:function dirty(_514){if(_514){_50a.dirty.push(_514);}},clean:function clean(){for(var i=0;i<_50a.dirty.length;i++){this.remove(_50a.dirty[i]);}_50a.dirty=[];}};};function _515(_516,_517){var opts=$.data(_516,"datagrid").options;var _518=$.data(_516,"datagrid").panel;if(_517){if(_517.width){opts.width=_517.width;}if(_517.height){opts.height=_517.height;}}if(opts.fit==true){var p=_518.panel("panel").parent();opts.width=p.width();opts.height=p.height();}_518.panel("resize",{width:opts.width,height:opts.height});};function _519(_51a){var opts=$.data(_51a,"datagrid").options;var dc=$.data(_51a,"datagrid").dc;var wrap=$.data(_51a,"datagrid").panel;var _51b=wrap.width();var _51c=wrap.height();var view=dc.view;var _51d=dc.view1;var _51e=dc.view2;var _51f=_51d.children("div.datagrid-header");var _520=_51e.children("div.datagrid-header");var _521=_51f.find("table");var _522=_520.find("table");view.width(_51b);var _523=_51f.children("div.datagrid-header-inner").show();_51d.width(_523.find("table").width());if(!opts.showHeader){_523.hide();}_51e.width(_51b-_51d._outerWidth());_51d.children("div.datagrid-header,div.datagrid-body,div.datagrid-footer").width(_51d.width());_51e.children("div.datagrid-header,div.datagrid-body,div.datagrid-footer").width(_51e.width());var hh;_51f.css("height","");_520.css("height","");_521.css("height","");_522.css("height","");hh=Math.max(_521.height(),_522.height());_521.height(hh);_522.height(hh);_51f.add(_520)._outerHeight(hh);if(opts.height!="auto"){var _524=_51c-_51e.children("div.datagrid-header")._outerHeight()-_51e.children("div.datagrid-footer")._outerHeight()-wrap.children("div.datagrid-toolbar")._outerHeight();wrap.children("div.datagrid-pager").each(function(){_524-=$(this)._outerHeight();});dc.body1.add(dc.body2).children("table.datagrid-btable-frozen").css({position:"absolute",top:dc.header2._outerHeight()});var _525=dc.body2.children("table.datagrid-btable-frozen")._outerHeight();_51d.add(_51e).children("div.datagrid-body").css({marginTop:_525,height:_524-_525});}view.height(_51e.height());};function _526(_527,_528,_529){var rows=$.data(_527,"datagrid")?$.data(_527,"datagrid").data.rows:[];var opts=$.data(_527,"datagrid")?$.data(_527,"datagrid").options:{};var dc=$.data(_527,"datagrid")?$.data(_527,"datagrid").dc:{};if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight||_529)){if(_528!=undefined){var tr1=opts.finder.getTr(_527,_528,"body",1);var tr2=opts.finder.getTr(_527,_528,"body",2);_52a(tr1,tr2);}else {var tr1=opts.finder.getTr(_527,0,"allbody",1);var tr2=opts.finder.getTr(_527,0,"allbody",2);_52a(tr1,tr2);if(opts.showFooter){var tr1=opts.finder.getTr(_527,0,"allfooter",1);var tr2=opts.finder.getTr(_527,0,"allfooter",2);_52a(tr1,tr2);}}}_519(_527);if(opts.height=="auto"){var _52b=dc.body1.parent();var _52c=dc.body2;var _52d=_52e(_52c);var _52f=_52d.height;if(_52d.width>_52c.width()){_52f+=18;}_52b.height(_52f);_52c.height(_52f);dc.view.height(dc.view2.height());}dc.body2.triggerHandler("scroll");function _52a(trs1,trs2){for(var i=0;i<trs2.length;i++){var tr1=$(trs1[i]);var tr2=$(trs2[i]);tr1.css("height","");tr2.css("height","");var _530=Math.max(tr1.height(),tr2.height());tr1.css("height",_530);tr2.css("height",_530);}};function _52e(cc){var _531=0;var _532=0;$(cc).children().each(function(){var c=$(this);if(c.is(":visible")){_532+=c._outerHeight();if(_531<c._outerWidth()){_531=c._outerWidth();}}});return {width:_531,height:_532};};};function _533(_534,_535){var _536=$.data(_534,"datagrid");var opts=_536.options;var dc=_536.dc;if(!dc.body2.children("table.datagrid-btable-frozen").length){dc.body1.add(dc.body2).prepend("<table class=\"datagrid-btable datagrid-btable-frozen\" cellspacing=\"0\" cellpadding=\"0\"></table>");}_537(true);_537(false);_519(_534);function _537(_538){var _539=_538?1:2;var tr=opts.finder.getTr(_534,_535,"body",_539);(_538?dc.body1:dc.body2).children("table.datagrid-btable-frozen").append(tr);};};function _53a(_53b,_53c){function _53d(){var _53e=[];var _53f=[];$(_53b).children("thead").each(function(){var opt=$.parser.parseOptions(this,[{frozen:"boolean"}]);$(this).find("tr").each(function(){var cols=[];$(this).find("th").each(function(){var th=$(this);var col=$.extend({},$.parser.parseOptions(this,["field","align","halign","order",{sortable:"boolean",checkbox:"boolean",resizable:"boolean",fixed:"boolean"},{rowspan:"number",colspan:"number",width:"number"}]),{title:th.html()||undefined,hidden:th.attr("hidden")?true:undefined,formatter:th.attr("formatter")?eval(th.attr("formatter")):undefined,styler:th.attr("styler")?eval(th.attr("styler")):undefined,sorter:th.attr("sorter")?eval(th.attr("sorter")):undefined});if(th.attr("editor")){var s=$.trim(th.attr("editor"));if(s.substr(0,1)=="{"){col.editor=eval("("+s+")");}else {col.editor=s;}}cols.push(col);});opt.frozen?_53e.push(cols):_53f.push(cols);});});return [_53e,_53f];};var _540=$("<div class=\"datagrid-wrap\">"+"<div class=\"datagrid-view\">"+"<div class=\"datagrid-view1\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\">"+"<div class=\"datagrid-body-inner\"></div>"+"</div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"<div class=\"datagrid-view2\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\"></div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"</div>"+"</div>").insertAfter(_53b);_540.panel({doSize:false});_540.panel("panel").addClass("datagrid").bind("_resize",function(e,_541){var opts=$.data(_53b,"datagrid").options;if(opts.fit==true||_541){_515(_53b);setTimeout(function(){if($.data(_53b,"datagrid")){_542(_53b);}},0);}return false;});$(_53b).hide().appendTo(_540.children("div.datagrid-view"));var cc=_53d();var view=_540.children("div.datagrid-view");var _543=view.children("div.datagrid-view1");var _544=view.children("div.datagrid-view2");return {panel:_540,frozenColumns:cc[0],columns:cc[1],dc:{view:view,view1:_543,view2:_544,header1:_543.children("div.datagrid-header").children("div.datagrid-header-inner"),header2:_544.children("div.datagrid-header").children("div.datagrid-header-inner"),body1:_543.children("div.datagrid-body").children("div.datagrid-body-inner"),body2:_544.children("div.datagrid-body"),footer1:_543.children("div.datagrid-footer").children("div.datagrid-footer-inner"),footer2:_544.children("div.datagrid-footer").children("div.datagrid-footer-inner")}};};function _545(_546){var _547=$.data(_546,"datagrid");var opts=_547.options;var dc=_547.dc;var _548=_547.panel;_547.ss=$(_546).datagrid("createStyleSheet");_548.panel($.extend({},opts,{id:null,doSize:false,onResize:function onResize(_549,_54a){setTimeout(function(){if($.data(_546,"datagrid")){_519(_546);_579(_546);opts.onResize.call(_548,_549,_54a);}},0);},onExpand:function onExpand(){_526(_546);opts.onExpand.call(_548);}}));_547.rowIdPrefix="datagrid-row-r"+ ++_501;_547.cellClassPrefix="datagrid-cell-c"+_501;_54b(dc.header1,opts.frozenColumns,true);_54b(dc.header2,opts.columns,false);_54c();dc.header1.add(dc.header2).css("display",opts.showHeader?"block":"none");dc.footer1.add(dc.footer2).css("display",opts.showFooter?"block":"none");if(opts.toolbar){if($.isArray(opts.toolbar)){$("div.datagrid-toolbar",_548).remove();var tb=$("<div class=\"datagrid-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_548);var tr=tb.find("tr");for(var i=0;i<opts.toolbar.length;i++){var btn=opts.toolbar[i];if(btn=="-"){$("<td><div class=\"datagrid-btn-separator\"></div></td>").appendTo(tr);}else {var td=$("<td></td>").appendTo(tr);var tool=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);tool[0].onclick=eval(btn.handler||function(){});tool.linkbutton($.extend({},btn,{plain:true}));}}}else {$(opts.toolbar).addClass("datagrid-toolbar").prependTo(_548);$(opts.toolbar).show();}}else {$("div.datagrid-toolbar",_548).remove();}$("div.datagrid-pager",_548).remove();if(opts.pagination){var _54d=$("<div class=\"datagrid-pager\"></div>");if(opts.pagePosition=="bottom"){_54d.appendTo(_548);}else {if(opts.pagePosition=="top"){_54d.addClass("datagrid-pager-top").prependTo(_548);}else {var ptop=$("<div class=\"datagrid-pager datagrid-pager-top\"></div>").prependTo(_548);_54d.appendTo(_548);_54d=_54d.add(ptop);}}_54d.pagination({total:opts.pageNumber*opts.pageSize,pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,showFileCount:opts.showFileCount,onSelectPage:function onSelectPage(_54e,_54f){opts.pageNumber=_54e;opts.pageSize=_54f;_54d.pagination("refresh",{pageNumber:_54e,pageSize:_54f});_577(_546);}});opts.pageSize=_54d.pagination("options").pageSize;}function _54b(_550,_551,_552){if(!_551){return;}$(_550).show();$(_550).empty();var _553=[];var _554=[];if(opts.sortName){_553=opts.sortName.split(",");_554=opts.sortOrder.split(",");}var t=$("<table class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tbody></tbody></table>").appendTo(_550);for(var i=0;i<_551.length;i++){var tr=$("<tr class=\"datagrid-header-row\"></tr>").appendTo($("tbody",t));var cols=_551[i];for(var j=0;j<cols.length;j++){var col=cols[j];var attr="";if(col.rowspan){attr+="rowspan=\""+col.rowspan+"\" ";}if(col.colspan){attr+="colspan=\""+col.colspan+"\" ";}var td=$("<td "+attr+"></td>").appendTo(tr);if(col.checkbox){td.attr("field",col.field);$("<div class=\"datagrid-header-check\"></div>").html("<input type=\"checkbox\"/>").appendTo(td);}else {if(col.field){td.attr("field",col.field);td.append("<div class=\"datagrid-cell\"><span></span><span class=\"datagrid-sort-icon\"></span></div>");$("span",td).html(col.title);$("span.datagrid-sort-icon",td).html("&nbsp;");var cell=td.find("div.datagrid-cell");var pos=_502(_553,col.field);if(pos>=0){cell.addClass("datagrid-sort-"+_554[pos]);}if(col.resizable==false){cell.attr("resizable","false");}if(col.width){cell._outerWidth(col.width);col.boxWidth=parseInt(cell[0].style.width);}else {col.auto=true;}cell.css("text-align",col.halign||col.align||"");col.cellClass=_547.cellClassPrefix+"-"+col.field.replace(/[\.|\s]/g,"-");cell.addClass(col.cellClass).css("width","");}else {$("<div class=\"datagrid-cell-group\"></div>").html(col.title).appendTo(td);}}if(col.hidden){td.hide();}}}if(_552&&opts.rownumbers){var td=$("<td rowspan=\""+opts.frozenColumns.length+"\"><div class=\"datagrid-header-rownumber\"></div></td>");if($("tr",t).length==0){td.wrap("<tr class=\"datagrid-header-row\"></tr>").parent().appendTo($("tbody",t));}else {td.prependTo($("tr:first",t));}}};function _54c(){var _555=[];var _556=_557(_546,true).concat(_557(_546));for(var i=0;i<_556.length;i++){var col=_558(_546,_556[i]);if(col&&!col.checkbox){_555.push(["."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto"]);}}_547.ss.add(_555);_547.ss.dirty(_547.cellSelectorPrefix);_547.cellSelectorPrefix="."+_547.cellClassPrefix;};};function _559(_55a){var _55b=$.data(_55a,"datagrid");var _55c=_55b.panel;var opts=_55b.options;var dc=_55b.dc;var _55d=dc.header1.add(dc.header2);_55d.find("input[type=checkbox]").unbind(".datagrid").bind("click.datagrid",function(e){if(opts.singleSelect&&opts.selectOnCheck){return false;}if($(this).is(":checked")){_5df(_55a);}else {_5e5(_55a);}e.stopPropagation();});var _55e=_55d.find("div.datagrid-cell");_55e.closest("td").unbind(".datagrid").bind("mouseenter.datagrid",function(){if(_55b.resizing){return;}$(this).addClass("datagrid-header-over");}).bind("mouseleave.datagrid",function(){$(this).removeClass("datagrid-header-over");}).bind("contextmenu.datagrid",function(e){var _55f=$(this).attr("field");opts.onHeaderContextMenu.call(_55a,e,_55f);});_55e.unbind(".datagrid").bind("click.datagrid",function(e){var p1=$(this).offset().left+5;var p2=$(this).offset().left+$(this)._outerWidth()-5;if(e.pageX<p2&&e.pageX>p1){_56c(_55a,$(this).parent().attr("field"));}}).bind("dblclick.datagrid",function(e){var p1=$(this).offset().left+5;var p2=$(this).offset().left+$(this)._outerWidth()-5;var cond=opts.resizeHandle=="right"?e.pageX>p2:opts.resizeHandle=="left"?e.pageX<p1:e.pageX<p1||e.pageX>p2;if(cond){var _560=$(this).parent().attr("field");var col=_558(_55a,_560);if(col.resizable==false){return;}$(_55a).datagrid("autoSizeColumn",_560);col.auto=false;}});var _561=opts.resizeHandle=="right"?"e":opts.resizeHandle=="left"?"w":"e,w";_55e.each(function(){$(this).resizable({handles:_561,disabled:$(this).attr("resizable")?$(this).attr("resizable")=="false":false,minWidth:25,onStartResize:function onStartResize(e){_55b.resizing=true;_55d.css("cursor",$("body").css("cursor"));if(!_55b.proxy){_55b.proxy=$("<div class=\"datagrid-resize-proxy\"></div>").appendTo(dc.view);}_55b.proxy.css({left:e.pageX-$(_55c).offset().left-1,display:"none"});setTimeout(function(){if(_55b.proxy){_55b.proxy.show();}},500);},onResize:function onResize(e){_55b.proxy.css({left:e.pageX-$(_55c).offset().left-1,display:"block"});return false;},onStopResize:function onStopResize(e){_55d.css("cursor","");$(this).css("height","");$(this)._outerWidth($(this)._outerWidth());var _562=$(this).parent().attr("field");var col=_558(_55a,_562);col.width=$(this)._outerWidth();col.boxWidth=parseInt(this.style.width);col.auto=undefined;$(this).css("width","");_542(_55a,_562);_55b.proxy.remove();_55b.proxy=null;if($(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1")){_519(_55a);}_579(_55a);opts.onResizeColumn.call(_55a,_562,col.width);setTimeout(function(){_55b.resizing=false;},0);}});});dc.body1.add(dc.body2).unbind().bind("mouseover",function(e){if(_55b.resizing){return;}var tr=$(e.target).closest("tr.datagrid-row");if(!_563(tr)){return;}var _564=_565(tr);_5c7(_55a,_564);e.stopPropagation();}).bind("mouseout",function(e){var tr=$(e.target).closest("tr.datagrid-row");if(!_563(tr)){return;}var _566=_565(tr);opts.finder.getTr(_55a,_566).removeClass("datagrid-row-over");e.stopPropagation();}).bind("click",function(e){var tt=$(e.target);var tr=tt.closest("tr.datagrid-row");if(!_563(tr)){return;}var _567=_565(tr);if(tt.parent().hasClass("datagrid-cell-check")){if(opts.singleSelect&&opts.selectOnCheck){if(!opts.checkOnSelect){_5e5(_55a,true);}_5d2(_55a,_567);}else {if(tt.is(":checked")){_5d2(_55a,_567);}else {_5d9(_55a,_567);}}}else {var row=opts.finder.getRow(_55a,_567);var td=tt.closest("td[field]",tr);if(td.length){var _568=td.attr("field");opts.onClickCell.call(_55a,_567,_568,row[_568]);}if(opts.singleSelect==true){_5cb(_55a,_567);}else {if(opts.ctrlSelect){if(e.ctrlKey){if(tr.hasClass("datagrid-row-selected")){_5d3(_55a,_567);}else {_5cb(_55a,_567);}}else {$(_55a).datagrid("clearSelections");_5cb(_55a,_567);}}else {if(tr.hasClass("datagrid-row-selected")){_5d3(_55a,_567);}else {_5cb(_55a,_567);}}}opts.onClickRow.call(_55a,_567,row);}e.stopPropagation();}).bind("dblclick",function(e){var tt=$(e.target);var tr=tt.closest("tr.datagrid-row");if(!_563(tr)){return;}var _569=_565(tr);var row=opts.finder.getRow(_55a,_569);var td=tt.closest("td[field]",tr);if(td.length){var _56a=td.attr("field");opts.onDblClickCell.call(_55a,_569,_56a,row[_56a]);}opts.onDblClickRow.call(_55a,_569,row);e.stopPropagation();}).bind("contextmenu",function(e){var tr=$(e.target).closest("tr.datagrid-row");if(!_563(tr)){return;}var _56b=_565(tr);var row=opts.finder.getRow(_55a,_56b);opts.onRowContextMenu.call(_55a,e,_56b,row);e.stopPropagation();});dc.body2.bind("scroll",function(){var b1=dc.view1.children("div.datagrid-body");b1.scrollTop($(this).scrollTop());var c1=dc.body1.children(":first");var c2=dc.body2.children(":first");if(c1.length&&c2.length){var top1=c1.offset().top;var top2=c2.offset().top;if(top1!=top2){b1.scrollTop(b1.scrollTop()+top1-top2);}}dc.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft());dc.body2.children("table.datagrid-btable-frozen").css("left",-$(this)._scrollLeft());});function _565(tr){if(tr.attr("datagrid-row-index")){return parseInt(tr.attr("datagrid-row-index"));}else {return tr.attr("node-id");}};function _563(tr){return tr.length&&tr.parent().length;};};function _56c(_56d,_56e){var _56f=$.data(_56d,"datagrid");var opts=_56f.options;_56e=_56e||{};var _570={sortName:opts.sortName,sortOrder:opts.sortOrder};if((typeof _56e==="undefined"?"undefined":_typeof(_56e))=="object"){$.extend(_570,_56e);}var _571=[];var _572=[];if(_570.sortName){_571=_570.sortName.split(",");_572=_570.sortOrder.split(",");}if(typeof _56e=="string"){var _573=_56e;var col=_558(_56d,_573);if(!col.sortable||_56f.resizing){return;}var _574=col.order||"asc";var pos=_502(_571,_573);if(pos>=0){var _575=_572[pos]=="asc"?"desc":"asc";if(opts.multiSort&&_575==_574){_571.splice(pos,1);_572.splice(pos,1);}else {_572[pos]=_575;}}else {if(opts.multiSort){_571.push(_573);_572.push(_574);}else {_571=[_573];_572=[_574];}}_570.sortName=_571.join(",");_570.sortOrder=_572.join(",");}if(opts.onBeforeSortColumn.call(_56d,_570.sortName,_570.sortOrder)==false){return;}$.extend(opts,_570);var dc=_56f.dc;var _576=dc.header1.add(dc.header2);_576.find("div.datagrid-cell").removeClass("datagrid-sort-asc datagrid-sort-desc");for(var i=0;i<_571.length;i++){var col=_558(_56d,_571[i]);_576.find("div."+col.cellClass).addClass("datagrid-sort-"+_572[i]);}if(opts.remoteSort){_577(_56d);}else {_578(_56d,$(_56d).datagrid("getData"));}opts.onSortColumn.call(_56d,opts.sortName,opts.sortOrder);};function _579(_57a){var _57b=$.data(_57a,"datagrid");var opts=_57b.options;var dc=_57b.dc;dc.body2.css("overflow-x","");if(!opts.fitColumns){return;}if(!_57b.leftWidth){_57b.leftWidth=0;}var _57c=dc.view2.children("div.datagrid-header");var _57d=0;var _57e;var _57f=_557(_57a,false);for(var i=0;i<_57f.length;i++){var col=_558(_57a,_57f[i]);if(_580(col)){_57d+=col.width;_57e=col;}}if(!_57d){return;}if(_57e){_581(_57e,-_57b.leftWidth);}var _582=_57c.children("div.datagrid-header-inner").show();var _583=_57c.width()-_57c.find("table").width()-opts.scrollbarSize+_57b.leftWidth;var rate=_583/_57d;if(!opts.showHeader){_582.hide();}for(var i=0;i<_57f.length;i++){var col=_558(_57a,_57f[i]);if(_580(col)){var _584=parseInt(col.width*rate);_581(col,_584);_583-=_584;}}_57b.leftWidth=_583;if(_57e){_581(_57e,_57b.leftWidth);}_542(_57a);if(_57c.width()>=_57c.find("table").width()){dc.body2.css("overflow-x","hidden");}function _581(col,_585){if(col.width+_585>0){col.width+=_585;col.boxWidth+=_585;}};function _580(col){if(!col.hidden&&!col.checkbox&&!col.auto&&!col.fixed){return true;}};};function _586(_587,_588){var _589=$.data(_587,"datagrid");var opts=_589.options;var dc=_589.dc;var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-9999px\"></div>").appendTo("body");if(_588){_515(_588);if(opts.fitColumns){_519(_587);_579(_587);}}else {var _58a=false;var _58b=_557(_587,true).concat(_557(_587,false));for(var i=0;i<_58b.length;i++){var _588=_58b[i];var col=_558(_587,_588);if(col.auto){_515(_588);_58a=true;}}if(_58a&&opts.fitColumns){_519(_587);_579(_587);}}tmp.remove();function _515(_58c){var _58d=dc.view.find("div.datagrid-header td[field=\""+_58c+"\"] div.datagrid-cell");_58d.css("width","");var col=$(_587).datagrid("getColumnOption",_58c);col.width=undefined;col.boxWidth=undefined;col.auto=true;$(_587).datagrid("fixColumnSize",_58c);var _58e=Math.max(_58f("header"),_58f("allbody"),_58f("allfooter"));_58d._outerWidth(_58e);col.width=_58e;col.boxWidth=parseInt(_58d[0].style.width);_58d.css("width","");$(_587).datagrid("fixColumnSize",_58c);opts.onResizeColumn.call(_587,_58c,col.width);function _58f(type){var _590=0;if(type=="header"){_590=_591(_58d);}else {opts.finder.getTr(_587,0,type).find("td[field=\""+_58c+"\"] div.datagrid-cell").each(function(){var w=_591($(this));if(_590<w){_590=w;}});}return _590;function _591(cell){return cell.is(":visible")?cell._outerWidth():tmp.html(cell.html())._outerWidth();};};};};function _542(_592,_593){var _594=$.data(_592,"datagrid");var opts=_594.options;var dc=_594.dc;var _595=dc.view.find("table.datagrid-btable,table.datagrid-ftable");_595.css("table-layout","fixed");if(_593){fix(_593);}else {var ff=_557(_592,true).concat(_557(_592,false));for(var i=0;i<ff.length;i++){fix(ff[i]);}}_595.css("table-layout","auto");_596(_592);setTimeout(function(){_526(_592);_59b(_592);},0);function fix(_597){var col=_558(_592,_597);if(!col.checkbox){_594.ss.set("."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto");}};};function _596(_598){var dc=$.data(_598,"datagrid").dc;dc.body1.add(dc.body2).find("td.datagrid-td-merged").each(function(){var td=$(this);var _599=td.attr("colspan")||1;var _59a=_558(_598,td.attr("field")).width;for(var i=1;i<_599;i++){td=td.next();_59a+=_558(_598,td.attr("field")).width+1;}$(this).children("div.datagrid-cell")._outerWidth(_59a);});};function _59b(_59c){var dc=$.data(_59c,"datagrid").dc;dc.view.find("div.datagrid-editable").each(function(){var cell=$(this);var _59d=cell.parent().attr("field");var col=$(_59c).datagrid("getColumnOption",_59d);cell._outerWidth(col.width);var ed=$.data(this,"datagrid.editor");if(ed.actions.resize){ed.actions.resize(ed.target,cell.width());}});};function _558(_59e,_59f){function find(_5a0){if(_5a0){for(var i=0;i<_5a0.length;i++){var cc=_5a0[i];for(var j=0;j<cc.length;j++){var c=cc[j];if(c.field==_59f){return c;}}}}return null;};var opts=$.data(_59e,"datagrid").options;var col=find(opts.columns);if(!col){col=find(opts.frozenColumns);}return col;};function _557(_5a1,_5a2){var opts=$.data(_5a1,"datagrid").options;var _5a3=_5a2==true?opts.frozenColumns||[[]]:opts.columns;if(_5a3.length==0){return [];}var _5a4=[];function _5a5(_5a6){var c=0;var i=0;while(true){if(_5a4[i]==undefined){if(c==_5a6){return i;}c++;}i++;}};function _5a7(r){var ff=[];var c=0;for(var i=0;i<_5a3[r].length;i++){var col=_5a3[r][i];if(col.field){ff.push([c,col.field]);}c+=parseInt(col.colspan||"1");}for(var i=0;i<ff.length;i++){ff[i][0]=_5a5(ff[i][0]);}for(var i=0;i<ff.length;i++){var f=ff[i];_5a4[f[0]]=f[1];}};for(var i=0;i<_5a3.length;i++){_5a7(i);}return _5a4;};function _578(_5a8,data){var _5a9=$.data(_5a8,"datagrid");var opts=_5a9.options;var dc=_5a9.dc;data=opts.loadFilter.call(_5a8,data);data.total=parseInt(data.total);_5a9.data=data;if(data.footer){_5a9.footer=data.footer;}if(!opts.remoteSort&&opts.sortName){var _5aa=opts.sortName.split(",");var _5ab=opts.sortOrder.split(",");data.rows.sort(function(r1,r2){var r=0;for(var i=0;i<_5aa.length;i++){var sn=_5aa[i];var so=_5ab[i];var col=_558(_5a8,sn);var _5ac=col.sorter||function(a,b){return a==b?0:a>b?1:-1;};r=_5ac(r1[sn],r2[sn])*(so=="asc"?1:-1);if(r!=0){return r;}}return r;});}if(opts.view.onBeforeRender){opts.view.onBeforeRender.call(opts.view,_5a8,data.rows);}opts.view.render.call(opts.view,_5a8,dc.body2,false);opts.view.render.call(opts.view,_5a8,dc.body1,true);if(opts.showFooter){opts.view.renderFooter.call(opts.view,_5a8,dc.footer2,false);opts.view.renderFooter.call(opts.view,_5a8,dc.footer1,true);}if(opts.view.onAfterRender){opts.view.onAfterRender.call(opts.view,_5a8);}_5a9.ss.clean();opts.onLoadSuccess.call(_5a8,data);var _5ad=$(_5a8).datagrid("getPager");if(_5ad.length){var _5ae=_5ad.pagination("options");if(_5ae.total!=data.total){_5ad.pagination("refresh",{total:data.total});if(opts.pageNumber!=_5ae.pageNumber){opts.pageNumber=_5ae.pageNumber;_577(_5a8);}}}_526(_5a8);dc.body2.triggerHandler("scroll");_5af(_5a8);$(_5a8).datagrid("autoSizeColumn");};function _5af(_5b0){var _5b1=$.data(_5b0,"datagrid");var opts=_5b1.options;if(opts.idField){var _5b2=$.data(_5b0,"treegrid")?true:false;var _5b3=opts.onSelect;var _5b4=opts.onCheck;opts.onSelect=opts.onCheck=function(){};var rows=opts.finder.getRows(_5b0);for(var i=0;i<rows.length;i++){var row=rows[i];var _5b5=_5b2?row[opts.idField]:i;if(_5b6(_5b1.selectedRows,row)){_5cb(_5b0,_5b5,true);}if(_5b6(_5b1.checkedRows,row)){_5d2(_5b0,_5b5,true);}}opts.onSelect=_5b3;opts.onCheck=_5b4;}function _5b6(a,r){for(var i=0;i<a.length;i++){if(a[i][opts.idField]==r[opts.idField]){a[i]=r;return true;}}return false;};};function _5b7(_5b8,row){var _5b9=$.data(_5b8,"datagrid");var opts=_5b9.options;var rows=_5b9.data.rows;if((typeof row==="undefined"?"undefined":_typeof(row))=="object"){return _502(rows,row);}else {for(var i=0;i<rows.length;i++){if(rows[i][opts.idField]==row){return i;}}return -1;}};function _5ba(_5bb){var _5bc=$.data(_5bb,"datagrid");var opts=_5bc.options;var data=_5bc.data;if(opts.idField){return _5bc.selectedRows;}else {var rows=[];opts.finder.getTr(_5bb,"","selected",2).each(function(){rows.push(opts.finder.getRow(_5bb,$(this)));});return rows;}};function _5bd(_5be){var _5bf=$.data(_5be,"datagrid");var opts=_5bf.options;if(opts.idField){return _5bf.checkedRows;}else {var rows=[];opts.finder.getTr(_5be,"","checked",2).each(function(){rows.push(opts.finder.getRow(_5be,$(this)));});return rows;}};function _5c0(_5c1,_5c2){var _5c3=$.data(_5c1,"datagrid");var dc=_5c3.dc;var opts=_5c3.options;var tr=opts.finder.getTr(_5c1,_5c2);if(tr.length){if(tr.closest("table").hasClass("datagrid-btable-frozen")){return;}var _5c4=dc.view2.children("div.datagrid-header")._outerHeight();var _5c5=dc.body2;var _5c6=_5c5.outerHeight(true)-_5c5.outerHeight();var top=tr.position().top-_5c4-_5c6;if(top<0){_5c5.scrollTop(_5c5.scrollTop()+top);}else {if(top+tr._outerHeight()>_5c5.height()-18){_5c5.scrollTop(_5c5.scrollTop()+top+tr._outerHeight()-_5c5.height()+18);}}}};function _5c7(_5c8,_5c9){var _5ca=$.data(_5c8,"datagrid");var opts=_5ca.options;opts.finder.getTr(_5c8,_5ca.highlightIndex).removeClass("datagrid-row-over");opts.finder.getTr(_5c8,_5c9).addClass("datagrid-row-over");_5ca.highlightIndex=_5c9;};function _5cb(_5cc,_5cd,_5ce){var _5cf=$.data(_5cc,"datagrid");var dc=_5cf.dc;var opts=_5cf.options;var _5d0=_5cf.selectedRows;if(opts.singleSelect){_5d1(_5cc);_5d0.splice(0,_5d0.length);}if(!_5ce&&opts.checkOnSelect){_5d2(_5cc,_5cd,true);}var row=opts.finder.getRow(_5cc,_5cd);if(opts.idField){_505(_5d0,opts.idField,row);}opts.finder.getTr(_5cc,_5cd).addClass("datagrid-row-selected");opts.onSelect.call(_5cc,_5cd,row);_5c0(_5cc,_5cd);};function _5d3(_5d4,_5d5,_5d6){var _5d7=$.data(_5d4,"datagrid");var dc=_5d7.dc;var opts=_5d7.options;var _5d8=$.data(_5d4,"datagrid").selectedRows;if(!_5d6&&opts.checkOnSelect){_5d9(_5d4,_5d5,true);}opts.finder.getTr(_5d4,_5d5).removeClass("datagrid-row-selected");var row=opts.finder.getRow(_5d4,_5d5);if(opts.idField){_503(_5d8,opts.idField,row[opts.idField]);}opts.onUnselect.call(_5d4,_5d5,row);};function _5da(_5db,_5dc){var _5dd=$.data(_5db,"datagrid");var opts=_5dd.options;var rows=opts.finder.getRows(_5db);var _5de=$.data(_5db,"datagrid").selectedRows;if(!_5dc&&opts.checkOnSelect){_5df(_5db,true);}opts.finder.getTr(_5db,"","allbody").addClass("datagrid-row-selected");if(opts.idField){for(var _5e0=0;_5e0<rows.length;_5e0++){_505(_5de,opts.idField,rows[_5e0]);}}opts.onSelectAll.call(_5db,rows);};function _5d1(_5e1,_5e2){var _5e3=$.data(_5e1,"datagrid");var opts=_5e3.options;var rows=opts.finder.getRows(_5e1);var _5e4=$.data(_5e1,"datagrid").selectedRows;if(!_5e2&&opts.checkOnSelect){_5e5(_5e1,true);}opts.finder.getTr(_5e1,"","selected").removeClass("datagrid-row-selected");if(opts.idField){for(var _5e6=0;_5e6<rows.length;_5e6++){_503(_5e4,opts.idField,rows[_5e6][opts.idField]);}}opts.onUnselectAll.call(_5e1,rows);};function _5d2(_5e7,_5e8,_5e9){var _5ea=$.data(_5e7,"datagrid");var opts=_5ea.options;if(!_5e9&&opts.selectOnCheck){_5cb(_5e7,_5e8,true);}var tr=opts.finder.getTr(_5e7,_5e8).addClass("datagrid-row-checked");var ck=tr.find("div.datagrid-cell-check input[type=checkbox]");ck._propAttr("checked",true);tr=opts.finder.getTr(_5e7,"","checked",2);if(tr.length==opts.finder.getRows(_5e7).length){var dc=_5ea.dc;var _5eb=dc.header1.add(dc.header2);_5eb.find("input[type=checkbox]")._propAttr("checked",true);}var row=opts.finder.getRow(_5e7,_5e8);if(opts.idField){_505(_5ea.checkedRows,opts.idField,row);}opts.onCheck.call(_5e7,_5e8,row);};function _5d9(_5ec,_5ed,_5ee){var _5ef=$.data(_5ec,"datagrid");var opts=_5ef.options;if(!_5ee&&opts.selectOnCheck){_5d3(_5ec,_5ed,true);}var tr=opts.finder.getTr(_5ec,_5ed).removeClass("datagrid-row-checked");var ck=tr.find("div.datagrid-cell-check input[type=checkbox]");ck._propAttr("checked",false);var dc=_5ef.dc;var _5f0=dc.header1.add(dc.header2);_5f0.find("input[type=checkbox]")._propAttr("checked",false);var row=opts.finder.getRow(_5ec,_5ed);if(opts.idField){_503(_5ef.checkedRows,opts.idField,row[opts.idField]);}opts.onUncheck.call(_5ec,_5ed,row);};function _5df(_5f1,_5f2){var _5f3=$.data(_5f1,"datagrid");var opts=_5f3.options;var rows=opts.finder.getRows(_5f1);if(!_5f2&&opts.selectOnCheck){_5da(_5f1,true);}var dc=_5f3.dc;var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");var bck=opts.finder.getTr(_5f1,"","allbody").addClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");hck.add(bck)._propAttr("checked",true);if(opts.idField){for(var i=0;i<rows.length;i++){_505(_5f3.checkedRows,opts.idField,rows[i]);}}opts.onCheckAll.call(_5f1,rows);};function _5e5(_5f4,_5f5){var _5f6=$.data(_5f4,"datagrid");var opts=_5f6.options;var rows=opts.finder.getRows(_5f4);if(!_5f5&&opts.selectOnCheck){_5d1(_5f4,true);}var dc=_5f6.dc;var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");var bck=opts.finder.getTr(_5f4,"","checked").removeClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");hck.add(bck)._propAttr("checked",false);if(opts.idField){for(var i=0;i<rows.length;i++){_503(_5f6.checkedRows,opts.idField,rows[i][opts.idField]);}}opts.onUncheckAll.call(_5f4,rows);};function _5f7(_5f8,_5f9){var opts=$.data(_5f8,"datagrid").options;var tr=opts.finder.getTr(_5f8,_5f9);var row=opts.finder.getRow(_5f8,_5f9);if(tr.hasClass("datagrid-row-editing")){return;}if(opts.onBeforeEdit.call(_5f8,_5f9,row)==false){return;}tr.addClass("datagrid-row-editing");_5fa(_5f8,_5f9);_59b(_5f8);tr.find("div.datagrid-editable").each(function(){var _5fb=$(this).parent().attr("field");var ed=$.data(this,"datagrid.editor");ed.actions.setValue(ed.target,row[_5fb]);});_5fc(_5f8,_5f9);opts.onBeginEdit.call(_5f8,_5f9,row);};function _5fd(_5fe,_5ff,_600){var opts=$.data(_5fe,"datagrid").options;var _601=$.data(_5fe,"datagrid").updatedRows;var _602=$.data(_5fe,"datagrid").insertedRows;var tr=opts.finder.getTr(_5fe,_5ff);var row=opts.finder.getRow(_5fe,_5ff);if(!tr.hasClass("datagrid-row-editing")){return;}if(!_600){if(!_5fc(_5fe,_5ff)){return;}var _603=false;var _604={};tr.find("div.datagrid-editable").each(function(){var _605=$(this).parent().attr("field");var ed=$.data(this,"datagrid.editor");var _606=ed.actions.getValue(ed.target);if(row[_605]!=_606){row[_605]=_606;_603=true;_604[_605]=_606;}});if(_603){if(_502(_602,row)==-1){if(_502(_601,row)==-1){_601.push(row);}}}opts.onEndEdit.call(_5fe,_5ff,row,_604);}tr.removeClass("datagrid-row-editing");_607(_5fe,_5ff);$(_5fe).datagrid("refreshRow",_5ff);if(!_600){opts.onAfterEdit.call(_5fe,_5ff,row,_604);}else {opts.onCancelEdit.call(_5fe,_5ff,row);}};function _608(_609,_60a){var opts=$.data(_609,"datagrid").options;var tr=opts.finder.getTr(_609,_60a);var _60b=[];tr.children("td").each(function(){var cell=$(this).find("div.datagrid-editable");if(cell.length){var ed=$.data(cell[0],"datagrid.editor");_60b.push(ed);}});return _60b;};function _60c(_60d,_60e){var _60f=_608(_60d,_60e.index!=undefined?_60e.index:_60e.id);for(var i=0;i<_60f.length;i++){if(_60f[i].field==_60e.field){return _60f[i];}}return null;};function _5fa(_610,_611){var opts=$.data(_610,"datagrid").options;var tr=opts.finder.getTr(_610,_611);tr.children("td").each(function(){var cell=$(this).find("div.datagrid-cell");var _612=$(this).attr("field");var col=_558(_610,_612);if(col&&col.editor){var _613,_614;if(typeof col.editor=="string"){_613=col.editor;}else {_613=col.editor.type;_614=col.editor.options;}var _615=opts.editors[_613];if(_615){var _616=cell.html();var _617=cell._outerWidth();cell.addClass("datagrid-editable");cell._outerWidth(_617);cell.html("<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\"><tr><td></td></tr></table>");cell.children("table").bind("click dblclick contextmenu",function(e){e.stopPropagation();});$.data(cell[0],"datagrid.editor",{actions:_615,target:_615.init(cell.find("td"),_614),field:_612,type:_613,oldHtml:_616});}}});_526(_610,_611,true);};function _607(_618,_619){var opts=$.data(_618,"datagrid").options;var tr=opts.finder.getTr(_618,_619);tr.children("td").each(function(){var cell=$(this).find("div.datagrid-editable");if(cell.length){var ed=$.data(cell[0],"datagrid.editor");if(ed.actions.destroy){ed.actions.destroy(ed.target);}cell.html(ed.oldHtml);$.removeData(cell[0],"datagrid.editor");cell.removeClass("datagrid-editable");cell.css("width","");}});};function _5fc(_61a,_61b){var tr=$.data(_61a,"datagrid").options.finder.getTr(_61a,_61b);if(!tr.hasClass("datagrid-row-editing")){return true;}var vbox=tr.find(".validatebox-text");vbox.validatebox("validate");vbox.trigger("mouseleave");var _61c=tr.find(".validatebox-invalid");return _61c.length==0;};function _61d(_61e,_61f){var _620=$.data(_61e,"datagrid").insertedRows;var _621=$.data(_61e,"datagrid").deletedRows;var _622=$.data(_61e,"datagrid").updatedRows;if(!_61f){var rows=[];rows=rows.concat(_620);rows=rows.concat(_621);rows=rows.concat(_622);return rows;}else {if(_61f=="inserted"){return _620;}else {if(_61f=="deleted"){return _621;}else {if(_61f=="updated"){return _622;}}}}return [];};function _623(_624,_625){var _626=$.data(_624,"datagrid");var opts=_626.options;var data=_626.data;var _627=_626.insertedRows;var _628=_626.deletedRows;$(_624).datagrid("cancelEdit",_625);var row=opts.finder.getRow(_624,_625);if(_502(_627,row)>=0){_503(_627,row);}else {_628.push(row);}_503(_626.selectedRows,opts.idField,row[opts.idField]);_503(_626.checkedRows,opts.idField,row[opts.idField]);opts.view.deleteRow.call(opts.view,_624,_625);if(opts.height=="auto"){_526(_624);}$(_624).datagrid("getPager").pagination("refresh",{total:data.total});};function _629(_62a,_62b){var data=$.data(_62a,"datagrid").data;var view=$.data(_62a,"datagrid").options.view;var _62c=$.data(_62a,"datagrid").insertedRows;view.insertRow.call(view,_62a,_62b.index,_62b.row);_62c.push(_62b.row);$(_62a).datagrid("getPager").pagination("refresh",{total:data.total});};function _62d(_62e,row){var data=$.data(_62e,"datagrid").data;var view=$.data(_62e,"datagrid").options.view;var _62f=$.data(_62e,"datagrid").insertedRows;view.insertRow.call(view,_62e,null,row);_62f.push(row);$(_62e).datagrid("getPager").pagination("refresh",{total:data.total});};function _630(_631){var _632=$.data(_631,"datagrid");var data=_632.data;var rows=data.rows;var _633=[];for(var i=0;i<rows.length;i++){_633.push($.extend({},rows[i]));}_632.originalRows=_633;_632.updatedRows=[];_632.insertedRows=[];_632.deletedRows=[];};function _634(_635){var data=$.data(_635,"datagrid").data;var ok=true;for(var i=0,len=data.rows.length;i<len;i++){if(_5fc(_635,i)){_5fd(_635,i,false);}else {ok=false;}}if(ok){_630(_635);}};function _636(_637){var _638=$.data(_637,"datagrid");var opts=_638.options;var _639=_638.originalRows;var _63a=_638.insertedRows;var _63b=_638.deletedRows;var _63c=_638.selectedRows;var _63d=_638.checkedRows;var data=_638.data;function _63e(a){var ids=[];for(var i=0;i<a.length;i++){ids.push(a[i][opts.idField]);}return ids;};function _63f(ids,_640){for(var i=0;i<ids.length;i++){var _641=_5b7(_637,ids[i]);if(_641>=0){(_640=="s"?_5cb:_5d2)(_637,_641,true);}}};for(var i=0;i<data.rows.length;i++){_5fd(_637,i,true);}var _642=_63e(_63c);var _643=_63e(_63d);_63c.splice(0,_63c.length);_63d.splice(0,_63d.length);data.total+=_63b.length-_63a.length;data.rows=_639;_578(_637,data);_63f(_642,"s");_63f(_643,"c");_630(_637);};function _577(_644,_645){var opts=$.data(_644,"datagrid").options;if(_645){opts.queryParams=_645;}var _646=$.extend({},opts.queryParams);if(opts.pagination){var obj=new Object();obj[opts.pageParamName?opts.pageParamName:"page"]=opts.pageNumber;obj[opts.pageSizeParamName?opts.pageSizeParamName:"rows"]=opts.pageSize;$.extend(_646,obj);}if(opts.sortName){$.extend(_646,{sort:opts.sortName,order:opts.sortOrder});}if(opts.onBeforeLoad.call(_644,_646)==false){return;}$(_644).datagrid("loading");setTimeout(function(){_647();},0);function _647(){var _648=opts.loader.call(_644,_646,function(data){setTimeout(function(){$(_644).datagrid("loaded");},0);_578(_644,data);setTimeout(function(){_630(_644);},0);},function(){setTimeout(function(){$(_644).datagrid("loaded");},0);opts.onLoadError.apply(_644,arguments);});if(_648==false){$(_644).datagrid("loaded");}};};function _649(_64a,_64b){var opts=$.data(_64a,"datagrid").options;_64b.rowspan=_64b.rowspan||1;_64b.colspan=_64b.colspan||1;if(_64b.rowspan==1&&_64b.colspan==1){return;}var tr=opts.finder.getTr(_64a,_64b.index!=undefined?_64b.index:_64b.id);if(!tr.length){return;}var row=opts.finder.getRow(_64a,tr);var _64c=row[_64b.field];var td=tr.find("td[field=\""+_64b.field+"\"]");td.attr("rowspan",_64b.rowspan).attr("colspan",_64b.colspan);td.addClass("datagrid-td-merged");for(var i=1;i<_64b.colspan;i++){td=td.next();td.hide();row[td.attr("field")]=_64c;}for(var i=1;i<_64b.rowspan;i++){tr=tr.next();if(!tr.length){break;}var row=opts.finder.getRow(_64a,tr);var td=tr.find("td[field=\""+_64b.field+"\"]").hide();row[td.attr("field")]=_64c;for(var j=1;j<_64b.colspan;j++){td=td.next();td.hide();row[td.attr("field")]=_64c;}}_596(_64a);};$.fn.datagrid=function(_64d,_64e){if(typeof _64d=="string"){return $.fn.datagrid.methods[_64d](this,_64e);}_64d=_64d||{};return this.each(function(){var _64f=$.data(this,"datagrid");var opts;if(_64f){opts=$.extend(_64f.options,_64d);_64f.options=opts;}else {opts=$.extend({},$.extend({},$.fn.datagrid.defaults,{queryParams:{}}),$.fn.datagrid.parseOptions(this),_64d);$(this).css("width","").css("height","");var _650=_53a(this,opts.rownumbers);if(!opts.columns){opts.columns=_650.columns;}if(!opts.frozenColumns){opts.frozenColumns=_650.frozenColumns;}opts.columns=$.extend(true,[],opts.columns);opts.frozenColumns=$.extend(true,[],opts.frozenColumns);opts.view=$.extend({},opts.view);$.data(this,"datagrid",{options:opts,panel:_650.panel,dc:_650.dc,ss:null,selectedRows:[],checkedRows:[],data:{total:0,rows:[]},originalRows:[],updatedRows:[],insertedRows:[],deletedRows:[]});}if(opts.noupdate){opts.noupdate=null;_559(this);_515(this);return;}else {_545(this);_559(this);_515(this);}if(opts.data){_578(this,opts.data);_630(this);}else {var data=$.fn.datagrid.parseData(this);if(data.total>0){_578(this,data);_630(this);}}_577(this);});};var _651={text:{init:function init(_652,_653){var _654=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_652);return _654;},getValue:function getValue(_655){return $(_655).val();},setValue:function setValue(_656,_657){$(_656).val(_657);},resize:function resize(_658,_659){$(_658)._outerWidth(_659)._outerHeight(22);}},textarea:{init:function init(_65a,_65b){var _65c=$("<textarea class=\"datagrid-editable-input\"></textarea>").appendTo(_65a);return _65c;},getValue:function getValue(_65d){return $(_65d).val();},setValue:function setValue(_65e,_65f){$(_65e).val(_65f);},resize:function resize(_660,_661){$(_660)._outerWidth(_661);}},checkbox:{init:function init(_662,_663){var _664=$("<input type=\"checkbox\">").appendTo(_662);_664.val(_663.on);_664.attr("offval",_663.off);return _664;},getValue:function getValue(_665){if($(_665).is(":checked")){return $(_665).val();}else {return $(_665).attr("offval");}},setValue:function setValue(_666,_667){var _668=false;if($(_666).val()==_667){_668=true;}$(_666)._propAttr("checked",_668);}},numberbox:{init:function init(_669,_66a){var _66b=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_669);_66b.numberbox(_66a);return _66b;},destroy:function destroy(_66c){$(_66c).numberbox("destroy");},getValue:function getValue(_66d){$(_66d).blur();return $(_66d).numberbox("getValue");},setValue:function setValue(_66e,_66f){$(_66e).numberbox("setValue",_66f);},resize:function resize(_670,_671){$(_670)._outerWidth(_671)._outerHeight(22);}},validatebox:{init:function init(_672,_673){var _674=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_672);_674.validatebox(_673);return _674;},destroy:function destroy(_675){$(_675).validatebox("destroy");},getValue:function getValue(_676){return $(_676).val();},setValue:function setValue(_677,_678){$(_677).val(_678);},resize:function resize(_679,_67a){$(_679)._outerWidth(_67a)._outerHeight(22);}},datebox:{init:function init(_67b,_67c){var _67d=$("<input type=\"text\">").appendTo(_67b);_67d.datebox(_67c);return _67d;},destroy:function destroy(_67e){$(_67e).datebox("destroy");},getValue:function getValue(_67f){return $(_67f).datebox("getValue");},setValue:function setValue(_680,_681){$(_680).datebox("setValue",_681);},resize:function resize(_682,_683){$(_682).datebox("resize",_683);}},combobox:{init:function init(_684,_685){var _686=$("<input type=\"text\">").appendTo(_684);_686.combobox(_685||{});return _686;},destroy:function destroy(_687){$(_687).combobox("destroy");},getValue:function getValue(_688){var opts=$(_688).combobox("options");if(opts.multiple){return $(_688).combobox("getValues").join(opts.separator);}else {return $(_688).combobox("getValue");}},setValue:function setValue(_689,_68a){var opts=$(_689).combobox("options");if(opts.multiple){if(_68a){$(_689).combobox("setValues",_68a.split(opts.separator));}else {$(_689).combobox("clear");}}else {$(_689).combobox("setValue",_68a);}},resize:function resize(_68b,_68c){$(_68b).combobox("resize",_68c);}},combotree:{init:function init(_68d,_68e){var _68f=$("<input type=\"text\">").appendTo(_68d);_68f.combotree(_68e);return _68f;},destroy:function destroy(_690){$(_690).combotree("destroy");},getValue:function getValue(_691){var opts=$(_691).combotree("options");if(opts.multiple){return $(_691).combotree("getValues").join(opts.separator);}else {return $(_691).combotree("getValue");}},setValue:function setValue(_692,_693){var opts=$(_692).combotree("options");if(opts.multiple){if(_693){$(_692).combotree("setValues",_693.split(opts.separator));}else {$(_692).combotree("clear");}}else {$(_692).combotree("setValue",_693);}},resize:function resize(_694,_695){$(_694).combotree("resize",_695);}},combogrid:{init:function init(_696,_697){var _698=$("<input type=\"text\">").appendTo(_696);_698.combogrid(_697);return _698;},destroy:function destroy(_699){$(_699).combogrid("destroy");},getValue:function getValue(_69a){var opts=$(_69a).combogrid("options");if(opts.multiple){return $(_69a).combogrid("getValues").join(opts.separator);}else {return $(_69a).combogrid("getValue");}},setValue:function setValue(_69b,_69c){var opts=$(_69b).combogrid("options");if(opts.multiple){if(_69c){$(_69b).combogrid("setValues",_69c.split(opts.separator));}else {$(_69b).combogrid("clear");}}else {$(_69b).combogrid("setValue",_69c);}},resize:function resize(_69d,_69e){$(_69d).combogrid("resize",_69e);}}};$.fn.datagrid.methods={options:function options(jq){var _69f=$.data(jq[0],"datagrid")?$.data(jq[0],"datagrid").options:{};var _6a0=$.data(jq[0],"datagrid")?$.data(jq[0],"datagrid").panel.panel("options"):{};var opts=$.extend(_69f,{width:_6a0.width,height:_6a0.height,closed:_6a0.closed,collapsed:_6a0.collapsed,minimized:_6a0.minimized,maximized:_6a0.maximized});return opts;},setSelectionState:function setSelectionState(jq){return jq.each(function(){_5af(this);var rows=data.rows;});},createStyleSheet:function createStyleSheet(jq){return _506(jq[0]);},getPanel:function getPanel(jq){return $.data(jq[0],"datagrid").panel;},getPager:function getPager(jq){return $.data(jq[0],"datagrid")?$.data(jq[0],"datagrid").panel.children("div.datagrid-pager"):{};},getColumnFields:function getColumnFields(jq,_6a1){return _557(jq[0],_6a1);},getColumnOption:function getColumnOption(jq,_6a2){return _558(jq[0],_6a2);},resize:function resize(jq,_6a3){return jq.each(function(){_515(this,_6a3);});},load:function load(jq,_6a4){return jq.each(function(){var opts=$(this).datagrid("options");opts.pageNumber=1;var _6a5=$(this).datagrid("getPager");if(_6a5)_6a5.pagination("refresh",{pageNumber:1});_577(this,_6a4);});},reload:function reload(jq,_6a6){return jq.each(function(){_577(this,_6a6);});},reloadFooter:function reloadFooter(jq,_6a7){return jq.each(function(){var opts=$.data(this,"datagrid").options;var dc=$.data(this,"datagrid").dc;if(_6a7){$.data(this,"datagrid").footer=_6a7;}if(opts.showFooter){opts.view.renderFooter.call(opts.view,this,dc.footer2,false);opts.view.renderFooter.call(opts.view,this,dc.footer1,true);if(opts.view.onAfterRender){opts.view.onAfterRender.call(opts.view,this);}$(this).datagrid("fixRowHeight");}});},loading:function loading(jq){return jq.each(function(){var opts=$.data(this,"datagrid").options;if($(this).datagrid("getPager"))$(this).datagrid("getPager").pagination("loading");if(opts.loadMsg){var _6a8=$(this).datagrid("getPanel");if(!_6a8.children("div.datagrid-mask").length&&(opts.showLoading==undefined||opts.showLoading==true)){$("<div class=\"datagrid-mask\" style=\"display:block\"></div>").appendTo(_6a8);var msg=$("<div class=\"datagrid-mask-msg\" style=\"display:block;left:50%\"></div>").html(opts.loadMsg).appendTo(_6a8);msg._outerHeight(40);msg.css({marginLeft:-msg.outerWidth()/2,lineHeight:msg.height()+"px"});}}});},loaded:function loaded(jq){return jq.each(function(){if($(this).datagrid("getPager"))$(this).datagrid("getPager").pagination("loaded");var _6a9=$(this).datagrid("getPanel");_6a9.children("div.datagrid-mask-msg").remove();_6a9.children("div.datagrid-mask").remove();});},fitColumns:function fitColumns(jq){return jq.each(function(){_579(this);});},fixColumnSize:function fixColumnSize(jq,_6aa){return jq.each(function(){_542(this,_6aa);});},fixRowHeight:function fixRowHeight(jq,_6ab){return jq.each(function(){_526(this,_6ab);});},freezeRow:function freezeRow(jq,_6ac){return jq.each(function(){_533(this,_6ac);});},autoSizeColumn:function autoSizeColumn(jq,_6ad){return jq.each(function(){_586(this,_6ad);});},loadData:function loadData(jq,data){return jq.each(function(){_578(this,data);_630(this);});},getData:function getData(jq){return $.data(jq[0],"datagrid").data;},getRows:function getRows(jq){return $.data(jq[0],"datagrid").data.rows;},getFooterRows:function getFooterRows(jq){return $.data(jq[0],"datagrid").footer;},getRowIndex:function getRowIndex(jq,id){return _5b7(jq[0],id);},getChecked:function getChecked(jq){return _5bd(jq[0]);},getSelected:function getSelected(jq){var rows=_5ba(jq[0]);return rows.length>0?rows[0]:null;},getSelections:function getSelections(jq){return _5ba(jq[0]);},clearSelections:function clearSelections(jq){return jq.each(function(){var _6ae=$.data(this,"datagrid");var _6af=_6ae.selectedRows;var _6b0=_6ae.checkedRows;_6af.splice(0,_6af.length);_5d1(this);if(_6ae.options.checkOnSelect){_6b0.splice(0,_6b0.length);}});},clearChecked:function clearChecked(jq){return jq.each(function(){var _6b1=$.data(this,"datagrid");var _6b2=_6b1.selectedRows;var _6b3=_6b1.checkedRows;_6b3.splice(0,_6b3.length);_5e5(this);if(_6b1.options.selectOnCheck){_6b2.splice(0,_6b2.length);}});},scrollTo:function scrollTo(jq,_6b4){return jq.each(function(){_5c0(this,_6b4);});},highlightRow:function highlightRow(jq,_6b5){return jq.each(function(){_5c7(this,_6b5);_5c0(this,_6b5);});},selectAll:function selectAll(jq){return jq.each(function(){_5da(this);});},unselectAll:function unselectAll(jq){return jq.each(function(){_5d1(this);});},selectRow:function selectRow(jq,_6b6){return jq.each(function(){_5cb(this,_6b6);});},selectRecord:function selectRecord(jq,id){return jq.each(function(){var opts=$.data(this,"datagrid").options;if(opts.idField){var _6b7=_5b7(this,id);if(_6b7>=0){$(this).datagrid("selectRow",_6b7);}}});},unselectRow:function unselectRow(jq,_6b8){return jq.each(function(){_5d3(this,_6b8);});},checkRow:function checkRow(jq,_6b9){return jq.each(function(){_5d2(this,_6b9);});},uncheckRow:function uncheckRow(jq,_6ba){return jq.each(function(){_5d9(this,_6ba);});},checkAll:function checkAll(jq){return jq.each(function(){_5df(this);});},uncheckAll:function uncheckAll(jq){return jq.each(function(){_5e5(this);});},beginEdit:function beginEdit(jq,_6bb){return jq.each(function(){_5f7(this,_6bb);});},endEdit:function endEdit(jq,_6bc){return jq.each(function(){_5fd(this,_6bc,false);});},cancelEdit:function cancelEdit(jq,_6bd){return jq.each(function(){_5fd(this,_6bd,true);});},getEditors:function getEditors(jq,_6be){return _608(jq[0],_6be);},getEditor:function getEditor(jq,_6bf){return _60c(jq[0],_6bf);},refreshRow:function refreshRow(jq,_6c0){return jq.each(function(){var opts=$.data(this,"datagrid").options;opts.view.refreshRow.call(opts.view,this,_6c0);});},validateRow:function validateRow(jq,_6c1){return _5fc(jq[0],_6c1);},updateRow:function updateRow(jq,_6c2){return jq.each(function(){var opts=$.data(this,"datagrid").options;opts.view.updateRow.call(opts.view,this,_6c2.index,_6c2.row);});},appendRow:function appendRow(jq,row){return jq.each(function(){_62d(this,row);});},insertRow:function insertRow(jq,_6c3){return jq.each(function(){_629(this,_6c3);});},deleteRow:function deleteRow(jq,_6c4){return jq.each(function(){_623(this,_6c4);});},getChanges:function getChanges(jq,_6c5){return _61d(jq[0],_6c5);},acceptChanges:function acceptChanges(jq){return jq.each(function(){_634(this);});},rejectChanges:function rejectChanges(jq){return jq.each(function(){_636(this);});},mergeCells:function mergeCells(jq,_6c6){return jq.each(function(){_649(this,_6c6);});},showColumn:function showColumn(jq,_6c7){return jq.each(function(){var _6c8=$(this).datagrid("getPanel");_6c8.find("td[field=\""+_6c7+"\"]").show();$(this).datagrid("getColumnOption",_6c7).hidden=false;$(this).datagrid("fitColumns");});},hideColumn:function hideColumn(jq,_6c9){return jq.each(function(){var _6ca=$(this).datagrid("getPanel");_6ca.find("td[field=\""+_6c9+"\"]").hide();$(this).datagrid("getColumnOption",_6c9).hidden=true;$(this).datagrid("fitColumns");});},sort:function sort(jq,_6cb){return jq.each(function(){_56c(this,_6cb);});}};$.fn.datagrid.parseOptions=function(_6cc){var t=$(_6cc);return $.extend({},$.fn.panel.parseOptions(_6cc),$.parser.parseOptions(_6cc,["url","toolbar","idField","sortName","sortOrder","pagePosition","resizeHandle",{sharedStyleSheet:"boolean",fitColumns:"boolean",autoRowHeight:"boolean",striped:"boolean",nowrap:"boolean"},{rownumbers:"boolean",singleSelect:"boolean",ctrlSelect:"boolean",checkOnSelect:"boolean",selectOnCheck:"boolean"},{pagination:"boolean",pageSize:"number",pageNumber:"number"},{multiSort:"boolean",remoteSort:"boolean",showHeader:"boolean",showFooter:"boolean"},{scrollbarSize:"number"}]),{pageList:t.attr("pageList")?eval(t.attr("pageList")):undefined,loadMsg:t.attr("loadMsg")!=undefined?t.attr("loadMsg"):undefined,rowStyler:t.attr("rowStyler")?eval(t.attr("rowStyler")):undefined});};$.fn.datagrid.parseData=function(_6cd){var t=$(_6cd);var data={total:0,rows:[]};var _6ce=t.datagrid("getColumnFields",true).concat(t.datagrid("getColumnFields",false));t.find("tbody tr").each(function(){data.total++;var row={};$.extend(row,$.parser.parseOptions(this,["iconCls","state"]));for(var i=0;i<_6ce.length;i++){row[_6ce[i]]=$(this).find("td:eq("+i+")").html();}data.rows.push(row);});return data;};var _6cf={render:function render(_6d0,_6d1,_6d2){var _6d3=$.data(_6d0,"datagrid");var opts=_6d3.options;var rows=_6d3.data.rows;var _6d4=$(_6d0).datagrid("getColumnFields",_6d2);if(_6d2){if(!(opts.rownumbers||opts.frozenColumns&&opts.frozenColumns.length)){return;}}var _6d5=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];for(var i=0;i<rows.length;i++){var css=opts.rowStyler?opts.rowStyler.call(_6d0,i,rows[i]):"";var _6d6="";var _6d7="";if(typeof css=="string"){_6d7=css;}else {if(css){_6d6=css["class"]||"";_6d7=css["style"]||"";}}var cls="class=\"datagrid-row "+(i%2&&opts.striped?"datagrid-row-alt ":" ")+_6d6+"\"";var _6d8=_6d7?"style=\""+_6d7+"\"":"";var _6d9=_6d3.rowIdPrefix+"-"+(_6d2?1:2)+"-"+i;_6d5.push("<tr id=\""+_6d9+"\" datagrid-row-index=\""+i+"\" "+cls+" "+_6d8+">");_6d5.push(this.renderRow.call(this,_6d0,_6d4,_6d2,i,rows[i]));_6d5.push("</tr>");}_6d5.push("</tbody></table>"); // $(_6d1).html(_6d5.join(""));
	$(_6d1)[0].innerHTML=_6d5.join("");},renderFooter:function renderFooter(_6da,_6db,_6dc){var opts=$.data(_6da,"datagrid").options;var rows=$.data(_6da,"datagrid").footer||[];var _6dd=$(_6da).datagrid("getColumnFields",_6dc);var _6de=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];for(var i=0;i<rows.length;i++){_6de.push("<tr class=\"datagrid-row\" datagrid-row-index=\""+i+"\">");_6de.push(this.renderRow.call(this,_6da,_6dd,_6dc,i,rows[i]));_6de.push("</tr>");}_6de.push("</tbody></table>");$(_6db).html(_6de.join(""));},renderRow:function renderRow(_6df,_6e0,_6e1,_6e2,_6e3){var opts=$.data(_6df,"datagrid").options;var cc=[];if(_6e1&&opts.rownumbers){var _6e4=_6e2+1;if(opts.pagination){_6e4+=(opts.pageNumber-1)*opts.pageSize;}cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">"+_6e4+"</div></td>");}for(var i=0;i<_6e0.length;i++){var _6e5=_6e0[i];var col=$(_6df).datagrid("getColumnOption",_6e5);if(col){var _6e6=_6e3[_6e5];var css=col.styler?col.styler(_6e6,_6e3,_6e2)||"":"";var _6e7="";var _6e8="";if(typeof css=="string"){_6e8=css;}else {if(css){_6e7=css["class"]||"";_6e8=css["style"]||"";}}var cls=_6e7?"class=\""+_6e7+"\"":"";var _6e9=col.hidden?"style=\"display:none;"+_6e8+"\"":_6e8?"style=\""+_6e8+"\"":"";cc.push("<td field=\""+_6e5+"\" "+cls+" "+_6e9+">");var _6e9="";if(!col.checkbox){if(col.align){_6e9+="text-align:"+col.align+";";}if(!opts.nowrap){_6e9+="white-space:normal;height:auto;";}else {if(opts.autoRowHeight){_6e9+="height:auto;";}}}cc.push("<div style=\""+_6e9+"\" ");cc.push(col.checkbox?"class=\"datagrid-cell-check\"":"class=\"datagrid-cell "+col.cellClass+"\"");cc.push(">");if(col.checkbox){cc.push("<input type=\"checkbox\" "+(_6e3.checked?"checked=\"checked\"":""));cc.push(" name=\""+_6e5+"\" value=\""+(_6e6!=undefined?_6e6:"")+"\">");}else {if(col.formatter){cc.push(col.formatter(_6e6,_6e3,_6e2));}else {cc.push(_6e6);}}cc.push("</div>");cc.push("</td>");}}return cc.join("");},refreshRow:function refreshRow(_6ea,_6eb){this.updateRow.call(this,_6ea,_6eb,{});},updateRow:function updateRow(_6ec,_6ed,row){var opts=$.data(_6ec,"datagrid").options;var rows=$(_6ec).datagrid("getRows");$.extend(rows[_6ed],row);var css=opts.rowStyler?opts.rowStyler.call(_6ec,_6ed,rows[_6ed]):"";var _6ee="";var _6ef="";if(typeof css=="string"){_6ef=css;}else {if(css){_6ee=css["class"]||"";_6ef=css["style"]||"";}}var _6ee="datagrid-row "+(_6ed%2&&opts.striped?"datagrid-row-alt ":" ")+_6ee;function _6f0(_6f1){var _6f2=$(_6ec).datagrid("getColumnFields",_6f1);var tr=opts.finder.getTr(_6ec,_6ed,"body",_6f1?1:2);var _6f3=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");tr.html(this.renderRow.call(this,_6ec,_6f2,_6f1,_6ed,rows[_6ed]));tr.attr("style",_6ef).attr("class",tr.hasClass("datagrid-row-selected")?_6ee+" datagrid-row-selected":_6ee);if(_6f3){tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);}};_6f0.call(this,true);_6f0.call(this,false);$(_6ec).datagrid("fixRowHeight",_6ed);},insertRow:function insertRow(_6f4,_6f5,row){var _6f6=$.data(_6f4,"datagrid");var opts=_6f6.options;var dc=_6f6.dc;var data=_6f6.data;if(_6f5==undefined||_6f5==null){_6f5=data.rows.length;}if(_6f5>data.rows.length){_6f5=data.rows.length;}function _6f7(_6f8){var _6f9=_6f8?1:2;for(var i=data.rows.length-1;i>=_6f5;i--){var tr=opts.finder.getTr(_6f4,i,"body",_6f9);tr.attr("datagrid-row-index",i+1);tr.attr("id",_6f6.rowIdPrefix+"-"+_6f9+"-"+(i+1));if(_6f8&&opts.rownumbers){var _6fa=i+2;if(opts.pagination){_6fa+=(opts.pageNumber-1)*opts.pageSize;}tr.find("div.datagrid-cell-rownumber").html(_6fa);}if(opts.striped){tr.removeClass("datagrid-row-alt").addClass((i+1)%2?"datagrid-row-alt":"");}}};function _6fb(_6fc){var _6fd=_6fc?1:2;var _6fe=$(_6f4).datagrid("getColumnFields",_6fc);var _6ff=_6f6.rowIdPrefix+"-"+_6fd+"-"+_6f5;var tr="<tr id=\""+_6ff+"\" class=\"datagrid-row\" datagrid-row-index=\""+_6f5+"\"></tr>";if(_6f5>=data.rows.length){if(data.rows.length){opts.finder.getTr(_6f4,"","last",_6fd).after(tr);}else {var cc=_6fc?dc.body1:dc.body2;cc.html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"+tr+"</tbody></table>");}}else {opts.finder.getTr(_6f4,_6f5+1,"body",_6fd).before(tr);}};_6f7.call(this,true);_6f7.call(this,false);_6fb.call(this,true);_6fb.call(this,false);data.total+=1;data.rows.splice(_6f5,0,row);this.refreshRow.call(this,_6f4,_6f5);},deleteRow:function deleteRow(_700,_701){var _702=$.data(_700,"datagrid");var opts=_702.options;var data=_702.data;function _703(_704){var _705=_704?1:2;for(var i=_701+1;i<data.rows.length;i++){var tr=opts.finder.getTr(_700,i,"body",_705);tr.attr("datagrid-row-index",i-1);tr.attr("id",_702.rowIdPrefix+"-"+_705+"-"+(i-1));if(_704&&opts.rownumbers){var _706=i;if(opts.pagination){_706+=(opts.pageNumber-1)*opts.pageSize;}tr.find("div.datagrid-cell-rownumber").html(_706);}if(opts.striped){tr.removeClass("datagrid-row-alt").addClass((i-1)%2?"datagrid-row-alt":"");}}};opts.finder.getTr(_700,_701).remove();_703.call(this,true);_703.call(this,false);data.total-=1;data.rows.splice(_701,1);},onBeforeRender:function onBeforeRender(_707,rows){},onAfterRender:function onAfterRender(_708){var opts=$.data(_708,"datagrid").options;if(opts.showFooter){var _709=$(_708).datagrid("getPanel").find("div.datagrid-footer");_709.find("div.datagrid-cell-rownumber,div.datagrid-cell-check").css("visibility","hidden");}}};$.fn.datagrid.defaults=$.extend({},$.fn.panel.defaults,{sharedStyleSheet:false,frozenColumns:undefined,columns:undefined,fitColumns:false,resizeHandle:"right",autoRowHeight:true,toolbar:null,striped:false,method:"post",nowrap:true,idField:null,url:null,data:null,loadMsg:"Processing, please wait ...",rownumbers:false,singleSelect:false,ctrlSelect:false,selectOnCheck:true,checkOnSelect:true,pagination:false,pagePosition:"bottom",pageNumber:1,pageSize:10,pageList:[10,20,30,40,50],queryParams:{},sortName:null,sortOrder:"asc",multiSort:false,remoteSort:true,showHeader:true,showFooter:false,scrollbarSize:18,rowStyler:function rowStyler(_70a,_70b){},loader:function loader(_70c,_70d,_70e){var opts=$(this).datagrid("options");if(!opts.url){return false;}$.ajax({type:opts.method,url:opts.url,data:_70c,dataType:"json",success:function success(data){_70d(data);},error:function error(){_70e.apply(this,arguments);}});},loadFilter:function loadFilter(data){if(typeof data.length=="number"&&typeof data.splice=="function"){return {total:data.length,rows:data};}else {return data;}},editors:_651,finder:{getTr:function getTr(_70f,_710,type,_711){type=type||"body";_711=_711||0;var _712=$.data(_70f,"datagrid");var dc=_712.dc;var opts=_712.options;if(_711==0){var tr1=opts.finder.getTr(_70f,_710,type,1);var tr2=opts.finder.getTr(_70f,_710,type,2);return tr1.add(tr2);}else {if(type=="body"){var tr=$("#"+_712.rowIdPrefix+"-"+_711+"-"+_710);if(!tr.length){tr=(_711==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index="+_710+"]");}return tr;}else {if(type=="footer"){return (_711==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index="+_710+"]");}else {if(type=="selected"){return (_711==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-selected");}else {if(type=="highlight"){return (_711==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-over");}else {if(type=="checked"){return (_711==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-checked");}else {if(type=="last"){return (_711==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]:last");}else {if(type=="allbody"){return (_711==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]");}else {if(type=="allfooter"){return (_711==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index]");}}}}}}}}}},getRow:function getRow(_713,p){var _714=(typeof p==="undefined"?"undefined":_typeof(p))=="object"?p.attr("datagrid-row-index"):p;return $.data(_713,"datagrid").data.rows[parseInt(_714)];},getRows:function getRows(_715){return $(_715).datagrid("getRows");}},view:_6cf,onBeforeLoad:function onBeforeLoad(_716){},onLoadSuccess:function onLoadSuccess(){},onLoadError:function onLoadError(){},onClickRow:function onClickRow(_717,_718){},onDblClickRow:function onDblClickRow(_719,_71a){},onClickCell:function onClickCell(_71b,_71c,_71d){},onDblClickCell:function onDblClickCell(_71e,_71f,_720){},onBeforeSortColumn:function onBeforeSortColumn(sort,_721){},onSortColumn:function onSortColumn(sort,_722){},onResizeColumn:function onResizeColumn(_723,_724){},onSelect:function onSelect(_725,_726){},onUnselect:function onUnselect(_727,_728){},onSelectAll:function onSelectAll(rows){},onUnselectAll:function onUnselectAll(rows){},onCheck:function onCheck(_729,_72a){},onUncheck:function onUncheck(_72b,_72c){},onCheckAll:function onCheckAll(rows){},onUncheckAll:function onUncheckAll(rows){},onBeforeEdit:function onBeforeEdit(_72d,_72e){},onBeginEdit:function onBeginEdit(_72f,_730){},onEndEdit:function onEndEdit(_731,_732,_733){},onAfterEdit:function onAfterEdit(_734,_735,_736){},onCancelEdit:function onCancelEdit(_737,_738){},onHeaderContextMenu:function onHeaderContextMenu(e,_739){},onRowContextMenu:function onRowContextMenu(e,_73a,_73b){}});})(jQuery);(function($){var _73c;function _73d(_73e){var _73f=$.data(_73e,"propertygrid");var opts=$.data(_73e,"propertygrid").options;$(_73e).datagrid($.extend({},opts,{cls:"propertygrid",view:opts.showGroup?opts.groupView:opts.view,onClickRow:function onClickRow(_740,row){if(_73c!=this){_741(_73c);_73c=this;}if(opts.editIndex!=_740&&row.editor){var col=$(this).datagrid("getColumnOption","value");col.editor=row.editor;_741(_73c);$(this).datagrid("beginEdit",_740);$(this).datagrid("getEditors",_740)[0].target.focus();opts.editIndex=_740;}opts.onClickRow.call(_73e,_740,row);},loadFilter:function loadFilter(data){_741(this);return opts.loadFilter.call(this,data);}}));$(document).unbind(".propertygrid").bind("mousedown.propertygrid",function(e){var p=$(e.target).closest("div.datagrid-view,div.combo-panel");if(p.length){return;}_741(_73c);_73c=undefined;});};function _741(_742){var t=$(_742);if(!t.length){return;}var opts=$.data(_742,"propertygrid").options;var _743=opts.editIndex;if(_743==undefined){return;}var ed=t.datagrid("getEditors",_743)[0];if(ed){ed.target.blur();if(t.datagrid("validateRow",_743)){t.datagrid("endEdit",_743);}else {t.datagrid("cancelEdit",_743);}}opts.editIndex=undefined;};$.fn.propertygrid=function(_744,_745){if(typeof _744=="string"){var _746=$.fn.propertygrid.methods[_744];if(_746){return _746(this,_745);}else {return this.datagrid(_744,_745);}}_744=_744||{};return this.each(function(){var _747=$.data(this,"propertygrid");if(_747){$.extend(_747.options,_744);}else {var opts=$.extend({},$.fn.propertygrid.defaults,$.fn.propertygrid.parseOptions(this),_744);opts.frozenColumns=$.extend(true,[],opts.frozenColumns);opts.columns=$.extend(true,[],opts.columns);$.data(this,"propertygrid",{options:opts});}_73d(this);});};$.fn.propertygrid.methods={options:function options(jq){return $.data(jq[0],"propertygrid").options;}};$.fn.propertygrid.parseOptions=function(_748){return $.extend({},$.fn.datagrid.parseOptions(_748),$.parser.parseOptions(_748,[{showGroup:"boolean"}]));};var _749=$.extend({},$.fn.datagrid.defaults.view,{render:function render(_74a,_74b,_74c){var _74d=[];var _74e=this.groups;for(var i=0;i<_74e.length;i++){_74d.push(this.renderGroup.call(this,_74a,i,_74e[i],_74c));}$(_74b).html(_74d.join(""));},renderGroup:function renderGroup(_74f,_750,_751,_752){var _753=$.data(_74f,"datagrid");var opts=_753.options;var _754=$(_74f).datagrid("getColumnFields",_752);var _755=[];_755.push("<div class=\"datagrid-group\" group-index="+_750+">");_755.push("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"height:100%\"><tbody>");_755.push("<tr>");if(_752&&(opts.rownumbers||opts.frozenColumns.length)||!_752&&!(opts.rownumbers||opts.frozenColumns.length)){_755.push("<td style=\"border:0;text-align:center;width:25px\"><span class=\"datagrid-row-expander datagrid-row-collapse\" style=\"display:inline-block;width:16px;height:16px;cursor:pointer\">&nbsp;</span></td>");}_755.push("<td style=\"border:0;\">");if(!_752){_755.push("<span class=\"datagrid-group-title\">");_755.push(opts.groupFormatter.call(_74f,_751.value,_751.rows));_755.push("</span>");}_755.push("</td>");_755.push("</tr>");_755.push("</tbody></table>");_755.push("</div>");_755.push("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>");var _756=_751.startIndex;for(var j=0;j<_751.rows.length;j++){var css=opts.rowStyler?opts.rowStyler.call(_74f,_756,_751.rows[j]):"";var _757="";var _758="";if(typeof css=="string"){_758=css;}else {if(css){_757=css["class"]||"";_758=css["style"]||"";}}var cls="class=\"datagrid-row "+(_756%2&&opts.striped?"datagrid-row-alt ":" ")+_757+"\"";var _759=_758?"style=\""+_758+"\"":"";var _75a=_753.rowIdPrefix+"-"+(_752?1:2)+"-"+_756;_755.push("<tr id=\""+_75a+"\" datagrid-row-index=\""+_756+"\" "+cls+" "+_759+">");_755.push(this.renderRow.call(this,_74f,_754,_752,_756,_751.rows[j]));_755.push("</tr>");_756++;}_755.push("</tbody></table>");return _755.join("");},bindEvents:function bindEvents(_75b){var _75c=$.data(_75b,"datagrid");var dc=_75c.dc;var body=dc.body1.add(dc.body2);var _75d=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;body.unbind("click").bind("click",function(e){var tt=$(e.target);var _75e=tt.closest("span.datagrid-row-expander");if(_75e.length){var _75f=_75e.closest("div.datagrid-group").attr("group-index");if(_75e.hasClass("datagrid-row-collapse")){$(_75b).datagrid("collapseGroup",_75f);}else {$(_75b).datagrid("expandGroup",_75f);}}else {_75d(e);}e.stopPropagation();});},onBeforeRender:function onBeforeRender(_760,rows){var _761=$.data(_760,"datagrid");var opts=_761.options;_762();var _763=[];for(var i=0;i<rows.length;i++){var row=rows[i];var _764=_765(row[opts.groupField]);if(!_764){_764={value:row[opts.groupField],rows:[row]};_763.push(_764);}else {_764.rows.push(row);}}var _766=0;var _767=[];for(var i=0;i<_763.length;i++){var _764=_763[i];_764.startIndex=_766;_766+=_764.rows.length;_767=_767.concat(_764.rows);}_761.data.rows=_767;this.groups=_763;var that=this;setTimeout(function(){that.bindEvents(_760);},0);function _765(_768){for(var i=0;i<_763.length;i++){var _769=_763[i];if(_769.value==_768){return _769;}}return null;};function _762(){if(!$("#datagrid-group-style").length){$("head").append("<style id=\"datagrid-group-style\">"+".datagrid-group{height:25px;overflow:hidden;font-weight:bold;border-bottom:1px solid #ccc;}"+"</style>");}};}});$.extend($.fn.datagrid.methods,{expandGroup:function expandGroup(jq,_76a){return jq.each(function(){var view=$.data(this,"datagrid").dc.view;var _76b=view.find(_76a!=undefined?"div.datagrid-group[group-index=\""+_76a+"\"]":"div.datagrid-group");var _76c=_76b.find("span.datagrid-row-expander");if(_76c.hasClass("datagrid-row-expand")){_76c.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");_76b.next("table").show();}$(this).datagrid("fixRowHeight");});},collapseGroup:function collapseGroup(jq,_76d){return jq.each(function(){var view=$.data(this,"datagrid").dc.view;var _76e=view.find(_76d!=undefined?"div.datagrid-group[group-index=\""+_76d+"\"]":"div.datagrid-group");var _76f=_76e.find("span.datagrid-row-expander");if(_76f.hasClass("datagrid-row-collapse")){_76f.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");_76e.next("table").hide();}$(this).datagrid("fixRowHeight");});}});$.fn.propertygrid.defaults=$.extend({},$.fn.datagrid.defaults,{singleSelect:true,remoteSort:false,fitColumns:true,loadMsg:"",frozenColumns:[[{field:"f",width:16,resizable:false}]],columns:[[{field:"name",title:"Name",width:100,sortable:true},{field:"value",title:"Value",width:100,resizable:false}]],showGroup:false,groupView:_749,groupField:"group",groupFormatter:function groupFormatter(_770,rows){return _770;}});})(jQuery);(function($){function _771(_772){var _773=$.data(_772,"treegrid");var opts=_773.options;$(_772).datagrid($.extend({},opts,{url:null,data:null,loader:function loader(){return false;},onBeforeLoad:function onBeforeLoad(){return false;},onLoadSuccess:function onLoadSuccess(){},onResizeColumn:function onResizeColumn(_774,_775){_78b(_772);opts.onResizeColumn.call(_772,_774,_775);},onSortColumn:function onSortColumn(sort,_776){opts.sortName=sort;opts.sortOrder=_776;if(opts.remoteSort){_78a(_772);}else {var data=$(_772).treegrid("getData");_7a0(_772,0,data);}opts.onSortColumn.call(_772,sort,_776);},onBeforeEdit:function onBeforeEdit(_777,row){if(opts.onBeforeEdit.call(_772,row)==false){return false;}},onAfterEdit:function onAfterEdit(_778,row,_779){opts.onAfterEdit.call(_772,row,_779);},onCancelEdit:function onCancelEdit(_77a,row){opts.onCancelEdit.call(_772,row);},onSelect:function onSelect(_77b){opts.onSelect.call(_772,_find(_772,_77b));},onUnselect:function onUnselect(_77c){opts.onUnselect.call(_772,_find(_772,_77c));},onCheck:function onCheck(_77d){opts.onCheck.call(_772,_find(_772,_77d));},onUncheck:function onUncheck(_77e){opts.onUncheck.call(_772,_find(_772,_77e));},onClickRow:function onClickRow(_77f){opts.onClickRow.call(_772,_find(_772,_77f));},onDblClickRow:function onDblClickRow(_780){opts.onDblClickRow.call(_772,_find(_772,_780));},onClickCell:function onClickCell(_781,_782){opts.onClickCell.call(_772,_782,_find(_772,_781));},onDblClickCell:function onDblClickCell(_783,_784){opts.onDblClickCell.call(_772,_784,_find(_772,_783));},onRowContextMenu:function onRowContextMenu(e,_785){opts.onContextMenu.call(_772,e,_find(_772,_785));}}));if(!opts.columns){var _786=$.data(_772,"datagrid").options;opts.columns=_786.columns;opts.frozenColumns=_786.frozenColumns;}_773.dc=$.data(_772,"datagrid").dc;if(opts.pagination){var _787=$(_772).datagrid("getPager");_787.pagination({pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function onSelectPage(_788,_789){opts.pageNumber=_788;opts.pageSize=_789;_78a(_772);}});opts.pageSize=_787.pagination("options").pageSize;}};function _78b(_78c,_78d){var opts=$.data(_78c,"datagrid").options;var dc=$.data(_78c,"datagrid").dc;if(dc.body1&&!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight)){if(_78d!=undefined){var _78e=_78f(_78c,_78d);for(var i=0;i<_78e.length;i++){_790(_78e[i][opts.idField]);}}}$(_78c).datagrid("fixRowHeight",_78d);function _790(_791){var tr1=opts.finder.getTr(_78c,_791,"body",1);var tr2=opts.finder.getTr(_78c,_791,"body",2);tr1.css("height","");tr2.css("height","");var _792=Math.max(tr1.height(),tr2.height());tr1.css("height",_792);tr2.css("height",_792);};};function _793(_794){var dc=$.data(_794,"datagrid").dc;var opts=$.data(_794,"treegrid").options;if(!opts.rownumbers){return;}dc.body1.find("div.datagrid-cell-rownumber").each(function(i){$(this).html(i+1);});};function _795(_796){var dc=$.data(_796,"datagrid").dc;var body=dc.body1.add(dc.body2);var _797=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;dc.body1.add(dc.body2).bind("mouseover",function(e){var tt=$(e.target);var tr=tt.closest("tr.datagrid-row");if(!tr.length){return;}if(tt.hasClass("tree-hit")){tt.hasClass("tree-expanded")?tt.addClass("tree-expanded-hover"):tt.addClass("tree-collapsed-hover");}e.stopPropagation();}).bind("mouseout",function(e){var tt=$(e.target);var tr=tt.closest("tr.datagrid-row");if(!tr.length){return;}if(tt.hasClass("tree-hit")){tt.hasClass("tree-expanded")?tt.removeClass("tree-expanded-hover"):tt.removeClass("tree-collapsed-hover");}e.stopPropagation();}).unbind("click").bind("click",function(e){var tt=$(e.target);var tr=tt.closest("tr.datagrid-row");if(!tr.length){return;}if(tt.hasClass("tree-hit")){_798(_796,tr.attr("node-id"));}else {_797(e);}e.stopPropagation();});};function _799(_79a,_79b){var opts=$.data(_79a,"treegrid").options;var tr1=opts.finder.getTr(_79a,_79b,"body",1);var tr2=opts.finder.getTr(_79a,_79b,"body",2);var _79c=$(_79a).datagrid("getColumnFields",true).length+(opts.rownumbers?1:0);var _79d=$(_79a).datagrid("getColumnFields",false).length;_79e(tr1,_79c);_79e(tr2,_79d);function _79e(tr,_79f){$("<tr class=\"treegrid-tr-tree\">"+"<td style=\"border:0px\" colspan=\""+_79f+"\">"+"<div></div>"+"</td>"+"</tr>").insertAfter(tr);};};function _7a0(_7a1,_7a2,data,_7a3){var _7a4=$.data(_7a1,"treegrid");var opts=_7a4.options;var dc=_7a4.dc;data=opts.loadFilter.call(_7a1,data,_7a2);var node=_find(_7a1,_7a2);if(node){var _7a5=opts.finder.getTr(_7a1,_7a2,"body",1);var _7a6=opts.finder.getTr(_7a1,_7a2,"body",2);var cc1=_7a5.next("tr.treegrid-tr-tree").children("td").children("div");var cc2=_7a6.next("tr.treegrid-tr-tree").children("td").children("div");if(!_7a3){node.children=[];}}else {var cc1=dc.body1;var cc2=dc.body2;if(!_7a3){_7a4.data=[];}}if(!_7a3){cc1.empty();cc2.empty();}if(opts.view.onBeforeRender){opts.view.onBeforeRender.call(opts.view,_7a1,_7a2,data);}opts.view.render.call(opts.view,_7a1,cc1,true);opts.view.render.call(opts.view,_7a1,cc2,false);if(opts.showFooter){opts.view.renderFooter.call(opts.view,_7a1,dc.footer1,true);opts.view.renderFooter.call(opts.view,_7a1,dc.footer2,false);}if(opts.view.onAfterRender){opts.view.onAfterRender.call(opts.view,_7a1);}opts.onLoadSuccess.call(_7a1,node,data);if(!_7a2&&opts.pagination){var _7a7=$.data(_7a1,"treegrid").total;var _7a8=$(_7a1).datagrid("getPager");if(_7a8.pagination("options").total!=_7a7){_7a8.pagination({total:_7a7});}}_78b(_7a1);_793(_7a1);$(_7a1).treegrid("setSelectionState");$(_7a1).treegrid("autoSizeColumn");};function _78a(_7a9,_7aa,_7ab,_7ac,_7ad){var opts=$.data(_7a9,"treegrid").options;var body=$(_7a9).datagrid("getPanel").find("div.datagrid-body");if(_7ab){opts.queryParams=_7ab;}var _7ae=$.extend({},opts.queryParams);if(opts.pagination){$.extend(_7ae,{page:opts.pageNumber,rows:opts.pageSize});}if(opts.sortName){$.extend(_7ae,{sort:opts.sortName,order:opts.sortOrder});}var row=_find(_7a9,_7aa);if(opts.onBeforeLoad.call(_7a9,row,_7ae)==false){return;}var _7af=body.find("tr[node-id=\""+_7aa+"\"] span.tree-folder");_7af.addClass("tree-loading");$(_7a9).treegrid("loading");var _7b0=opts.loader.call(_7a9,_7ae,function(data){_7af.removeClass("tree-loading");$(_7a9).treegrid("loaded");_7a0(_7a9,_7aa,data,_7ac);if(_7ad){_7ad();}},function(){_7af.removeClass("tree-loading");$(_7a9).treegrid("loaded");opts.onLoadError.apply(_7a9,arguments);if(_7ad){_7ad();}});if(_7b0==false){_7af.removeClass("tree-loading");$(_7a9).treegrid("loaded");}};function _7b1(_7b2){var rows=_7b3(_7b2);if(rows.length){return rows[0];}else {return null;}};function _7b3(_7b4){return $.data(_7b4,"treegrid").data;};function _7b5(_7b6,_7b7){var row=_find(_7b6,_7b7);if(row._parentId){return _find(_7b6,row._parentId);}else {return null;}};function _78f(_7b8,_7b9){var opts=$.data(_7b8,"treegrid").options;var body=$(_7b8).datagrid("getPanel").find("div.datagrid-view2 div.datagrid-body");var _7ba=[];if(_7b9){_7bb(_7b9);}else {var _7bc=_7b3(_7b8);for(var i=0;i<_7bc.length;i++){_7ba.push(_7bc[i]);_7bb(_7bc[i][opts.idField]);}}function _7bb(_7bd){var _7be=_find(_7b8,_7bd);if(_7be&&_7be.children){for(var i=0,len=_7be.children.length;i<len;i++){var _7bf=_7be.children[i];_7ba.push(_7bf);_7bb(_7bf[opts.idField]);}}};return _7ba;};function _7c0(_7c1,_7c2){if(!_7c2){return 0;}var opts=$.data(_7c1,"treegrid").options;var view=$(_7c1).datagrid("getPanel").children("div.datagrid-view");var node=view.find("div.datagrid-body tr[node-id=\""+_7c2+"\"]").children("td[field=\""+opts.treeField+"\"]");return node.find("span.tree-indent,span.tree-hit").length;};function _find(_7c3,_7c4){var opts=$.data(_7c3,"treegrid").options;var data=$.data(_7c3,"treegrid").data;var cc=[data];while(cc.length){var c=cc.shift();for(var i=0;i<c.length;i++){var node=c[i];if(node[opts.idField]==_7c4){return node;}else {if(node["children"]){cc.push(node["children"]);}}}}return null;};function _7c5(_7c6,_7c7){var opts=$.data(_7c6,"treegrid").options;var row=_find(_7c6,_7c7);var tr=opts.finder.getTr(_7c6,_7c7);var hit=tr.find("span.tree-hit");if(hit.length==0){return;}if(hit.hasClass("tree-collapsed")){return;}if(opts.onBeforeCollapse.call(_7c6,row)==false){return;}hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");hit.next().removeClass("tree-folder-open");row.state="closed";tr=tr.next("tr.treegrid-tr-tree");var cc=tr.children("td").children("div");if(opts.animate){cc.slideUp("normal",function(){$(_7c6).treegrid("autoSizeColumn");_78b(_7c6,_7c7);opts.onCollapse.call(_7c6,row);});}else {cc.hide();$(_7c6).treegrid("autoSizeColumn");_78b(_7c6,_7c7);opts.onCollapse.call(_7c6,row);}};function _7c8(_7c9,_7ca){var opts=$.data(_7c9,"treegrid").options;var tr=opts.finder.getTr(_7c9,_7ca);var hit=tr.find("span.tree-hit");var row=_find(_7c9,_7ca);if(hit.length==0){return;}if(hit.hasClass("tree-expanded")){return;}if(opts.onBeforeExpand.call(_7c9,row)==false){return;}hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");hit.next().addClass("tree-folder-open");var _7cb=tr.next("tr.treegrid-tr-tree");if(_7cb.length){var cc=_7cb.children("td").children("div");_7cc(cc);}else {_799(_7c9,row[opts.idField]);var _7cb=tr.next("tr.treegrid-tr-tree");var cc=_7cb.children("td").children("div");cc.hide();var _7cd=$.extend({},opts.queryParams||{});_7cd.id=row[opts.idField];_78a(_7c9,row[opts.idField],_7cd,true,function(){if(cc.is(":empty")){_7cb.remove();}else {_7cc(cc);}});}function _7cc(cc){row.state="open";if(opts.animate){cc.slideDown("normal",function(){$(_7c9).treegrid("autoSizeColumn");_78b(_7c9,_7ca);opts.onExpand.call(_7c9,row);});}else {cc.show();$(_7c9).treegrid("autoSizeColumn");_78b(_7c9,_7ca);opts.onExpand.call(_7c9,row);}};};function _798(_7ce,_7cf){var opts=$.data(_7ce,"treegrid").options;var tr=opts.finder.getTr(_7ce,_7cf);var hit=tr.find("span.tree-hit");if(hit.hasClass("tree-expanded")){_7c5(_7ce,_7cf);}else {_7c8(_7ce,_7cf);}};function _7d0(_7d1,_7d2){var opts=$.data(_7d1,"treegrid").options;var _7d3=_78f(_7d1,_7d2);if(_7d2){_7d3.unshift(_find(_7d1,_7d2));}for(var i=0;i<_7d3.length;i++){_7c5(_7d1,_7d3[i][opts.idField]);}};function _7d4(_7d5,_7d6){var opts=$.data(_7d5,"treegrid").options;var _7d7=_78f(_7d5,_7d6);if(_7d6){_7d7.unshift(_find(_7d5,_7d6));}for(var i=0;i<_7d7.length;i++){_7c8(_7d5,_7d7[i][opts.idField]);}};function _7d8(_7d9,_7da){var opts=$.data(_7d9,"treegrid").options;var ids=[];var p=_7b5(_7d9,_7da);while(p){var id=p[opts.idField];ids.unshift(id);p=_7b5(_7d9,id);}for(var i=0;i<ids.length;i++){_7c8(_7d9,ids[i]);}};function _7db(_7dc,_7dd){var opts=$.data(_7dc,"treegrid").options;if(_7dd.parent){var tr=opts.finder.getTr(_7dc,_7dd.parent);if(tr.next("tr.treegrid-tr-tree").length==0){_799(_7dc,_7dd.parent);}var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");var _7de=cell.children("span.tree-icon");if(_7de.hasClass("tree-file")){_7de.removeClass("tree-file").addClass("tree-folder tree-folder-open");var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_7de);if(hit.prev().length){hit.prev().remove();}}}_7a0(_7dc,_7dd.parent,_7dd.data,true);};function _7df(_7e0,_7e1){var ref=_7e1.before||_7e1.after;var opts=$.data(_7e0,"treegrid").options;var _7e2=_7b5(_7e0,ref);_7db(_7e0,{parent:_7e2?_7e2[opts.idField]:null,data:[_7e1.data]});_7e3(true);_7e3(false);_793(_7e0);function _7e3(_7e4){var _7e5=_7e4?1:2;var tr=opts.finder.getTr(_7e0,_7e1.data[opts.idField],"body",_7e5);var _7e6=tr.closest("table.datagrid-btable");tr=tr.parent().children();var dest=opts.finder.getTr(_7e0,ref,"body",_7e5);if(_7e1.before){tr.insertBefore(dest);}else {var sub=dest.next("tr.treegrid-tr-tree");tr.insertAfter(sub.length?sub:dest);}_7e6.remove();};};function _7e7(_7e8,_7e9){var _7ea=$.data(_7e8,"treegrid");$(_7e8).datagrid("deleteRow",_7e9);_793(_7e8);_7ea.total-=1;$(_7e8).datagrid("getPager").pagination("refresh",{total:_7ea.total});};$.fn.treegrid=function(_7eb,_7ec){if(typeof _7eb=="string"){var _7ed=$.fn.treegrid.methods[_7eb];if(_7ed){return _7ed(this,_7ec);}else {return this.datagrid(_7eb,_7ec);}}_7eb=_7eb||{};return this.each(function(){var _7ee=$.data(this,"treegrid");if(_7ee){$.extend(_7ee.options,_7eb);}else {_7ee=$.data(this,"treegrid",{options:$.extend({},$.fn.treegrid.defaults,$.fn.treegrid.parseOptions(this),_7eb),data:[]});}_771(this);if(_7ee.options.data){$(this).treegrid("loadData",_7ee.options.data);}_78a(this);_795(this);});};$.fn.treegrid.methods={options:function options(jq){return $.data(jq[0],"treegrid").options;},resize:function resize(jq,_7ef){return jq.each(function(){$(this).datagrid("resize",_7ef);});},fixRowHeight:function fixRowHeight(jq,_7f0){return jq.each(function(){_78b(this,_7f0);});},loadData:function loadData(jq,data){return jq.each(function(){_7a0(this,data.parent,data);});},load:function load(jq,_7f1){return jq.each(function(){$(this).treegrid("options").pageNumber=1;$(this).treegrid("getPager").pagination({pageNumber:1});$(this).treegrid("reload",_7f1);});},reload:function reload(jq,id){return jq.each(function(){var opts=$(this).treegrid("options");var _7f2={};if((typeof id==="undefined"?"undefined":_typeof(id))=="object"){_7f2=id;}else {_7f2=$.extend({},opts.queryParams);_7f2.id=id;}if(_7f2.id){var node=$(this).treegrid("find",_7f2.id);if(node.children){node.children.splice(0,node.children.length);}opts.queryParams=_7f2;var tr=opts.finder.getTr(this,_7f2.id);tr.next("tr.treegrid-tr-tree").remove();tr.find("span.tree-hit").removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");_7c8(this,_7f2.id);}else {_78a(this,null,_7f2);}});},reloadFooter:function reloadFooter(jq,_7f3){return jq.each(function(){var opts=$.data(this,"treegrid").options;var dc=$.data(this,"datagrid").dc;if(_7f3){$.data(this,"treegrid").footer=_7f3;}if(opts.showFooter){opts.view.renderFooter.call(opts.view,this,dc.footer1,true);opts.view.renderFooter.call(opts.view,this,dc.footer2,false);if(opts.view.onAfterRender){opts.view.onAfterRender.call(opts.view,this);}$(this).treegrid("fixRowHeight");}});},getData:function getData(jq){return $.data(jq[0],"treegrid").data;},getFooterRows:function getFooterRows(jq){return $.data(jq[0],"treegrid").footer;},getRoot:function getRoot(jq){return _7b1(jq[0]);},getRoots:function getRoots(jq){return _7b3(jq[0]);},getParent:function getParent(jq,id){return _7b5(jq[0],id);},getChildren:function getChildren(jq,id){return _78f(jq[0],id);},getLevel:function getLevel(jq,id){return _7c0(jq[0],id);},find:function find(jq,id){return _find(jq[0],id);},isLeaf:function isLeaf(jq,id){var opts=$.data(jq[0],"treegrid").options;var tr=opts.finder.getTr(jq[0],id);var hit=tr.find("span.tree-hit");return hit.length==0;},select:function select(jq,id){return jq.each(function(){$(this).datagrid("selectRow",id);});},unselect:function unselect(jq,id){return jq.each(function(){$(this).datagrid("unselectRow",id);});},collapse:function collapse(jq,id){return jq.each(function(){_7c5(this,id);});},expand:function expand(jq,id){return jq.each(function(){_7c8(this,id);});},toggle:function toggle(jq,id){return jq.each(function(){_798(this,id);});},collapseAll:function collapseAll(jq,id){return jq.each(function(){_7d0(this,id);});},expandAll:function expandAll(jq,id){return jq.each(function(){_7d4(this,id);});},expandTo:function expandTo(jq,id){return jq.each(function(){_7d8(this,id);});},append:function append(jq,_7f4){return jq.each(function(){_7db(this,_7f4);});},insert:function insert(jq,_7f5){return jq.each(function(){_7df(this,_7f5);});},remove:function remove(jq,id){return jq.each(function(){_7e7(this,id);});},pop:function pop(jq,id){var row=jq.treegrid("find",id);jq.treegrid("remove",id);return row;},refresh:function refresh(jq,id){return jq.each(function(){var opts=$.data(this,"treegrid").options;opts.view.refreshRow.call(opts.view,this,id);});},update:function update(jq,_7f6){return jq.each(function(){var opts=$.data(this,"treegrid").options;opts.view.updateRow.call(opts.view,this,_7f6.id,_7f6.row);});},beginEdit:function beginEdit(jq,id){return jq.each(function(){$(this).datagrid("beginEdit",id);$(this).treegrid("fixRowHeight",id);});},endEdit:function endEdit(jq,id){return jq.each(function(){$(this).datagrid("endEdit",id);});},cancelEdit:function cancelEdit(jq,id){return jq.each(function(){$(this).datagrid("cancelEdit",id);});}};$.fn.treegrid.parseOptions=function(_7f7){return $.extend({},$.fn.datagrid.parseOptions(_7f7),$.parser.parseOptions(_7f7,["treeField",{animate:"boolean"}]));};var _7f8=$.extend({},$.fn.datagrid.defaults.view,{render:function render(_7f9,_7fa,_7fb){var opts=$.data(_7f9,"treegrid").options;var _7fc=$(_7f9).datagrid("getColumnFields",_7fb);var _7fd=$.data(_7f9,"datagrid").rowIdPrefix;if(_7fb){if(!(opts.rownumbers||opts.frozenColumns&&opts.frozenColumns.length)){return;}}var _7fe=0;var view=this;var _7ff=_800(_7fb,this.treeLevel,this.treeNodes);$(_7fa).append(_7ff.join(""));function _800(_801,_802,_803){var _804=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];for(var i=0;i<_803.length;i++){var row=_803[i];if(row.state!="open"&&row.state!="closed"){row.state="open";}var css=opts.rowStyler?opts.rowStyler.call(_7f9,row):"";var _805="";var _806="";if(typeof css=="string"){_806=css;}else {if(css){_805=css["class"]||"";_806=css["style"]||"";}}var cls="class=\"datagrid-row "+(_7fe++%2&&opts.striped?"datagrid-row-alt ":" ")+_805+"\"";var _807=_806?"style=\""+_806+"\"":"";var _808=_7fd+"-"+(_801?1:2)+"-"+row[opts.idField];_804.push("<tr id=\""+_808+"\" node-id=\""+row[opts.idField]+"\" "+cls+" "+_807+">");_804=_804.concat(view.renderRow.call(view,_7f9,_7fc,_801,_802,row));_804.push("</tr>");if(row.children&&row.children.length){var tt=_800(_801,_802+1,row.children);var v=row.state=="closed"?"none":"block";_804.push("<tr class=\"treegrid-tr-tree\"><td style=\"border:0px\" colspan="+(_7fc.length+(opts.rownumbers?1:0))+"><div style=\"display:"+v+"\">");_804=_804.concat(tt);_804.push("</div></td></tr>");}}_804.push("</tbody></table>");return _804;};},renderFooter:function renderFooter(_809,_80a,_80b){var opts=$.data(_809,"treegrid").options;var rows=$.data(_809,"treegrid").footer||[];var _80c=$(_809).datagrid("getColumnFields",_80b);var _80d=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];for(var i=0;i<rows.length;i++){var row=rows[i];row[opts.idField]=row[opts.idField]||"foot-row-id"+i;_80d.push("<tr class=\"datagrid-row\" node-id=\""+row[opts.idField]+"\">");_80d.push(this.renderRow.call(this,_809,_80c,_80b,0,row));_80d.push("</tr>");}_80d.push("</tbody></table>");$(_80a).html(_80d.join(""));},renderRow:function renderRow(_80e,_80f,_810,_811,row){var opts=$.data(_80e,"treegrid").options;var cc=[];if(_810&&opts.rownumbers){cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">0</div></td>");}for(var i=0;i<_80f.length;i++){var _812=_80f[i];var col=$(_80e).datagrid("getColumnOption",_812);if(col){var css=col.styler?col.styler(row[_812],row)||"":"";var _813="";var _814="";if(typeof css=="string"){_814=css;}else {if(cc){_813=css["class"]||"";_814=css["style"]||"";}}var cls=_813?"class=\""+_813+"\"":"";var _815=col.hidden?"style=\"display:none;"+_814+"\"":_814?"style=\""+_814+"\"":"";cc.push("<td field=\""+_812+"\" "+cls+" "+_815+">");var _815="";if(!col.checkbox){if(col.align){_815+="text-align:"+col.align+";";}if(!opts.nowrap){_815+="white-space:normal;height:auto;";}else {if(opts.autoRowHeight){_815+="height:auto;";}}}cc.push("<div style=\""+_815+"\" ");if(col.checkbox){cc.push("class=\"datagrid-cell-check ");}else {cc.push("class=\"datagrid-cell "+col.cellClass);}cc.push("\">");if(col.checkbox){if(row.checked){cc.push("<input type=\"checkbox\" checked=\"checked\"");}else {cc.push("<input type=\"checkbox\"");}cc.push(" name=\""+_812+"\" value=\""+(row[_812]!=undefined?row[_812]:"")+"\">");}else {var val=null;if(col.formatter){val=col.formatter(row[_812],row);}else {val=row[_812];}if(_812==opts.treeField){for(var j=0;j<_811;j++){cc.push("<span class=\"tree-indent\"></span>");}if(row.state=="closed"){cc.push("<span class=\"tree-hit tree-collapsed\"></span>");cc.push("<span class=\"tree-icon tree-folder "+(row.iconCls?row.iconCls:"")+"\"></span>");}else {if(row.children&&row.children.length){cc.push("<span class=\"tree-hit tree-expanded\"></span>");cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(row.iconCls?row.iconCls:"")+"\"></span>");}else {cc.push("<span class=\"tree-indent\"></span>");cc.push("<span class=\"tree-icon tree-file "+(row.iconCls?row.iconCls:"")+"\"></span>");}}cc.push("<span class=\"tree-title\">"+val+"</span>");}else {cc.push(val);}}cc.push("</div>");cc.push("</td>");}}return cc.join("");},refreshRow:function refreshRow(_816,id){this.updateRow.call(this,_816,id,{});},updateRow:function updateRow(_817,id,row){var opts=$.data(_817,"treegrid").options;var _818=$(_817).treegrid("find",id);$.extend(_818,row);var _819=$(_817).treegrid("getLevel",id)-1;var _81a=opts.rowStyler?opts.rowStyler.call(_817,_818):"";function _81b(_81c){var _81d=$(_817).treegrid("getColumnFields",_81c);var tr=opts.finder.getTr(_817,id,"body",_81c?1:2);var _81e=tr.find("div.datagrid-cell-rownumber").html();var _81f=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");tr.html(this.renderRow(_817,_81d,_81c,_819,_818));tr.attr("style",_81a||"");tr.find("div.datagrid-cell-rownumber").html(_81e);if(_81f){tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);}};_81b.call(this,true);_81b.call(this,false);$(_817).treegrid("fixRowHeight",id);},deleteRow:function deleteRow(_820,id){var opts=$.data(_820,"treegrid").options;var tr=opts.finder.getTr(_820,id);tr.next("tr.treegrid-tr-tree").remove();tr.remove();var _821=del(id);if(_821){if(_821.children.length==0){tr=opts.finder.getTr(_820,_821[opts.idField]);tr.next("tr.treegrid-tr-tree").remove();var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");cell.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");cell.find(".tree-hit").remove();$("<span class=\"tree-indent\"></span>").prependTo(cell);}}function del(id){var cc;var _822=$(_820).treegrid("getParent",id);if(_822){cc=_822.children;}else {cc=$(_820).treegrid("getData");}for(var i=0;i<cc.length;i++){if(cc[i][opts.idField]==id){cc.splice(i,1);break;}}return _822;};},onBeforeRender:function onBeforeRender(_823,_824,data){if($.isArray(_824)){data={total:_824.length,rows:_824};_824=null;}if(!data){return false;}var _825=$.data(_823,"treegrid");var opts=_825.options;if(data.length==undefined){if(data.footer){_825.footer=data.footer;}if(data.total){_825.total=data.total;}data=this.transfer(_823,_824,data.rows);}else {(function(){var _826=function _826(_827,_828){for(var i=0;i<_827.length;i++){var row=_827[i];row._parentId=_828;if(row.children&&row.children.length){_826(row.children,row[opts.idField]);}}};;_826(data,_824);})();}var node=_find(_823,_824);if(node){if(node.children){node.children=node.children.concat(data);}else {node.children=data;}}else {_825.data=_825.data.concat(data);}this.sort(_823,data);this.treeNodes=data;this.treeLevel=$(_823).treegrid("getLevel",_824);},sort:function sort(_829,data){var opts=$.data(_829,"treegrid").options;if(!opts.remoteSort&&opts.sortName){var _82a=opts.sortName.split(",");var _82b=opts.sortOrder.split(",");_82c(data);}function _82c(rows){rows.sort(function(r1,r2){var r=0;for(var i=0;i<_82a.length;i++){var sn=_82a[i];var so=_82b[i];var col=$(_829).treegrid("getColumnOption",sn);var _82d=col.sorter||function(a,b){return a==b?0:a>b?1:-1;};r=_82d(r1[sn],r2[sn])*(so=="asc"?1:-1);if(r!=0){return r;}}return r;});for(var i=0;i<rows.length;i++){var _82e=rows[i].children;if(_82e&&_82e.length){_82c(_82e);}}};},transfer:function transfer(_82f,_830,data){var opts=$.data(_82f,"treegrid").options;var rows=[];for(var i=0;i<data.length;i++){rows.push(data[i]);}var _831=[];for(var i=0;i<rows.length;i++){var row=rows[i];if(!_830){if(!row._parentId){_831.push(row);rows.splice(i,1);i--;}}else {if(row._parentId==_830){_831.push(row);rows.splice(i,1);i--;}}}var toDo=[];for(var i=0;i<_831.length;i++){toDo.push(_831[i]);}while(toDo.length){var node=toDo.shift();for(var i=0;i<rows.length;i++){var row=rows[i];if(row._parentId==node[opts.idField]){if(node.children){node.children.push(row);}else {node.children=[row];}toDo.push(row);rows.splice(i,1);i--;}}}return _831;}});$.fn.treegrid.defaults=$.extend({},$.fn.datagrid.defaults,{treeField:null,animate:false,singleSelect:true,view:_7f8,loader:function loader(_832,_833,_834){var opts=$(this).treegrid("options");if(!opts.url){return false;}$.ajax({type:opts.method,url:opts.url,data:_832,dataType:"json",success:function success(data){_833(data);},error:function error(){_834.apply(this,arguments);}});},loadFilter:function loadFilter(data,_835){return data;},finder:{getTr:function getTr(_836,id,type,_837){type=type||"body";_837=_837||0;var dc=$.data(_836,"datagrid").dc;if(_837==0){var opts=$.data(_836,"treegrid").options;var tr1=opts.finder.getTr(_836,id,type,1);var tr2=opts.finder.getTr(_836,id,type,2);return tr1.add(tr2);}else {if(type=="body"){var tr=$("#"+$.data(_836,"datagrid").rowIdPrefix+"-"+_837+"-"+id);if(!tr.length){tr=(_837==1?dc.body1:dc.body2).find("tr[node-id=\""+id+"\"]");}return tr;}else {if(type=="footer"){return (_837==1?dc.footer1:dc.footer2).find("tr[node-id=\""+id+"\"]");}else {if(type=="selected"){return (_837==1?dc.body1:dc.body2).find("tr.datagrid-row-selected");}else {if(type=="highlight"){return (_837==1?dc.body1:dc.body2).find("tr.datagrid-row-over");}else {if(type=="checked"){return (_837==1?dc.body1:dc.body2).find("tr.datagrid-row-checked");}else {if(type=="last"){return (_837==1?dc.body1:dc.body2).find("tr:last[node-id]");}else {if(type=="allbody"){return (_837==1?dc.body1:dc.body2).find("tr[node-id]");}else {if(type=="allfooter"){return (_837==1?dc.footer1:dc.footer2).find("tr[node-id]");}}}}}}}}}},getRow:function getRow(_838,p){var id=(typeof p==="undefined"?"undefined":_typeof(p))=="object"?p.attr("node-id"):p;return $(_838).treegrid("find",id);},getRows:function getRows(_839){return $(_839).treegrid("getChildren");}},onBeforeLoad:function onBeforeLoad(row,_83a){},onLoadSuccess:function onLoadSuccess(row,data){},onLoadError:function onLoadError(){},onBeforeCollapse:function onBeforeCollapse(row){},onCollapse:function onCollapse(row){},onBeforeExpand:function onBeforeExpand(row){},onExpand:function onExpand(row){},onClickRow:function onClickRow(row){},onDblClickRow:function onDblClickRow(row){},onClickCell:function onClickCell(_83b,row){},onDblClickCell:function onDblClickCell(_83c,row){},onContextMenu:function onContextMenu(e,row){},onBeforeEdit:function onBeforeEdit(row){},onAfterEdit:function onAfterEdit(row,_83d){},onCancelEdit:function onCancelEdit(row){}});})(jQuery);(function($){function _83e(_83f,_840){var _841=$.data(_83f,"combo");var opts=_841.options;var _842=_841.combo;var _843=_841.panel;if(_840){opts.width=_840;}if(isNaN(opts.width)){var c=$(_83f).clone();c.css("visibility","hidden");c.appendTo("body");opts.width=c.outerWidth();c.remove();}_842.appendTo("body");var _844=_842.find("input.combo-text");var _845=_842.find(".combo-arrow");var _846=opts.hasDownArrow?_845._outerWidth():0;_842._outerWidth(opts.width)._outerHeight(opts.height);_844._outerWidth(_842.width()-_846);_844.css({height:_842.height()+"px",lineHeight:_842.height()+"px"});_845._outerHeight(_842.height());_843.panel("resize",{width:opts.panelWidth?opts.panelWidth:_842.outerWidth(),height:opts.panelHeight});_842.insertAfter(_83f);};function init(_847){$(_847).addClass("combo-f").hide();var span=$("<span class=\"combo\">"+"<input type=\"text\" class=\"combo-text\" autocomplete=\"off\">"+"<span><span class=\"combo-arrow\"></span></span>"+"<input type=\"hidden\" class=\"combo-value\">"+"</span>").insertAfter(_847);var _848=$("<div class=\"combo-panel\"></div>").appendTo("body");_848.panel({doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function onOpen(){var p=$(this).panel("panel");if($.fn.menu){p.css("z-index",$.fn.menu.defaults.zIndex++);}else {if($.fn.window){p.css("z-index",$.fn.window.defaults.zIndex++);}}$(this).panel("resize");},onBeforeClose:function onBeforeClose(){_854(this);},onClose:function onClose(){var _849=$.data(_847,"combo");if(_849){_849.options.onHidePanel.call(_847);}}});var name=$(_847).attr("name");if(name){span.find("input.combo-value").attr("name",name);$(_847).removeAttr("name").attr("comboName",name);}return {combo:span,panel:_848};};function _84a(_84b){var _84c=$.data(_84b,"combo");var opts=_84c.options;var _84d=_84c.combo;if(opts.hasDownArrow){_84d.find(".combo-arrow").show();}else {_84d.find(".combo-arrow").hide();}_84e(_84b,opts.disabled);_84f(_84b,opts.readonly);};function _850(_851){var _852=$.data(_851,"combo");var _853=_852.combo.find("input.combo-text");_853.validatebox("destroy");_852.panel.panel("destroy");_852.combo.remove();$(_851).remove();};function _854(_855){$(_855).find(".combo-f").each(function(){var p=$(this).combo("panel");if(p.is(":visible")){p.panel("close");}});};function _856(_857){var _858=$.data(_857,"combo");var opts=_858.options;var _859=_858.panel;var _85a=_858.combo;var _85b=_85a.find(".combo-text");var _85c=_85a.find(".combo-arrow");$(document).unbind(".combo").bind("mousedown.combo",function(e){var p=$(e.target).closest("span.combo,div.combo-p");if(p.length){_854(p);return;}$("body>div.combo-p>div.combo-panel:visible").panel("close");});_85b.unbind(".combo");_85c.unbind(".combo");if(!opts.disabled&&!opts.readonly){_85b.bind("click.combo",function(e){if(!opts.editable){_85d.call(this);}else {var p=$(this).closest("div.combo-panel");$("div.combo-panel:visible").not(_859).not(p).panel("close");}}).bind("keydown.combo paste.combo drop.combo",function(e){switch(e.keyCode){case 38:opts.keyHandler.up.call(_857,e);break;case 40:opts.keyHandler.down.call(_857,e);break;case 37:opts.keyHandler.left.call(_857,e);break;case 39:opts.keyHandler.right.call(_857,e);break;case 13:e.preventDefault();opts.keyHandler.enter.call(_857,e);return false;case 9:case 27:_85e(_857);break;default:if(opts.editable){if(_858.timer){clearTimeout(_858.timer);}_858.timer=setTimeout(function(){var q=_85b.val();if(_858.previousValue!=q){_858.previousValue=q;$(_857).combo("showPanel");opts.keyHandler.query.call(_857,_85b.val(),e);$(_857).combo("validate");}},opts.delay);}}});_85c.bind("click.combo",function(){_85d.call(this);}).bind("mouseenter.combo",function(){$(this).addClass("combo-arrow-hover");}).bind("mouseleave.combo",function(){$(this).removeClass("combo-arrow-hover");});}function _85d(){if(_859.is(":visible")){_85e(_857);}else {var p=$(this).closest("div.combo-panel");$("div.combo-panel:visible").not(_859).not(p).panel("close");$(_857).combo("showPanel");}_85b.focus();};};function _85f(_860){var _861=$.data(_860,"combo");var opts=_861.options;var _862=_861.combo;var _863=_861.panel;_863.panel("move",{left:_864(),top:_865()});if(_863.panel("options").closed){_863.panel("open");opts.onShowPanel.call(_860);}(function(){if(_863.is(":visible")){_863.panel("move",{left:_864(),top:_865()});setTimeout(arguments.callee,200);}})();function _864(){var left=_862.offset().left;if(opts.panelAlign=="right"){left+=_862._outerWidth()-_863._outerWidth();}if(left+_863._outerWidth()>$(window)._outerWidth()+$(document).scrollLeft()){left=$(window)._outerWidth()+$(document).scrollLeft()-_863._outerWidth();}if(left<0){left=0;}return left;};function _865(){var top=_862.offset().top+_862._outerHeight();if(top+_863._outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){top=_862.offset().top-_863._outerHeight();}if(top<$(document).scrollTop()){top=_862.offset().top+_862._outerHeight();}return top;};};function _85e(_866){var _867=$.data(_866,"combo").panel;_867.panel("close");};function _868(_869){var opts=$.data(_869,"combo").options;var _86a=$(_869).combo("textbox");_86a.validatebox($.extend({},opts,{deltaX:opts.hasDownArrow?opts.deltaX:opts.deltaX>0?1:-1}));};function _84e(_86b,_86c){var _86d=$.data(_86b,"combo");var opts=_86d.options;var _86e=_86d.combo;if(_86c){opts.disabled=true;$(_86b).attr("disabled",true);_86e.find(".combo-value").attr("disabled",true);_86e.find(".combo-text").attr("disabled",true);}else {opts.disabled=false;$(_86b).removeAttr("disabled");_86e.find(".combo-value").removeAttr("disabled");_86e.find(".combo-text").removeAttr("disabled");}};function _84f(_86f,mode){var _870=$.data(_86f,"combo");var opts=_870.options;opts.readonly=mode==undefined?true:mode;var _871=opts.readonly?true:!opts.editable;_870.combo.find(".combo-text").attr("readonly",_871).css("cursor",_871?"pointer":"");};function _872(_873){var _874=$.data(_873,"combo");var opts=_874.options;var _875=_874.combo;if(opts.multiple){_875.find("input.combo-value").remove();}else {_875.find("input.combo-value").val("");}_875.find("input.combo-text").val("");};function _876(_877){var _878=$.data(_877,"combo").combo;return _878.find("input.combo-text").val();};function _879(_87a,text){var _87b=$.data(_87a,"combo");var _87c=_87b.combo.find("input.combo-text");if(_87c.val()!=text){_87c.val(text);$(_87a).combo("validate");_87b.previousValue=text;}};function _87d(_87e){var _87f=[];var _880=$.data(_87e,"combo").combo;_880.find("input.combo-value").each(function(){_87f.push($(this).val());});return _87f;};function _881(_882,_883){var opts=$.data(_882,"combo").options;var _884=_87d(_882);var _885=$.data(_882,"combo").combo;_885.find("input.combo-value").remove();var name=$(_882).attr("comboName");for(var i=0;i<_883.length;i++){var _886=$("<input type=\"hidden\" class=\"combo-value\">").appendTo(_885);if(name){_886.attr("name",name);}_886.val(_883[i]);}var tmp=[];for(var i=0;i<_884.length;i++){tmp[i]=_884[i];}var aa=[];for(var i=0;i<_883.length;i++){for(var j=0;j<tmp.length;j++){if(_883[i]==tmp[j]){aa.push(_883[i]);tmp.splice(j,1);break;}}}if(aa.length!=_883.length||_883.length!=_884.length){if(opts.multiple){opts.onChange.call(_882,_883,_884);}else {opts.onChange.call(_882,_883[0],_884[0]);}}};function _887(_888){var _889=_87d(_888);return _889[0];};function _88a(_88b,_88c){_881(_88b,[_88c]);};function _88d(_88e){var opts=$.data(_88e,"combo").options;var fn=opts.onChange;opts.onChange=function(){};if(opts.multiple){if(opts.value){if(_typeof(opts.value)=="object"){_881(_88e,opts.value);}else {_88a(_88e,opts.value);}}else {_881(_88e,[]);}opts.originalValue=_87d(_88e);}else {_88a(_88e,opts.value);opts.originalValue=opts.value;}opts.onChange=fn;};$.fn.combo=function(_88f,_890){if(typeof _88f=="string"){var _891=$.fn.combo.methods[_88f];if(_891){return _891(this,_890);}else {return this.each(function(){var _892=$(this).combo("textbox");_892.validatebox(_88f,_890);});}}_88f=_88f||{};return this.each(function(){var _893=$.data(this,"combo");if(_893){$.extend(_893.options,_88f);}else {var r=init(this);_893=$.data(this,"combo",{options:$.extend({},$.fn.combo.defaults,$.fn.combo.parseOptions(this),_88f),combo:r.combo,panel:r.panel,previousValue:null});$(this).removeAttr("disabled");}_84a(this);_83e(this);_856(this);_868(this);_88d(this);});};$.fn.combo.methods={options:function options(jq){return $.data(jq[0],"combo").options;},panel:function panel(jq){return $.data(jq[0],"combo").panel;},textbox:function textbox(jq){return $.data(jq[0],"combo").combo.find("input.combo-text");},destroy:function destroy(jq){return jq.each(function(){_850(this);});},resize:function resize(jq,_894){return jq.each(function(){_83e(this,_894);});},showPanel:function showPanel(jq){return jq.each(function(){_85f(this);});},hidePanel:function hidePanel(jq){return jq.each(function(){_85e(this);});},disable:function disable(jq){return jq.each(function(){_84e(this,true);_856(this);});},enable:function enable(jq){return jq.each(function(){_84e(this,false);_856(this);});},readonly:function readonly(jq,mode){return jq.each(function(){_84f(this,mode);_856(this);});},isValid:function isValid(jq){var _895=$.data(jq[0],"combo").combo.find("input.combo-text");return _895.validatebox("isValid");},clear:function clear(jq){return jq.each(function(){_872(this);});},reset:function reset(jq){return jq.each(function(){var opts=$.data(this,"combo").options;if(opts.multiple){$(this).combo("setValues",opts.originalValue);}else {$(this).combo("setValue",opts.originalValue);}});},getText:function getText(jq){return _876(jq[0]);},setText:function setText(jq,text){return jq.each(function(){_879(this,text);});},getValues:function getValues(jq){return _87d(jq[0]);},setValues:function setValues(jq,_896){return jq.each(function(){_881(this,_896);});},getValue:function getValue(jq){return _887(jq[0]);},setValue:function setValue(jq,_897){return jq.each(function(){_88a(this,_897);});}};$.fn.combo.parseOptions=function(_898){var t=$(_898);return $.extend({},$.fn.validatebox.parseOptions(_898),$.parser.parseOptions(_898,["width","height","separator","panelAlign",{panelWidth:"number",editable:"boolean",hasDownArrow:"boolean",delay:"number",selectOnNavigation:"boolean"}]),{panelHeight:t.attr("panelHeight")=="auto"?"auto":parseInt(t.attr("panelHeight"))||undefined,multiple:t.attr("multiple")?true:undefined,disabled:t.attr("disabled")?true:undefined,readonly:t.attr("readonly")?true:undefined,value:t.val()||undefined});};$.fn.combo.defaults=$.extend({},$.fn.validatebox.defaults,{width:"auto",height:22,panelWidth:null,panelHeight:200,panelAlign:"left",multiple:false,selectOnNavigation:true,separator:",",editable:true,disabled:false,readonly:false,hasDownArrow:true,value:"",delay:200,deltaX:19,keyHandler:{up:function up(e){},down:function down(e){},left:function left(e){},right:function right(e){},enter:function enter(e){},query:function query(q,e){}},onShowPanel:function onShowPanel(){},onHidePanel:function onHidePanel(){},onChange:function onChange(_899,_89a){}});})(jQuery);(function($){var _89b=0;function _89c(_89d,_89e){var _89f=$.data(_89d,"combobox");var opts=_89f.options;var data=_89f.data;for(var i=0;i<data.length;i++){if(data[i][opts.valueField]==_89e){return i;}}return -1;};function _8a0(_8a1,_8a2){var opts=$.data(_8a1,"combobox").options;var _8a3=$(_8a1).combo("panel");var item=opts.finder.getEl(_8a1,_8a2);if(item.length){if(item.position().top<=0){var h=_8a3.scrollTop()+item.position().top;_8a3.scrollTop(h);}else {if(item.position().top+item.outerHeight()>_8a3.height()){var h=_8a3.scrollTop()+item.position().top+item.outerHeight()-_8a3.height();_8a3.scrollTop(h);}}}};function nav(_8a4,dir){var opts=$.data(_8a4,"combobox").options;var _8a5=$(_8a4).combobox("panel");var item=_8a5.children("div.combobox-item-hover");if(!item.length){item=_8a5.children("div.combobox-item-selected");}item.removeClass("combobox-item-hover");var _8a6="div.combobox-item:visible:not(.combobox-item-disabled):first";var _8a7="div.combobox-item:visible:not(.combobox-item-disabled):last";if(!item.length){item=_8a5.children(dir=="next"?_8a6:_8a7);}else {if(dir=="next"){item=item.nextAll(_8a6);if(!item.length){item=_8a5.children(_8a6);}}else {item=item.prevAll(_8a6);if(!item.length){item=_8a5.children(_8a7);}}}if(item.length){item.addClass("combobox-item-hover");var row=opts.finder.getRow(_8a4,item);if(row){_8a0(_8a4,row[opts.valueField]);if(opts.selectOnNavigation){_8a8(_8a4,row[opts.valueField]);}}}};function _8a8(_8a9,_8aa){var opts=$.data(_8a9,"combobox").options;var _8ab=$(_8a9).combo("getValues");if($.inArray(_8aa+"",_8ab)==-1){if(opts.multiple){_8ab.push(_8aa);}else {_8ab=[_8aa];}_8ac(_8a9,_8ab);opts.onSelect.call(_8a9,opts.finder.getRow(_8a9,_8aa));}};function _8ad(_8ae,_8af){var opts=$.data(_8ae,"combobox").options;var _8b0=$(_8ae).combo("getValues");var _8b1=$.inArray(_8af+"",_8b0);if(_8b1>=0){_8b0.splice(_8b1,1);_8ac(_8ae,_8b0);opts.onUnselect.call(_8ae,opts.finder.getRow(_8ae,_8af));}};function _8ac(_8b2,_8b3,_8b4){var opts=$.data(_8b2,"combobox").options;var _8b5=$(_8b2).combo("panel");_8b5.find("div.combobox-item-selected").removeClass("combobox-item-selected");var vv=[],ss=[];for(var i=0;i<_8b3.length;i++){var v=_8b3[i];var s=v;opts.finder.getEl(_8b2,v).addClass("combobox-item-selected");var row=opts.finder.getRow(_8b2,v);if(row){s=row[opts.textField];}vv.push(v);ss.push(s);}$(_8b2).combo("setValues",vv);if(!_8b4){$(_8b2).combo("setText",ss.join(opts.separator));}};function _8b6(_8b7,data,_8b8){var _8b9=$.data(_8b7,"combobox");var opts=_8b9.options;_8b9.data=opts.loadFilter.call(_8b7,data);_8b9.groups=[];data=_8b9.data;var _8ba=$(_8b7).combobox("getValues");var dd=[];var _8bb=undefined;for(var i=0;i<data.length;i++){var row=data[i];var v=row[opts.valueField]+"";var s=row[opts.textField];var g=row[opts.groupField];if(g){if(_8bb!=g){_8bb=g;_8b9.groups.push(g);dd.push("<div id=\""+(_8b9.groupIdPrefix+"_"+(_8b9.groups.length-1))+"\" class=\"combobox-group\">");dd.push(opts.groupFormatter?opts.groupFormatter.call(_8b7,g):g);dd.push("</div>");}}else {_8bb=undefined;}var cls="combobox-item"+(row.disabled?" combobox-item-disabled":"")+(g?" combobox-gitem":"");dd.push("<div id=\""+(_8b9.itemIdPrefix+"_"+i)+"\" class=\""+cls+"\">");dd.push(opts.formatter?opts.formatter.call(_8b7,row):s);dd.push("</div>");if(row["selected"]&&$.inArray(v,_8ba)==-1){_8ba.push(v);}}$(_8b7).combo("panel").html(dd.join(""));if(opts.multiple){_8ac(_8b7,_8ba,_8b8);}else {_8ac(_8b7,_8ba.length?[_8ba[_8ba.length-1]]:[],_8b8);}opts.onLoadSuccess.call(_8b7,data);};function _8bc(_8bd,url,_8be,_8bf){var opts=$.data(_8bd,"combobox").options;if(url){opts.url=url;}_8be=_8be||{};if(opts.onBeforeLoad.call(_8bd,_8be)==false){return;}opts.loader.call(_8bd,_8be,function(data){_8b6(_8bd,data,_8bf);},function(){opts.onLoadError.apply(this,arguments);});};function _8c0(_8c1,q){var _8c2=$.data(_8c1,"combobox");var opts=_8c2.options;if(opts.multiple&&!q){_8ac(_8c1,[],true);}else {_8ac(_8c1,[q],true);}if(opts.mode=="remote"){_8bc(_8c1,null,{q:q},true);}else {var _8c3=$(_8c1).combo("panel");_8c3.find("div.combobox-item-selected,div.combobox-item-hover").removeClass("combobox-item-selected combobox-item-hover");_8c3.find("div.combobox-item,div.combobox-group").hide();var data=_8c2.data;var vv=[];var qq=opts.multiple?q.split(opts.separator):[q];$.map(qq,function(q){q=$.trim(q);var _8c4=undefined;for(var i=0;i<data.length;i++){var row=data[i];if(opts.filter.call(_8c1,q,row)){var v=row[opts.valueField];var s=row[opts.textField];var g=row[opts.groupField];var item=opts.finder.getEl(_8c1,v).show();if(s.toLowerCase()==q.toLowerCase()){vv.push(v);item.addClass("combobox-item-selected");}if(opts.groupField&&_8c4!=g){$("#"+_8c2.groupIdPrefix+"_"+$.inArray(g,_8c2.groups)).show();_8c4=g;}}}});_8ac(_8c1,vv,true);}};function _8c5(_8c6){var t=$(_8c6);var opts=t.combobox("options");var _8c7=t.combobox("panel");var item=_8c7.children("div.combobox-item-hover");if(item.length){var row=opts.finder.getRow(_8c6,item);var _8c8=row[opts.valueField];if(opts.multiple){if(item.hasClass("combobox-item-selected")){t.combobox("unselect",_8c8);}else {t.combobox("select",_8c8);}}else {t.combobox("select",_8c8);}}var vv=[];$.map(t.combobox("getValues"),function(v){if(_89c(_8c6,v)>=0){vv.push(v);}});t.combobox("setValues",vv);if(!opts.multiple){t.combobox("hidePanel");}};function _8c9(_8ca){var _8cb=$.data(_8ca,"combobox");var opts=_8cb.options;_89b++;_8cb.itemIdPrefix="_easyui_combobox_i"+_89b;_8cb.groupIdPrefix="_easyui_combobox_g"+_89b;$(_8ca).addClass("combobox-f");$(_8ca).combo($.extend({},opts,{onShowPanel:function onShowPanel(){$(_8ca).combo("panel").find("div.combobox-item,div.combobox-group").show();_8a0(_8ca,$(_8ca).combobox("getValue"));opts.onShowPanel.call(_8ca);}}));$(_8ca).combo("panel").unbind().bind("mouseover",function(e){$(this).children("div.combobox-item-hover").removeClass("combobox-item-hover");var item=$(e.target).closest("div.combobox-item");if(!item.hasClass("combobox-item-disabled")){item.addClass("combobox-item-hover");}e.stopPropagation();}).bind("mouseout",function(e){$(e.target).closest("div.combobox-item").removeClass("combobox-item-hover");e.stopPropagation();}).bind("click",function(e){var item=$(e.target).closest("div.combobox-item");if(!item.length||item.hasClass("combobox-item-disabled")){return;}var row=opts.finder.getRow(_8ca,item);if(!row){return;}var _8cc=row[opts.valueField];if(opts.multiple){if(item.hasClass("combobox-item-selected")){_8ad(_8ca,_8cc);}else {_8a8(_8ca,_8cc);}}else {_8a8(_8ca,_8cc);$(_8ca).combo("hidePanel");}e.stopPropagation();});};$.fn.combobox=function(_8cd,_8ce){if(typeof _8cd=="string"){var _8cf=$.fn.combobox.methods[_8cd];if(_8cf){return _8cf(this,_8ce);}else {return this.combo(_8cd,_8ce);}}_8cd=_8cd||{};return this.each(function(){var _8d0=$.data(this,"combobox");if(_8d0){$.extend(_8d0.options,_8cd);_8c9(this);}else {_8d0=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,$.fn.combobox.parseOptions(this),_8cd),data:[]});_8c9(this);var data=$.fn.combobox.parseData(this);if(data.length){_8b6(this,data);}}if(_8d0.options.data){_8b6(this,_8d0.options.data);}_8bc(this);});};$.fn.combobox.methods={options:function options(jq){var _8d1=jq.combo("options");return $.extend($.data(jq[0],"combobox").options,{originalValue:_8d1.originalValue,disabled:_8d1.disabled,readonly:_8d1.readonly});},getData:function getData(jq){return $.data(jq[0],"combobox").data;},setValues:function setValues(jq,_8d2){return jq.each(function(){_8ac(this,_8d2);});},setValue:function setValue(jq,_8d3){return jq.each(function(){_8ac(this,[_8d3]);});},clear:function clear(jq){return jq.each(function(){$(this).combo("clear");var _8d4=$(this).combo("panel");_8d4.find("div.combobox-item-selected").removeClass("combobox-item-selected");});},reset:function reset(jq){return jq.each(function(){var opts=$(this).combobox("options");if(opts.multiple){$(this).combobox("setValues",opts.originalValue);}else {$(this).combobox("setValue",opts.originalValue);}});},loadData:function loadData(jq,data){return jq.each(function(){_8b6(this,data);});},reload:function reload(jq,url){return jq.each(function(){_8bc(this,url);});},select:function select(jq,_8d5){return jq.each(function(){_8a8(this,_8d5);});},unselect:function unselect(jq,_8d6){return jq.each(function(){_8ad(this,_8d6);});}};$.fn.combobox.parseOptions=function(_8d7){var t=$(_8d7);return $.extend({},$.fn.combo.parseOptions(_8d7),$.parser.parseOptions(_8d7,["valueField","textField","groupField","mode","method","url"]));};$.fn.combobox.parseData=function(_8d8){var data=[];var opts=$(_8d8).combobox("options");$(_8d8).children().each(function(){if(this.tagName.toLowerCase()=="optgroup"){var _8d9=$(this).attr("label");$(this).children().each(function(){_8da(this,_8d9);});}else {_8da(this);}});return data;function _8da(el,_8db){var t=$(el);var row={};row[opts.valueField]=t.attr("value")!=undefined?t.attr("value"):t.text();row[opts.textField]=t.text();row["selected"]=t.is(":selected");row["disabled"]=t.is(":disabled");if(_8db){opts.groupField=opts.groupField||"group";row[opts.groupField]=_8db;}data.push(row);};};$.fn.combobox.defaults=$.extend({},$.fn.combo.defaults,{valueField:"value",textField:"text",groupField:null,groupFormatter:function groupFormatter(_8dc){return _8dc;},mode:"local",method:"post",url:null,data:null,keyHandler:{up:function up(e){nav(this,"prev");e.preventDefault();},down:function down(e){nav(this,"next");e.preventDefault();},left:function left(e){},right:function right(e){},enter:function enter(e){_8c5(this);},query:function query(q,e){_8c0(this,q);}},filter:function filter(q,row){var opts=$(this).combobox("options");return row[opts.textField].toLowerCase().indexOf(q.toLowerCase())==0;},formatter:function formatter(row){var opts=$(this).combobox("options");return row[opts.textField];},loader:function loader(_8dd,_8de,_8df){var opts=$(this).combobox("options");if(!opts.url){return false;}$.ajax({type:opts.method,url:opts.url,data:_8dd,dataType:"json",success:function success(data){_8de(data);},error:function error(){_8df.apply(this,arguments);}});},loadFilter:function loadFilter(data){return data;},finder:{getEl:function getEl(_8e0,_8e1){var _8e2=_89c(_8e0,_8e1);var id=$.data(_8e0,"combobox").itemIdPrefix+"_"+_8e2;return $("#"+id);},getRow:function getRow(_8e3,p){var _8e4=$.data(_8e3,"combobox");var _8e5=p instanceof jQuery?p.attr("id").substr(_8e4.itemIdPrefix.length+1):_89c(_8e3,p);return _8e4.data[parseInt(_8e5)];}},onBeforeLoad:function onBeforeLoad(_8e6){},onLoadSuccess:function onLoadSuccess(){},onLoadError:function onLoadError(){},onSelect:function onSelect(_8e7){},onUnselect:function onUnselect(_8e8){}});})(jQuery);(function($){function _8e9(_8ea){var _8eb=$.data(_8ea,"combotree");var opts=_8eb.options;var tree=_8eb.tree;$(_8ea).addClass("combotree-f");$(_8ea).combo(opts);var _8ec=$(_8ea).combo("panel");if(!tree){tree=$("<ul></ul>").appendTo(_8ec);$.data(_8ea,"combotree").tree=tree;}tree.tree($.extend({},opts,{checkbox:opts.multiple,onLoadSuccess:function onLoadSuccess(node,data){var _8ed=$(_8ea).combotree("getValues");if(opts.multiple){var _8ee=tree.tree("getChecked");for(var i=0;i<_8ee.length;i++){var id=_8ee[i].id;(function(){for(var i=0;i<_8ed.length;i++){if(id==_8ed[i]){return;}}_8ed.push(id);})();}}var _8ef=$(this).tree("options");var _8f0=_8ef.onCheck;var _8f1=_8ef.onSelect;_8ef.onCheck=_8ef.onSelect=function(){};$(_8ea).combotree("setValues",_8ed);_8ef.onCheck=_8f0;_8ef.onSelect=_8f1;opts.onLoadSuccess.call(this,node,data);},onClick:function onClick(node){if(opts.multiple){$(this).tree(node.checked?"uncheck":"check",node.target);}else {$(_8ea).combo("hidePanel");}_8f3(_8ea);opts.onClick.call(this,node);},onCheck:function onCheck(node,_8f2){_8f3(_8ea);opts.onCheck.call(this,node,_8f2);}}));};function _8f3(_8f4){var _8f5=$.data(_8f4,"combotree");var opts=_8f5.options;var tree=_8f5.tree;var vv=[],ss=[];if(opts.multiple){var _8f6=tree.tree("getChecked");for(var i=0;i<_8f6.length;i++){vv.push(_8f6[i].id);ss.push(_8f6[i].text);}}else {var node=tree.tree("getSelected");if(node){vv.push(node.id);ss.push(node.text);}}$(_8f4).combo("setValues",vv).combo("setText",ss.join(opts.separator));};function _8f7(_8f8,_8f9){var opts=$.data(_8f8,"combotree").options;var tree=$.data(_8f8,"combotree").tree;tree.find("span.tree-checkbox").addClass("tree-checkbox0").removeClass("tree-checkbox1 tree-checkbox2");var vv=[],ss=[];for(var i=0;i<_8f9.length;i++){var v=_8f9[i];var s=v;var node=tree.tree("find",v);if(node){s=node.text;tree.tree("check",node.target);tree.tree("select",node.target);}vv.push(v);ss.push(s);}$(_8f8).combo("setValues",vv).combo("setText",ss.join(opts.separator));};$.fn.combotree=function(_8fa,_8fb){if(typeof _8fa=="string"){var _8fc=$.fn.combotree.methods[_8fa];if(_8fc){return _8fc(this,_8fb);}else {return this.combo(_8fa,_8fb);}}_8fa=_8fa||{};return this.each(function(){var _8fd=$.data(this,"combotree");if(_8fd){$.extend(_8fd.options,_8fa);}else {$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,$.fn.combotree.parseOptions(this),_8fa)});}_8e9(this);});};$.fn.combotree.methods={options:function options(jq){var _8fe=jq.combo("options");return $.extend($.data(jq[0],"combotree").options,{originalValue:_8fe.originalValue,disabled:_8fe.disabled,readonly:_8fe.readonly});},tree:function tree(jq){return $.data(jq[0],"combotree").tree;},loadData:function loadData(jq,data){return jq.each(function(){var opts=$.data(this,"combotree").options;opts.data=data;var tree=$.data(this,"combotree").tree;tree.tree("loadData",data);});},reload:function reload(jq,url){return jq.each(function(){var opts=$.data(this,"combotree").options;var tree=$.data(this,"combotree").tree;if(url){opts.url=url;}tree.tree({url:opts.url});});},setValues:function setValues(jq,_8ff){return jq.each(function(){_8f7(this,_8ff);});},setValue:function setValue(jq,_900){return jq.each(function(){_8f7(this,[_900]);});},clear:function clear(jq){return jq.each(function(){var tree=$.data(this,"combotree").tree;tree.find("div.tree-node-selected").removeClass("tree-node-selected");var cc=tree.tree("getChecked");for(var i=0;i<cc.length;i++){tree.tree("uncheck",cc[i].target);}$(this).combo("clear");});},reset:function reset(jq){return jq.each(function(){var opts=$(this).combotree("options");if(opts.multiple){$(this).combotree("setValues",opts.originalValue);}else {$(this).combotree("setValue",opts.originalValue);}});}};$.fn.combotree.parseOptions=function(_901){return $.extend({},$.fn.combo.parseOptions(_901),$.fn.tree.parseOptions(_901));};$.fn.combotree.defaults=$.extend({},$.fn.combo.defaults,$.fn.tree.defaults,{editable:false});})(jQuery);(function($){function _902(_903){var _904=$.data(_903,"combogrid");var opts=_904.options;var grid=_904.grid;$(_903).addClass("combogrid-f").combo(opts);var _905=$(_903).combo("panel");if(!grid){grid=$("<table></table>").appendTo(_905);_904.grid=grid;}grid.datagrid($.extend({},opts,{border:false,fit:true,singleSelect:!opts.multiple,onLoadSuccess:function onLoadSuccess(data){var _906=$(_903).combo("getValues");var _907=opts.onSelect;opts.onSelect=function(){};_911(_903,_906,_904.remainText);opts.onSelect=_907;opts.onLoadSuccess.apply(_903,arguments);},onClickRow:_908,onSelect:function onSelect(_909,row){_90a();opts.onSelect.call(this,_909,row);},onUnselect:function onUnselect(_90b,row){_90a();opts.onUnselect.call(this,_90b,row);},onSelectAll:function onSelectAll(rows){_90a();opts.onSelectAll.call(this,rows);},onUnselectAll:function onUnselectAll(rows){if(opts.multiple){_90a();}opts.onUnselectAll.call(this,rows);}}));function _908(_90c,row){_904.remainText=false;_90a();if(!opts.multiple){$(_903).combo("hidePanel");}opts.onClickRow.call(this,_90c,row);};function _90a(){var rows=grid.datagrid("getSelections");var vv=[],ss=[];for(var i=0;i<rows.length;i++){vv.push(rows[i][opts.idField]);ss.push(rows[i][opts.textField]);}if(!opts.multiple){$(_903).combo("setValues",vv.length?vv:[""]);}else {$(_903).combo("setValues",vv);}if(!_904.remainText){$(_903).combo("setText",ss.join(opts.separator));}};};function nav(_90d,dir){var _90e=$.data(_90d,"combogrid");var opts=_90e.options;var grid=_90e.grid;var _90f=grid.datagrid("getRows").length;if(!_90f){return;}var tr=opts.finder.getTr(grid[0],null,"highlight");if(!tr.length){tr=opts.finder.getTr(grid[0],null,"selected");}var _910;if(!tr.length){_910=dir=="next"?0:_90f-1;}else {var _910=parseInt(tr.attr("datagrid-row-index"));_910+=dir=="next"?1:-1;if(_910<0){_910=_90f-1;}if(_910>=_90f){_910=0;}}grid.datagrid("highlightRow",_910);if(opts.selectOnNavigation){_90e.remainText=false;grid.datagrid("selectRow",_910);}};function _911(_912,_913,_914){var _915=$.data(_912,"combogrid");var opts=_915.options;var grid=_915.grid;var rows=grid.datagrid("getRows");var ss=[];var _916=$(_912).combo("getValues");var _917=$(_912).combo("options");var _918=_917.onChange;_917.onChange=function(){};grid.datagrid("clearSelections");for(var i=0;i<_913.length;i++){var _919=grid.datagrid("getRowIndex",_913[i]);if(_919>=0){grid.datagrid("selectRow",_919);ss.push(rows[_919][opts.textField]);}else {ss.push(_913[i]);}}$(_912).combo("setValues",_916);_917.onChange=_918;$(_912).combo("setValues",_913);if(!_914){var s=ss.join(opts.separator);if($(_912).combo("getText")!=s){$(_912).combo("setText",s);}}};function _91a(_91b,q){var _91c=$.data(_91b,"combogrid");var opts=_91c.options;var grid=_91c.grid;_91c.remainText=true;if(opts.multiple&&!q){_911(_91b,[],true);}else {_911(_91b,[q],true);}if(opts.mode=="remote"){grid.datagrid("clearSelections");grid.datagrid("load",$.extend({},opts.queryParams,{q:q}));}else {if(!q){return;}grid.datagrid("clearSelections").datagrid("highlightRow",-1);var rows=grid.datagrid("getRows");var qq=opts.multiple?q.split(opts.separator):[q];$.map(qq,function(q){q=$.trim(q);if(q){$.map(rows,function(row,i){if(q==row[opts.textField]){grid.datagrid("selectRow",i);}else {if(opts.filter.call(_91b,q,row)){grid.datagrid("highlightRow",i);}}});}});}};function _91d(_91e){var _91f=$.data(_91e,"combogrid");var opts=_91f.options;var grid=_91f.grid;var tr=opts.finder.getTr(grid[0],null,"highlight");_91f.remainText=false;if(tr.length){var _920=parseInt(tr.attr("datagrid-row-index"));if(opts.multiple){if(tr.hasClass("datagrid-row-selected")){grid.datagrid("unselectRow",_920);}else {grid.datagrid("selectRow",_920);}}else {grid.datagrid("selectRow",_920);}}var vv=[];$.map(grid.datagrid("getSelections"),function(row){vv.push(row[opts.idField]);});$(_91e).combogrid("setValues",vv);if(!opts.multiple){$(_91e).combogrid("hidePanel");}};$.fn.combogrid=function(_921,_922){if(typeof _921=="string"){var _923=$.fn.combogrid.methods[_921];if(_923){return _923(this,_922);}else {return this.combo(_921,_922);}}_921=_921||{};return this.each(function(){var _924=$.data(this,"combogrid");if(_924){$.extend(_924.options,_921);}else {_924=$.data(this,"combogrid",{options:$.extend({},$.fn.combogrid.defaults,$.fn.combogrid.parseOptions(this),_921)});}_902(this);});};$.fn.combogrid.methods={options:function options(jq){var _925=jq.combo("options");return $.extend($.data(jq[0],"combogrid").options,{originalValue:_925.originalValue,disabled:_925.disabled,readonly:_925.readonly});},grid:function grid(jq){return $.data(jq[0],"combogrid").grid;},setValues:function setValues(jq,_926){return jq.each(function(){_911(this,_926);});},setValue:function setValue(jq,_927){return jq.each(function(){_911(this,[_927]);});},clear:function clear(jq){return jq.each(function(){$(this).combogrid("grid").datagrid("clearSelections");$(this).combo("clear");});},reset:function reset(jq){return jq.each(function(){var opts=$(this).combogrid("options");if(opts.multiple){$(this).combogrid("setValues",opts.originalValue);}else {$(this).combogrid("setValue",opts.originalValue);}});}};$.fn.combogrid.parseOptions=function(_928){var t=$(_928);return $.extend({},$.fn.combo.parseOptions(_928),$.fn.datagrid.parseOptions(_928),$.parser.parseOptions(_928,["idField","textField","mode"]));};$.fn.combogrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.datagrid.defaults,{loadMsg:null,idField:null,textField:null,mode:"local",keyHandler:{up:function up(e){nav(this,"prev");e.preventDefault();},down:function down(e){nav(this,"next");e.preventDefault();},left:function left(e){},right:function right(e){},enter:function enter(e){_91d(this);},query:function query(q,e){_91a(this,q);}},filter:function filter(q,row){var opts=$(this).combogrid("options");return row[opts.textField].toLowerCase().indexOf(q.toLowerCase())==0;}});})(jQuery);(function($){function _929(_92a){var _92b=$.data(_92a,"datebox");var opts=_92b.options;$(_92a).addClass("datebox-f").combo($.extend({},opts,{onShowPanel:function onShowPanel(){_92c();_934(_92a,$(_92a).datebox("getText"),true);opts.onShowPanel.call(_92a);}}));$(_92a).combo("textbox").parent().addClass("datebox");if(!_92b.calendar){_92d();}_934(_92a,opts.value);function _92d(){var _92e=$(_92a).combo("panel").css("overflow","hidden");_92e.panel("options").onBeforeDestroy=function(){var sc=$(this).find(".calendar-shared");if(sc.length){sc.insertBefore(sc[0].pholder);}};var cc=$("<div class=\"datebox-calendar-inner\"></div>").appendTo(_92e);if(opts.sharedCalendar){var sc=$(opts.sharedCalendar);if(!sc[0].pholder){sc[0].pholder=$("<div class=\"calendar-pholder\" style=\"display:none\"></div>").insertAfter(sc);}sc.addClass("calendar-shared").appendTo(cc);if(!sc.hasClass("calendar")){sc.calendar();}_92b.calendar=sc;}else {_92b.calendar=$("<div></div>").appendTo(cc).calendar({endtoday:opts.endtoday});}$.extend(_92b.calendar.calendar("options"),{fit:true,border:false,onSelect:function onSelect(date){var opts=$(this.target).datebox("options");_934(this.target,opts.formatter.call(this.target,date));$(this.target).combo("hidePanel");opts.onSelect.call(_92a,date);}});var _92f=$("<div class=\"datebox-button\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%\"><tr></tr></table></div>").appendTo(_92e);var tr=_92f.find("tr");for(var i=0;i<opts.buttons.length;i++){var td=$("<td></td>").appendTo(tr);var btn=opts.buttons[i];var t=$("<a href=\"javascript:void(0)\"></a>").html($.isFunction(btn.text)?btn.text(_92a):btn.text).appendTo(td);t.bind("click",{target:_92a,handler:btn.handler},function(e){e.data.handler.call(this,e.data.target);});}tr.find("td").css("width",100/opts.buttons.length+"%");};function _92c(){var _930=$(_92a).combo("panel");var cc=_930.children("div.datebox-calendar-inner");_930.children()._outerWidth(_930.width());_92b.calendar.appendTo(cc);_92b.calendar[0].target=_92a;if(opts.panelHeight!="auto"){var _931=_930.height();_930.children().not(cc).each(function(){_931-=$(this).outerHeight();});cc._outerHeight(_931);}_92b.calendar.calendar("resize");};};function _932(_933,q){_934(_933,q,true);};function _935(_936){var _937=$.data(_936,"datebox");var opts=_937.options;var _938=_937.calendar.calendar("options").current;if(_938){_934(_936,opts.formatter.call(_936,_938));$(_936).combo("hidePanel");}};function _934(_939,_93a,_93b){var _93c=$.data(_939,"datebox");var opts=_93c.options;var _93d=_93c.calendar;$(_939).combo("setValue",_93a);_93d.calendar("moveTo",opts.parser.call(_939,_93a));if(!_93b){if(_93a){_93a=opts.formatter.call(_939,_93d.calendar("options").current);$(_939).combo("setValue",_93a).combo("setText",_93a);}else {$(_939).combo("setText",_93a);}}};$.fn.datebox=function(_93e,_93f){if(typeof _93e=="string"){var _940=$.fn.datebox.methods[_93e];if(_940){return _940(this,_93f);}else {return this.combo(_93e,_93f);}}_93e=_93e||{};return this.each(function(){var _941=$.data(this,"datebox");if(_941){$.extend(_941.options,_93e);}else {$.data(this,"datebox",{options:$.extend({},$.fn.datebox.defaults,$.fn.datebox.parseOptions(this),_93e)});}_929(this);});};$.fn.datebox.methods={options:function options(jq){var _942=jq.combo("options");return $.extend($.data(jq[0],"datebox").options,{originalValue:_942.originalValue,disabled:_942.disabled,readonly:_942.readonly});},calendar:function calendar(jq){return $.data(jq[0],"datebox").calendar;},setValue:function setValue(jq,_943){return jq.each(function(){_934(this,_943);});},reset:function reset(jq){return jq.each(function(){var opts=$(this).datebox("options");$(this).datebox("setValue",opts.originalValue);});}};$.fn.datebox.parseOptions=function(_944){return $.extend({},$.fn.combo.parseOptions(_944),$.parser.parseOptions(_944,["sharedCalendar"]));};$.fn.datebox.defaults=$.extend({},$.fn.combo.defaults,{panelWidth:180,panelHeight:"auto",sharedCalendar:null,keyHandler:{up:function up(e){},down:function down(e){},left:function left(e){},right:function right(e){},enter:function enter(e){_935(this);},query:function query(q,e){_932(this,q);}},currentText:"Today",closeText:"Close",okText:"Ok",buttons:[{text:function text(_945){return $(_945).datebox("options").currentText;},handler:function handler(_946){$(_946).datebox("calendar").calendar({year:new Date().getFullYear(),month:new Date().getMonth()+1,current:new Date()});_935(_946);}},{text:function text(_947){return $(_947).datebox("options").closeText;},handler:function handler(_948){$(this).closest("div.combo-panel").panel("close");}}],formatter:function formatter(date){var y=date.getFullYear();var m=date.getMonth()+1;var d=date.getDate();return m+"/"+d+"/"+y;},parser:function parser(s){var t=Date.parse(s);if(!isNaN(t)){return new Date(t);}else {return new Date();}},onSelect:function onSelect(date){}});})(jQuery);(function($){function _949(_94a){var _94b=$.data(_94a,"datetimebox");var opts=_94b.options;$(_94a).datebox($.extend({},opts,{onShowPanel:function onShowPanel(){var _94c=$(_94a).datetimebox("getValue");_94e(_94a,_94c,true);opts.onShowPanel.call(_94a);},formatter:$.fn.datebox.defaults.formatter,parser:$.fn.datebox.defaults.parser}));$(_94a).removeClass("datebox-f").addClass("datetimebox-f");$(_94a).datebox("calendar").calendar({onSelect:function onSelect(date){opts.onSelect.call(_94a,date);}});var _94d=$(_94a).datebox("panel");if(!_94b.spinner){var p=$("<div style=\"padding:2px\"><input style=\"width:80px\"></div>").insertAfter(_94d.children("div.datebox-calendar-inner"));_94b.spinner=p.children("input");}_94b.spinner.timespinner({showSeconds:opts.showSeconds,separator:opts.timeSeparator}).unbind(".datetimebox").bind("mousedown.datetimebox",function(e){e.stopPropagation();});_94e(_94a,opts.value);};function _94f(_950){var c=$(_950).datetimebox("calendar");var t=$(_950).datetimebox("spinner");var date=c.calendar("options").current;return new Date(date.getFullYear(),date.getMonth(),date.getDate(),t.timespinner("getHours"),t.timespinner("getMinutes"),t.timespinner("getSeconds"));};function _951(_952,q){_94e(_952,q,true);};function _953(_954){var opts=$.data(_954,"datetimebox").options;var date=_94f(_954);_94e(_954,opts.formatter.call(_954,date));$(_954).combo("hidePanel");};function _94e(_955,_956,_957){var opts=$.data(_955,"datetimebox").options;$(_955).combo("setValue",_956);if(!_957){if(_956){var date=opts.parser.call(_955,_956);$(_955).combo("setValue",opts.formatter.call(_955,date));$(_955).combo("setText",opts.formatter.call(_955,date));}else {$(_955).combo("setText",_956);}}var date=opts.parser.call(_955,_956);$(_955).datetimebox("calendar").calendar("moveTo",date);$(_955).datetimebox("spinner").timespinner("setValue",_958(date));function _958(date){function _959(_95a){return (_95a<10?"0":"")+_95a;};var tt=[_959(date.getHours()),_959(date.getMinutes())];if(opts.showSeconds){tt.push(_959(date.getSeconds()));}return tt.join($(_955).datetimebox("spinner").timespinner("options").separator);};};$.fn.datetimebox=function(_95b,_95c){if(typeof _95b=="string"){var _95d=$.fn.datetimebox.methods[_95b];if(_95d){return _95d(this,_95c);}else {return this.datebox(_95b,_95c);}}_95b=_95b||{};return this.each(function(){var _95e=$.data(this,"datetimebox");if(_95e){$.extend(_95e.options,_95b);}else {$.data(this,"datetimebox",{options:$.extend({},$.fn.datetimebox.defaults,$.fn.datetimebox.parseOptions(this),_95b)});}_949(this);});};$.fn.datetimebox.methods={options:function options(jq){var _95f=jq.datebox("options");return $.extend($.data(jq[0],"datetimebox").options,{originalValue:_95f.originalValue,disabled:_95f.disabled,readonly:_95f.readonly});},spinner:function spinner(jq){return $.data(jq[0],"datetimebox").spinner;},setValue:function setValue(jq,_960){return jq.each(function(){_94e(this,_960);});},reset:function reset(jq){return jq.each(function(){var opts=$(this).datetimebox("options");$(this).datetimebox("setValue",opts.originalValue);});}};$.fn.datetimebox.parseOptions=function(_961){var t=$(_961);return $.extend({},$.fn.datebox.parseOptions(_961),$.parser.parseOptions(_961,["timeSeparator",{showSeconds:"boolean"}]));};$.fn.datetimebox.defaults=$.extend({},$.fn.datebox.defaults,{showSeconds:true,timeSeparator:":",keyHandler:{up:function up(e){},down:function down(e){},left:function left(e){},right:function right(e){},enter:function enter(e){_953(this);},query:function query(q,e){_951(this,q);}},buttons:[{text:function text(_962){return $(_962).datetimebox("options").currentText;},handler:function handler(_963){$(_963).datetimebox("calendar").calendar({year:new Date().getFullYear(),month:new Date().getMonth()+1,current:new Date()});_953(_963);}},{text:function text(_964){return $(_964).datetimebox("options").okText;},handler:function handler(_965){_953(_965);}},{text:function text(_966){return $(_966).datetimebox("options").closeText;},handler:function handler(_967){$(this).closest("div.combo-panel").panel("close");}}],formatter:function formatter(date){var h=date.getHours();var M=date.getMinutes();var s=date.getSeconds();function _968(_969){return (_969<10?"0":"")+_969;};var _96a=$(this).datetimebox("spinner").timespinner("options").separator;var r=$.fn.datebox.defaults.formatter(date)+" "+_968(h)+_96a+_968(M);if($(this).datetimebox("options").showSeconds){r+=_96a+_968(s);}return r;},parser:function parser(s){if($.trim(s)==""){return new Date();}var dt=s.split(" ");var d=$.fn.datebox.defaults.parser(dt[0]);if(dt.length<2){return d;}var _96b=$(this).datetimebox("spinner").timespinner("options").separator;var tt=dt[1].split(_96b);var hour=parseInt(tt[0],10)||0;var _96c=parseInt(tt[1],10)||0;var _96d=parseInt(tt[2],10)||0;return new Date(d.getFullYear(),d.getMonth(),d.getDate(),hour,_96c,_96d);}});})(jQuery);(function($){function init(_96e){var _96f=$("<div class=\"slider\">"+"<div class=\"slider-inner\">"+"<a href=\"javascript:void(0)\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>"+"</div>"+"<div class=\"slider-rule\"></div>"+"<div class=\"slider-rulelabel\"></div>"+"<div style=\"clear:both\"></div>"+"<input type=\"hidden\" class=\"slider-value\">"+"</div>").insertAfter(_96e);var t=$(_96e);t.addClass("slider-f").hide();var name=t.attr("name");if(name){_96f.find("input.slider-value").attr("name",name);t.removeAttr("name").attr("sliderName",name);}return _96f;};function _970(_971,_972){var _973=$.data(_971,"slider");var opts=_973.options;var _974=_973.slider;if(_972){if(_972.width){opts.width=_972.width;}if(_972.height){opts.height=_972.height;}}if(opts.mode=="h"){_974.css("height","");_974.children("div").css("height","");if(!isNaN(opts.width)){_974.width(opts.width);}}else {_974.css("width","");_974.children("div").css("width","");if(!isNaN(opts.height)){_974.height(opts.height);_974.find("div.slider-rule").height(opts.height);_974.find("div.slider-rulelabel").height(opts.height);_974.find("div.slider-inner")._outerHeight(opts.height);}}_975(_971);};function _976(_977){var _978=$.data(_977,"slider");var opts=_978.options;var _979=_978.slider;var aa=opts.mode=="h"?opts.rule:opts.rule.slice(0).reverse();if(opts.reversed){aa=aa.slice(0).reverse();}_97a(aa);function _97a(aa){var myDate=new Date();var year=myDate.getFullYear();var month=myDate.getMonth()+1;var day=myDate.getDate();var hour=myDate.getHours();if(month<10)month="0"+month;if(day<10)day="0"+day;if(hour<10)hour="0"+hour;var date=year+month+day+hour;var rule=_979.find("div.slider-rule");var _97b=_979.find("div.slider-rulelabel");rule.empty();_97b.empty();for(var i=0;i<aa.length;i++){var _97c=i*100/(aa.length-1)+"%";var span;var item=aa[i];if(item<10)item="0"+aa[i];var _date=opts.date+item;if(_date<=date)span=$("<span style='border-color:#ff0000'></span>").appendTo(rule);else span=$("<span></span>").appendTo(rule);span.css(opts.mode=="h"?"left":"top",_97c);if(aa[i]!="|"){span=$("<span></span>").appendTo(_97b);if(_date<=date)span.html("<strong style='color:#ff0000'>"+aa[i]+"</strong>");else span.html(aa[i]);if(opts.mode=="h"){span.css({left:_97c,marginLeft:-Math.round(span.outerWidth()/2)});}else {span.css({top:_97c,marginTop:-Math.round(span.outerHeight()/2)});}}}};};function _97d(_97e){var _97f=$.data(_97e,"slider");var opts=_97f.options;var _980=_97f.slider;_980.removeClass("slider-h slider-v slider-disabled");_980.addClass(opts.mode=="h"?"slider-h":"slider-v");_980.addClass(opts.disabled?"slider-disabled":"");_980.find("a.slider-handle").draggable({axis:opts.mode,cursor:"pointer",disabled:opts.disabled,onDrag:function onDrag(e){var left=e.data.left;var _981=_980.width();if(opts.mode!="h"){left=e.data.top;_981=_980.height();}if(left<0||left>_981){return false;}else {var _982=_994(_97e,left);_983(_982);return false;}},onBeforeDrag:function onBeforeDrag(){_97f.isDragging=true;},onStartDrag:function onStartDrag(){opts.onSlideStart.call(_97e,opts.value);},onStopDrag:function onStopDrag(e){var _984=_994(_97e,opts.mode=="h"?e.data.left:e.data.top);_983(_984);opts.onSlideEnd.call(_97e,opts.value);opts.onComplete.call(_97e,opts.value);_97f.isDragging=false;}});_980.find("div.slider-inner").unbind(".slider").bind("mousedown.slider",function(e){if(_97f.isDragging){return;}var pos=$(this).offset();var _985=_994(_97e,opts.mode=="h"?e.pageX-pos.left:e.pageY-pos.top);_983(_985);opts.onComplete.call(_97e,opts.value);});function _983(_986){var s=Math.abs(_986%opts.step);if(s<opts.step/2){_986-=s;}else {_986=_986-s+opts.step;}_987(_97e,_986);};};function _987(_988,_989){var _98a=$.data(_988,"slider");var opts=_98a.options;var _98b=_98a.slider;var _98c=opts.value;if(_989<opts.min){_989=opts.min;}if(_989>opts.max){_989=opts.max;}opts.value=_989;$(_988).val(_989);_98b.find("input.slider-value").val(_989);var pos=_98d(_988,_989);var tip=_98b.find(".slider-tip");if(opts.showTip){tip.show();tip.html(opts.tipFormatter.call(_988,opts.value));}else {tip.hide();}if(opts.mode=="h"){var _98e="left:"+pos+"px;";_98b.find(".slider-handle").attr("style",_98e);tip.attr("style",_98e+"margin-left:"+-Math.round(tip.outerWidth()/2)+"px");}else {var _98e="top:"+pos+"px;";_98b.find(".slider-handle").attr("style",_98e);tip.attr("style",_98e+"margin-left:"+-Math.round(tip.outerWidth())+"px");}if(_98c!=_989){opts.onChange.call(_988,_989,_98c);}};function _975(_98f){var opts=$.data(_98f,"slider").options;var fn=opts.onChange;opts.onChange=function(){};_987(_98f,opts.value);opts.onChange=fn;};function _98d(_990,_991){var _992=$.data(_990,"slider");var opts=_992.options;var _993=_992.slider;var size=opts.mode=="h"?_993.width():_993.height();var pos=opts.converter.toPosition.call(_990,_991,size);if(opts.mode=="v"){pos=_993.height()-pos;}if(opts.reversed){pos=size-pos;}return pos.toFixed(0);};function _994(_995,pos){var _996=$.data(_995,"slider");var opts=_996.options;var _997=_996.slider;var size=opts.mode=="h"?_997.width():_997.height();var _998=opts.converter.toValue.call(_995,opts.mode=="h"?opts.reversed?size-pos:pos:size-pos,size);return _998.toFixed(0);};$.fn.slider=function(_999,_99a){if(typeof _999=="string"){return $.fn.slider.methods[_999](this,_99a);}_999=_999||{};return this.each(function(){var _99b=$.data(this,"slider");if(_99b){$.extend(_99b.options,_999);}else {_99b=$.data(this,"slider",{options:$.extend({},$.fn.slider.defaults,$.fn.slider.parseOptions(this),_999),slider:init(this)});$(this).removeAttr("disabled");}var opts=_99b.options;opts.min=parseFloat(opts.min);opts.max=parseFloat(opts.max);opts.value=parseFloat(opts.value);opts.step=parseFloat(opts.step);opts.originalValue=opts.value;_97d(this);_976(this);_970(this);});};$.fn.slider.methods={options:function options(jq){return $.data(jq[0],"slider").options;},destroy:function destroy(jq){return jq.each(function(){$.data(this,"slider").slider.remove();$(this).remove();});},resize:function resize(jq,_99c){return jq.each(function(){_970(this,_99c);});},getValue:function getValue(jq){return jq.slider("options").value;},setValue:function setValue(jq,_99d){return jq.each(function(){_987(this,_99d);});},clear:function clear(jq){return jq.each(function(){var opts=$(this).slider("options");_987(this,opts.min);});},reset:function reset(jq){return jq.each(function(){var opts=$(this).slider("options");_987(this,opts.originalValue);});},enable:function enable(jq){return jq.each(function(){$.data(this,"slider").options.disabled=false;_97d(this);});},disable:function disable(jq){return jq.each(function(){$.data(this,"slider").options.disabled=true;_97d(this);});}};$.fn.slider.parseOptions=function(_99e){var t=$(_99e);return $.extend({},$.parser.parseOptions(_99e,["width","height","mode",{reversed:"boolean",showTip:"boolean",min:"number",max:"number",step:"number"}]),{value:t.val()||undefined,disabled:t.attr("disabled")?true:undefined,rule:t.attr("rule")?eval(t.attr("rule")):undefined});};$.fn.slider.defaults={width:"auto",height:"auto",mode:"h",reversed:false,showTip:false,disabled:false,value:0,min:0,max:100,step:1,rule:[],tipFormatter:function tipFormatter(_99f){return _99f;},converter:{toPosition:function toPosition(_9a0,size){var opts=$(this).slider("options");return (_9a0-opts.min)/(opts.max-opts.min)*size;},toValue:function toValue(pos,size){var opts=$(this).slider("options");return opts.min+(opts.max-opts.min)*(pos/size);}},onChange:function onChange(_9a1,_9a2){},onSlideStart:function onSlideStart(_9a3){},onSlideEnd:function onSlideEnd(_9a4){},onComplete:function onComplete(_9a5){}};})(jQuery);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "jquery.easyui.min.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(194)))

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*mousewheel*/
	(function (a) {
	  function d(b) {
	    var c = b || window.event,
	        d = [].slice.call(arguments, 1),
	        e = 0,
	        f = !0,
	        g = 0,
	        h = 0;return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d);
	  }var b = ["DOMMouseScroll", "mousewheel"];if (a.event.fixHooks) for (var c = b.length; c;) {
	    a.event.fixHooks[b[--c]] = a.event.mouseHooks;
	  }a.event.special.mousewheel = { setup: function setup() {
	      if (this.addEventListener) for (var a = b.length; a;) {
	        this.addEventListener(b[--a], d, !1);
	      } else this.onmousewheel = d;
	    }, teardown: function teardown() {
	      if (this.removeEventListener) for (var a = b.length; a;) {
	        this.removeEventListener(b[--a], d, !1);
	      } else this.onmousewheel = null;
	    } }, a.fn.extend({ mousewheel: function mousewheel(a) {
	      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
	    }, unmousewheel: function unmousewheel(a) {
	      return this.unbind("mousewheel", a);
	    } });
	})(jQuery);
	/*custom scrollbar*/
	(function (c) {
	  var b = { init: function init(e) {
	      var f = { set_width: false, set_height: false, horizontalScroll: false, scrollInertia: 950, mouseWheel: true, mouseWheelPixels: "auto", autoDraggerLength: true, autoHideScrollbar: false, snapAmount: null, snapOffset: 0, scrollButtons: { enable: false, scrollType: "continuous", scrollSpeed: "auto", scrollAmount: 40 }, advanced: { updateOnBrowserResize: true, updateOnContentResize: false, autoExpandHorizontalScroll: false, autoScrollOnFocus: true, normalizeMouseWheelDelta: false }, contentTouchScroll: true, callbacks: { onScrollStart: function onScrollStart() {}, onScroll: function onScroll() {}, onTotalScroll: function onTotalScroll() {}, onTotalScrollBack: function onTotalScrollBack() {}, onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, whileScrolling: function whileScrolling() {} }, theme: "light" },
	          e = c.extend(true, f, e);return this.each(function () {
	        var m = c(this);if (e.set_width) {
	          m.css("width", e.set_width);
	        }if (e.set_height) {
	          m.css("height", e.set_height);
	        }if (!c(document).data("mCustomScrollbar-index")) {
	          c(document).data("mCustomScrollbar-index", "1");
	        } else {
	          var t = parseInt(c(document).data("mCustomScrollbar-index"));c(document).data("mCustomScrollbar-index", t + 1);
	        }m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index"));var g = m.children(".mCustomScrollBox");if (e.horizontalScroll) {
	          g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var k = g.children(".mCSB_h_wrapper");k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({ width: k.children().outerWidth(), position: "relative" }).unwrap();
	        } else {
	          g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
	        }var o = g.children(".mCSB_container");if (c.support.touch) {
	          o.addClass("mCS_touch");
	        }o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var l = g.children(".mCSB_scrollTools"),
	            h = l.children(".mCSB_draggerContainer"),
	            q = h.children(".mCSB_dragger");if (e.horizontalScroll) {
	          q.data("minDraggerWidth", q.width());
	        } else {
	          q.data("minDraggerHeight", q.height());
	        }if (e.scrollButtons.enable) {
	          if (e.horizontalScroll) {
	            l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>");
	          } else {
	            l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>");
	          }
	        }g.bind("scroll", function () {
	          if (!m.is(".mCS_disabled")) {
	            g.scrollTop(0).scrollLeft(0);
	          }
	        });m.data({ mCS_Init: true, mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"), horizontalScroll: e.horizontalScroll, scrollInertia: e.scrollInertia, scrollEasing: "mcsEaseOut", mouseWheel: e.mouseWheel, mouseWheelPixels: e.mouseWheelPixels, autoDraggerLength: e.autoDraggerLength, autoHideScrollbar: e.autoHideScrollbar, snapAmount: e.snapAmount, snapOffset: e.snapOffset, scrollButtons_enable: e.scrollButtons.enable, scrollButtons_scrollType: e.scrollButtons.scrollType, scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed, scrollButtons_scrollAmount: e.scrollButtons.scrollAmount, autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll, autoScrollOnFocus: e.advanced.autoScrollOnFocus, normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta, contentTouchScroll: e.contentTouchScroll, onScrollStart_Callback: e.callbacks.onScrollStart, onScroll_Callback: e.callbacks.onScroll, onTotalScroll_Callback: e.callbacks.onTotalScroll, onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack, onTotalScroll_Offset: e.callbacks.onTotalScrollOffset, onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset, whileScrolling_Callback: e.callbacks.whileScrolling, bindEvent_scrollbar_drag: false, bindEvent_content_touch: false, bindEvent_scrollbar_click: false, bindEvent_mousewheel: false, bindEvent_buttonsContinuous_y: false, bindEvent_buttonsContinuous_x: false, bindEvent_buttonsPixels_y: false, bindEvent_buttonsPixels_x: false, bindEvent_focusin: false, bindEvent_autoHideScrollbar: false, mCSB_buttonScrollRight: false, mCSB_buttonScrollLeft: false, mCSB_buttonScrollDown: false, mCSB_buttonScrollUp: false });if (e.horizontalScroll) {
	          if (m.css("max-width") !== "none") {
	            if (!e.advanced.updateOnContentResize) {
	              e.advanced.updateOnContentResize = true;
	            }
	          }
	        } else {
	          if (m.css("max-height") !== "none") {
	            var s = false,
	                r = parseInt(m.css("max-height"));if (m.css("max-height").indexOf("%") >= 0) {
	              s = r, r = m.parent().height() * s / 100;
	            }m.css("overflow", "hidden");g.css("max-height", r);
	          }
	        }m.mCustomScrollbar("update");if (e.advanced.updateOnBrowserResize) {
	          var i,
	              j = c(window).width(),
	              u = c(window).height();c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function () {
	            if (i) {
	              clearTimeout(i);
	            }i = setTimeout(function () {
	              if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
	                var w = c(window).width(),
	                    v = c(window).height();if (j !== w || u !== v) {
	                  if (m.css("max-height") !== "none" && s) {
	                    g.css("max-height", m.parent().height() * s / 100);
	                  }m.mCustomScrollbar("update");j = w;u = v;
	                }
	              }
	            }, 150);
	          });
	        }if (e.advanced.updateOnContentResize) {
	          var p;if (e.horizontalScroll) {
	            var n = o.outerWidth();
	          } else {
	            var n = o.outerHeight();
	          }p = setInterval(function () {
	            if (e.horizontalScroll) {
	              if (e.advanced.autoExpandHorizontalScroll) {
	                o.css({ position: "absolute", width: "auto" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: o.outerWidth(), position: "relative" }).unwrap();
	              }var v = o.outerWidth();
	            } else {
	              var v = o.outerHeight();
	            }if (v != n) {
	              m.mCustomScrollbar("update");n = v;
	            }
	          }, 300);
	        }
	      });
	    }, update: function update() {
	      var n = c(this),
	          k = n.children(".mCustomScrollBox"),
	          q = k.children(".mCSB_container");q.removeClass("mCS_no_scrollbar");n.removeClass("mCS_disabled mCS_destroyed");k.scrollTop(0).scrollLeft(0);var y = k.children(".mCSB_scrollTools"),
	          o = y.children(".mCSB_draggerContainer"),
	          m = o.children(".mCSB_dragger");if (n.data("horizontalScroll")) {
	        var A = y.children(".mCSB_buttonLeft"),
	            t = y.children(".mCSB_buttonRight"),
	            f = k.width();if (n.data("autoExpandHorizontalScroll")) {
	          q.css({ position: "absolute", width: "auto" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: q.outerWidth(), position: "relative" }).unwrap();
	        }var z = q.outerWidth();
	      } else {
	        var w = y.children(".mCSB_buttonUp"),
	            g = y.children(".mCSB_buttonDown"),
	            r = k.height(),
	            i = q.outerHeight();
	      }if (i > r && !n.data("horizontalScroll")) {
	        y.css("display", "block");var s = o.height();if (n.data("autoDraggerLength")) {
	          var u = Math.round(r / i * s),
	              l = m.data("minDraggerHeight");if (u <= l) {
	            m.css({ height: l });
	          } else {
	            if (u >= s - 10) {
	              var p = s - 10;m.css({ height: p });
	            } else {
	              m.css({ height: u });
	            }
	          }m.children(".mCSB_dragger_bar").css({ "line-height": m.height() + "px" });
	        }var B = m.height(),
	            x = (i - r) / (s - B);n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);var D = Math.abs(q.position().top);n.mCustomScrollbar("scrollTo", D, { scrollInertia: 0, trigger: "internal" });
	      } else {
	        if (z > f && n.data("horizontalScroll")) {
	          y.css("display", "block");var h = o.width();if (n.data("autoDraggerLength")) {
	            var j = Math.round(f / z * h),
	                C = m.data("minDraggerWidth");if (j <= C) {
	              m.css({ width: C });
	            } else {
	              if (j >= h - 10) {
	                var e = h - 10;m.css({ width: e });
	              } else {
	                m.css({ width: j });
	              }
	            }
	          }var v = m.width(),
	              x = (z - f) / (h - v);n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);var D = Math.abs(q.position().left);n.mCustomScrollbar("scrollTo", D, { scrollInertia: 0, trigger: "internal" });
	        } else {
	          k.unbind("mousewheel focusin");if (n.data("horizontalScroll")) {
	            m.add(q).css("left", 0);
	          } else {
	            m.add(q).css("top", 0);
	          }y.css("display", "none");q.addClass("mCS_no_scrollbar");n.data({ bindEvent_mousewheel: false, bindEvent_focusin: false });
	        }
	      }
	    }, scrolling: function scrolling(h, p, m, j, w, e, A, v) {
	      var k = c(this);if (!k.data("bindEvent_scrollbar_drag")) {
	        var n, o;if (c.support.msPointer) {
	          j.bind("MSPointerDown", function (H) {
	            H.preventDefault();k.data({ on_drag: true });j.addClass("mCSB_dragger_onDrag");var G = c(this),
	                J = G.offset(),
	                F = H.originalEvent.pageX - J.left,
	                I = H.originalEvent.pageY - J.top;if (F < G.width() && F > 0 && I < G.height() && I > 0) {
	              n = I;o = F;
	            }
	          });c(document).bind("MSPointerMove." + k.data("mCustomScrollbarIndex"), function (H) {
	            H.preventDefault();if (k.data("on_drag")) {
	              var G = j,
	                  J = G.offset(),
	                  F = H.originalEvent.pageX - J.left,
	                  I = H.originalEvent.pageY - J.top;D(n, o, I, F);
	            }
	          }).bind("MSPointerUp." + k.data("mCustomScrollbarIndex"), function (x) {
	            k.data({ on_drag: false });j.removeClass("mCSB_dragger_onDrag");
	          });
	        } else {
	          j.bind("mousedown touchstart", function (H) {
	            H.preventDefault();H.stopImmediatePropagation();var G = c(this),
	                K = G.offset(),
	                F,
	                J;if (H.type === "touchstart") {
	              var I = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0];F = I.pageX - K.left;J = I.pageY - K.top;
	            } else {
	              k.data({ on_drag: true });j.addClass("mCSB_dragger_onDrag");F = H.pageX - K.left;J = H.pageY - K.top;
	            }if (F < G.width() && F > 0 && J < G.height() && J > 0) {
	              n = J;o = F;
	            }
	          }).bind("touchmove", function (H) {
	            H.preventDefault();H.stopImmediatePropagation();var K = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0],
	                G = c(this),
	                J = G.offset(),
	                F = K.pageX - J.left,
	                I = K.pageY - J.top;D(n, o, I, F);
	          });c(document).bind("mousemove." + k.data("mCustomScrollbarIndex"), function (H) {
	            if (k.data("on_drag")) {
	              var G = j,
	                  J = G.offset(),
	                  F = H.pageX - J.left,
	                  I = H.pageY - J.top;D(n, o, I, F);
	            }
	          }).bind("mouseup." + k.data("mCustomScrollbarIndex"), function (x) {
	            k.data({ on_drag: false });j.removeClass("mCSB_dragger_onDrag");
	          });
	        }k.data({ bindEvent_scrollbar_drag: true });
	      }function D(G, H, I, F) {
	        if (k.data("horizontalScroll")) {
	          k.mCustomScrollbar("scrollTo", j.position().left - H + F, { moveDragger: true, trigger: "internal" });
	        } else {
	          k.mCustomScrollbar("scrollTo", j.position().top - G + I, { moveDragger: true, trigger: "internal" });
	        }
	      }if (c.support.touch && k.data("contentTouchScroll")) {
	        if (!k.data("bindEvent_content_touch")) {
	          var l, B, r, s, u, C, E;p.bind("touchstart", function (x) {
	            x.stopImmediatePropagation();l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];B = c(this);r = B.offset();u = l.pageX - r.left;s = l.pageY - r.top;C = s;E = u;
	          });p.bind("touchmove", function (x) {
	            x.preventDefault();x.stopImmediatePropagation();l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];B = c(this).parent();r = B.offset();u = l.pageX - r.left;s = l.pageY - r.top;if (k.data("horizontalScroll")) {
	              k.mCustomScrollbar("scrollTo", E - u, { trigger: "internal" });
	            } else {
	              k.mCustomScrollbar("scrollTo", C - s, { trigger: "internal" });
	            }
	          });
	        }
	      }if (!k.data("bindEvent_scrollbar_click")) {
	        m.bind("click", function (F) {
	          var x = (F.pageY - m.offset().top) * k.data("scrollAmount"),
	              y = c(F.target);if (k.data("horizontalScroll")) {
	            x = (F.pageX - m.offset().left) * k.data("scrollAmount");
	          }if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
	            k.mCustomScrollbar("scrollTo", x, { trigger: "internal", scrollEasing: "draggerRailEase" });
	          }
	        });k.data({ bindEvent_scrollbar_click: true });
	      }if (k.data("mouseWheel")) {
	        if (!k.data("bindEvent_mousewheel")) {
	          h.bind("mousewheel", function (H, J) {
	            var G,
	                F = k.data("mouseWheelPixels"),
	                x = Math.abs(p.position().top),
	                I = j.position().top,
	                y = m.height() - j.height();if (k.data("normalizeMouseWheelDelta")) {
	              if (J < 0) {
	                J = -1;
	              } else {
	                J = 1;
	              }
	            }if (F === "auto") {
	              F = 100 + Math.round(k.data("scrollAmount") / 2);
	            }if (k.data("horizontalScroll")) {
	              I = j.position().left;y = m.width() - j.width();x = Math.abs(p.position().left);
	            }if (J > 0 && I !== 0 || J < 0 && I !== y) {
	              H.preventDefault();H.stopImmediatePropagation();
	            }G = x - J * F;k.mCustomScrollbar("scrollTo", G, { trigger: "internal" });
	          });k.data({ bindEvent_mousewheel: true });
	        }
	      }if (k.data("scrollButtons_enable")) {
	        if (k.data("scrollButtons_scrollType") === "pixels") {
	          (function () {
	            var q = function q(x) {
	              if (!j.data("preventAction")) {
	                j.data("preventAction", true);k.mCustomScrollbar("scrollTo", x, { trigger: "internal" });
	              }
	            };

	            if (k.data("horizontalScroll")) {
	              v.add(A).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);k.data({ bindEvent_buttonsContinuous_x: false });if (!k.data("bindEvent_buttonsPixels_x")) {
	                v.bind("click", function (x) {
	                  x.preventDefault();q(Math.abs(p.position().left) + k.data("scrollButtons_scrollAmount"));
	                });A.bind("click", function (x) {
	                  x.preventDefault();q(Math.abs(p.position().left) - k.data("scrollButtons_scrollAmount"));
	                });k.data({ bindEvent_buttonsPixels_x: true });
	              }
	            } else {
	              e.add(w).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);k.data({ bindEvent_buttonsContinuous_y: false });if (!k.data("bindEvent_buttonsPixels_y")) {
	                e.bind("click", function (x) {
	                  x.preventDefault();q(Math.abs(p.position().top) + k.data("scrollButtons_scrollAmount"));
	                });w.bind("click", function (x) {
	                  x.preventDefault();q(Math.abs(p.position().top) - k.data("scrollButtons_scrollAmount"));
	                });k.data({ bindEvent_buttonsPixels_y: true });
	              }
	            }
	          })();
	        } else {
	          var i;
	          var g;
	          var t;
	          var f;

	          (function () {
	            var z = function z() {
	              var x = k.data("scrollButtons_scrollSpeed");if (k.data("scrollButtons_scrollSpeed") === "auto") {
	                x = Math.round((k.data("scrollInertia") + 100) / 40);
	              }return x;
	            };

	            if (k.data("horizontalScroll")) {
	              v.add(A).unbind("click");k.data({ bindEvent_buttonsPixels_x: false });if (!k.data("bindEvent_buttonsContinuous_x")) {
	                v.bind("mousedown touchstart MSPointerDown", function (y) {
	                  y.preventDefault();var x = z();k.data({ mCSB_buttonScrollRight: setInterval(function () {
	                      k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) + x, { trigger: "internal", scrollEasing: "easeOutCirc" });
	                    }, 17) });
	                });
	                i = function i(x) {
	                  x.preventDefault();clearInterval(k.data("mCSB_buttonScrollRight"));
	                };

	                v.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", i);A.bind("mousedown touchstart MSPointerDown", function (y) {
	                  y.preventDefault();var x = z();k.data({ mCSB_buttonScrollLeft: setInterval(function () {
	                      k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) - x, { trigger: "internal", scrollEasing: "easeOutCirc" });
	                    }, 17) });
	                });
	                g = function g(x) {
	                  x.preventDefault();clearInterval(k.data("mCSB_buttonScrollLeft"));
	                };

	                A.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", g);k.data({ bindEvent_buttonsContinuous_x: true });
	              }
	            } else {
	              e.add(w).unbind("click");k.data({ bindEvent_buttonsPixels_y: false });if (!k.data("bindEvent_buttonsContinuous_y")) {
	                e.bind("mousedown touchstart MSPointerDown", function (y) {
	                  y.preventDefault();var x = z();k.data({ mCSB_buttonScrollDown: setInterval(function () {
	                      k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) + x, { trigger: "internal", scrollEasing: "easeOutCirc" });
	                    }, 17) });
	                });
	                t = function t(x) {
	                  x.preventDefault();clearInterval(k.data("mCSB_buttonScrollDown"));
	                };

	                e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", t);w.bind("mousedown touchstart MSPointerDown", function (y) {
	                  y.preventDefault();var x = z();k.data({ mCSB_buttonScrollUp: setInterval(function () {
	                      k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) - x, { trigger: "internal", scrollEasing: "easeOutCirc" });
	                    }, 17) });
	                });
	                f = function f(x) {
	                  x.preventDefault();clearInterval(k.data("mCSB_buttonScrollUp"));
	                };

	                w.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", f);k.data({ bindEvent_buttonsContinuous_y: true });
	              }
	            }
	          })();
	        }
	      }if (k.data("autoScrollOnFocus")) {
	        if (!k.data("bindEvent_focusin")) {
	          h.bind("focusin", function () {
	            h.scrollTop(0).scrollLeft(0);var x = c(document.activeElement);if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
	              var G = p.position().top,
	                  y = x.position().top,
	                  F = h.height() - x.outerHeight();if (k.data("horizontalScroll")) {
	                G = p.position().left;y = x.position().left;F = h.width() - x.outerWidth();
	              }if (G + y < 0 || G + y > F) {
	                k.mCustomScrollbar("scrollTo", y, { trigger: "internal" });
	              }
	            }
	          });k.data({ bindEvent_focusin: true });
	        }
	      }if (k.data("autoHideScrollbar")) {
	        if (!k.data("bindEvent_autoHideScrollbar")) {
	          h.bind("mouseenter", function (x) {
	            h.addClass("mCS-mouse-over");d.showScrollbar.call(h.children(".mCSB_scrollTools"));
	          }).bind("mouseleave touchend", function (x) {
	            h.removeClass("mCS-mouse-over");if (x.type === "mouseleave") {
	              d.hideScrollbar.call(h.children(".mCSB_scrollTools"));
	            }
	          });k.data({ bindEvent_autoHideScrollbar: true });
	        }
	      }
	    }, scrollTo: function scrollTo(e, f) {
	      var i = c(this),
	          o = { moveDragger: false, trigger: "external", callbacks: true, scrollInertia: i.data("scrollInertia"), scrollEasing: i.data("scrollEasing") },
	          f = c.extend(o, f),
	          p,
	          g = i.children(".mCustomScrollBox"),
	          k = g.children(".mCSB_container"),
	          r = g.children(".mCSB_scrollTools"),
	          j = r.children(".mCSB_draggerContainer"),
	          h = j.children(".mCSB_dragger"),
	          t = draggerSpeed = f.scrollInertia,
	          q,
	          s,
	          m,
	          l;if (!k.hasClass("mCS_no_scrollbar")) {
	        i.data({ mCS_trigger: f.trigger });if (i.data("mCS_Init")) {
	          f.callbacks = false;
	        }if (e || e === 0) {
	          if (typeof e === "number") {
	            if (f.moveDragger) {
	              p = e;if (i.data("horizontalScroll")) {
	                e = h.position().left * i.data("scrollAmount");
	              } else {
	                e = h.position().top * i.data("scrollAmount");
	              }draggerSpeed = 0;
	            } else {
	              p = e / i.data("scrollAmount");
	            }
	          } else {
	            if (typeof e === "string") {
	              var v;if (e === "top") {
	                v = 0;
	              } else {
	                if (e === "bottom" && !i.data("horizontalScroll")) {
	                  v = k.outerHeight() - g.height();
	                } else {
	                  if (e === "left") {
	                    v = 0;
	                  } else {
	                    if (e === "right" && i.data("horizontalScroll")) {
	                      v = k.outerWidth() - g.width();
	                    } else {
	                      if (e === "first") {
	                        v = i.find(".mCSB_container").find(":first");
	                      } else {
	                        if (e === "last") {
	                          v = i.find(".mCSB_container").find(":last");
	                        } else {
	                          v = i.find(e);
	                        }
	                      }
	                    }
	                  }
	                }
	              }if (v.length === 1) {
	                if (i.data("horizontalScroll")) {
	                  e = v.position().left;
	                } else {
	                  e = v.position().top;
	                }p = e / i.data("scrollAmount");
	              } else {
	                p = e = v;
	              }
	            }
	          }if (i.data("horizontalScroll")) {
	            if (i.data("onTotalScrollBack_Offset")) {
	              s = -i.data("onTotalScrollBack_Offset");
	            }if (i.data("onTotalScroll_Offset")) {
	              l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset");
	            }if (p < 0) {
	              p = e = 0;clearInterval(i.data("mCSB_buttonScrollLeft"));if (!s) {
	                q = true;
	              }
	            } else {
	              if (p >= j.width() - h.width()) {
	                p = j.width() - h.width();e = g.width() - k.outerWidth();clearInterval(i.data("mCSB_buttonScrollRight"));if (!l) {
	                  m = true;
	                }
	              } else {
	                e = -e;
	              }
	            }var n = i.data("snapAmount");if (n) {
	              e = Math.round(e / n) * n - i.data("snapOffset");
	            }d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, { onStart: function onStart() {
	                if (f.callbacks && !i.data("mCS_tweenRunning")) {
	                  u("onScrollStart");
	                }if (i.data("autoHideScrollbar")) {
	                  d.showScrollbar.call(r);
	                }
	              }, onUpdate: function onUpdate() {
	                if (f.callbacks) {
	                  u("whileScrolling");
	                }
	              }, onComplete: function onComplete() {
	                if (f.callbacks) {
	                  u("onScroll");if (q || s && k.position().left >= s) {
	                    u("onTotalScrollBack");
	                  }if (m || l && k.position().left <= l) {
	                    u("onTotalScroll");
	                  }
	                }h.data("preventAction", false);i.data("mCS_tweenRunning", false);if (i.data("autoHideScrollbar")) {
	                  if (!g.hasClass("mCS-mouse-over")) {
	                    d.hideScrollbar.call(r);
	                  }
	                }
	              } });
	          } else {
	            if (i.data("onTotalScrollBack_Offset")) {
	              s = -i.data("onTotalScrollBack_Offset");
	            }if (i.data("onTotalScroll_Offset")) {
	              l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset");
	            }if (p < 0) {
	              p = e = 0;clearInterval(i.data("mCSB_buttonScrollUp"));if (!s) {
	                q = true;
	              }
	            } else {
	              if (p >= j.height() - h.height()) {
	                p = j.height() - h.height();e = g.height() - k.outerHeight();clearInterval(i.data("mCSB_buttonScrollDown"));if (!l) {
	                  m = true;
	                }
	              } else {
	                e = -e;
	              }
	            }var n = i.data("snapAmount");if (n) {
	              e = Math.round(e / n) * n - i.data("snapOffset");
	            }d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, { onStart: function onStart() {
	                if (f.callbacks && !i.data("mCS_tweenRunning")) {
	                  u("onScrollStart");
	                }if (i.data("autoHideScrollbar")) {
	                  d.showScrollbar.call(r);
	                }
	              }, onUpdate: function onUpdate() {
	                if (f.callbacks) {
	                  u("whileScrolling");
	                }
	              }, onComplete: function onComplete() {
	                if (f.callbacks) {
	                  u("onScroll");if (q || s && k.position().top >= s) {
	                    u("onTotalScrollBack");
	                  }if (m || l && k.position().top <= l) {
	                    u("onTotalScroll");
	                  }
	                }h.data("preventAction", false);i.data("mCS_tweenRunning", false);if (i.data("autoHideScrollbar")) {
	                  if (!g.hasClass("mCS-mouse-over")) {
	                    d.hideScrollbar.call(r);
	                  }
	                }
	              } });
	          }if (i.data("mCS_Init")) {
	            i.data({ mCS_Init: false });
	          }
	        }
	      }function u(w) {
	        this.mcs = { top: k.position().top, left: k.position().left, draggerTop: h.position().top, draggerLeft: h.position().left, topPct: Math.round(100 * Math.abs(k.position().top) / Math.abs(k.outerHeight() - g.height())), leftPct: Math.round(100 * Math.abs(k.position().left) / Math.abs(k.outerWidth() - g.width())) };switch (w) {case "onScrollStart":
	            i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);break;case "whileScrolling":
	            i.data("whileScrolling_Callback").call(i, this.mcs);break;case "onScroll":
	            i.data("onScroll_Callback").call(i, this.mcs);break;case "onTotalScrollBack":
	            i.data("onTotalScrollBack_Callback").call(i, this.mcs);break;case "onTotalScroll":
	            i.data("onTotalScroll_Callback").call(i, this.mcs);break;}
	      }
	    }, stop: function stop() {
	      var g = c(this),
	          e = g.children().children(".mCSB_container"),
	          f = g.children().children().children().children(".mCSB_dragger");d.mTweenAxisStop.call(this, e[0]);d.mTweenAxisStop.call(this, f[0]);
	    }, disable: function disable(e) {
	      var j = c(this),
	          f = j.children(".mCustomScrollBox"),
	          h = f.children(".mCSB_container"),
	          g = f.children(".mCSB_scrollTools"),
	          i = g.children().children(".mCSB_dragger");f.unbind("mousewheel focusin mouseenter mouseleave touchend");h.unbind("touchstart touchmove");if (e) {
	        if (j.data("horizontalScroll")) {
	          i.add(h).css("left", 0);
	        } else {
	          i.add(h).css("top", 0);
	        }
	      }g.css("display", "none");h.addClass("mCS_no_scrollbar");j.data({ bindEvent_mousewheel: false, bindEvent_focusin: false, bindEvent_content_touch: false, bindEvent_autoHideScrollbar: false }).addClass("mCS_disabled");
	    }, destroy: function destroy() {
	      var e = c(this);e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));c(window).unbind("resize." + e.data("mCustomScrollbarIndex"));
	    } },
	      d = { showScrollbar: function showScrollbar() {
	      this.stop().animate({ opacity: 1 }, "fast");
	    }, hideScrollbar: function hideScrollbar() {
	      this.stop().animate({ opacity: 0 }, "fast");
	    }, mTweenAxis: function mTweenAxis(g, i, h, f, o, y) {
	      var y = y || {},
	          v = y.onStart || function () {},
	          p = y.onUpdate || function () {},
	          w = y.onComplete || function () {};var n = t(),
	          l,
	          j = 0,
	          r = g.offsetTop,
	          s = g.style;if (i === "left") {
	        r = g.offsetLeft;
	      }var m = h - r;q();e();function t() {
	        if (window.performance && window.performance.now) {
	          return window.performance.now();
	        } else {
	          if (window.performance && window.performance.webkitNow) {
	            return window.performance.webkitNow();
	          } else {
	            if (Date.now) {
	              return Date.now();
	            } else {
	              return new Date().getTime();
	            }
	          }
	        }
	      }function x() {
	        if (!j) {
	          v.call();
	        }j = t() - n;u();if (j >= g._time) {
	          g._time = j > g._time ? j + l - (j - g._time) : j + l - 1;if (g._time < j + 1) {
	            g._time = j + 1;
	          }
	        }if (g._time < f) {
	          g._id = _request(x);
	        } else {
	          w.call();
	        }
	      }function u() {
	        if (f > 0) {
	          g.currVal = k(g._time, r, m, f, o);s[i] = Math.round(g.currVal) + "px";
	        } else {
	          s[i] = h + "px";
	        }p.call();
	      }function e() {
	        l = 1000 / 60;g._time = j + l;_request = !window.requestAnimationFrame ? function (z) {
	          u();return setTimeout(z, 0.01);
	        } : window.requestAnimationFrame;g._id = _request(x);
	      }function q() {
	        if (g._id == null) {
	          return;
	        }if (!window.requestAnimationFrame) {
	          clearTimeout(g._id);
	        } else {
	          window.cancelAnimationFrame(g._id);
	        }g._id = null;
	      }function k(B, A, F, E, C) {
	        switch (C) {case "linear":
	            return F * B / E + A;break;case "easeOutQuad":
	            B /= E;return -F * B * (B - 2) + A;break;case "easeInOutQuad":
	            B /= E / 2;if (B < 1) {
	              return F / 2 * B * B + A;
	            }B--;return -F / 2 * (B * (B - 2) - 1) + A;break;case "easeOutCubic":
	            B /= E;B--;return F * (B * B * B + 1) + A;break;case "easeOutQuart":
	            B /= E;B--;return -F * (B * B * B * B - 1) + A;break;case "easeOutQuint":
	            B /= E;B--;return F * (B * B * B * B * B + 1) + A;break;case "easeOutCirc":
	            B /= E;B--;return F * Math.sqrt(1 - B * B) + A;break;case "easeOutSine":
	            return F * Math.sin(B / E * (Math.PI / 2)) + A;break;case "easeOutExpo":
	            return F * (-Math.pow(2, -10 * B / E) + 1) + A;break;case "mcsEaseOut":
	            var D = (B /= E) * B,
	                z = D * B;return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);break;case "draggerRailEase":
	            B /= E / 2;if (B < 1) {
	              return F / 2 * B * B * B + A;
	            }B -= 2;return F / 2 * (B * B * B + 2) + A;break;}
	      }
	    }, mTweenAxisStop: function mTweenAxisStop(e) {
	      if (e._id == null) {
	        return;
	      }if (!window.requestAnimationFrame) {
	        clearTimeout(e._id);
	      } else {
	        window.cancelAnimationFrame(e._id);
	      }e._id = null;
	    }, rafPolyfill: function rafPolyfill() {
	      var f = ["ms", "moz", "webkit", "o"],
	          e = f.length;while (--e > -1 && !window.requestAnimationFrame) {
	        window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"];
	      }
	    } };d.rafPolyfill.call();c.support.touch = !!("ontouchstart" in window);c.support.msPointer = window.navigator.msPointerEnabled;var a = "https:" == document.location.protocol ? "https:" : "http:";c.event.special.mousewheel || document.write('<script src="' + a + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');c.fn.mCustomScrollbar = function (e) {
	    if (b[e]) {
	      return b[e].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else {
	      if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" || !e) {
	        return b.init.apply(this, arguments);
	      } else {
	        c.error("Method " + e + " does not exist");
	      }
	    }
	  };
	})(jQuery);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\workspace\\proj\\node\\fluxweb\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "jquery.mCustomScrollbar.concat.min.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(194)))

/***/ }

/******/ });