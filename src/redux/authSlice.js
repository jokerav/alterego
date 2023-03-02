import {createSlice} from '@reduxjs/toolkit';

const USER = {login: "admin", password: "12345"}
const initialState = {
    login: null,
    isLoggedin: false,
    favorite: [],
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
        addTofavorite(state, {payload}) {
            const {id, title} = payload;
            state.favorite.push({id, title});
        },
        removeFromFavorite(state, {payload}) {
            const {id} = payload;
            const index = state.favorite.findIndex(movie => movie.id === id);
            state.favorite.splice(index, 1);
        },
    },
});
export const {loggedIn, loggedOut, setLang, addTofavorite, removeFromFavorite} = authSlice.actions;
export default authSlice.reducer;