import React from 'react'
import exportblack from "@/assets/exportblack.png"
import setico from "@/assets/setico.png"
import ethico from "@/assets/ethico.png"
import darrow from "@/assets/darrow.png"
import arrowdown from "@/assets/arrowdown.png"
import undo from "@/assets/undo.png"
import exportd from "@/assets/exportblack.png"
import infoico from "@/assets/info.png"
import infoicoblack from "@/assets/infoblack.png"

import ethwhite from "@/assets/ethwhite.png"

import Image from 'next/image'

const MotionTop = () => {
  return (
    <div>
      <div className='flex gap-10 w-full'>
        <div className='bg-[#1B1C1E] w-full rounded-[1.6rem] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] p-8 relative'>
          <div className='absolute right-3 top-3 rounded-full bg-primary p-1.5 w-7 h-7'>
            <Image src={setico} alt=''/>
          </div>
            <div className='bg-[#111111] mt-2.5 py-4 px-6 rounded-[1.2rem]'>
              <p className='text-primary font-mont text-sm font-extrabold'>Sell</p>
              <div className='flex gap-2 justify-between items-center mt-3'>
                <input type='number' placeholder='0' className='font-bebas text-4xl text-white w-full'/>
                <div className='flex gap-1 bg-white rounded-full items-center px-2 py-1'>
                  <div className='w-6 h-6'>
                    <Image src={ethico} alt=''/>
                  </div>
                    <p className='font-mont font-extrabold text-sm text-[#111111]'>ETH</p>
                  <div className='w-4'>
                    <Image src={darrow} alt=''/>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 justify-end mt-3'>
                <p className='font-bebas text-[#4E4F54] text-sm'>0 eth</p>
                <div className='bg-[#3F3F3F] px-2 py-0.5 rounded-full'>
                  <p className='text-[#FFFFFF47] font-mont font-extrabold text-[0.65rem]'>MAX</p>
                </div>
              </div>
            </div>
            <div className='bg-[#111111] mt-3 py-4 px-6 rounded-[1.2rem] relative'>
              <div className='absolute w-full -top-9 left-0 flex justify-center'>
              <div className='bg-[#1B1C1E] rounded-full w-[4.2rem] h-[4.2rem] p-2.5'>
                <div className='bg-primary rounded-full p-3.5 w-full h-full'>
                  <Image src={arrowdown} alt=''/>
                </div>
              </div>
              </div>
              <p className='text-primary font-mont text-sm font-extrabold'>Buy</p>
              <div className='flex gap-2 justify-between items-center mt-3'>
                <input type='number' placeholder='0' className='font-bebas text-4xl text-white w-full'/>
                <div className='flex gap-1 bg-white rounded-full items-center px-2 py-1'>
                  <div className='w-6 h-6'>
                    <Image src={ethico} alt=''/>
                  </div>
                    <p className='font-mont font-extrabold text-sm text-[#111111]'>ETH</p>
                  <div className='w-4'>
                    <Image src={darrow} alt=''/>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 mt-3'>
                <p className='font-bebas text-[#4E4F54] text-sm'>$0</p>
                {/* <div className='bg-[#3F3F3F] px-2 py-0.5 rounded-full'>
                  <p className='text-[#FFFFFF47] font-mont font-extrabold text-[0.65rem]'>MAX</p>
                </div> */}
              </div>
            </div>

            <div className='w-full flex justify-center mt-2'>
              <div className='bg-primary py-2 px-10 rounded-2xl'>
                <p className='text-4xl text-[#262626] font-bad'>SWAP</p>
              </div>
            </div>
        </div>
        <div className='space-y-5 flex-1/2'> 
            <div className='bg-white rounded-[1.3rem] w-full flex flex-col gap-3 items-start p-4 '>
                <div className='bg-[#1B1C1E] w-24 text-center py-1 rounded-full'>
                    <p className='font-bebas text-sm text-primary'>market cap</p>
                </div>
                <p className='font-mont text-3xl text-[#1B1C1E] font-extrabold'>10,000</p>
            </div>
            <div className='bg-white rounded-[1.3rem] w-full flex flex-col gap-3 items-start p-4'>
                <div className='bg-[#1B1C1E] w-24 text-center py-1 rounded-full'>
                    <p className='font-bebas text-sm text-primary'>Price</p>
                </div>
                <p className='font-mont text-3xl text-[#1B1C1E] font-extrabold'>0x12...5678</p>
            </div>
            <div className='bg-white rounded-[1.3rem] w-full flex flex-col gap-3 items-start p-4 relative'>
                <div className='w-7 h-7 p-1 rounded-full bg-primary absolute right-2 top-2'>
                    <Image src = {exportblack} alt=""/>
                </div>
                <div className='bg-[#1B1C1E] w-24 text-center py-1 rounded-full'>
                    <p className='font-bebas text-sm text-primary'>contract add.</p>
                </div>
                <p className='font-mont text-3xl text-[#1B1C1E] font-extrabold'>0x12...5678</p>
            </div>
        </div>
      </div>
      <div className='flex w-full  gap-10 mt-10'>
        <div className='border-primary flex-1/3  border-2 bg-[#1B1C1E] rounded-[1.5rem] relative pt-8 pb-4 px-5'>
          <div className='bg-primary w-7 h-7 p-1 rounded-full absolute top-2 right-2'>
            <Image src={exportd} alt=""/>
          </div>
          <div className='bg-primary px-3 py-0.5 rounded-full absolute -top-3 left-8'>
            <p className='font-bebas text-[#262626] pt-0.5 text-xs'>top buyer</p>
          </div>
          <div className='flex gap-2 items-center'>
            <p className='font-bebas text-2xl pt-0.5'>0x12...5g47</p>
            <div className='w-4 h-4'>
              <Image src={undo} alt='' />
            </div>
          </div>
          <div className='bg-white rounded-full py-2 px-4 flex items-center justify-between  mt-4'>
            <div className='bg-[#1B1C1E] rounded-full px-3 py-0.5'>
              <p className='font-bebas text-primary text-xs pt-0.5'>eth spent</p>
            </div>
            <p className='text-xl font-extrabold font-mont text-[#1B1C1E]'>00.0000</p>
          </div>
        </div>

        <div className='bg-[#1B1C1E] flex-1/4 rounded-[1.5rem]  relative pt-8 px-5 '>
          <div className='w-3 h-3 absolute right-3 top-3'>
            <Image src={infoico} alt=''/>
          </div>
         <div className='bg-white px-4 py-1.5 rounded-full'>
            <p className='text-[#1B1C1E] font-bebas text-xs pt-0.5'>accumulated tax</p>
         </div>
         <div className='flex gap-0 mt-7 items-center'>
           <div className='w-16'>
            <Image src={ethwhite} alt=''/>
           </div>
            <p className='text-2xl text-white font-extrabold'>00.00</p>
         </div>
        </div>

        <div className='bg-[#1B1C1E] flex-1/2 rounded-[1.5rem] flex flex-col justify-end  relative pt-8 px-5 '>
          <div className='w-3 h-3 absolute right-3 top-3'>
            <Image src={infoico} alt=''/>
          </div>
          <div className='flex justify-around '>
            <div>
              <div>
                <p className='font-mont font-extrabold text-4xl'>4%</p>
              </div>
              <div className='bg-primary px-4 py-1 rounded-lg mt-6'>
                <p className='text-sm font-bebas text-[#262626]'>buy tax</p>
              </div>
            </div>
            <div>
              <div>
                <p className='font-mont font-extrabold text-4xl'>4%</p>
              </div>
              <div className='bg-primary px-4 py-1 rounded-lg mt-6'>
                <p className='text-sm font-bebas text-[#262626]'>buy tax</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='flex items-center gap-4 w-full mt-10 '>
        

          <div className='bg-white  w-full rounded-s-[1.2rem] py-5 px-6 flex items-center justify-between  mt-4'>
            <div className='bg-[#1B1C1E] rounded-full px-3 py-0.5'>
              <p className='font-bebas text-primary text-xs pt-0.5'>buy volume</p>
            </div>
            <p className='text-xl font-extrabold font-mont text-[#1B1C1E]'>$1,337,474</p>
          </div>
          
          <div className='bg-primary w-full rounded-[1.2rem] py-4 px-6 flex flex-col gap-4 items-center justify-between relative'>
            <div className='w-3 h-3 absolute right-3 top-3'>
              <Image src={infoicoblack} alt=''/>
            </div>
            
            <div className='bg-[#1B1C1E] rounded-full px-3 mx-auto py-0.5'>
              <p className='font-bebas text-primary text-xs pt-0.5'>buy volume</p>
            </div>
            
            <p className='text-[#1B1C1E] text-3xl font-mont font-extrabold'>120 min</p>

          </div>

          <div className='bg-white  w-full rounded-e-[1.2rem] py-5 px-6 flex items-center justify-between  mt-4'>
            
            <p className='text-xl font-extrabold font-mont text-[#1B1C1E]'>$1,337,474</p>
            <div className='bg-[#1B1C1E] rounded-full px-3 py-0.5'>
              <p className='font-bebas text-primary text-xs pt-0.5'>buy volume</p>
            </div>
          </div>
      </div>

      <div className='bg-primary px-6 py-3 rounded-t-[1.3rem] relative mt-10'>
        <div className='absolute -top-6 left-0 w-full justify-center flex '>
          <div className='bg-[#111111] rounded-full p-1.5'>
            <div className='bg-white rounded-full p-3.5 w-12 h-12'>
              <Image src={arrowdown} className='rotate-180' />
            </div>
          </div>
        </div>
        <p className='text-[#1B1C1E] font-extrabold font-mont text-2xl'>Event Log</p>

      </div>
    
    </div>
  )
}

export default MotionTop
