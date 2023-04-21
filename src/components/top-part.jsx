import React from "react";
import Ball from "./ball";
import GridTopDiv from "./grid-div";
import TechevinceLogoBar from "./techevince-logo";
import Raman from "../assets/raman.png";
import "./bounce.css";
import Business from "../assets/businessLogo.png";
import Software from "../assets/softwareLogo.jpg";
import { Link } from "react-router-dom";

const TopPart = () => {
  return (
    <div className='overflow-x-hidden font-ClashDisplay'>
      <section className='min-h-screen relative bg-customBlue-200'>
        {/* Absolute position grid  */}
        <div className='absolute'>
          <GridTopDiv />
        </div>
        <Link to="/business">
        <div className='absolute bottom-44 right-0 z-40 bounce-oppisite'>
            <Ball image={Business}/>
        </div>
        </Link>
        <Link to="/software">
        <div className='absolute top-20 lg:left-80 md:left-40 left-20 z-40 bounce'>
          <Ball image={Software} />
        </div>
        </Link>
        <Link to="/hardware">
        <div className='absolute top-20 left-0 z-40 bounce-rotate'>
          <Ball image={Raman} />
        </div>
        </Link>

        <div className='absolute flex justify-center md:justify-start top-16 md:left-20 z-20 inset-0'>
          <TechevinceLogoBar />
        </div>

        <div className='pt-48 z-20 mx-8 lg:mx-64 relative font-extrabold text-6xl lg:text-[5rem] text-white flex flex-col'>
          <p className=''>A new</p>
          <p className='md:self-end md:mr-28'>Beginning for</p>
          <p className='md:self-end'>brighter</p>
          <p className='md:ml-24'>tomorrow</p>
        </div>

        <div className='mx-8 md:mx-24 lg:mx-36 relative py-12 flex items-end flex-col'>
          <div className='border-white border-2 font-bold right-0 top-0 rounded-full px-5 flex items-center h-16 text-white md:text-xl mb-10'>
            <p>👆🏻 Press and hold project to open</p>
          </div>
          <div className='top-48 right-0 border-2 w-full border-white font-bold rounded-full flex justify-around items-center py-5 px-5 text-white text-xl'>
            <div className='flex flex-col items-center'>
              <p className='md:text-6xl'>500+</p>
              <p className='md:text-xl text-sm font-GalanoGrotesque'>Students</p>
            </div>{" "}
            <div className='flex flex-col items-center'>
              <p className='md:text-6xl'>2000+</p>
              <p className='md:text-xl text-sm font-GalanoGrotesque'>Footfall</p>
            </div>{" "}
            <div className='flex flex-col items-center'>
              <p className='md:text-6xl'>14+</p>
              <p className='md:text-xl text-sm font-GalanoGrotesque'>Clubs</p>
            </div>{" "}
            <div className='flex flex-col items-center'>
              <p className='md:text-6xl font-sans'>∞</p>
              <p className='md:text-xl text-sm font-GalanoGrotesque'>Projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopPart;
