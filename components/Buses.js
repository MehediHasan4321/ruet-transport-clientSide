'use client'

import { useQuery } from '@tanstack/react-query';
import Bus from './Bus';
import getAllBus from '@/action/getAllBuses';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Buses = () => {
    const { data, isLoading, error } = useQuery({ queryKey: ['allbuses'], queryFn: getAllBus })

    if (data) {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                {data.map(bus => <Bus key={bus._id} {...bus} />)}
            </div>
        );
    }



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            <Skeleton count={5} />
            <Skeleton count={5} />
            <Skeleton count={5} />
            <Skeleton count={5} />
        </div>
    )
};

export default Buses;