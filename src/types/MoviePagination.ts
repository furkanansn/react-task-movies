import {Movie} from "./Movie";

export interface MoviePagination {
    movies: [Movie[],number];
}