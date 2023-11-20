import { touchHandler } from "./helpers/touchSwipe"

export default (function () {
  if (!window.location.pathname.includes("index.html") && !window.location.pathname.includes("archive.html")) return // guard clause

    const KEY = "X3CCZda4H2e4bv2yUieN2AI5m0U7njTV"
    const HEALTH_CONTAINER = document.querySelector(".health__articleContainer")

    //arrow to the right (headline) changes shape when you click it
    const CATEGORY_DISPLAY_ICON = document.querySelector(".healthHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", iconClick)

    function iconClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")

        if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-down") && !HEALTH_CONTAINER.hasChildNodes()) {
            fetch(`https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${KEY}`)
                .then(function (response) {
                    if (response.status !== 200)
                        throw new Error("error message")
                    return response.json()
                })
                .then(function (data) {
                    data.results.forEach(object => {
                        //first if sentence check the type of article to make sure it can be displayed
                        if (object.item_type === "Article" || object.item_type === "Interactive") {
                            //second if sentence stops the fetch if there's more than 5 elements in my Health section. I can therefore use this to control the amount of articles I want to show
                            if (HEALTH_CONTAINER.childElementCount > 5) return

                            const ARTICLE = document.createElement("article")
                            ARTICLE.addEventListener("touchstart", touchHandler)
                            ARTICLE.addEventListener("touchend", touchHandler)

                            ARTICLE.classList.add("health__article")
                            ARTICLE.innerHTML = `<img class="health__articleImage" src="${object.multimedia[2].url}">
                            <a class="health__articleURL" href="${object.url}" target="_blank"> 
                            <div class="health__articleTextContainer">
                     <h1 class="health__articleTitle">${object.title}</h1>
                     <p class="health__articleText">${object.abstract}</p>
                   </div></a><button class="archiveButton"><i class="archiveButton__icon fa-regular fa-bookmark"></i></button>
                  `
                            
                            HEALTH_CONTAINER.append(ARTICLE)
                            console.log(object);
                        }

                    })
                })
                .catch(function (error) {
                    console.log(error)
                    // window.location.href = "/ups.html" SHOULD I MAKE AN ERROR SITE
                })

        } else if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-down") && HEALTH_CONTAINER.hasChildNodes()) {
            const H_ARTICLE = document.querySelectorAll(".health__article")
            H_ARTICLE.forEach(element => {
                element.style.display = "flex"
            })
        } else {
            const H_ARTICLE = document.querySelectorAll(".health__article")
            H_ARTICLE.forEach(element => {
                element.style.display = "none"
            })

        }
    }

})()

