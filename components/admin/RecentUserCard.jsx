import Image from 'next/image';
import React from 'react';

const RecentUserCard = ({ name, email, role, avater }) => {
    return (
        <div className='w-fit h-[10rem] flex flex-col justify-center items-center gap-y-3 px-2'>
            <Image src={avater ? avater : '/placeholder.jpeg'} height={60} width={60} className='rounded-full object-cover border-[1px] border-green-500' alt='Image'/>
            <div className='flex flex-col items-center'>
                <h3 className='text-xl font-semibold '>
                    {name}
                </h3>
                <h3 className='text-sm'>{email}</h3>
                <div className='text-[12px] bg-green-500 text-white rounded-md px-2'>{role}</div>
            </div>
        </div>
    );
};

export default RecentUserCard;