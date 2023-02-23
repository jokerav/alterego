import {createSlice} from '@reduxjs/toolkit';
const initialState=[];
const favoriteSlise = createSlice({
    name:'favorite',
    reducerPath: 'favorite',
    initialState,
    reducers:{
        addTofavorite(state, {payload}){
            const {id,title} = payload;
            state.push({id,title});
        },
        removeFromFavorite(state, {payload}){
            const {id} = payload;
            const index = state.findIndex(movie => movie.id === id);
            state.splice(index, 1);
        },
    },
})
export const {addTofavorite, removeFromFavorite} = favoriteSlise.actions;
export default favoriteSlise.reducer