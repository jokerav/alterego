import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: { name: null },
    isLoggedin: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedIn(state, action) {
            state.isLoggedin = true;
            state.user = action.payload.user;
        },
        loggedOut(state, _) {
            state.isLoggedin = false;
            state.user = null;
        },
    },
});
export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;