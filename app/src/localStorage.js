export const getItemfromLocalStorage = (key) => JSON.parse(localStorage.getItem(key))

export const setLocalStorageItem = (key, valueToStore) => localStorage.setItem(key, JSON.stringify(valueToStore))