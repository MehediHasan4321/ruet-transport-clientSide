import React from 'react';
import { Button } from '../ui/button';
import logOut from '@/action/logOut';


const SignOut = () => {
    return (
        <div onClick={async()=>await logOut()}>
            <Button variant={'custom'} className="w-full flex justify-center gap-x-6">Sign Out</Button>
        </div>
    );
};

export default SignOut;