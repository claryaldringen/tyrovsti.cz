export const getCity = (city, lang) => {
  if (typeof city === 'object') {
    return city[lang]
  }
  return city
}
