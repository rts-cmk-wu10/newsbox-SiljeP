export default (function () {
    if (!window.location.pathname.includes("settings")) return // guard clause

    const WORLD__BUTTON = document.querySelector("#switchWorld")
    const HEALTH_BUTTON = document.querySelector("#switchHealth")
    const SCIENCE_BUTTON = document.querySelector("#switchScience")
    const BUSINESS_BUTTON = document.querySelector("#switchBusiness")
    const TRAVEL_BUTTON = document.querySelector("#switchTravel")

    //world
    //  If local storage doesn't have a key called worldShow it creates one and set's it to true
    if (!localStorage.getItem("worldShow")) {
        localStorage.setItem("worldShow", "true")
    }

    if (localStorage.getItem("worldShow") === "true") {
        WORLD__BUTTON.checked = true
    } //This makes sure the button is styled as true.

    //health
    //----------------------------------------------------------//
    if (!localStorage.getItem("healthShow")) {
        localStorage.setItem("healthShow", "true")
    }

    if (localStorage.getItem("healthShow") === "true") {
        HEALTH_BUTTON.checked = true
    }
    //science
    //----------------------------------------------------------//
    if (!localStorage.getItem("scienceShow")) {
        localStorage.setItem("scienceShow", "true")
    }

    if (localStorage.getItem("scienceShow") === "true") {
        SCIENCE_BUTTON.checked = true
    }
    //business
    //----------------------------------------------------------//
    if (!localStorage.getItem("businessShow")) {
        localStorage.setItem("businessShow", "true")
    }

    if (localStorage.getItem("businessShow") === "true") {
        BUSINESS_BUTTON.checked = true
    }
    //travel
    //----------------------------------------------------------//
    if (!localStorage.getItem("travelShow")) {
        localStorage.setItem("travelShow", "true")
    }

    if (localStorage.getItem("travelShow") === "true") {
        TRAVEL_BUTTON.checked = true
    }

    WORLD__BUTTON.addEventListener("click", clickHandler)
    HEALTH_BUTTON.addEventListener("click", clickHandler)
    SCIENCE_BUTTON.addEventListener("click", clickHandler)
    BUSINESS_BUTTON.addEventListener("click", clickHandler)
    TRAVEL_BUTTON.addEventListener("click", clickHandler)

    function clickHandler() {
        if (WORLD__BUTTON.checked === false) {
            localStorage.setItem("worldShow", "false")
        } //saves the checked value in local storage as false

        if (WORLD__BUTTON.checked === true) {
            localStorage.setItem("worldShow", "true")
        }// saves the checked value in local storage as true.

        //----------------------------------------------------//
        if (HEALTH_BUTTON.checked === false) {
            localStorage.setItem("healthShow", "false")
        }

        if (HEALTH_BUTTON.checked === true) {
            localStorage.setItem("healthShow", "true")
        }
        //----------------------------------------------------//
        if (SCIENCE_BUTTON.checked === false) {
            localStorage.setItem("scienceShow", "false")
        }

        if (SCIENCE_BUTTON.checked === true) {
            localStorage.setItem("scienceShow", "true")
        }
        //----------------------------------------------------//
        if (BUSINESS_BUTTON.checked === false) {
            localStorage.setItem("businessShow", "false")
        }

        if (BUSINESS_BUTTON.checked === true) {
            localStorage.setItem("businessShow", "true")
        }
        //----------------------------------------------------//
        if (TRAVEL_BUTTON.checked === false) {
            localStorage.setItem("travelShow", "false")
        }

        if (TRAVEL_BUTTON.checked === true) {
            localStorage.setItem("travelShow", "true")
        }

    }

})()