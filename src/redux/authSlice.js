import {createSlice} from '@reduxjs/toolkit';

const USER = {login: "admin", password: "12345"}
const initialState = {
    login: null,
    isLoggedin: false,
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
    },
});
export const {loggedIn, loggedOut} = authSlice.actions;
export default authSlice.reducer;