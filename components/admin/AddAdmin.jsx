'use client'

import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddAdmin = () => {
    return (
        <div className='w-fit h-full flex flex-col justify-center items-center cursor-pointer group'>
            <FaPlus size={50} className='transition group-hover:scale-110'/>
            <h1>Add An Admin</h1>
        </div>
    );
};

export default AddAdmin;