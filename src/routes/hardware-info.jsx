import React from 'react';

export default function HardwareInfo() {
    return(
        <div className='flex'>
            <div className='w-full md:w-5/12 bg-customBlue-200 h-screen items-center text-left'>
            <div className='h-5/6 w-8/12 items-center mx-auto my-24'>
                <p className='text-5xl font-semibold text-white -tracking-[0.01em] leading-tight font-body'>
                    Hardware<br/>
                    Clubs
                </p>
                <br/><br/>
                <p className='text-white text-base leading-6'>
                    With the unique ability to create advanced machines that make human life so much easier, 
                    no one holds a light to IITG's hardware clubs. This Techevince, with projects like Yuvaan and Antha Sagri, 
                    our clubs promise to engineer brilliance through passion, innovation, and curiosity.
                </p>
            </div>
            </div>
        </div>
    )
}