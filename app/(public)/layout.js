import { auth } from "@/auth"
import HomeWraper from "@/components/HomeWraper"
import ModalProvider from "@/provider/ModalProvider"

const PublicLayout = async ({ children }) => {
    const session = await auth()
    return (
        <HomeWraper session={session}>
            <ModalProvider />
            {children}
        </HomeWraper>
    )
}

export default PublicLayout