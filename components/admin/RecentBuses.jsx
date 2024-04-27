
import React from 'react';
import { Button } from '../ui/button';
import getAllBus from '@/action/getAllBuses';

const RecentBuses = async() => {
    const buses = await getAllBus()
    
    
    return (
        <div className='mt-5 p-2 space-y-4 w-full'>
            <h1 className='text-2xl font-semibold text-white'>On The Ways Bus</h1>
            <div className='max-h-[250px] overflow-y-auto rounded-md'>
                <table class=" table-fixed w-full text-sm text-left rtl:text-right">
                    <thead class="text-xs text-white uppercase bg-green-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                               Bus No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bus Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                AC/NON-AC
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Toala Seat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Booked
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Free Seat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bus Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bus Roads
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buses.map(bus=><TableRow key={bus._id} bus={bus} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};



const TableRow = ({bus}) => {
    const {busName,busSeat,from,stopes,_id,isAC='non AC'} = bus
    const booked = busSeat.filter(item=>item.isBooked).length
    const bookedLeft = busSeat.length - booked
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {'001'}
            </th>
            <td className="px-6 py-4 uppercase">
                {busName}
            </td>
            <td className="px-6 py-4 uppercase">
                {isAC}
            </td>
            <td className="px-6 py-4">
                {busSeat.length}
            </td>
            <td className="px-6 py-4">
                {booked}
            </td>
            <td className="px-6 py-4">
               {bookedLeft>0?`${bookedLeft} available` :'All Booked'}
            </td>
            <td className="px-6 py-4">
               Active
            </td>
            <td className="px-6 py-4">
                <Button>See All</Button>
            </td>
            <td className="px-6 py-4">
               <Button variant='custom'>View</Button>
            </td>
        </tr>
    )
}


export default RecentBuses;