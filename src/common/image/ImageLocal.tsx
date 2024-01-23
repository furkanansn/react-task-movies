import React from "react";
import config from "../../config";
import {ImageLocalProps} from "../../types/ImageLocalProps";

const ImageLocal : React.FC<ImageLocalProps> = (img) => {
    const appName = config.appName;
    const publicUrl = config.frontEndURL;
    return (
        <img
            className="header__logo"
            src={`${publicUrl}/${img.src}`}
            alt={appName}
        />
    );
};

export default ImageLocal;