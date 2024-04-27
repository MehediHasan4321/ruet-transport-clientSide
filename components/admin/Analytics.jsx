import React from 'react';
import AnalyticsCard from './AnalyticsCard';

const Analytics = () => {
    return (
        <div className='p-2 space-y-4'>
            <h1 className='text-2xl font-semibold text-white'>Analytics</h1>
            <div className='w-full grid grid-cols-3 gap-5 overflow-hidden'>

                <AnalyticsCard analyticsName='Booking' parcentage='85' number='150' color='pink' />
                <AnalyticsCard analyticsName='All User' parcentage='70' number='1520' color='red' />
                <AnalyticsCard analyticsName='All Bus' parcentage='90' number='120' color='green' />
            </div>
        </div>
    );
};

export default Analytics;