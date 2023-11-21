export default (function () {
    if (!window.location.pathname.includes("index.html")) return // guard clause

    const WORLD = document.querySelector(".world")
    const HEALTH = document.querySelector(".health")
    const SCIENCE = document.querySelector(".science")
    const BUSINESS = document.querySelector(".business")
    const TRAVEL = document.querySelector(".travel")

    if(localStorage.getItem("worldShow") === "false")  {
        WORLD.style.display = "none"
    } else {
        WORLD.style.display = "block"
    }

    if(localStorage.getItem("healthShow") === "false")  {
        HEALTH.style.display = "none"
    } else {
        HEALTH.style.display = "block"
    }

    if(localStorage.getItem("scienceShow") === "false")  {
       SCIENCE.style.display = "none"
    } else {
       SCIENCE.style.display = "block"
    }

    if(localStorage.getItem("businessShow") === "false")  {
        BUSINESS.style.display = "none"
    } else {
        BUSINESS.style.display = "block"
    }

    if(localStorage.getItem("travelShow") === "false")  {
        TRAVEL.style.display = "none"
    } else {
        TRAVEL.style.display = "block"
    }
})()