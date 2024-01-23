import {Movie} from "./Movie";

export interface MovieListingProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
    movies : Movie[];
}