import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies/moviesSlice';

export interface RootState {
    moviesRoot: ReturnType<typeof moviesReducer>;
}

const store = configureStore({
    reducer: {
        moviesRoot: moviesReducer
    },
});

export type AppDispatch = typeof store.dispatch

export default store;