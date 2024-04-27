'use client'
import getAllUser from '@/action/getAllUser';
import UserFilter from '@/components/admin/UserFilter';
import Users from '@/components/admin/Users';
import useDebounce from '@/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const AllUser = () => {
    const [searchValue,setSearchValue] = useState('')
    const { data, isLoading } = useQuery({ queryKey: ['alluser'], queryFn: async () => getAllUser().then(res => res) })


    const handleFilter = (value) => {
        console.log(value)
    }
    const handleSearch = value => {
        setSearchValue(value)
    }

    const searchDebounceValue = useDebounce(searchValue)

    


    return (
        <div className='w-full h-full'>
            <UserFilter searchValue={searchValue}  handleFilter={handleFilter} handleSearch={handleSearch} />
            <Users users={data} isLoading={isLoading} />
        </div>
    );
};

export default AllUser;