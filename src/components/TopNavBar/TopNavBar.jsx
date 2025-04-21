import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.png"
import TopNavBarBtn from './client/TopNavBarBtn'
import tlogo from "@/assets/tlogo.png"
import xlogo from "@/assets/xlogo.png"
import TopNavBarConnectBtn from './client/TopNavBarConnectBtn'

const TopNavBar = () => {
  
  return (
    <div className='flex items-center justify-between px-9 py-6 w-full'>
      <div className='flex gap-2 items-center '>
        <div className='w-16'>
            <Image src = {logo} alt='logo'/>
        </div>
        <p className='font-pirata text-3xl'>Mugiwara Pirates</p>
      </div>
      <div className='flex gap-5 items-center  justify-end'>
        
        <TopNavBarBtn/>
        <div className='flex items-center gap-6 '>
          <div className='w-6 anim'>
            <Image src={tlogo} alt='telegram logo' />
          </div>
          <div className='w-5 nim'>
            <Image src={xlogo} alt='telegram logo' />
          </div>
        </div>
        <TopNavBarConnectBtn/>
      </div>
    </div>
  )
}

export default TopNavBar
