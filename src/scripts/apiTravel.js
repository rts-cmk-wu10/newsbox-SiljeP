import archiveClick from "./helpers/clickHandler"
import { touchHandler } from "./helpers/touchSwipe"

export default (function () {
    if (!window.location.pathname.includes("index") && !window.location.pathname.includes("/")) return // guard clause

    const KEY = "X3CCZda4H2e4bv2yUieN2AI5m0U7njTV"
    const TRAVEL_CONTAINER = document.querySelector(".travel__articleContainer")

    const CATEGORY_DISPLAY_ICON = document.querySelector(".travelHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", iconClick)

    function iconClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")

        if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-down") && !TRAVEL_CONTAINER.hasChildNodes()) {
            fetch(`https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${KEY}`)
                .then(function (response) {
                    if (response.status !== 200)
                        throw new Error("error message")
                    return response.json()
                })
                .then(function (data) {
                    console.log(data);
                    data.results.forEach(object => {
                        // first if sentence check the type of article to make sure it can be displayed
                        if (object.item_type === "Article" || object.item_type === "Interactive") {
                            //second if sentence stops the fetch if there's more than 5 elements in my Health section. I can therefore use this to control the amount of articles I want to show
                            if (TRAVEL_CONTAINER.childElementCount > 5) return

                            const ARTICLE = document.createElement("article")
                            ARTICLE.addEventListener("touchstart", touchHandler)
                            ARTICLE.addEventListener("touchend", touchHandler)


                            ARTICLE.classList.add("travel__article")
                            ARTICLE.innerHTML = `<a class="health__articleURL" href="${object.url}" target="_blank"> 
                            <img class="travel__articleImage" src="${object.multimedia[2].url}">
                       </a>
                      <div class="travel__articleTextContainer">
                     <h1 class="travel__articleTitle">${object.title}</h1>
                      <p class="travel__articleText">${object.abstract}</p>
                    </div>
                     <button data-title="${object.title}" data-category="travel" data-imageURL="${object.multimedia[2].url}" data-abstract="${object.abstract}" data-siteURL="${object.url}" class="archiveButton"><i class="archiveButton__icon fa-regular fa-bookmark"></i></button>
                     `

                            const ARCHIVE_BUTTON = ARTICLE.querySelector(".archiveButton")
                            ARCHIVE_BUTTON.addEventListener("touchstart", archiveClick)
                            TRAVEL_CONTAINER.append(ARTICLE)
                        }
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
        } else if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-down") && TRAVEL_CONTAINER.hasChildNodes()) {
            const H_ARTICLE = document.querySelectorAll(".travel__article")
            H_ARTICLE.forEach(element => {
                element.style.display = "flex"
            })
        } else {
            const H_ARTICLE = document.querySelectorAll(".travel__article")
            H_ARTICLE.forEach(element => {
                element.style.display = "none"
            })

        }


    }
})()