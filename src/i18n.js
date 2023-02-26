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
                }
            },
            ua: {
                translation: {
                    "Main": "Головна",
                    "News": "Новини",
                }
            }
        }
    });

export default i18n;