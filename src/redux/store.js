import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
const authPersistConfig = {
    key: 'auth',
    storage,
};
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
    },
    middleware,

});
const persistor = persistStore(store);
export { store, persistor };