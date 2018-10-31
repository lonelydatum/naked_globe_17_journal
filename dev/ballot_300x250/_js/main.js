import {size, tl, init, hide, gar, maskTime} from '../../_common/js/common.js'




function start() {
	init()
	
	tl.set(".frame1", {opacity:1})
	tl.to("#bg", 1, {x:70, y:-139, rotation:28}, "+=.5")
	
	tl.from(["#t0"], .5, {opacity:0}, '-=.4')
	tl.from(["#t1", "#t2", "#t3", "#t4"], .9, {opacity:0, ease:Sine.easeOut}, "-=0")
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
	tl.to("#super", .5, {x:95}, "logo")
	tl.from("#logo", .5, {opacity:0}, "logo+=.3")
	tl.to(["#bg", "#grey"], 1.5, {opacity:0}, "logo-=2")



	tl.add("end", "+=1")
	tl.to("#super", .5, {x:75, y:162, scale:.8}, "end")
	tl.to(["#t0", "#t6"], .5, {color:'black'}, "end")
	tl.to("#logo", .5, {x:50, y:178, scale:.4}, "end")
	tl.from("#cta", .5, {y:"-=50", opacity:0}, "end+=.5")
	tl.from("#end", .5, {y:"-=50", opacity:0}, "end+=.7")

}


setTimeout(start, 200)

// init()


