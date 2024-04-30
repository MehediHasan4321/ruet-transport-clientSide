'use client'

import React from 'react';
import { Button } from '../ui/button';

const AllBooking = ({ bookings = [] }) => {
    console.log(bookings)
    return (
        <div className=' overflow-y-auto'>
            <table class=" table-fixed w-full text-sm text-left rtl:text-right">
                <thead class="text-xs text-white uppercase bg-green-400">
                    <tr>
                    <th scope="col" className="px-6 py-3">
                            NO
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Bus
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Seat
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Distination
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.length === 0 && <h1 className='text-center text-xl text-white my-5'> NO Bookings Found</h1>
                    }
                    {
                        bookings.map(item => <TableRow key={item._id} {...item} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

const TableRow = ({ BusName, status,user, seat }) => {
    const {name, phone, distination,} = user || {}

    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {'001'}
            </th>
            <td className="px-6 py-4 ">
                {BusName}
            </td>
            <td className="px-6 py-4 ">
                {seat}
            </td>
            <td className="px-6 py-4 ">
                {name}
            </td>
            <td className="px-6 py-4 ">
                {phone}
            </td>
            <td className="px-6 py-4 ">
                {distination}
            </td>
            <td className="px-6 py-4 ">
                {status}
            </td>
            <td className="px-6 py-4">
                <Button variant='default'>Delete</Button>
            </td>
        </tr>
    )
}


export default AllBooking;