import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import clientPromise from "./lib/db";
import authConfig from "./auth.config";

import findUserByEmail from "./action/findUserByEmail";

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages:{
        signIn:'/auth/login',
        error:'/auth/error'
    },
    
    callbacks: {
        session: async ({ token, session }) => {

            if (token.email && session.user) {
                session.user.role = token.role
            }
            

            return session
        },
        adapter: MongoDBAdapter(clientPromise),
        async jwt({ token }) {
            if (!token.email) return token
            const existingUser = await findUserByEmail(token.email)

            token.role = existingUser.role
            return token
        }
    },
    session: { strategy: 'jwt' },
    ...authConfig
})