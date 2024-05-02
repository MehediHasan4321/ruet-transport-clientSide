import HomeWraper from "@/components/HomeWraper"

const AuthLayout = ({ children }) => {

    return (
        <HomeWraper>
            <div className="w-full h-[85vh] bg-green-400 container mx-auto flex justify-center items-center">
                {children}
            </div>
        </HomeWraper>
    )
}

export default AuthLayout