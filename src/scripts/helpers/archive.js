
export default function archiveClick(event) {
    // event.currentTarget.dataset.title

    console.log(event.currentTarget.dataset.title);


    localStorage.setItem("imageURL", event.currentTarget.dataset.imageURL)
    localStorage.setItem("title", event.currentTarget.dataset.title)
    localStorage.setItem("abstract", event.currentTarget.dataset.abstract)
    localStorage.setItem("siteURL", event.currentTarget.dataset.siteURL)
}

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

//hent ud af local Storage, lav om til json fra stringify, manipulere objektet (tilf'j eller fjerne), laver json om til string, og gemmer