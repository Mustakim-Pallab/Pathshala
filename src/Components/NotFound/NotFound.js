import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>
                Error!
                
            </h1>
            <h1>
            The Page you Requested is NOT FOUND
            </h1>
            <p>The requested URL doesn't exists. This is maybe Broken or Removed. Try Again with Correct URL</p>
        </div>
    );
};

export default NotFound;