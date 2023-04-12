import React from 'react';

const Welcome = (props) => {
    const {isLoggedIn, user} = props;

    return (
    <> 
    {isLoggedIn ? (
    <h1> hello, {user.username}! Welcome back</h1>
    ) : (
        <h1>please log in</h1>
    )}
    </>
    );
};

export default Welcome;