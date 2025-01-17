import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

import { ReactTyped } from "react-typed";

import myPic from '../../public/WhatsApp Image 2025-01-15 at 23.29.51.jpeg'


const Home = () => {
  return (
    <>
     <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12  md:mt-24  order-2 md:order-1 '>
        <span>Welcome to my Portfolio..</span>
        <div className='flex text-2xl space-x-1 md:text-4xl '>
        <h1>Hello,I am a  </h1>
        {/* <span className='text-red-700 font-bold '>Developer.</span> */}
        <ReactTyped
        className='text-red-700 font-bold '
          strings={["Developer.", "Coder.", "Programmer."]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm md:text-md taxt-justify'> A  creative web developer with a passion for creating beautiful, responsive and user-friendly websites. Ready to contribute to team projects and help deliver quality software solutions. 
        </p>
        <br />
        {/* social media icons*/}
        <div className='flex flex-col md:flex-row justify-between items-center mt-4 mb-4'>
            <div className='space-y-2'>
            <h1 className='font-bold'>Social links  </h1>
            <ul className='flex space-x-4'>
                <li className='text-xl cursor-pointer md:text-2xl   hover:scale-110 duartion-200 '>
                  <a href="https://www.linkedin.com/in/abhijeetgouda/" target='_blank'><FaLinkedin /></a></li>
                <li className='text-xl cursor-pointer md:text-2xl   hover:scale-110 duartion-200'>
                  <a href="https://github.com/jeet120304/" target='_blank'><FaGithubSquare /></a></li>
                <li className='text-xl cursor-pointer md:text-2xl  hover:scale-110 duartion-200'>
                  <a href="https://www.instagram.com/iamabhijeetgouda/ " target='_blank'><FaSquareInstagram /></a></li>
            </ul>
        </div>

        <div className='space-y-2 mt-5 md:mt-0'>
            <h1 className='font-bold'>currently working on </h1>
            <div className='flex space-x-4  text-2xl cursor-pointer'>
            <SiMongodb className='text-xl cursor-pointer md:text-2xl rounded-full border[1px] hover:scale-110 duartion-200 '/>
            <SiExpress className='text-xl cursor-pointer md:text-2xl rounded-full  hover:scale-110 duartion-200 ' />
            <FaReact className='text-xl cursor-pointer md:text-2xl rounded-full  hover:scale-110 duartion-200 '/>
            <FaNode className='text-xl cursor-pointer md:text-2xl rounded-full  hover:scale-110 duartion-200 '/>
            </div>
        </div>
        </div>
        </div>


        <div className='md:w-1/2 md:mt-15 md:ml-48 order-1 mt-8'>
        <img src={myPic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div>
        </div>
    </div>
    </>
   
  )
}

export default Home