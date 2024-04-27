'use client'

import React from 'react';
import { Button } from '../ui/button';

const Users = ({ users, isLoading }) => {

    if (isLoading) return <h1>Loading....</h1>


    return (
        <div className=' overflow-y-auto'>
            <table class=" table-fixed w-full text-sm text-left rtl:text-right">
                <thead class="text-xs text-white uppercase bg-green-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Avater
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Update Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <TableRow key={user._id} {...user} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

const TableRow = ({ name, email, role, avater, phone, }) => {
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {'001'}
            </th>
            <td className="px-6 py-4 ">
                {'avater'}
            </td>
            <td className="px-6 py-4 ">
                {name}
            </td>
            <td className="px-6 py-4 ">
                {email}
            </td>
            <td className="px-6 py-4 ">
                {role}
            </td>
            <td className="px-6 py-4 ">
            {phone || '01722649306'}
            </td>
            <td className="px-6 py-4">
                <Button variant="outline">Update</Button>
            </td>
            <td className="px-6 py-4">
                <Button variant='default'>Delete</Button>
            </td>
        </tr>
    )
}

export default Users;