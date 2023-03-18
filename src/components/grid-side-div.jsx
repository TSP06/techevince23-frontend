import React from "react";

const GridSideDiv = () => {
  return (
    <div className='relative'>
      <div className='h-[60vh] w-screen'>
        <div className='absolute top-0 w-3/5 h-full z-10 bg-gradient-to-r from-transparent to-customBlue-200'></div>
      </div>
      <div className='absolute top-0 w-full h-[60vh] z-0'>
        <div className='container h-full relative w-screen'>
          <div className='w-3/5 absolute inset-0 flex flex-col gap-5 mt-5 justify-around items-center'>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className='w-full border-b-2 border-gray-400'
              ></div>
            ))}
          </div>

          <div className='w-3/5 absolute inset-0 px-8 flex justify-around items-center'>
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className='h-full border-r-2 border-gray-400'
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSideDiv;
