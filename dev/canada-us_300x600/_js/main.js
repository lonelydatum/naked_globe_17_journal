TweenLite.defaultEase = Power3.easeOut

const tl = new TimelineMax()
const hide = {clip:`rect(0px,${0}px,${50}px,0px)`}
const maskTime = .3
const gar = {}

function init(){
	const list = ['t4', 't3', 't2']

	list.map(item=>{
		const dom = document.getElementById(item)
		gar[item] =  {
			id: item,
			dom: dom,
			length: dom.textContent.length,
			width: dom.offsetWidth
		}
	})


	let max = 0
	for(let key in gar){
		max = Math.max(gar[key].length, max)
	}

	for(let key in gar){
		const item = gar[key]
		item.percent = item.length / max
		const w = item.dom.offsetWidth
		const h = item.dom.offsetHeight
		console.log(item.dom);
		TweenMax.set(item.dom, {clip: `rect(0px,${w}px,${h}px,0px)`})
	}	
}


function tweenMask(item){
	const time = maskTime * item.percent
	tl.to(item.dom, maskTime, {...hide}, item.id)
	tl.to("#t5", maskTime, {x:`-=${item.width}`}, item.id)
	tl.to("#t6", maskTime, {x:`-=${item.width}`}, item.id)
}

function start() {
	init()
	
	tl.set(".frame1", {opacity:1})
	tl.set("#super", {y:283}, "t4")
	tl.to("#bg", 2, {x:-220, y:-128}, "+=.5")

	
	
	tl.from(["#t0"], .5, {opacity:0}, '-=1')
	tl.from(["#t1", "#t2", "#t3", "#t4", "#t5", '#t6'], .9, {opacity:0, ease:Sine.easeOut}, "-=.4")
	

	
	tl.add("t4", "+=2")
	tweenMask(gar["t4"])
	
	tl.set("#t5", {x:222, y:34})
	tl.set("#t6", {x:222+6, y:34})

	tl.add("t3")
	tweenMask(gar["t3"])
	
	tl.set("#t5", {x:208, y:0})
	tl.set("#t6", {x:208+6, y:0})




	tl.add("t2")	
	tl.to("#t2", maskTime*gar["t2"].percent, {...hide}, "t2")
	tl.to("#t5", maskTime*gar["t2"].percent, {x:`-=${gar.t2.width}`, opacity:0}, "t2")
	tl.to("#t6", maskTime*gar["t2"].percent, {x:`-=${gar.t2.width+15}`}, "t2")
	tl.to("#t1", maskTime*gar["t2"].percent, {opacity:0}, "t2")
	// tl.to("#super", 1, {x:60, y:283}, "t4")

	


	tl.add("logo", "+=.1")
	tl.to("#super", .5, {x:95, y:283}, "logo")
	tl.from("#logo", .5, {opacity:0, x:"-=10"}, "logo+=.2")
	tl.to(["#bg"], 2, {opacity:0}, "logo-=2")
	tl.to(["#grey"], .5, {opacity:0}, "-=1")
	


	tl.add("end", "+=1")
	tl.to("#super", .7, {x:73, y:436-20, scale:.8}, "end")
	tl.to(["#t0", "#t6"], .7, {color:'black'}, "end")

	tl.to("#logo", .7, {x:53, y:487-20, scale:.4}, "end")
	
	
	tl.from("#cta", .5, {y:"-=50", opacity:0}, "end+=.5")
	tl.from("#end", .5, {y:"-=50", opacity:0}, "end+=.7")

	// tl.gotoAndPlay("t4")

}


start()


