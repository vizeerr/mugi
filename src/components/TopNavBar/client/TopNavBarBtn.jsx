"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const TopNavBarBtn = () => {
    const pathname = usePathname();

    return (
        <div className='flex items-center pt-1.5 gap-4'>
          
          <Link href="/" className='cursor-pointer tranis'>
            <p className='font-bebas text-lg px-2 '>Individual</p>
            <div className={`${pathname == "/" ? 'opacity-100' : 'opacity-0' } bg-white h-0.5 w-full rounded-full tranis `}></div>
          </Link>

          <Link href="/collective"   className='cursor-pointer tranis'>
            <p className='font-bebas text-lg px-2 '>collective </p>
            <div className={`${pathname == "/collective" ? 'opacity-100' : 'opacity-0' } bg-white h-0.5 w-full rounded-full tranis`}></div>
          </Link>
          
          <Link href="/airdrop"   className='cursor-pointer tranis'>
            <p className='font-bebas text-lg px-2 '>airdrop</p>
            <div className={`${pathname == "/airdrop" ? 'opacity-100' : 'opacity-0' } bg-white h-0.5 w-full rounded-full tranis`}></div>
          </Link>
          
 
        </div>
    )
}

export default TopNavBarBtn
