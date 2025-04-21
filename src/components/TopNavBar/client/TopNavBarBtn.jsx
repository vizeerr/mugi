"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import IndividualTray from './IndividualTray';
import { motion } from "framer-motion";

const TopNavBarBtn = () => {
    const pathname = usePathname();
    const[showTray,setShowTray] = useState(false)
    return (
      <>
      <div 
        
        className=' overflow-hidden '>
          <motion.div 
          initial={{ x: 800, opacity:1 }}
          animate={showTray ? {x:0,opacity:1} : {x:800,opacity:1} }
          transition={{ duration: 0.3 }}
          className='  '>

        <IndividualTray/>
          </motion.div>

      </div>
        <div className='flex items-center pt-1.5 gap-4 z-10'>
          
          <Link href="/" className='cursor-pointer tranis' onMouseEnter={()=>setShowTray(true)} onMouseLeave={()=>setShowTray(false)}>
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
      </>
    )
}

export default TopNavBarBtn
