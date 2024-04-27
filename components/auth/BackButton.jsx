import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const BackButton= ({href,label}) => {
    return (
        <Button
        className=' font-normal w-full text-white'
        variant={'link'}
        asChild
        size={'sm'}
        >
           <Link href={href}>{label}</Link>
        </Button>
    );
};


export default BackButton;