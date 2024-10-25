"use client"
import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CgDetailsMore } from "react-icons/cg";
import { usePathname, useRouter } from "next/navigation";
import jsCookie from 'js-cookie'
import toast from "react-hot-toast";
import { CiLogout } from "react-icons/ci";



export default function Lsidebar() {
    const path=usePathname()
const router=useRouter()

    function handleClick(){
       jsCookie.remove('token')
       
       router.replace('/login')
        
    }


  return (
    <div className="border-r h-[100vh]">
        <div className="logo">
            <Link className="text-2xl  py-2 font-bold" href={'/'}>Connect </Link>
        </div>
        <div>
            <ul>
                <li ><Link className={`${path=="/"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`}  href={'/'}><IoHomeOutline className={`${path=="/"?"text-gray-800":""} text-xl font-bold`}/>Home </Link></li>
                <li ><Link className={`${path=="/search"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`} href={'/search'}><IoIosSearch/>Search</Link></li>
                <li ><Link className={`${path=="/go"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`} href={'/go'}><MdOutlineExplore/>Go</Link></li>
                <li ><Link className={`${path=="/reels"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`} href={'/reels'}><MdOutlineVideoLibrary/>Reels</Link></li>
                <li ><Link className={`${path=="/message"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`} href={'/message'}><MdOutlineMessage/>Message</Link></li>
                <li ><Link className={`${path=="/notification"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`} href={'/notification'}><IoIosNotificationsOutline/>Notification</Link></li>
                <li ><Link className={`${path=="/create"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`} href={'/create'}><MdOutlineAddBox/>Create</Link></li>
                <li ><Link className={`${path=="/profile"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`} href={'/profile'}><CgProfile/>Profile</Link></li>
                <li ><Link className={`${path=="/more"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`} href={'/more'}><CgDetailsMore/>More</Link></li>
                <li ><button onClick={handleClick} className={`${path=="/more"?"bg-gray-400":""} flex my-3 hover:bg-gray-200 px-2 py-2 rounded-md items-center gap-2 text-lg`}><CiLogout/>Logout</button></li>
            </ul>
        </div>
    </div>
  )
}
