import React from 'react';
import auth from '../Common/Auth';

const Landing = (props) => {
    return (
        <div>
            Landing Page
            <button onClick={() => auth.login(() => {
                props.history.push('/home');
            })}>
                Login
            </button>
        </div>
    )
}

export default Landing
