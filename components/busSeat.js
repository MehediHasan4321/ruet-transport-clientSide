'use client'
import { useQuery } from '@tanstack/react-query';
import SeatPattan from './SeatPattan';
import { Input } from './ui/input';
import { useState } from 'react';
import { Button } from './ui/button';
import getSeatsByBusId from '@/action/getSeatsByBusId';
import { addBooking, addToBookingTable } from '@/action/booking';


const BusSeat = ({ busId }) => {
    const initValue = {
        name: '',
        phone: '',
        distination: '',
        seatId: '',
        seatName: ''
    }
    const [isOpen, setIsOpen] = useState(false)
    const [bookingInfo, setBookingInfo] = useState({ ...initValue })
    const [isBookingLoading, setIsBookingLoading] = useState(false)


    const { isPending, error, data, refetch } = useQuery({ queryKey: ['seats'], queryFn: () => getSeatsByBusId(busId) })

    const handleSeatInfo = info => {
        setIsOpen(true)
        setBookingInfo(prev => ({ ...prev, seatId: info.seatId, seatName: info.seatName }))

    }






    if (isPending) {
        return <h1>Loading....</h1>
    }

    if (error) {
        return <h1>Something went wrong</h1>
    }

    const confirmBooking = async (bookingInfo) => {
        const { name, seatId, seatName, phone, distination } = bookingInfo

        if (!name || !seatId || !seatName || !phone) {
            return alert('Some requird fieds are missing')
        }

        const requestBody = {
            seatId,
            busSeat: {
                seatName,
                seatId,
                isBooked: true,
                bookingUser: { name, phone, distination }
            }

        }

        const bookingTable = {
            busId,
            seatId,
            seatName,
            busName:data?.busName,
            user: {
                name,
                phone,
                distination
            }
        }


        setIsBookingLoading(true)
        try {
            await addBooking(requestBody, busId).then(res => {
                if (res.acknowledged && res.modifiedCount) {
                    addToBookingTable(bookingTable).then(res=>{
                        return res
                    })
                    alert('Booking Confirmed!!')
                    setBookingInfo({ ...initValue })
                    refetch()
                    setIsOpen(false)
                }
            })

        } catch (error) {
            alert(error)
        } finally {
            setIsBookingLoading(false)
        }


    }

    return (
        <div className='w-full flex justify-center relative'>
            {
                isOpen && <div className='absolute top-0 left-0 w-full h-full z-30 flex justify-center items-center bg-green-500/50'>
                    <div className='w-3/4 h-fit border bg-green-500/90 p-2'>
                        <div className='flex flex-col gap-y-2'>
                            <Input required onChange={e => setBookingInfo(prev => ({ ...prev, name: e.target.value }))} name='name' value={bookingInfo.name} placeholder='Enter Your Name' type='text' />
                            <Input required onChange={e => setBookingInfo(prev => ({ ...prev, phone: e.target.value }))} name='phone' value={bookingInfo.phone} placeholder='Enter Your Number' type='text' />
                            <select required className='w-full py-2 bg-white rounded-md text-center' value={bookingInfo.distination} onChange={e => setBookingInfo(prev => ({ ...prev, distination: e.target.value }))} >
                                {
                                    data?.stopes.map(item => <option key={item.distination} value={item.distination} >{item.distination} -- {item.time} </option>)
                                }
                            </select>
                            <div className='w-full flex justify-between items-center '>
                                <Button disabled={isBookingLoading} onClick={() => setIsOpen(false)}>Cancel</Button>
                                <Button disabled={isBookingLoading} onClick={() => confirmBooking(bookingInfo)}>{isBookingLoading ? 'Processing....' : 'Confirm Booking'}</Button>

                            </div>
                        </div>
                    </div>
                </div>
            }
            <SeatPattan direction={data?.pattan} seats={data?.seats} handleSeatInfo={handleSeatInfo} />
        </div>
    )
};

export default BusSeat;