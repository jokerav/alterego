import {createSlice} from '@reduxjs/toolkit';
const initialState=[];
const favoriteSlise = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addTofavorite(state, {payload}){
            const {id} = payload;
            state.push(id);
        },
        removeFromFavorite(state, {payload}){
            const {id} = payload;
            console.log(`id: ${id}`)
            const index = state.indexOf(id);
            console.log(`index: ${index}`)
            state.splice(index, 1);
        }
    }
})
export const {addTofavorite, removeFromFavorite} = favoriteSlise.actions;
export default favoriteSlise.reducer