export default (function() {

	const DIV = document.querySelector(".touchDiv")

	DIV.addEventListener("touchstart", touchHandler)
	DIV.addEventListener("touchend", touchHandler)

	let x

	function touchHandler(event) {
		if (event.type === "touchstart") {
			x = event.changedTouches[0].clientX
		} else { // touchend
			let direction
            //hvis der hvor vi starter med at sætte fingeren på skærmen er større end der hvor det ender så får vi direction right, så den sammenligner x-koordinater og trækker dem fra hinanden for at regne ud hvilken vej man swiper, hvis den er mindre end 50 pixel så sker der ikke noget da vi har sat let direction til at være undefined/null
			if (x + 50 < event.changedTouches[0].clientX) {
				direction = "Right"
			} else if (x - 50 > event.changedTouches[0].clientX) {
				direction = "Left"
			}
            //de 2 events nedenunder starter først når der bliver kørt en animation på linje 33. Når animationen strater så fjerner vi lige vores lyttere på touch eventet.
			if (direction) {
				DIV.lastElementChild.addEventListener("animationstart", function() {
					DIV.removeEventListener("touchstart", touchHandler)
					DIV.removeEventListener("touchend", touchHandler)
				})
				DIV.lastElementChild.addEventListener("animationend", function() {
					DIV.removeChild(DIV.lastElementChild)
					DIV.addEventListener("touchstart", touchHandler)
					DIV.addEventListener("touchend", touchHandler)
				})

				DIV.lastElementChild.style.animation = `move${direction} 2s ease`; //kører de 2 event listeners ovenover
				direction = null //man skal lige sætte den til null for ikke at huske/gemme værdien.
			}
			//const OUTPUT = document.querySelector(".output")
			//OUTPUT.innerText = x < event.changedTouches[0].clientX ? "højre" : "venstre"
			x = null
		}
	}
})()
