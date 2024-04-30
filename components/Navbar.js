'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';


const Navbar = ({ session }) => {
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
                <Link href={'/'} className='font-semibold text-md hover:text-neutral-50'>Home</Link>
                {session?.user && <Link href={'/admin/dashboard'} className='font-semibold text-md hover:text-neutral-50'>Dashboard</Link>}
                {!session && <Link href={'/auth/login'} className='font-semibold text-md hover:text-neutral-50'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;