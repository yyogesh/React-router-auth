import React from 'react'
import auth from '../Common/Auth';

const Home = (props) => {
    return (
        <div>
            Home Component
            <button onClick={() => auth.logout(() => {
                props.history.push('/');
            })}>
                Logout
            </button>
        </div>
    )
}

export default Home
