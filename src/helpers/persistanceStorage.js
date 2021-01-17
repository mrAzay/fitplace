export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.error('ERROR SAVING DATA FROM LOCALSTORAGE', e)
    return null
  }
}
