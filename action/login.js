'use server'

import { signIn } from "@/auth"
import { loginSchema } from "@/schemas"
import { AuthError } from "next-auth"



const login =async (value)=>{
    const validateData = loginSchema.safeParse(value)

    if(!validateData.success) return {error:'Some missing filds found!'}
    const {email,password} = validateData.data
    try {
        await signIn('credentials',{
            email,
            password,
            redirectTo:'/dashboard'
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
    }
}

export default login