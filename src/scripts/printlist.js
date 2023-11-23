import getJSONfromLocalStorage from "./helpers/getJSONfromLocalstorage"

export default function printlist(){
    const DATA = getJSONfromLocalStorage("archive")

        DATA.forEach((item) => {
            if(DATA.category === "business"){
                const ARTICLE = document.createElement("article")
                // ARTICLE.addEventListener("touchstart", touchHandler)
                // ARTICLE.addEventListener("touchend", touchHandler)

                ARTICLE.classList.add("business__article")
                ARTICLE.innerHTML = ` <a class="health__articleURL" href="${item.siteURL}" target="_blank">  
                <img class="business__articleImage" src="${item.imageURL}">
               </a>
                <div class="business__articleTextContainer">
         <h1 class="business__articleTitle">${item.title}</h1>
          <p class="business__articleText">${item.abstract}</p>
        </div>
         <button data-title="${object.title}" data-category="business" data-imageURL="${object.multimedia[2].url}" data-abstract="${object.abstract}" data-siteURL="${object.url}" class="archiveButton"><i class="archiveButton__icon fa-regular fa-bookmark"></i></button>
        `
                // const ARCHIVE_BUTTON = ARTICLE.querySelector(".archiveButton")
                // ARCHIVE_BUTTON.addEventListener("touchstart", archiveClick)
                BUSINESS_CONTAINER.append(ARTICLE)
            }
        })

    }
