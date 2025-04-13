import React from 'react'

const BorderBox = ({ children }) => {
  return (
    <div className='py-3.5 px-5 w-full bg-[#222227] border-2 border-white rounded-[1.5rem] relative inset-shadow-[9px_9px_32px_0px_#0000004D] '>
  
        <div className='bg-white h-0.5 w-8 rounded-full  absolute -top-0.5 left-[12%] blur-[1px]  '></div>
        { children }
    </div>
  )
}

export default BorderBox

