import getJSONfromLocalStorage from "./getJSONfromLocalstorage";

function saveJSONtoLocalStorage(key, item) {
    const OLD_OBJECT = getJSONfromLocalStorage(key)

    OLD_OBJECT.push(item)
    
    localStorage.setItem(key, JSON.stringify(OLD_OBJECT))
}

export default saveJSONtoLocalStorage