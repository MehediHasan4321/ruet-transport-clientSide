import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { apiRoutePrefix, authRoute, defaultRedirect, publicRoute } from "./route"

const {auth} = NextAuth(authConfig)

export default auth((req)=>{
    const {nextUrl} = req

    const isLoggedIn = !!req.auth
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiRoutePrefix)
    const isPublicRoute = publicRoute.includes(nextUrl.pathname);
    const isAuthRoute = authRoute.includes(nextUrl.pathname);

    if(isApiAuthRoute){
        return null
    }

    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(defaultRedirect,nextUrl))
        }

        return null
    }

    if(!isLoggedIn&&!isPublicRoute){
        return Response.redirect(new URL('/auth/login',nextUrl))
    }

})


export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}