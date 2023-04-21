import React from "react";

const Ball = ({ image, alt='image', bgColor=null }) => {
  return (
    <div>
      {/* Create a avatar type ball which has a white border */}
      <img
        src={image}
        alt={alt}
        className='lg:h-60 h-32 md:h-44 lg:w-60 w-32 md:w-44 rounded-full bg-customBlue-200 border-2 border-white'
        style={{ backgroundColor: bgColor }}
      />
    </div>
  );
};

export default Ball;
