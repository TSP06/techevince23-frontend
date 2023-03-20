import React, { useState } from "react";
import Grid from "../assets/Group 6.svg";
import Ball from "../components/ball";
import Raman from "../assets/raman.png";

export default function HardwareInfo() {
  return (
    <div className='flex bg-white z-0'>
      <div className='w-full md:w-5/12 bg-customBlue-200 h-screen items-center text-left'>
        <div className='h-5/6 w-8/12 relative items-center mx-auto my-24'>
          <div className='absolute -bottom-5 overflow-hidden -left-32 w-[160%] h-2/5'>
            <div className='bg-gradient-to-t from-transparent z-20 to-customBlue-200 w-full h-full absolute bottom-0 left-0'></div>
            <div
              style={{ background: `url("${Grid}") no-repeat` }}
              className='absolute bottom-0 left-0 z-10 w-full h-full'
            />
          </div>
          <p className='text-3xl md:text-5xl font-semibold text-white -tracking-[0.01em] leading-tight font-body'>
            Hardware
            <br />
            Clubs
          </p>
          <br />
          <br />
          <p className='text-white text-base leading-6'>
            With the unique ability to create advanced machines that make human
            life so much easier, no one holds a light to IITG's hardware clubs.
            This Techevince, with projects like Yuvaan and Antha Sagri, our
            clubs promise to engineer brilliance through passion, innovation,
            and curiosity.
          </p>
        </div>
      </div>
      <div className='z-30 md:w-7/12 w-0 bg-white'>
        <div className='ml-12 flex h-full relative overflow-hidden'>
          <div className='absolute top-10 left-0 z-20 bounce'>
            <Ball image={Raman} />
          </div>
          <div className='absolute top-10 right-0 z-20 bounce-dia'>
            <Ball image={Raman} />
          </div>
          <div className='absolute top-10 left-0 z-20 bounce-rotate'>
            <Ball image={Raman} />
          </div>
          <div className='mr-12 self-end mb-20 bg-customBlue-200 rounded-full w-full p-5 flex justify-between items-center text-white'>
            <p className='font-ClashDisplay text-2xl font-bold'>
              Vote Projects
            </p>
            <div className='border-2 border-white rounded-full p-3 bg-[#333333] font-semibold'>
              👆🏻Press and hold project to open
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
