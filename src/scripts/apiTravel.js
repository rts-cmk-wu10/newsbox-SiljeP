export default (function () {

    const KEY = "X3CCZda4H2e4bv2yUieN2AI5m0U7njTV"
    const TRAVEL = document.querySelector(".travel")

    const CATEGORY_DISPLAY_ICON = TRAVEL.querySelector(".travelHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", iconClick)

    function iconClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")

        if (CATEGORY_DISPLAY_ICON.classList.contains("fa-chevron-down")) {
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
                            if (TRAVEL.childElementCount > 5) return

                            const ARTICLE = document.createElement("article")

                            ARTICLE.classList.add("travel__article")
                            ARTICLE.innerHTML = `<img class="travel__articleImage" src="${object.multimedia[2].url}">
                      <div class="travel__articleTextContainer">
                     <h1 class="travel__articleTitle">${object.title}</h1>
                      <p class="travel__articleText">${object.abstract}</p>
                     </div>`

                            TRAVEL.append(ARTICLE)
                        }
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
        } else {
            const H_ARTICLE = document.querySelectorAll(".travel__article")
            H_ARTICLE.forEach(element => {
                element.remove()
            })

        }


    }
})()