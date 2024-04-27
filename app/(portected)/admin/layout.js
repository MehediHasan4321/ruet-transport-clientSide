import { auth } from "@/auth"
import Greeding from "@/components/admin/Greeding"
import SideBar from "@/components/admin/SideBar"

const AdminLayout = async({ children }) => {
    const session = await auth()
    return (
        <div className="w-full h-full flex gap-x-[1px]">
            <div className="min-w-[300px]">
            <SideBar user={session.user} />
            </div>
            <div className="w-full h-full flex flex-col bg-green-400">
                <Greeding/>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout