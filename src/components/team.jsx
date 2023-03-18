import person from "../assets/raman.png"
import React from 'react';

export default function Team() {
    

    const team = [
        {
            name: "Aman Kumar",
            img: person,
            club: "Techboard",
            post: "Web Developer",
            alt: "aman"
        },
        {
            name: "Aman Kumar",
            img: person,
            club: "Techboard",
            post: "Web Developer",
            alt: "aman"
        },
        {
            name: "Aman Kumar",
            img: person,
            club: "Techboard",
            post: "Web Developer",
            alt: "aman"
        },{
            name: "Aman Kumar",
            img: person,
            club: "Techboard",
            post: "Web Developer",
            alt: "aman"
        },
        {
            name: "Aman Kumar",
            img: person,
            club: "Techboard",
            post: "Web Developer",
            alt: "aman"
        },
    ]
  return (
    <div>
    <div className=" flex flex-col">
        <div className="mt-12">
            <p className="flex flex-col items-start text-3xl md:text-4xl font-semibold self-stretch mx-14 -mb-3 top-5 left-14 z-10" style={{fontFamily: 'Clash Display Variable'}}>Core Team</p>
            <div className="rectangle bg-customBlue-100 h-3 w-36 sm:w-32 mx-14 md:mx-28 top-11 left-28"></div>
        </div> 

        <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 w-full mt-12'>
        {team && team.map(item =>{
            return(
                <div className='flex flex-col w-3/4 hover:scale-110 transform transition duration-500'>
                    <div className=" bg-customBlue-200 bg-opacity-50 hover:bg-opacity-0 transition duration-500">
                    <img src={item.img} alt= {item.alt} className="relative -z-20"/>
                    </div>
                    <div className='bg-customBlue-200 text-white px-6 h-full z-10'>
                        <h1 className='font-semibold text-2xl py-3'>{item.name}</h1>
                        <p className='text-base font-bold'>Technical Board</p>
                        <p className='text-xs font-normal pb-3'>{item.post}</p>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
    </div>
  );
}