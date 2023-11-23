import getJSONfromLocalStorage from "./getJSONfromLocalstorage";

export default function deleteClick(event) {
    const DATA = getJSONfromLocalStorage("archive")
    // const ARTICLE = DATA{event.currentTarget.dataset}
    const DATAINFO = event.currentTarget.dataset

    const DATA_CATEGORY = DATAINFO.category
    const DATA_TITLE = DATAINFO.title


    console.log(DATA);
    console.log(DATA_TITLE, DATA_CATEGORY);

    if (confirm("Are you sure you want to delete this article?")) {
         let indexOfTitle = DATA.findIndex(i => i.DATA_TITLE === DATA_TITLE)
        
                // var indexOfStevie = myArray.findIndex(i => i.hello === "stevie");
                
               
            }
   

   // console.log(CATEGORY);
//     if (confirm("Are you sure you want to delete this article?")) {
//         let archived = JSON.parse(localStorage.getItem('archive'))
//         //den her giver mig alle categorierne
// console.log(archived);
       

//         var indexOfStevie = myArray.findIndex(i => i.hello === "stevie");
        
       
//     }
}