import HomeWraper from "@/components/HomeWraper"
import ModalProvider from "@/provider/ModalProvider"

const PublicLayout = ({children})=>{

    return(
        <HomeWraper>
            <ModalProvider/>
            {children}
        </HomeWraper>
    )
}

export default PublicLayout