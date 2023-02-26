import {createSlice} from '@reduxjs/toolkit';

const USER = {login: "admin", password: "12345"}
const initialState = {
    login: null,
    isLoggedin: false,
    lang: "en",
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedIn(state, {payload}) {
            const {login, password} = payload;
            if (login === USER.login && password === USER.password) {
                state.isLoggedin = true;
                state.login = login;
            }
        },
        loggedOut(state, _) {
            state.isLoggedin = false;
            state.login = null;
        },
        setLang(state, {payload}) {
            const {lang} = payload;
            state.lang = lang;
        }
    },
});
export const {loggedIn, loggedOut, setLang} = authSlice.actions;
export default authSlice.reducer;