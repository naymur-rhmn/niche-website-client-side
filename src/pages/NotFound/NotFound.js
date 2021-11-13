import React from 'react';

const notfound = {
    height: '100vh',
    background: `url('https://i.stack.imgur.com/6M513.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const NotFound = () => {
    return (
        <div style={notfound}>
        </div>
    );
};

export default NotFound;