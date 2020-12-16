import React from 'react';
import { Link } from 'react-router-dom';

const MyLink = ({ path, title, className }) => {

    function abc() {
        let customClass = 'link';

        if (className) {
            customClass = customClass + ' ' + className;
        }

        return customClass;
    }

    

    return (
        <Link
            to={path}
            className={abc()}>
            <span>{title}</span>
        </Link>
    );
};

export default () => {
    return (
        <header>
            {/* <Link to="/" >Home</Link>
            <Link to="/setting" >Setting</Link>
            <Link to="/user" >User</Link> */}

            <MyLink path="/" title="Home" />
            <MyLink path="/setting" title="Setting" className="link-color-1" />
            <MyLink path="/user" title="User" />
        </header>
    );
};