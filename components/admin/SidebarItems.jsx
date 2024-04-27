import { adminNavbar } from '@/src/constants';
import React from 'react';
import Item from './Item';

const SidebarItems = () => {
    return (
        <div className='w-full h-auto flex flex-col gap-y-4 mt-6 '>
            {adminNavbar.map(item=><Item key={item.name} {...item}/>)}
        </div>
    );
};

export default SidebarItems;