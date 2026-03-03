import { Language, LocalizedString } from '../../types'

export const getCity = (
  city: string | LocalizedString,
  lang: Language
): string => {
  if (typeof city === 'object') {
    return city[lang]
  }
  return city
}
