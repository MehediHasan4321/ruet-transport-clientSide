'use client'
import { PieChart } from '@mui/x-charts';
import React from 'react';

const AnalyticsCard = ({ analyticsName = "Analytics", number = "000", color = 'orange', parcentage = '00' }) => {
    return (
        <div className='w-full h-[10rem] border-[1px] bg-white rounded-lg  flex justify-around  gap-x-6 cursor-pointer hover:shadow-lg' >
            <div className='flex flex-col h-full justify-center items-center gap-y-3'>
                <h2 className='text-2xl font-semibold '>{analyticsName}</h2>
                <h3 className='text-xl font-semibold'>Total: {number}</h3>
            </div>
            <div className='w-fit h-full'>
                <PieChart
                    series={[
                        {
                            color:['green','orange','red'],
                            data: [
                                { id: 0, value: 10, label: 'Active' },
                                { id: 1, value: 25, label: 'Pandding' },
                                { id: 2, value: 20, label: 'Cancel' },
                            ],
                        },
                    ]}
                    width={300}
                    height={150}
                />
            </div>

        </div>
    );
};

export default AnalyticsCard;