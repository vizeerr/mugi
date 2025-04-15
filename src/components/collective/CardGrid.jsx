"use client"
import React, { useState } from 'react'
import luffypfp from "@/assets/luffypfp.png"
import CollectiveCard from './CollectiveCard'
const CardGrid = () => {

    const[cardData,setCardData] = useState([
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
        {
            title:"luffy",
            color:"#FFCB74",
            pfp:luffypfp
        },
    ])
  
    return (
        <div className='grid grid-cols-2 gap-8'>
        {cardData.map((e,i)=>(
            <CollectiveCard key={i} data={e}/>
        ))}
        </div>
    )
}

export default CardGrid
