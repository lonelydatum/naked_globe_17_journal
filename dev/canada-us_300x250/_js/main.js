TweenLite.defaultEase = Power3.easeOut


function start() {
	const list = ['t4', 't3', 't2']
	const gar = {}
	list.map(item=>{
		const dom = document.getElementById(item)
		gar[item] =  {
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
		gar[key].percent = gar[key].length / max
	}

	const maskTime = 1

	const tl = new TimelineMax()
	const tl2 = new TimelineMax()
	
	const hide = {webkitClipPath:`polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`}


	tl.set(".frame1", {opacity:1})
	

	tl.to("#bg", 2, {x:"+=50", y:"-=50", opacity:0}, "+=1")
	
	tl.from("#super", .3, {opacity:0}, "-=1.5")
	
	tl.add("t4", "+=1.5")
	tl.to("#t4", maskTime*gar["t4"].percent, {...hide}, "t4")
	tl.to("#t5", maskTime*gar["t4"].percent, {x:`-=${gar.t4.width}`}, "t4")
	tl.to("#t6", maskTime*gar["t4"].percent, {x:`-=${gar.t4.width}`}, "t4")
	tl.set("#t5", {x:120, y:-35})
	tl.set("#t6", {x:120, y:-35})

	tl.add("t3")
	tl.to("#t3", maskTime*gar["t3"].percent, {...hide}, "t3")
	tl.to("#t5", maskTime*gar["t3"].percent, {x:`-=${gar.t3.width}`}, "t3")
	tl.to("#t6", maskTime*gar["t3"].percent, {x:`-=${gar.t3.width}`}, "t3")

	tl.set("#t5", {x:103, y:-68})
	tl.set("#t6", {x:103, y:-68})


	tl.add("t2")
	tl.to("#t2", maskTime*gar["t2"].percent, {...hide}, "t2")
	tl.to("#t5", maskTime*gar["t2"].percent, {x:`-=${gar.t2.width}`, opacity:0}, "t2")
	tl.to("#t6", maskTime*gar["t2"].percent, {x:`-=${gar.t2.width+15}`}, "t2")
	tl.to("#t1", maskTime*gar["t2"].percent, {opacity:0}, "t2")
	// tl.to("#super", 2, {x:58, y:107}, "t4")

	tl.add("logo", "+=.1")
	tl.to("#super", .5, {x:95}, "logo")
	tl.from("#logo", .5, {opacity:0, x:"-=10"}, "logo+=.2")


	tl.add("end")
	tl.to("#super", .5, {x:75, y:176, scale:.8}, "end")
	tl.to("#logo", .5, {x:50, y:178, scale:.4}, "end")
	
	tl.from("#cta", .5, {y:"-=50", opacity:0}, "end+=.5")
	tl.from("#end", .5, {y:"-=50", opacity:0}, "end+=.7")
	
	

}


// TweenMax.to('#t4', 1, {webkitClipPath:`polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`})





start()


