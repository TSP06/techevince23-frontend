import React from "react";

const Ball = ({image}) => {
  return (
    <div>
      {/* Create a avatar type ball which has a white border */}
      <img
        src={image}
        alt='image'
        className='h-60 w-60 rounded-full bg-customBlue-200 border-2 border-white'
      />
    </div>
  );
};

export default Ball;
