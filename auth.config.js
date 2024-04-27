import findUserByEmail from "./action/findUserByEmail"
import { loginSchema } from "./schemas"
import credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'


export default {
    providers: [
        credentials({
            async authorize(credentials) {

                const validateData = loginSchema.safeParse(credentials)
                if (validateData.success) {
                    const { email, password } = validateData.data;
                    const user = await findUserByEmail(email)
                    if (!user && !user.email) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password)

                    if (passwordMatch) {

                        return user
                    }


                }
                return null
            }
        })
    ]
}