import getJSONfromLocalStorage from "./getJSONfromLocalstorage";

function updateJSONinLocalStorage(key, index) {
    const DATA = getJSONfromLocalStorage(key)

    DATA[index].done = !DATA[index].done
    localStorage.setItem(key, JSON.stringify(DATA))
}

export default updateJSONinLocalStorage