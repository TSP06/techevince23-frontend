import React, { useEffect, useState } from "react";
import CodingClub from "../assets/coding-club-logo.png";
import Vote from "../assets/vote.png";
import ProjectDescription from "../components/project-description";
import Grid from "../assets/Group 6.svg";
import Ball from "../components/ball";
import Raman from "../assets/raman.png"

export default function HardwareVote() {
  const projects = [
    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs. Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs. Money runs the world, and no one understands money better than our business clubs.",
    },
    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs.",
    },
    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs.",
    },
    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs.",
    },
    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs.",
    },

    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs.",
    },
    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs.",
    },
    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs.",
    },
    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs.",
    },

    {
      img_url: CodingClub,
      club_name: "Coding Club",
      project_name: "Campus Rush",
      team: "Aman, Sahil, Krunal",
      stall_no: "15-A",
      about:
        "Money runs the world, and no one understands money better than our business clubs.",
      other_details:
        "Money runs the world, and no one understands money better than our business clubs.",
    },
  ];
  const [showDescription, setShowDescription] = useState(false);
  const [data, setData] = useState({});
  function handleFunction(prop) {
    setData(prop);
    setShowDescription(true);
  }
  return (
    <div className='flex'>
      <div className='w-full md:w-10/12 bg-customBlue-200 h-screen text-left'>
        <div className='absolute bottom-0 overflow-hidden  w-[100%] h-2/5 z-10' >
            <div className='bg-gradient-to-t from-transparent z-20 to-customBlue-200 w-full md:w-10/12 h-full absolute bottom-0 left-0'></div>
            <div
              style={{ background: `url("${Grid}") no-repeat` }}
              className='absolute bottom-0 left-0 w-full h-full'
            />
        </div>
        <div className=' relative h-5/6 w-8/12 mx-16 md:mx-20 my-24 z-30'>
          <p className='text-3xl md:text-5xl font-semibold text-white -tracking-[0.01em] font-body'>
            Hardware Clubs
          </p>
          <div className='overflow-y-scroll h-4/6 scrollbar-hide mt-12'>
            {projects &&
              projects.map((item, index) => {
                return (
                  <div
                    className='hover: cursor-pointer'
                    onClick={() => {
                      handleFunction(item);
                    }}
                  >
                    <div className='flex my-4 text-white items-center'>
                      <img className='h-8' src={item.img_url} />
                      <div className='ml-4 md:ml-8'>
                        <p className='font-body font-semibold text-sm md:text-xl md:leading-8 -tracking-[0.01em]'>
                          {item.project_name}
                        </p>
                        <p className='text-sm md:text-normal'>
                          {item.club_name}
                        </p>
                      </div>
                      <div className='flex justify-center bg-white w-20 h-12 items-center text-center md:w-32 ml-auto rounded-3xl'>
                        <p className='text-black font-body font-semibold text-base md:text-2xl -tracking-[0.01em] leading-8 m-2'>
                          Vote
                        </p>
                        <img className='h-0 md:h-fit' src={Vote} />
                      </div>
                    </div>
                    <hr className='bg-white w-full' />
                  </div>
                );
              })}
            <ProjectDescription
              isVisible={showDescription}
              onClose={() => setShowDescription(false)}
              data={data}
            />
          </div>
        </div>
        <div>
            
        </div>
      </div>
      <div className="w-0 md:w-2/12 bg-white z-20">
        <div className='-ml-[30%] mt-[45%] lg:mt-[20%] z-40'>
          <Ball image={Raman} />
        </div>
        <div className='-ml-[30%] mt-[35%] lg:mt-[20%] z-[10] relative'>
          <Ball image={Raman} />
        </div>
      </div>
    </div>
  );
}
