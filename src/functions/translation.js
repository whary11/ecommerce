import { logCompany } from "./log"
import translations from '../translations/traduction'

export const getTranslate = (key, idiom = 'en')=>{

    return translations[idiom][key]
}