import getJSONfromLocalStorage from "./helpers/getJSONfromLocalstorage"
import { touchHandler } from "./helpers/touchSwipe"

export default (function () {
    if (!window.location.pathname.includes("archive.html")) return // guard clause

    const DATA = getJSONfromLocalStorage("archive")
    const TRAVEL_CONTAINER = document.querySelector(".travel__articleContainer")
    const CATEGORY_DISPLAY_ICON = document.querySelector(".travelHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", chevronClick)

    function chevronClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")

        if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-right") && TRAVEL_CONTAINER.hasChildNodes()) {
            TRAVEL_CONTAINER.style.display = "none"
        } else {
            TRAVEL_CONTAINER.style.display = "inherit"
        }

        if (TRAVEL_CONTAINER.hasChildNodes()) return

        DATA.travel.forEach((item) => {

            const ARTICLE = document.createElement("article")
            ARTICLE.addEventListener("touchstart", touchHandler)
            ARTICLE.addEventListener("touchend", touchHandler)

            ARTICLE.classList.add("travel__article")
            ARTICLE.innerHTML = ` <a class="health__articleURL" href="${item.siteurl}" target="_blank">  
                <img class="travel__articleImage" src="${item.imageurl}">
               </a>
                <div class="travel__articleTextContainer">
         <h1 class="travel__articleTitle">${item.title}</h1>
          <p class="travel__articleText">${item.abstract}</p>
        </div>
         <button class="deleteButton"><i class="deleteButton__icon fa-regular fa-trash-can"></i></button>
        `
            const DELETE_BUTTON = ARTICLE.querySelector(".deleteButton")
            // DELETE_BUTTON.addEventListener("touchstart", deleteClick)
           TRAVEL_CONTAINER.append(ARTICLE)

        })
    }

})()