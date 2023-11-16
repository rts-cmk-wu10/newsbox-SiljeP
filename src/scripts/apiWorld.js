import { touchHandler } from "./helpers/touchSwipe"

export default (function () {

    const KEY = "X3CCZda4H2e4bv2yUieN2AI5m0U7njTV"
    const WORLD_CONTAINER = document.querySelector(".world__articleContainer")

    const CATEGORY_DISPLAY_ICON = document.querySelector(".worldHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", iconClick)

    function iconClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")
        //this if sentence runs if my arrow is pointing down AND my container to article has DOES NOT have children
        if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-down") && !WORLD_CONTAINER.hasChildNodes()) {
            fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${KEY}`)
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
                            if (WORLD_CONTAINER.childElementCount > 5) return

                            const ARTICLE = document.createElement("article")
                            ARTICLE.classList.add("world__article")

                            ARTICLE.addEventListener("touchstart", touchHandler)
                            ARTICLE.addEventListener("touchend", touchHandler)

                            ARTICLE.innerHTML = `<img class="world__articleImage" src="${object.multimedia[2].url}">
                       <div class="world__articleTextContainer">
                      <h1 class="world__articleTitle">${object.title}</h1>
                       <p class="world__articleText">${object.abstract}</p>
                      </div><button class="archiveButton"><i class="archiveButton__icon fa-regular fa-bookmark"></i></button>`

                            WORLD_CONTAINER.append(ARTICLE)
                        }
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
            //this else if runs if my arrow is down AND my article container has children (so this is after the first fetch just to show make the display hidden visible again)
        } else if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-down") && WORLD_CONTAINER.hasChildNodes()) {
            const H_ARTICLE = document.querySelectorAll(".world__article")
            H_ARTICLE.forEach(element => {
                element.style.display = "flex"
            })
            //this hides my fetch instead of deleting it when the arrow points right.
        } else {
            const H_ARTICLE = document.querySelectorAll(".world__article")
            H_ARTICLE.forEach(element => {
                element.style.display = "none"
            })

        }
    }
})()