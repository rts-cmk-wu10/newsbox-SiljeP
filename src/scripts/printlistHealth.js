import getJSONfromLocalStorage from "./helpers/getJSONfromLocalstorage"
import { touchHandler } from "./helpers/touchSwipe"

export default (function () {
    if (!window.location.pathname.includes("archive")) return // guard clause

    const DATA = getJSONfromLocalStorage("archive")
    const HEALTH_CONTAINER = document.querySelector(".health__articleContainer")
    const CATEGORY_DISPLAY_ICON = document.querySelector(".healthHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", chevronClick)

    function chevronClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")

        if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-right") && HEALTH_CONTAINER.hasChildNodes()) {
            HEALTH_CONTAINER.style.display = "none"
        } else {
           HEALTH_CONTAINER.style.display = "inherit"
        }

        if (HEALTH_CONTAINER.hasChildNodes()) return

        DATA.health.forEach((item) => {

            const ARTICLE = document.createElement("article")
            ARTICLE.addEventListener("touchstart", touchHandler)
            ARTICLE.addEventListener("touchend", touchHandler)

            ARTICLE.classList.add("health__article")
            ARTICLE.innerHTML = ` <a class="health__articleURL" href="${item.siteurl}" target="_blank">  
                <img class="health__articleImage" src="${item.imageurl}">
               </a>
                <div class="health__articleTextContainer">
         <h1 class="health__articleTitle">${item.title}</h1>
          <p class="health__articleText">${item.abstract}</p>
        </div>
         <button class="deleteButton"><i class="deleteButton__icon fa-regular fa-trash-can"></i></button>
        `
            const DELETE_BUTTON = ARTICLE.querySelector(".deleteButton")
            // DELETE_BUTTON.addEventListener("touchstart", deleteClick)
            health_CONTAINER.append(ARTICLE)

        })
    }

})()