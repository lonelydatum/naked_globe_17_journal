import {size, tl, init, hide, gar, maskTime} from '../../_common/js/common.js'

function tweenMask(item){
	const time = maskTime * item.percent
	tl.to(item.dom, maskTime, {...hide}, item.id)
	tl.to("#t5", maskTime, {x:`-=${item.width}`}, item.id)
}

function start() {
	init()
	
	tl.set(".frame1", {opacity:1})
	tl.set("#super", {y:283}, "t4")
	tl.to("#bg", 2, {x:0, y:-219}, "+=.5")

	
	
	tl.from(["#t0"], .5, {opacity:0}, '-=1')
	tl.from(["#t1", "#t2", "#t3", "#t4"], .9, {opacity:0, ease:Sine.easeOut}, "-=.4")
	tl.from(["#t5", "#t6"], .5, {opacity:0, ease:Sine.easeOut}, '-=.2')
	
	
	tl.add("out", "+=2")
	tl.to([".clipmask",  "#t5", "#t6"], .3, {opacity:0, ease:Sine.easeOut}, 'out')
	tl.set("#t6", {x:107, y:0})
	tl.set("#t6 span", {left:"-100%"})
	


	tl.add("in", "+=.3")
	tl.to("#t6", .5, {opacity:1}, "in")
	tl.to("#t6 span", .5, {left:"0%"}, "in")
	tl.to(["#t1"], .2, {opacity:0}, '-=.2')


	

	tl.add("logo")
	tl.to("#super", .5, {x:95, y:283}, "logo")
	tl.from("#logo", .5, {opacity:0, x:"-=10"}, "logo+=.2")
	tl.to(["#bg"], 2, {opacity:0}, "logo-=2")
	tl.to(["#grey"], .5, {opacity:0}, "-=1")
	


	tl.add("end", "+=1")
	tl.to("#super", .7, {x:73, y:436-80, scale:.8}, "end")
	tl.to(["#t0", "#t6"], .7, {color:'black'}, "end")
	tl.to("#logo", .7, {x:53, y:487-80, scale:.4}, "end")
	tl.from("#cta", .5, {y:"-=50", opacity:0}, "end+=.5")
	tl.from("#end", .5, {y:"-=50", opacity:0}, "end+=.7")
	
}


setTimeout(start, 200)


