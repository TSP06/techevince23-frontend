import React, { useState, useEffect } from "react";
import Grid from "../assets/Group 6.svg";
import Ball from "../components/ball";
import hardwareLogo from "../assets/hardwareLogo.png";
import axios from "axios";
import { BACKEND_ROUTES, BACKEND_URL } from "../config/urls";
import { Link } from "react-router-dom";
export default function HardwareInfo() {
  const [images, setImages] = useState([
    {
      alt: "image1",
      link: hardwareLogo,
    },
    {
      alt: "image2",
      link: hardwareLogo,
    },
    {
      alt: "image3",
      link: hardwareLogo,
    },
  ]);

  useEffect(() => {
    const getImages = async () => {
      const res = await axios.get(`${BACKEND_ROUTES.gallery}/hardware`);
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
            Hardware
            <br />
            Clubs
          </p>
          <br />
          <br />
          <p className='text-white text-xl md:text-base leading-6'>
            With the unique ability to create advanced machines that make human
            life so much easier, no one holds a light to IITG's hardware clubs.
            This Techevince, with projects like Yuvaan and Antha Sagri, our
            clubs promise to engineer brilliance through passion, innovation,
            and curiosity.
          </p>
          <div className="relative md:invisible w-5/6 mt-8 items-center justify-center text-center z-50">
            <div className='mr-12 self-end mb-20 bg-customBlue-200 rounded-full w-full py-8 text-white'>
              {/* <p className='font-ClashDisplay text-2xl font-bold'>
                Vote Projects
              </p> */}
              <Link to='../vote-hardware'>
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
            <Link to='../vote-hardware'>
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
