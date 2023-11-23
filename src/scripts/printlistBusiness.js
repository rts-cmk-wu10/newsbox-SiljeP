import getJSONfromLocalStorage from "./helpers/getJSONfromLocalstorage"
import { touchHandler } from "./helpers/touchSwipe"
import deleteClick from "./helpers/deleteClick"

export default (function () {
    if (!window.location.pathname.includes("archive") && !window.location.pathname.includes("/")) return // guard clause


    const DATA = getJSONfromLocalStorage("archive")
    const BUSINESS_CONTAINER = document.querySelector(".business__articleContainer")
    const CATEGORY_DISPLAY_ICON = document.querySelector(".businessHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", chevronClick)

    function chevronClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")

        if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-right") && BUSINESS_CONTAINER.hasChildNodes()) {
            BUSINESS_CONTAINER.style.display = "none"
        } else {
            BUSINESS_CONTAINER.style.display = "inherit"
        }

        if (BUSINESS_CONTAINER.hasChildNodes()) return

        DATA.business.forEach((item) => {

            const ARTICLE = document.createElement("article")
            ARTICLE.addEventListener("touchstart", touchHandler)
            ARTICLE.addEventListener("touchend", touchHandler)

            ARTICLE.classList.add("business__article")
            ARTICLE.innerHTML = ` <a class="health__articleURL" href="${item.siteurl}" target="_blank">  
                <img class="business__articleImage" src="${item.imageurl}">
               </a>
                <div class="business__articleTextContainer">
         <h1 class="business__articleTitle">${item.title}</h1>
          <p class="business__articleText">${item.abstract}</p>
        </div>
         <button data-title="${item.title}" data-category="business" class="deleteButton"><i class="deleteButton__icon fa-regular fa-trash-can"></i></button>
        `
            const DELETE_BUTTON = ARTICLE.querySelector(".deleteButton")
            DELETE_BUTTON.addEventListener("touchstart", deleteClick)
            BUSINESS_CONTAINER.append(ARTICLE)

        })
    } 

})()