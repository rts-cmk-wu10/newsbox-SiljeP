import saveJSONtoLocalStorage from "./helpers/saveJSONtoLocalstorage"

export default (function () {

    const ARCHIVE = {
        world: [{
            "imageURL": "",
            "title": "",
            "abstract": "",
            "siteURL": "",

        }],
        health: [{
            "imageURL": "",
            "title": "",
            "abstract": "",
            "siteURL": "",

        }],
        science: [{
            "imageURL": "",
            "title": "",
            "abstract": "",
            "siteURL": "",

        }],
        business: [{
            "imageURL": "",
            "title": "",
            "abstract": "",
            "siteURL": "",

        }],
        travel: [{
            "imageURL": "",
            "title": "",
            "abstract": "",
            "siteURL": "",

        }]
    }
 if (!localStorage.getItem("archive")) {
        saveJSONtoLocalStorage("archive", ARCHIVE)
    }
})()