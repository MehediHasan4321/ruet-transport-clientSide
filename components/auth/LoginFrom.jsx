'use client'

import React, { useState } from 'react';
import CardWrapper from './CardWrapper';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { loginSchema } from '@/schemas';
import { signIn } from 'next-auth/react';
import { AuthError } from 'next-auth';

const LoginFrom = () => {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async value => {
        const validaeValue = loginSchema.safeParse(value)
        if (!validaeValue.success) {
            return { error: "Some filds are missing" }
        }
        const { email, password } = validaeValue.data
        setIsLoading(true)
        try {
            await signIn('credentials', {
                email,
                password,
                redirectTo: '/dashboad'
            })
        } catch (error) {
            if (error instanceof AuthError) {
                switch (error.type) {
                    case 'CredentialsSignin':
                        return { error: 'Invalid credentials!' }

                    default:
                        return { error: 'Something Went Wrong!' }
                }
            }

            throw error
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <CardWrapper
            headerLabel={'Login Your Account'}
            backButtonHref={'/auth/register'}
            backButtonLabel={`Don't have an account`}
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
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <Button className='w-full' size='lg'
                            variant={'custom'}>{isLoading ? "Processing..." : "Login"}</Button>

                    </div>

                </form>
            </Form>

        </CardWrapper>
    );
};

export default LoginFrom;