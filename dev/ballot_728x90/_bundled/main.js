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
	_commonJsCommonJs.tl.to("#bg", 1.5, { x: 172, y: -41, scale: .42, opacity: 1 }, "+=.5");

	_commonJsCommonJs.tl.from(["#t0"], .5, { opacity: 0 }, '-=1');
	_commonJsCommonJs.tl.from(["#t1", "#t2", "#t3", "#t4"], .9, { opacity: 0, ease: Sine.easeOut }, "-=.4");
	_commonJsCommonJs.tl.from(["#t5", "#t6"], .5, { opacity: 0, ease: Sine.easeOut }, '-=.2');

	_commonJsCommonJs.tl.add("out", "+=2");
	_commonJsCommonJs.tl.to([".clipmask", "#t5", "#t6"], .3, { opacity: 0, ease: Sine.easeOut }, 'out');
	_commonJsCommonJs.tl.set("#t6", { x: 107, y: 0 });
	_commonJsCommonJs.tl.set("#t6 span", { left: "-100%" });

	_commonJsCommonJs.tl.add("in", "+=.3");
	_commonJsCommonJs.tl.to("#t6", .5, { opacity: 1 }, "in");
	_commonJsCommonJs.tl.to("#t6 span", .5, { left: "0%" }, "in");
	_commonJsCommonJs.tl.to(["#bg", "#grey"], 1, { opacity: 0, x: "+=20" }, "in");
	_commonJsCommonJs.tl.to(["#t1"], .2, { opacity: 0 }, 'in');

	_commonJsCommonJs.tl.to("#super", 1, { x: 309, y: 37 }, "+=0");
	_commonJsCommonJs.tl.from("#logo", .5, { opacity: 0 });

	_commonJsCommonJs.tl.to(["#logo", "#super"], .3, { opacity: 0 }, "+=1");

	_commonJsCommonJs.tl.add("end");

	_commonJsCommonJs.tl.set("#super", { x: 489, y: 31, scale: .8 }, "end");
	_commonJsCommonJs.tl.set("#logo", { x: 505, y: 25, scale: .4 }, "end");
	_commonJsCommonJs.tl.to(["#t0", "#t6"], .5, { color: 'black' }, "end");

	_commonJsCommonJs.tl.from(["#cta", "#end"], .7, { opacity: 0 }, "end");
	_commonJsCommonJs.tl.to(["#logo", "#super"], .7, { opacity: 1 }, "end");
}

setTimeout(start, 200);

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
