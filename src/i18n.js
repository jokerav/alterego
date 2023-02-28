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
                    "Profile": "Profile",
                    "Logout": "Logout",
                    'Favorite movie': 'Favorite movie',
                    "There's nothing here yet": "There's nothing here yet ...",
                    "Log In": "Log In",
                    "Details": 'Details',
                    "To Favorite": "To Favorite",
                    "Delete from favorite": "Delete from favorite",
                    "Back": "Back",
                    "Popular films": "Popular films",
                    "Top rated movies": "Top rated movies",
                    "Oops ... Something went wrong. You can go back to the main": "Oops ... Something went wrong. You can go back to the main",
                    "Back to main": "Back to main",
                    "Wrong login or password": "Wrong login or password",
                    "Login": "login",
                    "Password": "Password",

                }
            },
            ua: {
                translation: {
                    "Main": "Головна",
                    "News": "Новини",
                    "Profile": "Профіль",
                    "Logout": "Вийти",
                    'Favorite movie': 'Обрані фільми',
                    "There's nothing here yet": "Тут поки що нічого нема ...",
                    "Log In": "Увійти",
                    "Details": "Деталі",
                    "To Favorite": "До обраного",
                    "Delete from favorite": "Прибрати з обраного",
                    "Back": "Назад",
                    "Popular films": "Популярні фільми",
                    "Top rated movies": "Найкращі за рейтингом",
                    "Oops ... Something went wrong. You can go back to the main": "Ой ... Щось пішло геть не так, як задумано. Ви можете повернутися на головну",
                    "Back to main": "На головну",
                    "Wrong login or password": "Невірний логін або пароль",
                    "Login": "Логін",
                    "Password": "Пароль",
                }
            }
        }
    });

export default i18n;