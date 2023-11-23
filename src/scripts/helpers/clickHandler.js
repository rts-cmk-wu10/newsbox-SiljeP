
import getJSONfromLocalStorage from "./getJSONfromLocalstorage";
import saveJSONtoLocalStorage from "./saveJSONtoLocalstorage";


//archiveClick is declared in every API js.
 export default function archiveClick(event) {
    const DATA = getJSONfromLocalStorage("archive")
    const ARTICLE = {
        imageurl: event.currentTarget.dataset.imageurl,
        title: event.currentTarget.dataset.title,
        abstract: event.currentTarget.dataset.abstract,
        siteurl: event.currentTarget.dataset.siteurl,
        category: event.currentTarget.dataset.category
    }
    console.log(ARTICLE);
    DATA[event.currentTarget.dataset.category].push(ARTICLE)
    console.log(DATA);
    
    saveJSONtoLocalStorage("archive", DATA)
 }


//hent ud af local Storage, lav om til json fra stringify, manipulere objektet (tilf'j eller fjerne), laver json om til string, og gemmer