'use client'

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login = () => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })
    const [isError, setIsError] = useState('')

    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await signIn('credentials', { email: formValue.email, password: formValue.password, redirect: false })
            if (res.ok === false) {
                setIsError('Invalid Credential')
                return
            }
            console.log(res)
            router.push('/')
        } catch (error) {
            console.log('login error', error)
        }
        finally{()=>{
            
        }}

    }

    return (
        <div className='container mx-auto flex items-center justify-center h-[80vh]'>
            <div className='w-[450px] border-[1px] bg-green-500 border-neutral-100 p-6'>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-y-4'
                >
                    <input
                        type='email'
                        value={formValue.email}
                        onChange={(e) => setFormValue(prev => ({ ...prev, email: e.target.value }))}
                        placeholder='Enter Your Email'
                        required
                        className='w-full px-2 py-2 outline-none border-[1px] border-neutral-50 rounded-sm'
                    />
                    <input
                        type='password'
                        value={formValue.password}
                        onChange={e => setFormValue(prev => ({ ...prev, password: e.target.value }))}
                        placeholder='Enter Your Password'
                        required
                        className='w-full px-2 py-2 outline-none border-[1px] border-neutral-50 rounded-sm'
                    />
                    <input type='submit' value={'Login'}
                        className='w-full px-2 py-2 outline-none border-none rounded-sm text-black uppercase bg-green-400 drop-shadow-xl cursor-pointer'
                    />
                    {
                        isError && <small className='text-red text-sm'>{isError}</small>
                    }
                    <p className='text-sm text-white'>Do not Have An Account? <span className='text-neutral-800 cursor-pointer'>Create A New</span> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;