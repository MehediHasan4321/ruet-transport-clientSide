'use client'

import React from 'react';
import Seat from './Seat';

const SeatPattan = ({ direction, seats = [], handleSeatInfo }) => {


    if (direction === 'one by two' && seats.length === 30) return <OneByTwoSeatPlan seat={seats} handleSeatInfo={handleSeatInfo} />
    if (direction === 'two by two' && seats.length === 36) return <TwoByTwoSeatPlan twoByTwoSeat={seats} handleSeatInfo={handleSeatInfo} />

};


const OneByTwoSeatPlan = ({ seat = [], handleSeatInfo }) => {

    return (
        <div className='w-[320px] h-fit border-[1px] border-white rounded-md p-1 grid grid-cols-5 gap-x-3 bg-green-500'>
            <div className='col-span-2 h-full  grid grid-cols-1 grid-rows-10 gap-x-3 gap-y-5 p-2'>
                <Seat info={seat[0]} onClick={handleSeatInfo} />
                <Seat info={seat[3]} onClick={handleSeatInfo} />
                <Seat info={seat[6]} onClick={handleSeatInfo} />
                <Seat info={seat[9]} onClick={handleSeatInfo} />
                <Seat info={seat[12]} onClick={handleSeatInfo} />
                <Seat info={seat[15]} onClick={handleSeatInfo} />
                <Seat info={seat[18]} onClick={handleSeatInfo} />
                <Seat info={seat[21]} onClick={handleSeatInfo} />
                <Seat info={seat[24]} onClick={handleSeatInfo} />
                <Seat info={seat[27]} onClick={handleSeatInfo} />

            </div>
            <div className='col-span-1' />

            <div className={'col-span-2 h-full  grid grid-cols-2 grid-rows-10 gap-x-3 gap-y-5 p-2'}>
                <Seat info={seat[1]} onClick={handleSeatInfo} />
                <Seat info={seat[2]} onClick={handleSeatInfo} />
                <Seat info={seat[4]} onClick={handleSeatInfo} />
                <Seat info={seat[5]} onClick={handleSeatInfo} />
                <Seat info={seat[7]} onClick={handleSeatInfo} />
                <Seat info={seat[8]} onClick={handleSeatInfo} />
                <Seat info={seat[10]} onClick={handleSeatInfo} />
                <Seat info={seat[11]} onClick={handleSeatInfo} />
                <Seat info={seat[13]} onClick={handleSeatInfo} />
                <Seat info={seat[14]} onClick={handleSeatInfo} />
                <Seat info={seat[16]} onClick={handleSeatInfo} />
                <Seat info={seat[17]} onClick={handleSeatInfo} />
                <Seat info={seat[19]} onClick={handleSeatInfo} />
                <Seat info={seat[20]} onClick={handleSeatInfo} />
                <Seat info={seat[22]} onClick={handleSeatInfo} />
                <Seat info={seat[23]} onClick={handleSeatInfo} />
                <Seat info={seat[25]} onClick={handleSeatInfo} />
                <Seat info={seat[26]} onClick={handleSeatInfo} />
                <Seat info={seat[28]} onClick={handleSeatInfo} />
                <Seat info={seat[29]} onClick={handleSeatInfo} />
            </div>
        </div>
    )
}

const TwoByTwoSeatPlan = ({ twoByTwoSeat = [], handleSeatInfo }) => {
    const colClass = 'col-span-2 h-full  grid grid-cols-2 grid-rows-10 gap-x-3 gap-y-5 p-2'

    return (
        <div className='w-[320px] h-[550px] border-[1px] border-white rounded-md p-1 grid grid-cols-5 gap-x-3 bg-green-500'>
            <div className={colClass}>
                <Seat info={twoByTwoSeat[0]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[1]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[4]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[5]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[8]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[9]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[12]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[13]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[16]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[17]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[20]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[21]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[24]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[25]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[28]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[29]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[32]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[33]} onClick={handleSeatInfo} />

            </div>
            <div className='col-span-1' />

            <div className={colClass}>
                <Seat info={twoByTwoSeat[2]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[3]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[6]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[7]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[10]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[11]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[14]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[15]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[18]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[19]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[22]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[23]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[26]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[27]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[30]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[31]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[34]} onClick={handleSeatInfo} />
                <Seat info={twoByTwoSeat[35]} onClick={handleSeatInfo} />
            </div>
        </div>
    );
}



export default SeatPattan;