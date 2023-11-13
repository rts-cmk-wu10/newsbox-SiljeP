export default (function () {

    const KEY = "X3CCZda4H2e4bv2yUieN2AI5m0U7njTV"
    const BUSINESS = document.querySelector(".business")

    const CATEGORY_DISPLAY_ICON = BUSINESS.querySelector(".businessHeader__displayIcon")

    CATEGORY_DISPLAY_ICON.addEventListener("click", iconClick)

    function iconClick(e) {
        e.target.classList.toggle("fa-chevron-right")
        e.target.classList.toggle("fa-chevron-down")

    fetch(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${KEY}`)
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
                    if (BUSINESS.childElementCount > 5) return

                    const ARTICLE = document.createElement("article")

                    ARTICLE.classList.add("business__article")
                    ARTICLE.innerHTML = `<img class="business__articleImage" src="${object.multimedia[2].url}">
                      <div class="business__articleTextContainer">
                     <h1 class="business__articleTitle">${object.title}</h1>
                      <p class="business__articleText">${object.abstract}</p>
                     </div>`

                    BUSINESS.append(ARTICLE)
                }
            })
        })
                .catch(function (error) {
                    console.log(error)
                })
            }
        })()