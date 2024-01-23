import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import {MovieListingProps} from '../../types/MovieListingProps';
import {useSelector} from "react-redux";
import {selectPagination} from "../../features/movies/moviesSlice";
const MovieListing: React.FC<MovieListingProps> = ({currentPage, totalPages, onPageChange, movies}) => {
    const pagination = useSelector(selectPagination);

    return (
        <>
            <div className="movie-list">
                {movies.map((movie, index) => (
                    <MovieCard key={index} data={movie}/>
                ))}
            </div>
            {pagination && (
                <div className="pagination">
                    <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
                        Previous
                    </button>
                    <span>{`${currentPage} / ${totalPages}`}</span>
                    <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
                        Next
                    </button>
                </div>
            )}
        </>
    );
};

export default MovieListing;
