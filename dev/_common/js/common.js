const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}



TweenLite.defaultEase = Power2.easeOut

const tl = new TimelineMax()
const hide = {clip:`rect(0px,${0}px,${50}px,0px)`}
const maskTime = .4
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
		const w = item.dom.offsetWidth+20
		const h = item.dom.offsetHeight
		console.log(item.dom);
		TweenMax.set(item.dom, {clip: `rect(0px,${w}px,${h}px,0px)`})
	}	
}




export {size, tl, init, hide, gar, maskTime}