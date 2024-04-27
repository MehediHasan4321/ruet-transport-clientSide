'use client'

import React from 'react';
;

const UserFilter = ({handleFilter,handleSearch,searchValue}) => {
    const filter = ['All', 'Admin', 'user']
    

   
   

   

    return (
        <div className='w-full bg-green-500 py-3 flex justify-between items-center px-2'>
            <div className='w-1/4'>
                <input
                    onChange={e=>handleSearch(e.target.value)}
                    className='w-full outline-none border-none px-2 py-3 rounded-md'
                    placeholder='Search A User By Name'
                    value={searchValue}
                />
            </div>

            <div>
                <select
                    onChange={e => handleFilter(e.target.value)}
                    class="bg-white w-[200px]  text-green-500 text-md uppercase rounded-lg py-3 px-6">
                    {
                        filter.map(item => <option key={item} disabled={item === 'All'} value={item}>{item}</option>)
                    }
                </select>
            </div>

        </div>
    );
};

export default UserFilter;