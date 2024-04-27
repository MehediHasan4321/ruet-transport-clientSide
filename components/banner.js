'use client'

import React, { useState } from 'react';

const HomeBanner = () => {
    const [searchValue, setSearchValue] = useState('')


    return (
        <div className='w-full min-h-[50vh] bg-green-200 flex justify-center items-center'>
            <div className='w-1/2 h-full'>
                <input
                    className='w-full py-3 rounded-md px-2 outline-none bg-white '
                    placeholder='Search Your Bus'
                    value={searchValue}
                    onChange={(e => setSearchValue(e.target.value))}
                />
            </div>
        </div>
    );
};

export default HomeBanner;