import React from "react";

const GridTopDiv = () => {
  return (
    <div className='relative'>
      <div className='h-screen'>
        <div className='absolute top-0 w-screen h-1/2 z-10 bg-gradient-to-b from-transparent to-customBlue-200'></div>
      </div>
      <div className='absolute top-0 w-full h-screen z-0'>
        <div className='container h-2/5 relative w-screen'>
          <div className='w-screen absolute inset-0 flex flex-col gap-5 mt-5 justify-around items-center'>
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className='w-full border-b-2 border-gray-400'
              ></div>
            ))}
          </div>

          <div className='w-screen absolute inset-0 px-8 flex justify-around items-center'>
            {Array.from({ length: 18 }).map((_, index) => (
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

export default GridTopDiv;
