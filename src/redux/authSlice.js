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
            if (payload.login === USER.login && payload.password === USER.password) {
                state.isLoggedin = true;
                state.login = payload.login;
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