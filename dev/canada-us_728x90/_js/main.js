import {size, tl, init, hide, gar, maskTime} from '../../_common/js/common.js'


function tweenMask(item){
	const time = maskTime * item.percent
	tl.to(item.dom, maskTime, {...hide}, item.id)
	tl.to("#t5", maskTime, {x:`-=${item.width}`}, item.id)
}

function start() {
	init()
	
	tl.set(".frame1", {opacity:1})
	tl.to("#bg", 1.5, {x:458, y:-27, scale:.25, opacity:1}, "+=.5")
	

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
	tl.to(["#bg", "#grey"], 1, {opacity:0, x:"+=20"}, "in")
	tl.to(["#t1"], .2, {opacity:0}, 'in')

	tl.to("#super", 1, {x:309, y:37}, "+=1")
	tl.from("#logo", .5, {opacity:0})
	
	
	



	tl.to(["#logo", "#super"], .3, {opacity:0}, "+=1")





	tl.add("end")

	tl.set("#super",  {x:489, y:31, scale:.8}, "end")
	tl.set("#logo", {x:505, y:25, scale:.4}, "end")
	tl.to(["#t0", "#t6"], .5, {color:'black'}, "end")
	
	

	tl.from([ "#cta", "#end"], .7, {opacity:0}, "end")
	tl.to([ "#logo", "#super"], .7, {opacity:1}, "end")

}


setTimeout(start, 200)


