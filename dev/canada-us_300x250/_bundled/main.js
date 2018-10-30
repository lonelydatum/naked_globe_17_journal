(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeOut;

var tl = new TimelineMax();
var hide = { clip: 'rect(0px,' + 0 + 'px,' + 50 + 'px,0px)' };
var maskTime = .4;
var gar = {};

function init() {
	var list = ['t4', 't3', 't2'];

	list.map(function (item) {
		var dom = document.getElementById(item);
		gar[item] = {
			id: item,
			dom: dom,
			length: dom.textContent.length,
			width: dom.offsetWidth
		};
	});

	var max = 0;
	for (var key in gar) {
		max = Math.max(gar[key].length, max);
	}

	for (var key in gar) {
		var item = gar[key];
		item.percent = item.length / max;
		var w = item.dom.offsetWidth + 20;
		var h = item.dom.offsetHeight;
		console.log(item.dom);
		TweenMax.set(item.dom, { clip: 'rect(0px,' + w + 'px,' + h + 'px,0px)' });
	}
}

exports.size = size;
exports.tl = tl;
exports.init = init;
exports.hide = hide;
exports.gar = gar;
exports.maskTime = maskTime;

},{}],2:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonJsCommonJs = require('../../_common/js/common.js');

function tweenMask(item) {
	var time = _commonJsCommonJs.maskTime * item.percent;
	_commonJsCommonJs.tl.to(item.dom, _commonJsCommonJs.maskTime, _extends({}, _commonJsCommonJs.hide), item.id);
	_commonJsCommonJs.tl.to("#t5", _commonJsCommonJs.maskTime, { x: "-=" + item.width }, item.id);
}

function start() {
	(0, _commonJsCommonJs.init)();

	_commonJsCommonJs.tl.set(".frame1", { opacity: 1 });
	_commonJsCommonJs.tl.to("#bg", 2, { x: "+=50", y: "-=50", opacity: 1 }, "+=.5");

	_commonJsCommonJs.tl.from(["#t0"], .5, { opacity: 0 }, '-=1.4');
	_commonJsCommonJs.tl.from(["#t1", "#t2", "#t3", "#t4"], .9, { opacity: 0, ease: Sine.easeOut }, "-=.4");
	_commonJsCommonJs.tl.from(["#t5", "#t6"], .5, { opacity: 0, ease: Sine.easeOut }, '-=.2');

	// tl.to("#t6 span", .3, {opacity:0, left:"-=100%"}, 't4-=.4')

	_commonJsCommonJs.tl.add("out", "+=2");
	_commonJsCommonJs.tl.to([".clipmask", "#t5"], .35, { opacity: 0, ease: Sine.easeOut }, 'out');

	_commonJsCommonJs.tl.set("#t6", { x: 107, y: 0 }, "out");
	_commonJsCommonJs.tl.set("#t6 span", { left: "-100%" }, "out");

	_commonJsCommonJs.tl.add("in", "+=1");
	_commonJsCommonJs.tl.to("#t6 span", .5, { left: "0%" }, "in");
	_commonJsCommonJs.tl.to(["#t1"], .2, { opacity: 0 }, '-=.2');

	// tl.from("#t6 span", .4, {left:"-100%"}, "matters+=1")
	// tl.to("#t6", .4, {opacity:1}, "matters")
	// tl.to(["#t1"], .2, {opacity:0})
	// tl.set("#t5", {x:"-=5"})
	// tweenMask(gar["t4"])	
	// tl.set("#t5", {x:222-4, y:34})

	// return

	// tl.add("t3")
	// tweenMask(gar["t3"])	
	// tl.set("#t5", {x:208, y:0})
	// tl.set("#t6", {x:107, y:0})

	// tl.add("t2")	
	// tl.to("#t2", maskTime*gar["t2"].percent, {...hide}, "t2")
	// tl.to("#t5", maskTime*gar["t2"].percent, {x:`-=${gar.t2.width}`, opacity:0}, "t2")
	// tl.to("#t1", maskTime*gar["t2"].percent, {opacity:0}, "t2")
	// tl.to("#super", 1, {x:58, y:107}, "t4")
	// tl.to("#t6 span", .4, {opacity:1, left:0}, 't2+=.3')

	_commonJsCommonJs.tl.add("logo");
	_commonJsCommonJs.tl.to("#super", .5, { x: 95 }, "logo");
	_commonJsCommonJs.tl.from("#logo", .5, { opacity: 0, x: "-=10" }, "logo");
	_commonJsCommonJs.tl.to(["#bg", "#grey"], 1.5, { opacity: 0 }, "logo-=2");

	_commonJsCommonJs.tl.add("end", "+=1");
	_commonJsCommonJs.tl.to("#super", .5, { x: 75, y: 162, scale: .8 }, "end");
	_commonJsCommonJs.tl.to(["#t0", "#t6"], .5, { color: 'black' }, "end");
	_commonJsCommonJs.tl.to("#logo", .5, { x: 50, y: 178, scale: .4 }, "end");
	_commonJsCommonJs.tl.from("#cta", .5, { y: "-=50", opacity: 0 }, "end+=.5");
	_commonJsCommonJs.tl.from("#end", .5, { y: "-=50", opacity: 0 }, "end+=.7");
}

setTimeout(start, 200);

// init()

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
