import React, { use } from 'react';
import RecentUserCard from './RecentUserCard';

import getAllUser from '@/action/getAllUser';
import AddAdmin from './AddAdmin';

const RecentUser = async() => {

    const users = await getAllUser()
  
    return (
        <div className='mt-5 p-2 space-y-4'>
            <h1 className='text-2xl font-semibold text-white'>Recent User</h1>
            <div className='w-full grid grid-cols-5 justify-between gap-5 overflow-hidden bg-white'>
                {users.slice(0,4).map(user=><RecentUserCard key={user.id}  name={user.name} email={user.email} role={user.role} />)}
                <AddAdmin/>
            </div>
        </div>
    );
};

export default RecentUser;