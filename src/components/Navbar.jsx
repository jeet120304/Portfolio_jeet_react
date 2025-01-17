import {useState} from 'react'
import pic from '../../public/photo.avif';
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import { Link } from 'react-scroll';
const Navbar = () => {
    // we will use usestate to manage the cross and menu icon
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id:1,
            text:'Home',
        },
        {
            id:2,
            text:'About',
        },
        {
            id:3,
            text:'Projects'
        },
        {
            id:4,
            text:'Experience',
        },
        {
            id:5,
            text:'Contact',
        }
        ];
  return (
    <div className='max-w-screen-2xl container mx-auto px-4  md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-[#242424] '>
        <div className='flex justify-between items-center  h-16 '>
             
        <div className='flex space-x-2  items-center'>
                <img src={pic} alt=""  className='h-12 w-12 rounded-full'/>
                <h2 className='font-semibold text-xl cursor-pointer'>Abhijee
                    <span className='text-green-500 text-3xl'>t</span>
                <p className='text-sm'>Web Developer</p>
                </h2>
            </div>
            {/* desktop nav */}
            <div>
            <ul className=' hidden md:flex space-x-8'>
                {
                    navItems.map(( {text,id}) => (
                        <li key={id} className='hover:scale-105 duration-200  cursor-pointer'><Link to={text} smooth={true} duration={500} activeClass='active' offset={-70}>{text}</Link></li>
                    ))
                }
            </ul>
            <div onClick={()=> setMenu(!menu)} className='md:hidden cursor-pointer'>
                {menu?<RxCross2 size={24} />:<MdOutlineMenu  size={24}/>}
                </div>
            </div>
            </div>
            {/* mobile nav */}
            {
                menu && (
                    <div className='bg-[#242424] '>
                    <ul className='md:hidden flex flex-col justify-center items-center h-screen space-y-3 '>
                    {
                    navItems.map(({text, id}) => (
                        <li key={id} className='hover:scale-105 duration-200 cursor-pointer'><Link onClick={()=> setMenu(!menu)}  to={text} smooth={true} duration={500} activeClass='active' offset={-70}>{text}</Link></li>
                    ))
                }
                    </ul>
                    </div>
                )
            }
            
          
            
         
        </div>
  )
}

export default Navbar