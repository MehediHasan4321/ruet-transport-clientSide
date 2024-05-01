'use client'
import AllBooking from '@/components/admin/AllBooking';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Page = () => {

    const {data,isLoading,refetch} = useQuery({queryKey:['allbooking'],queryFn:async()=>{
        const res = await fetch('http://localhost:8000/booking')
        const data = res.json()
        return data
    }})
    
    return (
        <div>
           <AllBooking bookings={data}/>
        </div>
    );
};




export default Page;