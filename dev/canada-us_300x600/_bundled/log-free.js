(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

TweenLite.defaultEase = Power3.easeOut;

var tl = new TimelineMax();
var hide = { clip: 'rect(0px,' + 0 + 'px,' + 50 + 'px,0px)' };
var maskTime = .6;
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
		var w = item.dom.offsetWidth;
		var h = item.dom.offsetHeight;
		void 0;
		TweenMax.set(item.dom, { clip: 'rect(0px,' + w + 'px,' + h + 'px,0px)' });
	}
}

function tweenMask(item) {
	var time = maskTime * item.percent;
	tl.to(item.dom, maskTime, _extends({}, hide), item.id);
	tl.to("#t5", maskTime, { x: '-=' + item.width }, item.id);
	tl.to("#t6", maskTime, { x: '-=' + item.width }, item.id);
}

function start() {
	init();

	tl.set(".frame1", { opacity: 1 });

	tl.to("#bg", 2, { x: -220, y: -128 }, "+=.5");

	tl.from(["#t0"], .5, { opacity: 0 }, '-=1');
	tl.from(["#t1", "#t2", "#t3", "#t4", "#t5"], .9, { opacity: 0, ease: Sine.easeOut }, "-=.4");
	tl.from(["#t6"], .5, { opacity: 0, ease: Sine.easeOut });

	tl.add("t4", "+=2");
	tweenMask(gar["t4"]);

	tl.set("#t5", { x: 222, y: 34 });
	tl.set("#t6", { x: 222 + 6, y: 34 });

	tl.add("t3");
	tweenMask(gar["t3"]);

	tl.set("#t5", { x: 208, y: 0 });
	tl.set("#t6", { x: 208 + 6, y: 0 });

	tl.add("t2");
	tl.to("#t2", maskTime * gar["t2"].percent, _extends({}, hide), "t2");
	tl.to("#t5", maskTime * gar["t2"].percent, { x: '-=' + gar.t2.width, opacity: 0 }, "t2");
	tl.to("#t6", maskTime * gar["t2"].percent, { x: '-=' + (gar.t2.width + 15) }, "t2");
	tl.to("#t1", maskTime * gar["t2"].percent, { opacity: 0 }, "t2");
	tl.to("#super", 1, { x: 60, y: 283 }, "t4");

	tl.add("logo", "+=.1");
	tl.to("#super", .5, { x: 95, y: 283 }, "logo");
	tl.from("#logo", .5, { opacity: 0, x: "-=10" }, "logo+=.2");
	tl.to("#bg", .5, { y: -358, opacity: 0 }, "logo");

	tl.add("end", "+=1");
	tl.to("#super", .5, { x: 75, y: 436, scale: .8 }, "end");
	tl.to(["#t0", "#t6"], .5, { color: 'black' }, "end");

	tl.to("#logo", .5, { x: 50, y: 487, scale: .4 }, "end");

	tl.from("#cta", .5, { y: "-=50", opacity: 0 }, "end+=.5");
	tl.from("#end", .5, { y: "-=50", opacity: 0 }, "end+=.7");

	// tl.gotoAndPlay("t4")
}

start();

},{}]},{},[1])


//# sourceMappingURL=main.js.map
