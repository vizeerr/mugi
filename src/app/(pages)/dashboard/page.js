import DashLeft from '@/components/dashboard/DashLeft'
import DashRight from '@/components/dashboard/DashRight'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-10 w-full h-full pb-10 px-10'>
      <DashLeft/>
      <DashRight/>
      
    </div>
  )
}

export default page
