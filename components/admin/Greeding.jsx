

import { auth } from '@/auth';
import React from 'react';

const Greeding = async() => {
    const session = await auth()
    const userName = session.user?.name
    return (
        <div className='w-full text-center bg-green-500 space-y-6 py-2'>
             <h1 className='text-5xl text-white'>Hello, {userName}! Good Mornig.... </h1>
             <p className='text-md text-white'>Welcome To RUET Transport Admin Dashboard</p>   
        </div>
    );
};

export default Greeding;