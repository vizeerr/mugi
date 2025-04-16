import CardGrid from '@/components/airdrop/CardGrid'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center gap-11 h-full w-full px-13'>
        <div className='flex-1/5'>
            <p className='font-baron text-5xl text-center leading-relaxed'>
                Did you choose<br/>your pirate ?
            </p>
            <p className='font-bad mt-14 text-2xl text-center'>
                Connect your wallet to claim your BOOTY before it sinks!
            </p>      
        </div>

        <div className='w-full'>
            <CardGrid/>
        </div>

    </div>
  )
}

export default page
