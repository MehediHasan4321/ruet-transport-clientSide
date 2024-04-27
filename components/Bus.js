'use client'


import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';
import { Button } from './ui/button';

const Bus = ({ _id, busName, busSeat, from, stopes }) => {
    const reemainingSeat = busSeat.filter(item => item.isBooked === false)
    
    const {booking:bookingAction,busSeat:busSeatAction,busId} = useStoreActions(action=>action)
    


    

    return (
        <div className='w-full min-h-32 border rounded-md shadow-sm p-3 space-y-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl text-left font-semibold'>{busName}</h1>
                <h3 className='text-sm'>Available Seat : <span className='text-md font-semibold'>{reemainingSeat.length}</span></h3>
                <h3 className='text-sm'>Starting Point : <span className='text-md font-semibold'>{stopes[0].distinaion} : {stopes[0].time}</span></h3>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-sm font-semibold'>Bus Stopes</h1>
                    <div className='w-[250px] border-1 max-h-32 overflow-y-auto'>
                        {
                            stopes.map(item => (
                                <div className='flex justify-between items-center text-sm'>
                                    <h3 className=''>{item.distinaion}</h3>
                                    <p>{item.time}</p>

                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <button onClick={busSeatAction.onOpen}  className='px-4 py-2 border-none outline-none bg-green-500 text-white rounded-md'>View Seat Plan</button>
                    <Button 
                    disabled={reemainingSeat.length===0}
                    onClick={()=>{
                        bookingAction.onOpen()
                        busId.getBusId(_id)
                    }}
                    className='px-4 py-2 border-none outline-none bg-green-500 text-white rounded-md disabled:cursor-not-allowed'
                    >
                       
                       {reemainingSeat.length===0?'All Are Booked':'Book A Seat'}
                       </Button>
                </div>
            </div>

        </div>
    );
};

export default Bus;