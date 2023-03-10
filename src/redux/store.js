import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import {filmsAPI} from "./filmsAPI";
import authSlice from './authSlice';
import pagesSlice from './pagesSlice';

const authPersistConfig = {
    key: 'root',
    storage,
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
        pagesSlice,
        [filmsAPI.reducerPath]: filmsAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filmsAPI.middleware),
});

const persistor = persistStore(store);
export {store, persistor};
