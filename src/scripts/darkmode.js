export default (function () {

    const CTA_BUTTON = document.querySelector(".darkmode__button")

    if (CTA_BUTTON) {
        CTA_BUTTON.addEventListener("click", clickHandler)
    }


    function clickHandler() {
        const CLASS_LIST = document.body.classList
        CLASS_LIST.toggle("darkmode")
        localStorage.setItem("theme", CLASS_LIST.contains("darkmode") ? "darkmode" : "")


        console.log("hello");
    }

    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "")
    }
    document.body.classList.add(localStorage.getItem("theme") || "hej")

})()