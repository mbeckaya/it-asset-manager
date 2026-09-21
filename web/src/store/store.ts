import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './alertSlice';
import { assetsApi } from '../api/assetsApi';
import { assignmentsApi } from '../api/assignmentsApi';

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        [assetsApi.reducerPath]: assetsApi.reducer,
        [assignmentsApi.reducerPath]: assignmentsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(assetsApi.middleware)
            .concat(assignmentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
