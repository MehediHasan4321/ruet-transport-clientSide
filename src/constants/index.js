
import { FaHome,FaUser } from "react-icons/fa"
import { MdOutlineAddCircle } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";

export const navbar = [
    {
        name:"Home",
        url:'/',
        icon:''
    },
    {
        name:'Transport',
        url:'/',
        icon:''
    },  
    {
        name:'Dashboard',
        url:'/admin/dashboard',
        icon:''
    }
]

export const adminNavbar = [
    {
        name:'Back To Home',
        icon:FaHome,
        url:'/'
    },
    {
        name:'Dashboard',
        icon:MdDashboard,
        url:'/admin/dashboard'
    },
    {
        name:'Add Bus',
        icon:MdOutlineAddCircle,
        url:'/admin/addbus'
    },
    {
        name:'All User',
        icon:FaUser,
        url:'/admin/alluser'
    },
    {
        name:'Bookings',
        icon:TbBrandBooking,
        url:'/admin/booking'
    },

]