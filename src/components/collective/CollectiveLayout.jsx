import React from 'react'
import CardGrid from './CardGrid'
import CollectiveRight from './CollectiveRight'

const CollectiveLayout = () => {
  return (
    <div className='pt-4 px-13 flex gap-6'>
    <div className='w-full '>
      <CardGrid/>
    </div>
    <div className='flex-[31%]'>
      <CollectiveRight/>
    </div>
    </div>
  )
}

export default CollectiveLayout
