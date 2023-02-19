import { createSlice } from '@reduxjs/toolkit';
const initialState = {
     name: null,
    isLoggedin: false,
};
const USER = {name:"admin",password:"12345"}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedIn(state, action) {
            console.log(state, action.payload)
            if (action.payload === USER){
                state.isLoggedin = true;
                state.name = action.payload.name;}
        },
        loggedOut(state, _) {
            state.isLoggedin = false;
            state.name = null;
        },
    },
});
export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;