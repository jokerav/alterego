import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import {fakeNewsAPI} from "./fakeNewsAPI";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';

const authPersistConfig = {
    key: 'auth',
    storage,
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
        [fakeNewsAPI.reducerPath]: fakeNewsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fakeNewsAPI.middleware),
});

const persistor = persistStore(store);
export {store, persistor};
