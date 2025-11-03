"use client"
import { Home, LogOut, Map, Users } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const links = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "All Users", icon: Users, href: "/dashboard/users" },
  { name: "AI Trips", icon: Map, href: "/dashboard/trips" },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='w-[270px] fixed'>
      <div className='flex items-center gap-2 py-9 px-[29px] border-b border-[#ECF2EF]'>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={30}
          height={30}
        />
        <h1 className='text-2xl font-bold font-jakarta'>Travique</h1>
      </div>
      <nav className="mt-6 space-y-2 px-4">
        {links.map(({ name, icon: Icon, href }) => (
          <Link
            key={name}
            href={href}
            className={`flex items-center gap-3  py-[18px] px-3.5 rounded-[10px]  font-medium ${pathname === href
                ? "bg-primary text-white font-semibold text-base leading-5"
                : "text-[#7F7E83] text-lg leading-6 hover:bg-gray-100"
              }`}
          >
            <Icon className="w-5 h-5" />
            {name}
          </Link>
        ))}
      </nav>


      <div className="flex items-center gap-3 p-6 border-t mt-[280px]">
        <Image
          src="/images/user.png"
          alt="User"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex-1">
          <p className="font-semibold text-base leading-6 text-[#141627]">Khennycool</p>
          <p className="text-sm text-[#7F7E83] leading-3.5">Khennycool@gmail.com</p>
        </div>
        <LogOut className="text-red-500 size-2.5 cursor-pointer" />
      </div>
    </aside>
  )
}

export default Sidebar
