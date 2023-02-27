import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    "Main": "Main",
                    "News": "news",
                    "Profile":"Profile",
                    "Logout": "Logout",
                    'Favorite movie':'Favorite movie',
                    "There's nothing here yet":"There's nothing here yet ..."
                }
            },
            ua: {
                translation: {
                    "Main": "Головна",
                    "News": "Новини",
                    "Profile":"Профіль",
                    "Logout": "Вийти",
                    'Favorite movie':'Улюблені фільми',
                    "There's nothing here yet":"Тут покищо нічого нема ..."
                }
            }
        }
    });

export default i18n;