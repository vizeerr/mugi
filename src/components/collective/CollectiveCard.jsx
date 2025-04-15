
import Image from 'next/image'
import React from 'react'
import unicorn from "@/assets/unicorn.png"
import ethwhite from "@/assets/ethwhite.png"
const CollectiveCard = ({data}) => {

  return (
    <div className='bg-[#222227] shadow-[6px_6px_21px_0px_#00000052] rounded-[1.5rem] relative '>
        <div className='font-mont font-extrabold text-xs rounded-full px-7 py-1 text-[#222227] uppercase absolute -top-3 left-8' style={{ backgroundColor: data.color }}>
            {data.title}
        </div>
        <div className='flex items-start gap-6 justify-between ps-7 pe-9 py-5'>

            <div className='bg-[#222227] shrink-0 rounded-full p-2 w-24 h-24 relative z-10'>
                <Image src={data.pfp} alt="profiles"/>
            </div>
            <div className='flex gap-6 pt-2 justify-between w-full'>
                <div className='flex flex-col items-center gap-0'>
                    <p className="font-bebas text-[1rem]" style={{ color: data.color }}>MARKET CAP</p>
                    <p className='font-mont font-[800] text-lg'>1,047,303</p>
                </div>
                <div className='flex flex-col items-center gap-0'>
                    <p className="font-bebas text-[1rem]" style={{ color: data.color }}>MARKET CAP</p>
                    <p className='font-mont font-[800] text-lg'>1,047,303</p>
                </div>
                <div className='flex flex-col items-center gap-0'>
                    <p className="font-bebas text-[1rem]" style={{ color: data.color }}>MARKET CAP</p>
                    <p className='font-mont font-[800] text-lg'>1,047,303</p>
                </div>
                <div className='flex flex-col items-center gap-0'>
                    <p className="font-bebas text-[1rem]" style={{ color: data.color }}>MARKET CAP</p>
                    <p className='font-mont font-[800] text-lg'>1,047,303</p>
                </div>
            </div>
            <div className='bg-[#29FF30] absolute rounded-full w-3.5 h-3.5 top-4 right-4'></div>
        </div>
        <div className='bg-[#50555D] flex justify-center gap-8 rounded-b-[1.5rem] absolute bottom-0 w-full py-3'>
            <p className='font-mont text-white font-[800] text-sm'>Your holdings : 1,234,567</p>
            <div className='font-mont text-white font-[800] text-sm flex gap-1 items-center'>
                <p>Treasury :</p> 
                <div className='w-3'>
                    <Image src={ethwhite} alt=""/>
                </div> 
                <p>0.1345</p>
                
            </div>
            <div className='absolute bottom-0 right-0 bg-[#121215]  p-1'>
                <div className="rounded-lg w-9 h-9 p-1" style={{ backgroundColor: data.color }}>
                    <Image src={unicorn} alt=''/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollectiveCard
