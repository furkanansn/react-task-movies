import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {Api} from "../../common/network/api";
import {RootState} from "../store";
import {Movie} from "../../types/Movie";
import {MoviePagination} from "../../types/MoviePagination";
interface MoviesState {
    movies: Movie[];
    moviesCount : number;
    selectedMovie: Movie | null;
    loading: boolean;
    pagination: boolean;
}

export interface GetMovie {
    id?: number;
    slug?: number;
    name?: string;
    genre?: string;
    limit?: number;
    offset?: number;
}

export interface GetOneMovie {
    slug: string;
}


export const moviesGetOne = createAsyncThunk<Movie, GetOneMovie>(
    'movies/get-one',
        async (filter : GetOneMovie) => {
            const response = await Api.get(`/movies/${filter.slug}`);
            return response.data as Movie;
        }
);

export const moviesGet = createAsyncThunk<MoviePagination, GetMovie>(
    'movies/get',
    async (filter : GetMovie) => {
        const response = await Api.get(`/movies`, {
            params : filter
        });
        return response.data as MoviePagination;
    }
);

const initialState: MoviesState = {
    movies: [],
    moviesCount: 0,
    selectedMovie: null,
    loading: false,
    pagination: false
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, action: PayloadAction<Movie[]>) => {
            state.movies = action.payload;
        },
        removeSelectedMovie: (state) => {
            state.selectedMovie = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(moviesGet.fulfilled, (state, action) => {
                state.movies = action.payload.movies[0];
                state.moviesCount = action.payload.movies[1];
                state.loading = false;
                state.pagination = !!action.meta.arg.limit
            })
            .addCase(moviesGet.pending, (state) => {
                state.loading = true;
            })
            .addCase(moviesGet.rejected, () => {
                console.trace('rejected');
            })
            .addCase(moviesGetOne.fulfilled, (state, action) => {
                state.selectedMovie = action.payload;
                state.loading = false;
            });
    },
});

export const { addMovies, removeSelectedMovie } = moviesSlice.actions;
export const selectAllMovies = (state: RootState) => state.moviesRoot.movies;

export const selectMoviesCount = (state: RootState) => state.moviesRoot.moviesCount;
export const selectSelectedMovie = (state: RootState) => state.moviesRoot.selectedMovie;
export const selectLoading = (state: RootState) => state.moviesRoot.loading;
export const selectPagination = (state: RootState) => state.moviesRoot.pagination;
export default moviesSlice.reducer;
