import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
   <aside className='w-[270px]'>
       <div className='flex items-center justify-center gap-2 py-8 border-b border-[#ECF2EF]'>
         <Image
           src="/images/logo.png"
           alt="Logo"
           width={30}
           height={30}
         />
         <h1 className='text-2xl font-bold font-jakarta'>Travique</h1>
       </div>
   </aside>
  )
}

export default Sidebar
