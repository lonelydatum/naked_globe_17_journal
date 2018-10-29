import {size, tl, init, hide, gar, maskTime} from '../../_common/js/common.js'


function tweenMask(item){
	const time = maskTime * item.percent
	tl.to(item.dom, maskTime, {...hide}, item.id)
	tl.to("#t5", maskTime, {x:`-=${item.width}`}, item.id)
}

function start() {
	init()
	
	tl.set(".frame1", {opacity:1})
	tl.to("#bg", 2, {x:"+=50", y:"-=50", opacity:1}, "+=.5")
	
	tl.from(["#t0"], .5, {opacity:0}, '-=1.4')
	tl.from(["#t1", "#t2", "#t3", "#t4"], .9, {opacity:0, ease:Sine.easeOut}, "-=.4")
	tl.from(["#t5", "#t6"], .5, {opacity:0, ease:Sine.easeOut}, '-=.2')

	
	tl.add("t4", "+=2")
	tl.to("#t6 span", .3, {opacity:0, left:"-=100%"}, 't4-=.4')
	tl.set("#t5", {x:"-=5"})
	tweenMask(gar["t4"])	
	tl.set("#t5", {x:222-4, y:34})



	tl.add("t3")
	tweenMask(gar["t3"])	
	tl.set("#t5", {x:208, y:0})
	tl.set("#t6", {x:107, y:0})



	tl.add("t2")	
	tl.to("#t2", maskTime*gar["t2"].percent, {...hide}, "t2")
	tl.to("#t5", maskTime*gar["t2"].percent, {x:`-=${gar.t2.width}`, opacity:0}, "t2")
	tl.to("#t1", maskTime*gar["t2"].percent, {opacity:0}, "t2")
	tl.to("#super", 1, {x:58, y:107}, "t4")
	tl.to("#t6 span", .4, {opacity:1, left:0}, 't2+=.3')



	tl.add("logo")
	tl.to("#super", .5, {x:95}, "logo")
	tl.from("#logo", .5, {opacity:0, x:"-=10"}, "logo")
	tl.to(["#bg", "#grey"], 2, {opacity:0}, "logo-=2")



	tl.add("end", "+=1")
	tl.to("#super", .5, {x:75, y:162, scale:.8}, "end")
	tl.to(["#t0", "#t6"], .5, {color:'black'}, "end")
	tl.to("#logo", .5, {x:50, y:178, scale:.4}, "end")
	tl.from("#cta", .5, {y:"-=50", opacity:0}, "end+=.5")
	tl.from("#end", .5, {y:"-=50", opacity:0}, "end+=.7")

}


// start()


