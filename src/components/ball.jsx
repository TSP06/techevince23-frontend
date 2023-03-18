import React from "react";

const Ball = ({image}) => {
  return (
    <div>
      {/* Create a avatar type ball which has a white border */}
      <img
        src={image}
        alt='image'
        className='lg:h-60 h-32 md:h-44 rounded-full bg-customBlue-200 border-2 border-white'
      />
    </div>
  );
};

export default Ball;
