import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import th from '@/locales/th.json'
import kr from '@/locales/kr.json'
import la from '@/locales/la.json'


let local_store_lang = localStorage.getItem('currentLanguage') ?? 'en'


export default createI18n({
    locale: local_store_lang?.toString(),
    fallbackLocale: local_store_lang?.toString(),
    messages: {
        en,
        th,
        la,
        kr
    } , 
})