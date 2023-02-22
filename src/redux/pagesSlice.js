import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    popularPage: 1,
    topRatedPage: 1,
};
const pagesSlice = createSlice({
    name:"pages",

    initialState,
    reducers:{
        setPopularPage(state, {payload}){
            const {page} = payload;
            state.popularPage = page;
        },
        setTopRatedPage(state, {payload}){
            const {page} = payload;
            state.topRatedPage = page;
        }
    }
})
export const {setPopularPage, setTopRatedPage} = pagesSlice.actions;
export default pagesSlice.reducer
