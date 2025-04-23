"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const TopNavBarBtn = () => {
    const pathname = usePathname();
    const[showTray,setShowTray] = useState(false)
    return (
      <>
    
        <div className='flex items-center pt-1.5 gap-4 z-10'>
          
          <Link href="/dashboard" className='cursor-pointer tranis' onMouseEnter={()=>setShowTray(true)} onMouseLeave={()=>setShowTray(false)}>
            <p className={`${pathname == "/dashboard" ? 'text-primary' : 'text-white' } font-bebas text-lg px-2 `}>Dashboard</p>
            <div className={`${pathname == "/dashboard" ? 'opacity-100' : 'opacity-0' } bg-primary h-0.5 w-full rounded-full tranis `}></div>
          </Link>

          <Link href="/stake" className='cursor-pointer tranis' onMouseEnter={()=>setShowTray(true)} onMouseLeave={()=>setShowTray(false)}>
            <p className={`${pathname == "/stake" ? 'text-primary' : 'text-white' } font-bebas text-lg px-2 `}>Stake</p>
            <div className={`${pathname == "/stake" ? 'opacity-100' : 'opacity-0' } bg-primary h-0.5 w-full rounded-full tranis `}></div>
          </Link>

          <Link href="/claim" className='cursor-pointer tranis' onMouseEnter={()=>setShowTray(true)} onMouseLeave={()=>setShowTray(false)}>
            <p className={`${pathname == "/claim" ? 'text-primary' : 'text-white' } font-bebas text-lg px-2 `}>claim</p>
            <div className={`${pathname == "/claim" ? 'opacity-100' : 'opacity-0' } bg-primary h-0.5 w-full rounded-full tranis `}></div>
          </Link>

          
 
        </div>
      </>
    )
}

export default TopNavBarBtn
