import person from "../assets/raman.png"
import React from 'react';


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

export default function Team() {
  return (
    <div>
    <div className=" flex flex-col">
        <div>
            <p className="flex flex-col items-start text-3xl font-semibold self-stretch absolute top-5 left-14 z-10" style={{fontFamily: 'Clash Display Variable'}}>Core Team</p>
            <div className="rectangle bg-customBlue-100 h-3 w-36 absolute top-11 left-28"></div>
        </div> 

        <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 w-full mb-56 mt-auto pt-96'>
        {team && team.map(item =>{
            return(
                <div className='flex flex-col w-80 bg-white hover:scale-110 transform transition duration-500'>
                    <div className=" bg-customBlue-200 bg-opacity-50 hover:bg-opacity-0 transition duration-500">
                        <img src={item.img} alt= {item.alt} className='relative -z-10 '/>
                    </div>

                <div className='bg-customBlue-200 text-white px-6 h-full'>
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