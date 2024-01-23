// PageNotFound.tsx
import React from 'react';
import './PageNotFound.scss';

const PageNotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for might be in another castle.</p>
        </div>
    );
};

export default PageNotFound;
