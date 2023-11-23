import getJSONfromLocalStorage from "./getJSONfromLocalstorage";

function saveJSONtoLocalStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
}

export default saveJSONtoLocalStorage