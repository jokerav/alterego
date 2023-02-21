import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    popularPage: 1,
    inTrandPage: 1,
};
const pagesSlice = createSlice({
    name:"pages",

    initialState,
    reducers:{
        setPopularPage(state, {payload}){
            const {page} = payload;
            state.popularPage = page;
        },
        setIntrandPage(state, {payload}){
            const {page} = payload;
            state.inTrandPage = page;
        }
    }
})
export const {setPopularPage, setIntrandPage} = pagesSlice.actions;
export default pagesSlice.reducer
