export const readFromCache = key => JSON.parse(localStorage.getItem(key)) || null

export const writeToCache = (key, item) => localStorage.setItem(key, JSON.stringify(item))