import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import {filmsAPI} from "./filmsAPI";
import pagesSlice from './pagesSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
        pagesSlice: pagesSlice,
        [filmsAPI.reducerPath]: filmsAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filmsAPI.middleware),
});

const persistor = persistStore(store);
export {store, persistor};
