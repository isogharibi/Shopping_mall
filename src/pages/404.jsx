import React from 'react';

import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            404 - Page Not Found :(
            <Link to='/'> Back to Homepage </Link>
        </>
    );
};

export default PageNotFound;