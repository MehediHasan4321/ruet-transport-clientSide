'use client'

import bookedSeat from '@/action/bookSeat';
import { useStoreActions } from 'easy-peasy';
import React from 'react';
import Swal from 'sweetalert2';

const Seat = ({ seat, busId,refetch }) => {
    const { seatName, seatId, isBooked } = seat
    const { onClose } = useStoreActions(action => action.booking)
    const userInfo = {
        name: "Mehedi Hasan",
        email: 'mehedi@gmail.com',
        createdAt: new Date()
    }

    const handleBooked = (seatId, busId, userInfo) => {

        const busSeat = {
            seatName: seat.seatName,
            seatId,
            isBooked: true,
            bookingUser: userInfo
        }

        onClose()

        Swal.fire({
            title: "Are you sure?",
            text: "You are agree to book this seat",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Booked it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const data = bookedSeat(seatId, busId, busSeat)
                data.then(res => {
                    if (res.acknowledged && res.modifiedCount > 0) {
                        
                        Swal.fire({
                            title: "Booked",
                            text: "You have booked a Seat",
                            icon: "success"
                        });
                        refetch()
                    }else{
                        Swal.fire({
                            title:"Failed",
                            text:"Failed to booked the seat",
                            icon:'error'
                        })
                    }
                })




            }
        });
    }

    return (
        <div
            onClick={() => handleBooked(seatId, busId, userInfo)}
            className={isBooked ? `w-20  h-10 border-neutral-400 rounded-sm bg-green-200 flex items-center justify-center cursor-not-allowed ` : `w-20  h-10 border-neutral-400 rounded-sm bg-neutral-500 flex items-center justify-center cursor-pointer`}>

            {
                isBooked ? <h3 className='text-md text-center'>Booked</h3> : <h3 className='text-md text-center text-white'>{seatName}</h3>
            }
        </div>
    );
};

export default Seat;