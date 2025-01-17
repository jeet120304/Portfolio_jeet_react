import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"
import mongodb from "../../public/mongodb.jpg"
import node from "../../public/node.png"
import express from "../../public/express.png"
import oracle from "../../public/oracle.png"
import tailwind from "../../public/tailwind.png"
import bootstrap from "../../public/bootstrap.png"


const Experience = () => {
   const cardItem = [
    {
        id:1,
        logo:html,
        name:"html",
    },
    {
        id:2,
        logo:css,
        name:"css",
    },
    {
        id:3,
        logo:javascript,
        name:"javascript",
    },
    {
        id:4,
        logo:reactjs,
        name:"reactjs",
    },
    {
        id:5,
        logo:mongodb,
        name:"mongodb",
    },{
        id:6,
        logo:express,
        name:"express",
    },{
        id:7,
        logo:node,
        name:"node",
    },{
        id:8,
        logo:oracle,
        name:"oracle",
    },
    {
      id:9,
      logo:bootstrap,
      name:"bootstrap",
  },
  {
    id:10,
    logo:tailwind,
    name:"tailwind",
},
    
   ]
  return (
    <div name='Experience' className='max-w-screen-2xl container mx-auto px-4  md:px-16 mt-8'>
    <h1 className='text-3xl font-bold mb-5 underline'>Skills </h1>
    <div className='grid grid-cols-2 md:grid-cols-5  my-5 bg-[#242424] gap-y-2 '>
   {
        cardItem.map(({id,logo,name})=>(
            <div className=' flex  flex-col justify-center items-center md:w-[200px] md:h-[200px]  rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration:200' key={id}>
              
                 <img src={logo} className='h-[120px] w-[120px] p-1 rounded-full  ' alt="" />
                 <div>
                    <div className='font-bold text-xl mb-3 px-1'>{name}</div>
                    {/* <p className='px-2 text-grey '>Lorem ipsum dolor sit amet.</p> */}
                 </div>
                 {/* <div className=' flex justify-around'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>video</button>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>source code</button>
                 </div> */}
            </div>
        ))
    }
   </div>
    </div>
  )
}

export default Experience