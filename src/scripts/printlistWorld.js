import getJSONfromLocalStorage from "./helpers/getJSONfromLocalstorage"
import { touchHandler } from "./helpers/touchSwipe"

export default (function () {
    if (!window.location.pathname.includes("archive.html")) return // guard clause

    const DATA = getJSONfromLocalStorage("archive")
    const WORLD_CONTAINER = document.querySelector(".world__articleContainer")
    const CATEGORY_DISPLAY_ICON = document.querySelector(".worldHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", chevronClick)

    function chevronClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")

        if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-right") && WORLD_CONTAINER.hasChildNodes()) {
            WORLD_CONTAINER.style.display = "none"
        } else {
            WORLD_CONTAINER.style.display = "inherit"
        }

        if (WORLD_CONTAINER.hasChildNodes()) return

        DATA.world.forEach((item) => {

            const ARTICLE = document.createElement("article")
            ARTICLE.addEventListener("touchstart", touchHandler)
            ARTICLE.addEventListener("touchend", touchHandler)

            ARTICLE.classList.add("world__article")
            ARTICLE.innerHTML = ` <a class="health__articleURL" href="${item.siteurl}" target="_blank">  
                <img class="world__articleImage" src="${item.imageurl}">
               </a>
                <div class="world__articleTextContainer">
         <h1 class="world__articleTitle">${item.title}</h1>
          <p class="world__articleText">${item.abstract}</p>
        </div>
         <button class="deleteButton"><i class="deleteButton__icon fa-regular fa-trash-can"></i></button>
        `
            const DELETE_BUTTON = ARTICLE.querySelector(".deleteButton")
            // DELETE_BUTTON.addEventListener("touchstart", deleteClick)
            WORLD_CONTAINER.append(ARTICLE)

        })
    }

})()