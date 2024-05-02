import CardWrapper from '@/components/auth/CardWrapper';
import React from 'react';

const page = () => {
    return (
        <CardWrapper headerLabel={"Something Went Wrong!!"} backButtonLabel={'Back To Login!!'} backButtonHref={'/auth/login'}>

        </CardWrapper>
    );
};

export default page;