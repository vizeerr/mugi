"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import luffypfp from "@/assets/luffypfp.png"

const IndividualTray = () => {
    const [active,setActive] = useState(0)
    const data = [luffypfp,luffypfp,luffypfp,luffypfp,luffypfp,luffypfp,luffypfp,luffypfp,luffypfp,luffypfp,luffypfp]
  return (
    <div className='bg-[#222227] py-3 px-5 rounded-[1.5rem] flex items-center gap-3'>
        {data.map((e,i)=>(
            <div key={i} className={`border-2 ${active==i?"border-white" :"border-transparent"} border-white rounded-full p-1`}>
                <div className='w-10 h-10'>
                    <Image src={luffypfp} alt=''/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default IndividualTray
