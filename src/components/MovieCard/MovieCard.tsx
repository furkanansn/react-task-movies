import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';
import {MovieProps} from "../../types/MovieProps";
import ImageNetwork from "../../common/image/ImageNetwork";


const MovieCard: React.FC<MovieProps> = ({ data }) => {

    return (
        <div className='movie'>
            <Link to={`/movie/${data.slug}`}>
                <ImageNetwork data={data}/>
                <h3>{data.name}</h3>
            </Link>
        </div>
    );
};

export default MovieCard;
