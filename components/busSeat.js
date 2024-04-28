'use client'

import React, { useEffect, useState } from 'react';
import Seat from './Seat';
import { useQuery } from '@tanstack/react-query';
import getSeatsByBusId from '@/action/getSeatsByBusId';
import SeatPattan from './SeatPattan';

const BusSeat = ({busId}) => {
    

    const {isPending,error,data:seats,refetch} = useQuery({queryKey:['seats'],queryFn:()=>getSeatsByBusId(busId)})
    
    if(isPending){
        return <h1>Loading....</h1>
    }

    if(error) {
        return <h1>Something went wrong</h1>
    }
    
    // return (
    //     <div className='w-full h-full grid grid-cols-4 gap-5 px-5'>
    //         {
    //             seats.map((seat,index)=><Seat key={index} seat={seat} busId={busId} refetch={refetch}/>)
    //         }
    //     </div>
    // );


    return(
        <div className='w-full justify-center'>
            <SeatPattan direction={'two by two'}/>
        </div>
    )
};

export default BusSeat;