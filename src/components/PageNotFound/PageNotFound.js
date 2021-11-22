import React from 'react';
import pagenotfound from '../image/404.png'
import ('./PageNotFound.css')

const PageNotFound = () => {
    return (
        <div>
            <img id='notFound' src={pagenotfound} alt=""></img>
        </div>
    );
};

export default PageNotFound;