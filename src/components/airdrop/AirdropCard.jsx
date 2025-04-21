"use client";
import Image from "next/image";
import React, { useState } from "react";
import avtrbg from "@/assets/avtrbg.png";
import doting from "@/assets/doting.png";
import { motion } from "framer-motion";
import arrow from "@/assets/arrowleft.png"
import tlogo from "@/assets/tlogoblack.png"
import xlogo from "@/assets/xlogoblack.png"
import luffy from "@/assets/luffypfp.png"


const AirdropCard = ({ data }) => {
  const [active, setActive] = useState(false);
  const [pick, setPick] = useState(false);
  const color = data.color || "#ffffff";
  return (
    <motion.div
      key={1}
      initial={{ rotateY: 0 }}
      animate={pick ? { rotateY: 180 } : { rotateY: 0 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="card"
    >
      <div
        className="relative rounded-[1.3rem] card-front h-[22rem]"
        style={{ backgroundColor: data.color }}
      >
        <div className="relative rounded-[1.3rem] overflow-hidden w-full h-full">
          <div className="absolute w-full h-full mix-blend-screen z-0">
            <Image src={avtrbg} alt="" />
          </div>
          <div className="absolute opacity-80 w-[80%] top-0 z-10 right-[40%] mix-blend-screen">
            <Image src={doting} alt="" />
          </div>

          <p className="font-mont font-[900] -rotate-90 absolute -left-[8.2rem] top-24 text-8xl uppercase text-[#3C37254D] ">
            Luffy
          </p>
        </div>
        <div
          className={`absolute top-0 cardanim ${
            active ? "scale-[1.2]" : ""
          } z-20 left-0 h-[20rem] overflow-hidden `}
        >
          <Image src={data.image} alt="thumbnail" />
        </div>
        <div
          className="px-4 pt-3 pb-1.5 rounded-b-[1.1rem] z-30 absolute bottom-0 left-0 w-full"
          style={{
            background:
              "linear-gradient(10.98deg, rgb(28, 28, 28) 31.79%, rgba(28, 28, 28, 0) 141.1%)",
          }}
        >
          <p
            className={`font-bebas cardanim ${
              active ? "scale-[1.2]" : ""
            } text-xs`}
          >
            the rubber banded rascal
          </p>
          <p
            className={`font-bebas cardanim ${
              active ? "scale-[1.2]" : ""
            } text-xl pt-0.5 pb-1`}
            style={{ color: data.color }}
          >
            {data.title}
          </p>
          <hr />
          <p
            onClick={() => setPick(true)}
            className={`font-quantum text-xl cardanim text-center py-1 ${
              active ? "scale-[1.2]" : "text-white"
            }`}
            style={active ? { color: color } : { color: "#ffffff" }}
          >
            PICK
          </p>
        </div>
      </div>
      <div onClick={()=>setPick(false)} className="card-back flex-col z-300 bg-[#222227] py-3 px-3 rounded-[1.3rem] w-full h-full border " style={{borderColor:data.color}}>
        
        <div className="flex justify-between w-full">
        
            <div className="w-5 anim">
                <Image src={arrow} alt=""/>
            </div>

            <div className="flex gap-1">
                <div className="w-5 h-5 ps-0.5 pe-1 pt-1 pb-1 bg-white rounded-full anim">
                    <Image src={tlogo} alt=""/>
                </div>
                <div className="w-5 h-5 p-1 bg-white rounded-full anim">
                    <Image src={xlogo} alt=""/>
                </div>
            </div>
        
        </div>
        
        <div className="flex flex-col justify-evenly h-full items-center text-center">
            <div className="w-16 rounded-full anim">
                <Image src={luffy} alt=""/>
             </div>      
            
            <p className="text-white font-mont text-xs font-[800]">Ye be pledgin’ loyalty to</p>
            <p className="font-bad text-2xl" style={{color:data.color}}>{data.title}</p>

            <p className="font-bebas text-xs "> Once locked in, there’s no turnin’ back. When the token goes live, ye have <span className="text-[#FF3939]">22 hours</span> to claim yer share before the tide takes it !</p>
            <p className="font-bebas text-xs ">
            Follow our socials to stay sharp
            </p>

            <div className="bg-white flex items-center gap-1 px-3 py-2 rounded-full anim">
                <p className="font-mont text-xs font-[800] text-[#222227]">Share on </p>
                <div className="w-4">
                    <Image src={xlogo} alt=""/>
                </div>
            </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default AirdropCard;
