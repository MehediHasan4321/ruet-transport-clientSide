'use client'

import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import { FaGithub } from 'react-icons/fa';
import { Button } from '../ui/button';

const Social = () => {
    return (
        <div className='w-full flex items-center gap-x-2'>
            <Button 
            onClick={()=>{console.log('Google Login')}}
            size={'lg'}
            variant={'outline'}
            className='w-full '>
                <FcGoogle size={25}/>
            </Button>
            <Button 
            onClick={()=>{console.log('Github login')}}
            variant={'outline'}
            size={'lg'}
            className='w-full'>
                <FaGithub size={25}/>
            </Button>
        </div>
    );
};

export default Social;