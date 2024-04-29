'use client'
import { addBus } from '@/action/addBus';
import AddBusForm from '@/components/admin/AddBusForm';
import SeatPattan from '@/components/SeatPattan';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';


const AddBus = () => {
    const [isLoading, setLoading] = useState(false)
    const init = {
        busName: '',
        busStopes: [],
        isAc: false,
        seatPattan: 'two by two',
        busSeat: [],
        
    }
    const [busInfo, setBusInfo] = useState({ ...init })
    
    const handleBusInfo = info => {
        setBusInfo(info)

    }

    const handlePublish = async () => {
        try {
            setLoading(true)
            const res = await addBus(busInfo)


            if(res.insertedId){
                alert('Bus Publish Successfully')
            }
            

        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    

    return (
        <div className='w-full h-full flex justify-center items-center gap-x-10'>
            <div className='w-1/3'>
                <AddBusForm handleBusInfo={handleBusInfo} />
            </div>
            <div className='flex flex-col gap-y-2'>
                <SeatPattan direction={busInfo.seatPattan} seats={busInfo?.busSeat} />
                <Button onClick={handlePublish} variant='custom'>{isLoading?'Publishing....':'Publish'}</Button>
            </div>
        </div>
    );
};


export default AddBus;