import translations from '../translations/traduction'

export const getTranslate = (key, idiom = 'es')=>{
    return translations[idiom] ? translations[idiom][key] : translations['es'][key]
}