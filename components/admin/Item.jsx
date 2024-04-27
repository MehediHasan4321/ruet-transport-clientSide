'use client'

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Item = ({ name, url, icon: Icon }) => {
    const router = useRouter()
    const pathName = usePathname()
    const isActive = pathName === url



    return (
        <div
            onClick={() => router.push(url)}
            className={!isActive ? 'w-full px-2 py-2 bg-green-400  text-white rounded-md cursor-pointer'
                :
                'w-full px-2 py-2 bg-white text-green-500 rounded-md  cursor-pointer'}>
            <div className='flex justify-left items-center gap-x-4'>
                <Icon size={25} />
                <h3 className='select-none'>{name}</h3>
            </div>
        </div>
    );
};

export default Item;