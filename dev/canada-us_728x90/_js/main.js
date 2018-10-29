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




	tl.add("t3", "+=2")
	tl.to("#t6 span", .3, {opacity:0, left:"-=100%"}, 't3-=.4')
	tweenMask(gar["t3"])	
	tl.set("#t5", {x:345, y:0})
	tl.set("#t6", {x:107, y:0})

	

	tl.add("t2", "+=0")	
	tl.to("#t2", maskTime*gar["t2"].percent, {...hide}, "t2")
	tl.to("#t5", maskTime*gar["t2"].percent, {x:`-=${gar.t2.width}`, opacity:0}, "t2")
	tl.to("#t1", maskTime*gar["t2"].percent, {opacity:0}, "t2")
	tl.to("#super", 1, {x:309, y:37}, "t2")

	tl.to("#t6 span", .4, {opacity:1, left:0}, 't2+=.5')
	tl.to(["#bg", "#grey"], 1, {opacity:0, x:"+=20"}, "t2")
	tl.from("#logo", .5, {opacity:0}, "t2+=.7")


	tl.to(["#logo", "#super"], .3, {opacity:0}, "+=1")



	tl.add("end")

	tl.set("#super",  {x:489, y:31, scale:.8}, "end")
	tl.set("#logo", {x:505, y:25, scale:.4}, "end")
	tl.to(["#t0", "#t6"], .5, {color:'black'}, "end")
	
	tl.from("#cta", .5, {x:"0", opacity:0}, "end+=.5")
	tl.from("#end", .5, {x:"0", opacity:0}, "end+=.7")

	tl.to(["#logo", "#super"], .3, {opacity:1}, "+=.2")

}


setTimeout(start, 200)


