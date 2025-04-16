"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import avtrbg from "@/assets/avtrbg.png"
import doting from "@/assets/doting.png"

const AirdropCard = ({data}) => {
    const[active,setActive] = useState(false)
    const color = data.color || "#ffffff"
  return (
    <div onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)} className=' relative rounded-[1.3rem] h-[22rem]  ' style={{ backgroundColor: data.color }}>
        <div className='relative rounded-[1.3rem] overflow-hidden w-full h-full'>
            <div className='absolute w-full h-full mix-blend-screen z-0'>
                <Image src={avtrbg} alt=''/>
            </div>
            <div className='absolute opacity-80 w-[80%] top-0 z-10 right-[40%] mix-blend-screen'>
                <Image src={doting} alt=''/>
            </div>
            
            
            <p className='font-mont font-[900] -rotate-90 absolute -left-[8.2rem] top-24 text-8xl uppercase text-[#3C37254D] '>Luffy</p>
            
           
        </div>
        <div className={`absolute top-0 cardanim ${active?"scale-[1.2]":""} z-20 left-0 h-[20rem] overflow-hidden `}> 
                <Image src={data.image} alt="thumbnail"/>
            </div>
            <div className='px-4 pt-3 pb-1.5 rounded-b-[1.1rem] z-30 absolute bottom-0 left-0 w-full' style={{background:"linear-gradient(10.98deg, rgb(28, 28, 28) 31.79%, rgba(28, 28, 28, 0) 141.1%)"}}>
                <p className={`font-bebas cardanim ${active?"scale-[1.2]":""} text-xs`}>the rubber banded rascal</p>
                <p className={`font-bebas cardanim ${active?"scale-[1.2]":""} text-xl pt-0.5 pb-1`}  style={{ color: data.color }}>{data.title}</p>
                <hr />
                <p
                    className={`font-quantum text-xl cardanim text-center py-1 ${
                        active ? "scale-[1.2]" : "text-white"
                    }`}
                    style={active ? {color:color } : {color:"#ffffff"}}
                    >
                    PICK
                    </p>

            </div>
    </div>
  )
}

export default AirdropCard
