import React from "react";
import Ball from "../components/ball";
import GridTopDiv from "../components/grid-div";
import TechevinceLogoBar from "../components/techevince-logo";
import Raman from "../assets/raman.png";
import './bounce.css'

const TopPart = () => {
  return (
    <div className='overflow-x-hidden'>
      <section className='min-h-screen relative bg-customBlue-200'>
        {/* Absolute position grid  */}
        <div className='absolute'>
          <GridTopDiv />
        </div>
        <div className='absolute top-0 left-80 z-20 bounce-diagonal'>
          <Ball image={Raman} />
        </div>
        <div className='absolute bottom-80 right-0 z-20 bounce-oppisite'>
          <Ball image={Raman} />
        </div>
        <div className='absolute top-0 left-0 z-20 bounce-rotate'>
          <Ball image={Raman} />
        </div>

        <div className='absolute top-16 left-20 z-10'>
          <TechevinceLogoBar />
        </div>

        <div className='pt-48 z-20 pl-64 relative font-extrabold text-[5rem] text-white'>
          <p className=''>A new</p>
          <p className='pl-[20rem]'>Beginning for</p>
          <p className='pl-[40rem]'>brighter</p>
          <p className='pl-24'>tomorrow</p>
        </div>

        <div className='mr-24 relative py-12 ml-20 flex items-end flex-col'>
          <div className='border-white border-2 font-bold right-0 top-0 rounded-full px-5 flex items-center h-16 text-white text-xl mb-10'>
            <p>👆🏻 Press and hold project to open</p>
          </div>
          <div className=' top-48 right-0 border-2 w-full border-white font-bold rounded-full flex justify-around items-center h-36 text-white text-xl'>
            <div className='flex flex-col items-center'>
              <p className='text-6xl'>500+</p>
              <p className='text-xl'>Students</p>
            </div>{" "}
            <div className='flex flex-col items-center'>
              <p className='text-6xl'>2000+</p>
              <p className='text-xl'>Footfall</p>
            </div>{" "}
            <div className='flex flex-col items-center'>
              <p className='text-6xl'>14+</p>
              <p className='text-xl'>Clubs</p>
            </div>{" "}
            <div className='flex flex-col items-center'>
              <p className='text-6xl'>∞</p>
              <p className='text-xl'>Projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopPart;
