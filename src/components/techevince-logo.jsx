import React from 'react';
import TechevinceLogo from '../assets/techboard-logo.svg';

const TechevinceLogoBar = () => {
  return (
    <div className='rounded-full h-14 w-48 bg-white items-center flex p-2'>
      <div className='rounded-full bg-dark-blue'>
        <img src={TechevinceLogo} alt="TechevinceLogo" />
      </div>
      <div className='ml-3'>
        <h1 className='text-2xl font-bold text-[#333]'>Techevince</h1>
      </div>
    </div>
  );
}

export default TechevinceLogoBar;
