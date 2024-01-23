import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { moviesGetOne, removeSelectedMovie, selectSelectedMovie } from '../../features/movies/moviesSlice';
import './MovieDetails.scss';
import '../../common/loader.scss';
import { AppDispatch } from "../../features/store";
import ImageNetwork from "../../common/image/ImageNetwork";

const MovieDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const selectedMovie = useSelector(selectSelectedMovie);

    useEffect(() => {
        void dispatch(moviesGetOne({ slug: String(slug) }));
        return () => { dispatch(removeSelectedMovie()); };
    }, [dispatch, slug]);

    return (
        <>
            {!selectedMovie ? (
                <div className="loader"></div>
            ) : (
                <div className="movie-details">
                    <ImageNetwork data={selectedMovie}/>
                    <div className="movie-content">
                        <div className="movie-title">{selectedMovie.name}</div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating <i className="fa fa-star"></i> : {selectedMovie.rate}
                            </span>
                        </div>
                        <div className="movie-info">
                            <div>
                                <p className="description">{selectedMovie.description}</p>
                            </div>
                            <div>
                                <span>{selectedMovie.length}</span>
                            </div>
                            <div>
                                <span>{selectedMovie.genres}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieDetails;
