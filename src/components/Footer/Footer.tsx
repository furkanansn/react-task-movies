import React from 'react';
import './Footer.scss';
import config from "../../config";

const Footer: React.FC = () => {
    const appName = config.appName;
    return (
        <div className='footer'>
            <div>{appName}</div>
            <div>© 2024 {appName}. All rights reserved.</div>
        </div>
    );
};

export default Footer;
