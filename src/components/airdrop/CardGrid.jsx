
import React from 'react'
import AirdropCard from './AirdropCard'
import luffythumb from '@/assets/luffythumb.png'

const CardGrid = () => {

    const data = [
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        {
            title:"luffy",
            bio:"the rubber banded rascal",
            image:luffythumb,
            color:"#FFCB74"
        },
        
    ]

  return (
    <div className='grid grid-cols-5 gap-11'>
      {data.map((e,i)=>(
        <AirdropCard key={i} data={e}/>
      ))}
    </div>
  )
}

export default CardGrid



