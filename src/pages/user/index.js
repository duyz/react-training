import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default () => {

    const users = useSelector(store => store.user);

    return (
        <>
            {users.map(
                (user, index) => (
                    <div key={index}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </div>
                )
            )}
        </>
    );
};