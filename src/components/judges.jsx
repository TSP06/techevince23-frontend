import React from "react";
import GridSideDiv from "./grid-side-div";
import Raman from "../assets/raman.png";

const Judges = () => {
  return (
    <div>
      <div className=' flex flex-col'>
        <div className='mt-12'>
          <p className='flex flex-col items-start text-3xl md:text-4xl font-semibold self-stretch mx-14 -mb-3 top-5 left-14 z-10 font-ClashDisplay'>
            Our Judges
          </p>
          <div className='rectangle bg-customBlue-100 h-3 w-48 sm:w-44 mx-14 sm:mx-28 top-11 left-28'></div>
        </div>
        <div className='mx-14 mt-10 relative flex'>
          {/* Grid */}
          <div className='mx-14 '>
            <div>
              <p className='text-2xl font-bold'>Mr. Sahil Kumar Gupta</p>
              <p className=''>Founder | The Startup School</p>
            </div>
            <br />
            <br />
            <p className='text-xl font-semibold'> Mr. Sahil Kumar Gupta </p>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              adipisci quibusdam, atque neque iure magni illo sit enim eaque
              accusantium molestiae, provident corporis cum! Aperiam eligendi
              nisi est ab obcaecati.
            </p>
            <br />
            <br />
            <p className='text-xl font-semibold'> Mr. Sahil Kumar Gupta </p>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              adipisci quibusdam, atque neque iure magni illo sit enim eaque
              accusantium molestiae, provident corporis cum! Aperiam eligendi
              nisi est ab obcaecati.
            </p>
          </div>
          <div>
            <div className='flex flex-col w-full hover:scale-110 transform transition duration-500'>
              <div className='relative bg-customBlue-200 bg-opacity-50 hover:bg-opacity-0 transition duration-500'>
                <img src={Raman} className='relative -z-20' />
                <div className='absolute transform -rotate-90 text-white text-3xl md:text-5xl font-semibold self-stretch -left-8 md:-left-12 bottom-24 font-ClashDisplay'>
                  Sahil
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;
