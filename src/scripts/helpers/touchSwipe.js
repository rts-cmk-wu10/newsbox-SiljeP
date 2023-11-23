let x
export function touchHandler(event) {
    
    if (event.type === "touchstart") {
        x = event.changedTouches[0].clientX
    } else {
        let direction
        if (x - 50 > event.changedTouches[0].clientX) {
            direction = "Left"
            event.currentTarget.style.transform = "translate(-135px,0px)"
        } else if (x + 50 < event.changedTouches[0].clientX)  {
            direction = "Right"
            event.currentTarget.style.transform = "translate(0px,0px)"
        }
    }
    x = null

}

//currentTarget

//when bookmark is clicked and archived in local storage the icon changes from regular to solid
