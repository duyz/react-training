import React from 'react';

export default ({ match }) => {



    return (
        <>
            <p>User ID : {match.params.userId}</p>
        </>
    );
};