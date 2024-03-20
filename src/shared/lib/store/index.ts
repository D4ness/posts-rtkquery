import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../reducers';
import {postAPI} from "../services/PostService";

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(postAPI.middleware)
});

export type AppStore = ReturnType<typeof setupStore>;
