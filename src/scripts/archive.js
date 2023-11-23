import saveJSONtoLocalStorage from "./helpers/saveJSONtoLocalstorage"

export default (function () {

    const ARCHIVE = {
        world: [{

        }],
        health: [{
        

        }],
        science: [{
        

        }],
        business: [{
           

        }],
        travel: [{
            

        }]
    }
 if (!localStorage.getItem("archive")) {
        localStorage.setItem("archive", JSON.stringify(ARCHIVE))
    }
})()