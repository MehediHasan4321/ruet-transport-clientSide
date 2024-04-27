'use client'
import AddBusForm from '@/components/admin/AddBusForm';
import React, { useState } from 'react';

const AddBus = () => {
    const init = {
        busName: 'Bus Name',
        busRoads: [],
        isAc: false,
        totalSeat: 0
    }
    const [busInfo, setBusInfo] = useState({ ...init })
    const handleBusInfo = info => {
        console.log('from handleBusInfo',info)
      
    }
    return (
        <div className='w-full h-full flex justify-around gap-5'>
            <div className='w-1/2'>
                <AddBusForm handleBusInfo={handleBusInfo} />
            </div>
            <div>
                <h1 className='text-xl font-semibold  text-white'>Bus Info</h1>
                <div>
                    <h2>{busInfo.busName}</h2>
                </div>
            </div>
        </div>
    );
};

export default AddBus;