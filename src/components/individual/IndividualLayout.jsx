import React from 'react'
import BorderBox from './BorderBox'
import ethwhite from "@/assets/ethwhite.png"
import Image from 'next/image'

const IndividualLayout = () => {
  return (
    <div className='flex w-full h-full gap-6 '>
        <div className='w-full flex flex-col h-full gap-6'>
            <div className=' bg-[#222227] w-full  flex-1  rounded-[1.5rem] shadow-[9px_9px_32px_0px_#0000004D]'>

            </div>

            <div className='flex items-center  justify-content-between gap-5'>
                <BorderBox>
                    <p className='font-xurkit text-lg text-primary'>Market <span className='text-white'>Cap</span></p>
                    <p className='font-mont text-2xl font-extrabold mt-6'>1,047,303</p>
                </BorderBox>
                <BorderBox>
                    <p className='font-xurkit text-lg text-primary'>token <span className='text-white'>price</span></p>
                    <p className='font-mont text-2xl font-extrabold mt-6'>$ 0.00000143</p>
                </BorderBox>
                <BorderBox>
                    <p className='font-xurkit text-lg text-primary'>price <span className='text-white'> change </span> ( 24h )</p>
                    <p className='font-mont text-2xl font-extrabold mt-6'>$ 0.00000143</p>
                </BorderBox>
                <BorderBox>
                    <p className='font-xurkit text-lg text-primary'>Volume</p>
                    <p className='font-mont text-2xl font-extrabold mt-6'>$ 254,374</p>
                </BorderBox>
            </div>

        </div>

        <div className='w-full flex flex-1/2 flex-col h-full gap-6'>
                <BorderBox>
                    <p className='font-xurkit text-lg text-primary'>Your  <span className='text-white'>Holdings</span></p>
                    <p className='font-mont text-2xl font-extrabold mt-3 py-2.5 px-6 rounded-full bg-[#111111] shadow-[6px_6px_22px_0px_#0000004F]'>1,047,303</p>
                </BorderBox>
                <BorderBox>
                    <p className='font-xurkit text-lg text-primary'><span className='text-white'>Treasury</span></p>
                    <div className='flex gap-3 font-mont text-2xl font-extrabold mt-3 py-2.5 px-6 rounded-full bg-[#111111] shadow-[6px_6px_22px_0px_#0000004F]'>
                    <div className='w-5'>
                        <Image src = {ethwhite} alt="etherem"/>
                    </div>
                    0.1345
                    </div>
                </BorderBox>
                <BorderBox>
                    <p className='font-xurkit text-lg text-primary'>cooldown <span className='text-white'>timer</span></p>
                    <div className='font-mont text-2xl font-extrabold mt-3 py-2.5 px-6 rounded-full bg-[#111111] shadow-[9px_9px_23px_0px_#0000004F]'>1,047,303</div>
                </BorderBox>
        </div>

        <div>

        </div>
    </div>
  )
}

export default IndividualLayout
