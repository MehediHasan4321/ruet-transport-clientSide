import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().email({ message: "Email is Requird!" }),
    password: z.string()
})

export const registerSchema = z.object({
    email: z.string().email({ message: 'Email is requird!' }),
    password: z.string().min(4, { message: 'password minimum 4' }),
    name: z.string().min(1, { message: 'Name is requird field!' })
})

export const addBusSchema = z.object({
    busName:z.string().min(1),
    busSeat:z.number().min(10)

})