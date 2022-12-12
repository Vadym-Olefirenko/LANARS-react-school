import { configureStore } from '@reduxjs/toolkit';
import photoSlice from './slices/photoSlice';
import albumSlice from './slices/albumSlice';

export const store = configureStore({
    reducer: {albumSlice, photoSlice},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
