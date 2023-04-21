import React from "react";
import GridSideDiv from "./grid-side-div";
import BottomPhoto from "../assets/bottom.png";

const BottomPart = () => {
  return (
    <div className='bg-customBlue-200 w-screen flex justify-between mt-10'>
      <div className='absolute bg-customBlue-200'>
        <GridSideDiv />
      </div>
      <div className='relative z-20 my-[4.5rem] lg:my-44 pl-8 md:px-20'>
        <div className='relative'>
          <p className='text-white text-2xl md:text-5xl font-bold'>
            {" "}
            See you on 23rd April{" "}
          </p>
          <div className='absolute -bottom-1 md:-right-6 border-b-8 border-[#333] w-48 md:w-60'></div>
        </div>
        <p className='text-white text-base md:text-2xl font-bold mt-4'>
          Event reel is coming
        </p>
      </div>
      <div className='relative z-20 w-1/2'>
        <div
          className='h-full w-full bg-cover bg-no-repeat bg-center'
          style={{
            background: `radial-gradient(100% 1098.29% at 100% 50%, #0050FF 0%, rgba(0, 80, 255, 0.5) 100%), url(${BottomPhoto})`,
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          }}
        />
      </div>
    </div>
  );
};

export default BottomPart;
