import React from 'react'

const BorderBox = ({ children}) => {
  return (
    <div className='py-3.5 px-5 w-full bg-[#222227] border-2 border-white rounded-[1.5rem] relative inset-shadow-[9px_9px_32px_0px_#0000004D] '>
        <div className='bg-[#ffffffb6] h-[0.25rem] w-9 rounded-[50%]   absolute -top-[0.2rem] left-[12%] blur-[0px] shadow-[0_0_7px_3px_#FFFFFF99]  '></div>
        <div className='bg-[#ffffffb6] h-[0.25rem] w-9 rounded-[50%]   absolute -bottom-[0.2rem] right-[20%] blur-[0px] shadow-[0_0_7px_3px_#FFFFFF99]  '></div>

        { children }
    </div>
  )
}

export default BorderBox

