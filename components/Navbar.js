'use client'
import { navbar } from '@/src/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const router = useRouter()
  
    return (
        <div className='container mx-auto w-full h-[80px] flex justify-between it items-center text-white bg-green-500 px-3'>
            <h1
                onClick={() => router.push('/')}
                className='text-3xl font-semibold cursor-pointer'
            >
                RUET
            </h1>
            <div className='flex justify-between items-center gap-x-4'>
                {
                    navbar.map(item => <Link href={item.url} key={item.name} className='font-semibold text-md hover:text-neutral-50'>{item.name}</Link>)
                }
                <button onClick={()=>router.push('/auth/login')} className='font-semibold text-md hover:text-neutral-50'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;