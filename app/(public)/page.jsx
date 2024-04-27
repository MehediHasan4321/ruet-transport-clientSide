import Buses from '@/components/Buses';
import HomeBanner from '@/components/banner';
import React from 'react';

const Page = () => {
    return (
        <div className='container mx-auto'>
            <HomeBanner />
            <Buses />
        </div>
    );
};

export default Page;