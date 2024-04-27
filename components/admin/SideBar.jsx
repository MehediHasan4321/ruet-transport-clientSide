
'use client'
import { FaSignOutAlt } from "react-icons/fa";
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import SidebarItems from "./SidebarItems";
import SignOut from "./SignOut";



const SideBar = ({ user }) => {
    const {name,email,avater,role='admin'} = user
    const firstWord = name.split(' ')[0].slice(0,1)
    const lastWord = name.split(' ')[1]?.slice(0,1)
   
    return (
        <div className='w-[300px] bg-green-500 text-white h-full p-2 flex flex-col justify-between space-y-6'>
            <div className='flex flex-col gap-y-4'>
                <div className='w-full p-2'>
                    <h1 className='text-4xl font-semibold text-center'>RUET <span className='text-sm text-slate-500'>DASHBOARD</span> </h1>

                </div>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-1/2 h-[9rem] rounded-full border-[1px] border-white relative' >
                    {
                        avater? <Image className="w-full h-full rounded-full " src={'/placeholder.jpeg'} fill  alt="Avater"/>
                        :
                        <div className="w-full h-full flex justify-center items-center text-6xl">
                            {firstWord}{lastWord}
                        </div>
                    }
                        <span className="bg-amber-400 absolute right-0 bottom-0 px-1 text-sm rounded-md uppercase ">{role}</span>
                    </div>
                </div>
                <SidebarItems/>
            </div>
            <SignOut/>
        </div>
    );
};

export default SideBar;