export default (function () {

    const KEY = "X3CCZda4H2e4bv2yUieN2AI5m0U7njTV"
    const HEALTH = document.querySelector(".health")

    const LINK_CONTAINER = document.createElement("div")
    LINK_CONTAINER.classList.add("health__articleTextContainer")
    LINK_CONTAINER.style.display = "none"
    
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
                    if (HEALTH.childElementCount > 5) return

                    const ARTICLE = document.createElement("article")

                    ARTICLE.classList.add("health__article")
                    ARTICLE.innerHTML = `<img class="health__articleImage" src="${object.multimedia[2].url}">
       <div class="health__articleTextContainer">
       <h1 class="health__articleTitle">${object.title}</h1>
       <p class="health__articleText">${object.abstract}</p></div>
       `

                    HEALTH.append(ARTICLE)

                    ARTICLE.addEventListener("click", clickHandler)

                    function clickHandler() {
                        LINK_CONTAINER.style.display =  "block"
                        LINK_CONTAINER.innerHTML = `<a class="health__articleLink" target="_blank" href="${object.url}">Go to the article</a>`
                        ARTICLE.append(LINK_CONTAINER)
                    }
                }
                // console.log(data);



            })
        })

        .catch(function (error) {
            console.log(error)
            // window.location.href = "/ups.html" SHOULD I MAKE AN ERROR SITE
        })

})()

