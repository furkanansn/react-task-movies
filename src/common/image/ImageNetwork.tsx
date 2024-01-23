import React from "react";
import config from "../../config";
import {MovieProps} from "../../types/MovieProps";

const ImageNetwork : React.FC<MovieProps> = ({data}) =>{
    const backEndURL = config.backEndURL;
    return (
        <img src={`${backEndURL}/images/${data.img}`} alt={data.name}/>
    );
}

export default ImageNetwork;