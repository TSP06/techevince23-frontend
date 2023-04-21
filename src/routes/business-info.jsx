import React, { useState, useEffect } from "react";
import Grid from "../assets/Group 6.svg";
import Ball from "../components/ball";
import businessLogo from "../assets/businessLogo.png";
import axios from "axios";
import { BACKEND_ROUTES } from "../config/urls";
import { Link } from "react-router-dom";

export default function BusinessInfo() {

   const [images, setImages] = useState([
     {
       alt: "image1",
       link: businessLogo,
     },
     {
       alt: "image2",
       link: businessLogo,
     },
     {
       alt: "image3",
       link: businessLogo,
     },
   ]);

   useEffect(() => {
     const getImages = async () => {
       const res = await axios.get(`${BACKEND_ROUTES.gallery}/software`);
       if (res.data.length >= 3) {
         setImages(res.data);
       }
     };
     getImages();
   }, []);


  return (
    <div className='flex bg-white z-0'>
      <div className='w-full md:w-5/12 bg-customBlue-200 h-screen items-center text-left'>
        <div className='h-5/6 w-8/12 relative items-center mx-auto my-32 md:my-24'>
          <div className='absolute -bottom-5 overflow-hidden -left-32 w-[160%] h-2/5'>
            <div className='bg-gradient-to-t from-transparent z-20 to-customBlue-200 w-full h-full absolute bottom-0 left-0'></div>
            <div
              style={{ background: `url("${Grid}") no-repeat` }}
              className='absolute bottom-0 left-0 z-10 w-full h-full'
            />
          </div>
          <p className='text-3xl md:text-5xl font-semibold text-white -tracking-[0.01em] leading-tight font-body'>
            Business
            <br />
            Clubs
          </p>
          <br />
          <br />
          <p className='text-white text-xl md:text-base leading-6'>
          Money runs the world, and no one understands money better than our business clubs. From nurturing start-ups to accurately predicting the stock market, IITG's business clubs use their strong mental perception and combine it with the power of tech to make the most of the business world.
          </p>
          <div className="relative md:invisible w-5/6 mt-8 items-center justify-center text-center z-50">
            <div className='mr-12 self-end mb-20 bg-customBlue-200 rounded-full w-full py-8 text-white'>
              {/* <p className='font-ClashDisplay text-2xl font-bold'>
                Vote Projects
              </p> */}
              <Link to='/vote-business'>
              <div className='border-2 text-xl border-white rounded-full p-3 bg-[#333333] font-semibold'>
                👆🏻{'  '}Click here to Vote
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='z-30 md:w-7/12 w-0 bg-white'>
        <div className='ml-12 flex h-full relative overflow-hidden'>
          <div className='absolute top-10 left-0 z-20 bounce'>
            <Ball image={images[0].link} />
          </div>
          <div className='absolute top-10 right-0 z-20 bounce-dia'>
            <Ball image={images[1].link} />
          </div>
          <div className='absolute top-10 left-0 z-20 bounce-rotate'>
            <Ball image={images[2].link} />
          </div>
          <div className='mr-12 self-end mb-20 bg-customBlue-200 rounded-full w-full p-5 flex justify-between items-center text-white'>
            <p className='font-ClashDisplay text-2xl font-bold'>
              Vote Projects
            </p>
            <Link to ="vote-business">
            <div className='border-2 border-white rounded-full p-3 bg-[#333333] font-semibold'>
            👆🏻{'  '}Click here to Vote
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
