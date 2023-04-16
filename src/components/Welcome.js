import React from 'react';

const Welcome = (props) => {
    const {isLoggedIn, user} = props;

    return (
    <> 
    {isLoggedIn ? (
    <h1 className='headerbody'> Hello, {user.username}! </h1>
    ) : (
        <h1 className='headerbody'>Please log in to get started!</h1>
    )}
    </>
    );
};

export default Welcome;