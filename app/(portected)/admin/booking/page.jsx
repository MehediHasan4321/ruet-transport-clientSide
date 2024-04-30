'use client'
import getAllBookings from '@/action/getAllBookings';
import AllBooking from '@/components/admin/AllBooking';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Page = () => {

    const {data,isLoading,refetch} = useQuery({queryKey:['allbooking'],queryFn:getAllBookings})

    return (
        <div>
           <AllBooking bookings={data}/>
        </div>
    );
};




export default Page;