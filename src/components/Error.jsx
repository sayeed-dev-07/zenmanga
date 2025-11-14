import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen flex items-center justify-center font-fira text-3xl flex-col gap-y-3'> 
        <p className='text-3xl'>Looks like You are lost..</p>
            <Link className='underline text-xl' to='/'>CLick here To go to Home page</Link>
        </div>
    );
};

export default Error;