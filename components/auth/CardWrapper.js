import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Header from './Header';
import BackButton from './BackButton';
import Social from './Social';

const CardWrapper = ({ headerLabel, children, backButtonHref, backButtonLabel, socialLogin }) => {
    return (
        <Card className='w-[400px] shadow-md bg-green-500'>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {socialLogin && <CardFooter>
                <Social />
            </CardFooter>}
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    );
};

export default CardWrapper;