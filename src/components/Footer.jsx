import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
   <>
   <hr />
   <footer  className='py-12'>
   <div className='max-w-screen-2xl container mx-auto px-4  md:px-16 '>
        <div className=' flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
                <ul className='flex space-x-4'>
                                <li className='text-xl cursor-pointer md:text-2xl   hover:scale-110 duartion-200 '>
                                  <a href="https://www.linkedin.com/in/abhijeetgouda/" target='_blank'><FaLinkedin /></a></li>
                                <li className='text-xl cursor-pointer md:text-2xl   hover:scale-110 duartion-200'>
                                  <a href="https://github.com/jeet120304/" target='_blank'><FaGithubSquare /></a></li>
                                <li className='text-xl cursor-pointer md:text-2xl  hover:scale-110 duartion-200'>
                                  <a href="https://www.instagram.com/iamabhijeetgouda/ " target='_blank'><FaSquareInstagram /></a></li>
                            </ul>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                <p className='text-sm '>
                    &copy; 2025 Abhijeet Gouda. All rights reserved.
                </p>
                <p className='text-sm'>
                    @by Abhijeet...
                </p>
            </div>
        </div>
    </div>
   </footer>
   </>
  )
}

export default Footer