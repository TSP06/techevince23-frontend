import React, { useEffect, useState } from "react";
import Vote from "../assets/vote.png";
import ProjectDescription from "../components/project-description";
import Grid from "../assets/Group 6.svg";
import Ball from "../components/ball";
import Raman from "../assets/raman.png";
import axios from "axios";
import { BACKEND_ROUTES } from "../config/urls";
import { cleanUrl } from "../service/handleImage";
import Popup from "../components/popup";
import { useCookies } from "react-cookie";
import TechevinceLogoBar from "../components/techevince-logo";
import {Link} from 'react-router-dom';

export default function SoftwareVote() {
  const [projects, setProjects] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["connect.sid"]);
  const [flag, setFlag] = useState(false);

  const loginHandler = () => {
    // set local storage
    localStorage.setItem("redirect", "/vote-software");
    window.location.href = BACKEND_ROUTES.login;
  };

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(`${BACKEND_ROUTES.project}/software`);
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProjects();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${BACKEND_ROUTES.auth}/current`, {
          withCredentials: true,
        });
        console.log(res.data);
        setUser(res.data);

        if (res.data) {
          setSelectedButton(res.data.softwareVote);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  const [showDescription, setShowDescription] = useState(false);
  const [data, setData] = useState({});
  function handleFunction(prop) {
    setData(prop);
    setShowDescription(true);
  }
  const handleVote = async (projectId) => {
     try {
      const res = await axios.post(BACKEND_ROUTES.vote, {
        projectId,
      }, { withCredentials: true });
      window.location.reload();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex'>
      <Link to ="/" className="items-center justify-center">
        <div className='absolute flex my-4 mx-[25vw] md:mx-20 '>
          <TechevinceLogoBar />
        </div>
      </Link>
      <div className='w-full md:w-10/12 bg-customBlue-200 h-screen text-left'>
        <div className='absolute bottom-0 overflow-hidden  w-[100%] h-2/5 z-10'>
          <div className='bg-gradient-to-t from-transparent z-20 to-customBlue-200 w-full md:w-10/12 h-full absolute bottom-0 left-0'></div>
          <div
            style={{ background: `url("${Grid}") no-repeat` }}
            className='absolute bottom-0 left-0 w-full h-full'
          />
        </div>
        <div className=' relative h-5/6 w-8/12 mx-[25vw] md:mx-20 my-24 z-30'>
          <p className='text-3xl md:text-5xl font-semibold text-white -tracking-[0.01em] font-body'>
            Software Clubs
          </p>
          <div className='overflow-y-scroll h-4/6 scrollbar-hide mt-12'>
            {projects &&
              projects.map((item, index) => {
                return (
                  <div> 
                    <div className="flex items-center"> 
                    <div
                      key={index}
                      className='hover: cursor-pointer w-4/5'
                      onClick={() => {
                        handleFunction(item);
                      }}
                    >
                      <div className='flex my-4 text-white items-center '>
                        <img className='h-8' src={cleanUrl(item.club.icons)} />
                        <div className='ml-4 md:ml-8'>
                          <p className='font-body font-semibold text-sm md:text-xl md:leading-8 -tracking-[0.01em]'>
                            {item.name}
                          </p>
                          <p className='text-sm md:text-normal'>
                            {item.club.name}
                          </p>
                        </div>
                        
                      </div>
                      
                    </div>
                    <div className='flex justify-center w-20 h-12 items-center text-center md:w-32 ml-auto rounded-3xl cursor-pointer'
                    style={{backgroundColor: selectedButton === item._id ? "#16a34a" : "#ffffff"}}
                    onClick={() => {
                      handleVote(item._id)
                      setFlag(true)
                      setShowModal(true)
                      console.log(item)
                    }}
                    >
                      <p className='text-black font-body font-semibold text-base md:text-2xl -tracking-[0.01em] leading-8 m-2'
                        style={{color: selectedButton === item._id ? "#ffffff" : "#000000"}}>
                        Vote
                      </p>
                      <img className='h-0 md:h-fit'style={{filter: selectedButton === item._id ? 'brightness(0) saturate(100%) invert(100%)': ''}} src={Vote} />
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
          <Popup showModal={showModal} setShowModal={setShowModal} clearCookie={removeCookie} flag = {flag} setFlag = {setFlag} />
          <div className='flex justify-center bg-white w-48 md:w-64 h-12 rounded-3xl mt-16 -ml-4 text-center'>
            <button
              onClick={() => {
                if (user && user.hasOwnProperty("name")) setShowModal(true);
                else loginHandler();
              }}
              className='text-black font-body font-semibold text-base md:text-2xl -tracking-[0.01em] leading-8 m-2'
            >
              {user && user.hasOwnProperty("name") ? user.name : "Login"}
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div className='w-0 md:w-2/12 bg-white z-20'>
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
