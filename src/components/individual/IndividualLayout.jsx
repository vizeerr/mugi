import React from "react";
import BorderBox from "./BorderBox";
import ethwhite from "@/assets/ethwhite.png";
import Image from "next/image";
import RadialTimer from "./client/RadialTimer";
import thumb from "@/assets/individualgif.gif";
import pfp from "@/assets/pfp.png";
import unicorn from "@/assets/unicorn.png";
import arrowprim from "@/assets/arrowprim.png"
import banner1 from "@/assets/banner1.png"
import banner2 from "@/assets/banner2.png"


const IndividualLayout = () => {
  return (
    <div className="flex w-full h-full gap-6 ">
      <div className="w-full flex flex-col h-full gap-6">
        <div className=" bg-[#222227] w-full  flex-1  rounded-[1.5rem] shadow-[9px_9px_32px_0px_#0000004D]"></div>

        <div className="flex items-center  justify-content-between gap-5">
          <BorderBox>
            <p className="font-xurkit text-lg text-primary">
              Market <span className="text-white">Cap</span>
            </p>
            <p className="font-mont text-2xl font-extrabold mt-6">1,047,303</p>
          </BorderBox>
          <BorderBox>
            <p className="font-xurkit text-lg text-primary">
              token <span className="text-white">price</span>
            </p>
            <p className="font-mont text-2xl font-extrabold mt-6">
              $ 0.00000143
            </p>
          </BorderBox>
          <BorderBox>
            <p className="font-xurkit text-lg text-primary">
              price <span className="text-white"> change </span> ( 24h )
            </p>
            <p className="font-mont text-2xl font-extrabold mt-6">
              $ 0.00000143
            </p>
          </BorderBox>
          <BorderBox>
            <p className="font-xurkit text-lg text-primary">Volume</p>
            <p className="font-mont text-2xl font-extrabold mt-6">$ 254,374</p>
          </BorderBox>
        </div>
      </div>

      <div className="w-full flex flex-1/3 flex-col h-full gap-6">
        <BorderBox>
          <p className="font-xurkit text-lg text-primary">
            Your <span className="text-white">Holdings</span>
          </p>
          <p className="font-mont text-2xl font-extrabold mt-3 py-2.5 px-6 rounded-full bg-[#111111] shadow-[6px_6px_22px_0px_#0000004F]">
            1,047,303
          </p>
        </BorderBox>
        <BorderBox>
          <p className="font-xurkit text-lg text-primary">
            <span className="text-white">Treasury</span>
          </p>
          <div className="flex gap-3 font-mont text-2xl font-extrabold mt-3 py-2.5 px-6 rounded-full bg-[#111111] shadow-[6px_6px_22px_0px_#0000004F]">
            <div className="w-5">
              <Image src={ethwhite} alt="etherem" />
            </div>
            0.1345
          </div>
        </BorderBox>
        <BorderBox>
          <p className="font-xurkit text-lg text-primary">
            cooldown <span className="text-white">timer</span>
          </p>
          <div className="bg-[#111111] shadow-[9px_9px_23px_0px_#0000004F] mt-3  p-3 rounded-[1.5rem]">
            <RadialTimer />
          </div>
        </BorderBox>
      </div>

      <div className="flex flex-1/2 flex-col gap-6 ">
        <div className="overflow-hidden w-full bg-[#222227] border-2 border-white rounded-[1.5rem] relative inset-shadow-[9px_9px_32px_0px_#0000004D] h-full">
          <div className="bg-[#ffffffb6] h-[0.25rem] w-9 rounded-[50%]   absolute -top-[0.2rem] left-[12%] blur-[0px] shadow-[0_0_7px_3px_#FFFFFF99]  "></div>
          <div className="bg-[#ffffffb6] h-[0.25rem] w-9 rounded-[50%]   absolute -bottom-[0.2rem] right-[20%] blur-[0px] shadow-[0_0_7px_3px_#FFFFFF99]  "></div>

          <div className="h-[14.5rem] overflow-hidden ">
            <Image src={thumb} alt="thumbnail" />
          </div>

          <div className="absolute top-[26.7%] w-full left-0 z-10 px-7">
            <div className="flex justify-between items-center">
              <div className="bg-[#222227] rounded-full overflow-hidden w-[7.5rem] h-[7.5rem]  p-2">
                <div className="bg-[#222227] rounded-full border-2 border-white p-1 overflow-hidden">
                  <div className="bg-[#FF8F45] w-full rounded-full">
                    <Image src={pfp} alt="profile" className="w-full" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="bg-[#121215] py-2 px-3 shadow-[4px_4px_10px_0px_#0000004D] rounded-lg">
                  <p className="font-bebas text-xs">0x12...5frh</p>
                </div>
                <div className="bg-gradient-to-bl from-[#FF8F45] to-[#FF6141] w-10 h-10 p-2 rounded-xl">
                  <Image src={unicorn} alt="Unicorn" />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="font-xurkit text-3xl">
                <span className="text-primary">vinsmoke</span> sanji
              </p>
              <p className="text-sm text-[#FFFFFF61] font-[800] mt-3">
                A kickin’ cook with a heart of gold.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#222227] shadow-[9px_9px_32px_0px_#0000004D] px-4 gap-5 rounded-[2rem] py-7">
            <div className="w-7 shrink-0">
                <Image  src={arrowprim} alt="arrow left" className="rotate-180"/>
            </div>
            <div className="flex items-center ">
                <div>
                    <Image src={banner1} alt=""/>
                </div>
                <div>
                    <Image src={banner2} alt=""/>
                </div>
                <div>
                    <Image src={banner1} alt=""/>
                </div>
            </div>
            <div className="w-7 shrink-0">
                <Image  src={arrowprim} alt="arrow left" className=""/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualLayout;
