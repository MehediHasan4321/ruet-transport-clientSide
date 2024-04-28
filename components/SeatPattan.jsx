'use client'

import React from 'react';
import { twoByTwoSeat as two, seatByseatSeat as one } from '@/src/constants'

const SeatPattan = ({ direction, seats =[] }) => {


    if (direction === 'one by two' && seats.length === 30) return <OneByTwoSeatPlan seats={seats} />
    if (direction === 'two by two' && seats.length===36 ) return <TwoByTwoSeatPlan twoByTwoSeat={seats} />

};


const OneByTwoSeatPlan = ({ seat = [] }) => {
    return (
        <div className='w-[320px] h-fit border-[1px] border-white rounded-md p-1 grid grid-cols-5 gap-x-3 bg-green-500'>
            <div className='col-span-2 h-full  grid grid-cols-1 grid-rows-10 gap-x-3 gap-y-5 p-2'>
                <Seat info={seat[0]} />
                <Seat info={seat[3]} />
                <Seat info={seat[6]} />
                <Seat info={seat[9]} />
                <Seat info={seat[12]} />
                <Seat info={seat[15]} />
                <Seat info={seat[18]} />
                <Seat info={seat[21]} />
                <Seat info={seat[24]} />
                <Seat info={seat[27]} />

            </div>
            <div className='col-span-1' />

            <div className={'col-span-2 h-full  grid grid-cols-2 grid-rows-10 gap-x-3 gap-y-5 p-2'}>
                <Seat info={seat[1]} />
                <Seat info={seat[2]} />
                <Seat info={seat[4]} />
                <Seat info={seat[5]} />
                <Seat info={seat[7]} />
                <Seat info={seat[8]} />
                <Seat info={seat[10]} />
                <Seat info={seat[11]} />
                <Seat info={seat[13]} />
                <Seat info={seat[14]} />
                <Seat info={seat[16]} />
                <Seat info={seat[17]} />
                <Seat info={seat[19]} />
                <Seat info={seat[20]} />
                <Seat info={seat[22]} />
                <Seat info={seat[23]} />
                <Seat info={seat[25]} />
                <Seat info={seat[26]} />
                <Seat info={seat[28]} />
                <Seat info={seat[29]} />
            </div>
        </div>
    )
}

const TwoByTwoSeatPlan = ({twoByTwoSeat=[]}) => {
    const colClass = 'col-span-2 h-full  grid grid-cols-2 grid-rows-10 gap-x-3 gap-y-5 p-2'

    return (
        <div className='w-[320px] h-[550px] border-[1px] border-white rounded-md p-1 grid grid-cols-5 gap-x-3 bg-green-500'>
            <div className={colClass}>
                <Seat info={twoByTwoSeat[0]} />
                <Seat info={twoByTwoSeat[1]} />
                <Seat info={twoByTwoSeat[4]} />
                <Seat info={twoByTwoSeat[5]} />
                <Seat info={twoByTwoSeat[8]} />
                <Seat info={twoByTwoSeat[9]} />
                <Seat info={twoByTwoSeat[12]} />
                <Seat info={twoByTwoSeat[13]} />
                <Seat info={twoByTwoSeat[16]} />
                <Seat info={twoByTwoSeat[17]} />
                <Seat info={twoByTwoSeat[20]} />
                <Seat info={twoByTwoSeat[21]} />
                <Seat info={twoByTwoSeat[24]} />
                <Seat info={twoByTwoSeat[25]} />
                <Seat info={twoByTwoSeat[28]} />
                <Seat info={twoByTwoSeat[29]} />
                <Seat info={twoByTwoSeat[32]} />
                <Seat info={twoByTwoSeat[33]} />

            </div>
            <div className='col-span-1' />

            <div className={colClass}>
                <Seat info={twoByTwoSeat[2]} />
                <Seat info={twoByTwoSeat[3]} />
                <Seat info={twoByTwoSeat[6]} />
                <Seat info={twoByTwoSeat[7]} />
                <Seat info={twoByTwoSeat[10]} />
                <Seat info={twoByTwoSeat[11]} />
                <Seat info={twoByTwoSeat[14]} />
                <Seat info={twoByTwoSeat[15]} />
                <Seat info={twoByTwoSeat[18]} />
                <Seat info={twoByTwoSeat[19]} />
                <Seat info={twoByTwoSeat[22]} />
                <Seat info={twoByTwoSeat[23]} />
                <Seat info={twoByTwoSeat[26]} />
                <Seat info={twoByTwoSeat[27]} />
                <Seat info={twoByTwoSeat[30]} />
                <Seat info={twoByTwoSeat[31]} />
                <Seat info={twoByTwoSeat[34]} />
                <Seat info={twoByTwoSeat[35]} />
            </div>
        </div>
    );
}

const Seat = ({ info }) => {
    return (
        <div className='w-10 h-10 bg-white text-green-500 rounded-lg cursor-pointer flex justify-center items-center transition hover:scale-110'>
            {info.seatName}
        </div>
    )
}

export default SeatPattan;