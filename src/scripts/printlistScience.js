import getJSONfromLocalStorage from "./helpers/getJSONfromLocalstorage"
import { touchHandler } from "./helpers/touchSwipe"

export default (function () {
    if (!window.location.pathname.includes("archive") && !window.location.pathname.includes("/")) return // guard clause

    const DATA = getJSONfromLocalStorage("archive")
    const SCIENCE_CONTAINER = document.querySelector(".science__articleContainer")
    const CATEGORY_DISPLAY_ICON = document.querySelector(".scienceHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", chevronClick)

    function chevronClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")

        if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-right") && SCIENCE_CONTAINER.hasChildNodes()) {
            SCIENCE_CONTAINER.style.display = "none"
        } else {
            SCIENCE_CONTAINER.style.display = "inherit"
        }

        if (SCIENCE_CONTAINER.hasChildNodes()) return

        DATA.science.forEach((item) => {

            const ARTICLE = document.createElement("article")
            ARTICLE.addEventListener("touchstart", touchHandler)
            ARTICLE.addEventListener("touchend", touchHandler)

            ARTICLE.classList.add("science__article")
            ARTICLE.innerHTML = ` <a class="health__articleURL" href="${item.siteurl}" target="_blank">  
                <img class="science__articleImage" src="${item.imageurl}">
               </a>
                <div class="science__articleTextContainer">
         <h1 class="science__articleTitle">${item.title}</h1>
          <p class="science__articleText">${item.abstract}</p>
        </div>
         <button class="deleteButton"><i class="deleteButton__icon fa-regular fa-trash-can"></i></button>
        `
            const DELETE_BUTTON = ARTICLE.querySelector(".deleteButton")
            // DELETE_BUTTON.addEventListener("touchstart", deleteClick)
            SCIENCE_CONTAINER.append(ARTICLE)

        })
    }

})()