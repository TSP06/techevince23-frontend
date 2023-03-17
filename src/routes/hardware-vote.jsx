import React from 'react';
import CodingClub from "../assets/coding-club-logo.png"

export default function HardwareVote() {

    const projects = [
        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },
        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },
        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },
        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },
        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },

        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },
        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },
        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },
        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },

        {
            img_url: CodingClub,
            club_name: 'Coding Club',
            project_name: 'Campus Rush',
            team: 'Aman, Sahil, Krunal',
            stall_no: '15-A',
            about: 'Money runs the world, and no one understands money better than our business clubs.',
            other_details: 'Money runs the world, and no one understands money better than our business clubs.'
        },
    ]

    return(
        <div className='flex'>
            <div className='w-full md:w-10/12 bg-customBlue-200 h-screen text-left'>
            <div className='h-5/6 w-8/12 mx-20 my-24'>
                <p className='text-5xl font-semibold text-white -tracking-[0.01em] font-body'>
                    Hardware Clubs
                </p>
                <div className='overflow-y-scroll h-4/6 scrollbar-hide mt-12'>
                    {projects && projects.map((item,index) =>{
                        return(
                            <div>
                                <div className='flex my-4 text-white items-center'>
                                    <img src={item.img_url}/>
                                    <div className='ml-8'>
                                        <p className='font-body font-semibold text-xl leading-8 -tracking-[0.01em]'>{item.project_name}</p>
                                        <p>{item.club_name}</p>
                                    </div>
                                </div>
                                <hr className='bg-white w-full'/>
                            </div>
                        )
                    })}
                </div> 
            </div>
            </div>
        </div>
    )
}