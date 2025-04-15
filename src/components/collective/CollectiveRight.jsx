import Image from 'next/image'
import React from 'react'
import gif from "@/assets/collectivegif.gif"
import BorderBox from '../individual/BorderBox'
import RadialTimer from '../individual/client/RadialTimer'
const CollectiveRight = () => {

  return (
    
    <div className='bg-[#222227] shadow-[11px_14px_17.2px_0px_#0000005E] p-3 rounded-[2rem]'>
        <div className='rounded-[1.5rem] overflow-hidden h-[15rem]'>
            <Image src={gif} alt=""/>
        </div>
        <BorderBox>
            <RadialTimer/>
        </BorderBox>
    </div>
  
)
}

export default CollectiveRight
