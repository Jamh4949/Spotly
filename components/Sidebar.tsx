import React from 'react';
import { HomeIcon,
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    UserIcon,
    EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';


export default function Sidebar() {
    return (
        <nav className='h-screen hidden sm:flex flex-col sticky top-0 p-3 xl:ml-20'>
            <div className='relative h-full'>   
                <div className='py-2'>
                <Image src={'/assets/logo.png'} width={80} height={50} alt="Logo"/>
                </div>
                <ul>
                <SidebarLink Icon={HomeIcon} text="Home" />
                <SidebarLink Icon={HashtagIcon} text="Explore" />
                <SidebarLink Icon={BellIcon} text="Notifications" />
                <SidebarLink Icon={InboxIcon} text="Messages" />
                <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
                <SidebarLink Icon={UserIcon} text="Profile" />
                <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" /> 
                <button className=' xl:block bg-[#F4AF01] w-[200px] h-[52px]
                rounded-full text-white font-medium cursor-pointer
                shadow-md mt-2'>    Botón</button>
                </ul>
                <div className='absolute bottom-0'>
                    User Info
                </div>
            </div>
        </nav>
    ) 
}

interface SidebarLinkProps {
    text: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function SidebarLink({text, Icon}: SidebarLinkProps) {
    return (
    <li className='flex items-center text-xl: mb-2 space-x-3 p-2.5'>
            <Icon className="h-7"/>
            <span className='hidden xl:block'>{text}</span>
    </li>
    );
}