'use client'

import React, { useState, useTransition } from 'react';
import CardWrapper from './CardWrapper';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import createAccount from '@/action/createAccount';


const RegisterForm = () => {

    const [isLoading, startLoading ] = useTransition()
  
    
    const form = useForm({
        
        defaultValues: {
            email: '',
            password: '',
            name: ''
        }
    })

    const onSubmit = async value => {
        const {name,email,password} = value
        if(!name|!email|!password){
            console.log("Some Fields are missing")
            return
        }
        startLoading(async () => {
            const data = await createAccount(value).then(res => res)
        
            if (data) {
               
                form.reset()
            }
            
          
        })
        
    }


    return (
        <CardWrapper
            headerLabel={'Create an Account'}
            backButtonHref={'/auth/login'}
            backButtonLabel={`Already have an account`}
            socialLogin={true}
        >

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='Enter Your Full Name'
                                            type={'text'}
                                            

                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter Your Email"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter Your password"
                                            type="password"
                                            d
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <Button disabled={isLoading} className='w-full' size='lg' variant={'custom'}>Create Account!</Button>

                    </div>

                </form>
            </Form>

        </CardWrapper>
    );
};

export default RegisterForm;