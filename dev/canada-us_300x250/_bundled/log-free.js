(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

TweenLite.defaultEase = Power3.easeOut;

function start() {
	var list = ['t4', 't3', 't2'];
	var gar = {};
	list.map(function (item) {
		var dom = document.getElementById(item);
		gar[item] = {
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
		gar[key].percent = gar[key].length / max;
	}

	var maskTime = 1;

	var tl = new TimelineMax();
	var tl2 = new TimelineMax();

	var hide = { webkitClipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' };

	tl.set(".frame1", { opacity: 1 });

	tl.to("#bg", 2, { x: "+=50", y: "-=50", opacity: 0 }, "+=1");

	tl.from("#super", .3, { opacity: 0 }, "-=1.5");

	tl.add("t4", "+=1.5");
	tl.to("#t4", maskTime * gar["t4"].percent, _extends({}, hide), "t4");
	tl.to("#t5", maskTime * gar["t4"].percent, { x: '-=' + gar.t4.width }, "t4");
	tl.to("#t6", maskTime * gar["t4"].percent, { x: '-=' + gar.t4.width }, "t4");
	tl.set("#t5", { x: 120, y: -35 });
	tl.set("#t6", { x: 120, y: -35 });

	tl.add("t3");
	tl.to("#t3", maskTime * gar["t3"].percent, _extends({}, hide), "t3");
	tl.to("#t5", maskTime * gar["t3"].percent, { x: '-=' + gar.t3.width }, "t3");
	tl.to("#t6", maskTime * gar["t3"].percent, { x: '-=' + gar.t3.width }, "t3");

	tl.set("#t5", { x: 103, y: -68 });
	tl.set("#t6", { x: 103, y: -68 });

	tl.add("t2");
	tl.to("#t2", maskTime * gar["t2"].percent, _extends({}, hide), "t2");
	tl.to("#t5", maskTime * gar["t2"].percent, { x: '-=' + gar.t2.width, opacity: 0 }, "t2");
	tl.to("#t6", maskTime * gar["t2"].percent, { x: '-=' + (gar.t2.width + 15) }, "t2");
	tl.to("#t1", maskTime * gar["t2"].percent, { opacity: 0 }, "t2");
	// tl.to("#super", 2, {x:58, y:107}, "t4")

	tl.add("logo", "+=.1");
	tl.to("#super", .5, { x: 95 }, "logo");
	tl.from("#logo", .5, { opacity: 0, x: "-=10" }, "logo+=.2");

	tl.add("end");
	tl.to("#super", .5, { x: 75, y: 176, scale: .8 }, "end");
	tl.to("#logo", .5, { x: 50, y: 178, scale: .4 }, "end");

	tl.from("#cta", .5, { y: "-=50", opacity: 0 }, "end+=.5");
	tl.from("#end", .5, { y: "-=50", opacity: 0 }, "end+=.7");
}

// TweenMax.to('#t4', 1, {webkitClipPath:`polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`})

start();

},{}]},{},[1])


//# sourceMappingURL=main.js.map
