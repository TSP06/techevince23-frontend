import React from "react"
import Cross from "../assets/Cross-Line.png"

export default function ProjectDescription({isVisible, onClose, data}) {
    if(!isVisible) return null;
    const handleClose = (e) =>{
        if(e.target.id === 'wrapper')onClose();
    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-25
        backdrop-blur-sm flex justify-center items-center " id="wrapper"
        onClick={handleClose} style={{transition: "right 1s ease-in-out"}}>
            <div className='flex w-11/12 h-5/6 text-white shadow-2xl'>
                <div className='w-full md:w-7/12 bg-customBlue-200 items-center text-left '>
                    <div className='h-5/6 w-9/12 md:w-10/12 lg:w-8/12 items-center mx-[15%] md:mx-[5%] lg:md-[10%] mt-16 md:mt-8'>
                        <img className="hover:cursor-pointer h-4 md:h-6" onClick={() => onClose()} src={Cross}/>
                        <br/>
                        <div className="flex mb-2 md:mb-6">
                            <p className='text-2xl md:text-5xl font-semibold text-white -tracking-[0.01em] leading-tight font-body mr-2 md:mr-4'>
                                {data.project_name}
                            </p>
                            <div className="h-8 md:h-12" style={{borderLeft: '1px solid white'}}></div>
                            <div className="ml-2 md:ml-4 -mt-1 md:-mt-2">
                                <p className="text-xs md:text-sm">Stall No.</p>
                                <p className="text:2xl md:text-4xl font-semibold">{data.stall_no}</p>
                            </div>
                        </div>
                        <p className='font-semibold md:text-base md:leading-4 mb-2'>About Project</p>
                        <p className='text-sm md:text-base mb-2 md:mb-4'>{data.about}</p>
                        <p className='font-semibold md:text-base md:leading-6 mb-2'>Other Details</p>
                        <p className='text-sm md:text-base mb-4 md:mb-4'>{data.other_details}</p>
                        <div className="flex items-center h-10 md:h-12">
                            <img className='h-full' src={data.img_url}/>
                            <div className='ml-4'>
                                <p className='font-body font-semibold text-base md:leading-4 -tracking-[0.01em]'>{data.club_name}</p>
                                <p className='text-sm'>IIT Guwahati</p>
                            </div>
                        </div>
                        <div className="flex mt-6 mb-6" >
                            <p className='font-semibold text-base leading-6 mr-4'>Team:</p>
                            <p className='text-base'>{data.team}</p>
                        </div>
                        <div className="bg-white w-48 md:w-64 h-12 rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}