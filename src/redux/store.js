import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import {filmsAPI} from "./filmsAPI";

const authPersistConfig = {
    key: 'auth',
    storage,
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
        [filmsAPI.reducerPath]: filmsAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filmsAPI.middleware),
});

const persistor = persistStore(store);
export {store, persistor};
