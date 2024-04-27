
import Analytics from '@/components/admin/Analytics';
import RecentBuses from '@/components/admin/RecentBuses';
import RecentUser from '@/components/admin/RecentUser';
import React from 'react';

const Dashboard = async() => {

    

    return (
        <div className='w-full h-full bg-green-400'>
            <Analytics/>
            <RecentUser/>
            <RecentBuses/>
        </div>
    );
};

export default Dashboard;