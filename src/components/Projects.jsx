import React from 'react'
// import html from "../../public/html.png"
// import css from "../../public/css.jpg"
// import javascript from "../../public/javascript.png"
// import reactjs from "../../public/reactjs.png"
// import mongodb from "../../public/mongodb.jpg"
// import node from "../../public/node.png"
// import express from "../../public/express.png"
// import oracle from "../../public/oracle.png"

import todo from "../../public/to-do-app.png"
import ecommerce from "../../public/ecommerce.png"
import milkApp from "../../public/milk-app.png"
import amazon from "../../public/amazon.png"
import portfolio from "../../public/portfolio.png"



const Projects = () => {
   const cardItem = [
    {
        id:1,
        logo:portfolio,
        name:"Portfolio(Reactjs)",
        proj:"this is my portfolio..",
        // live:'https://jeet-portfolio.vercel.app/'

    },
    {
        id:2,
        logo:todo,
        name:"to-do-app(Reactjs)",
        proj:"this is to-do application..",
        live:`https://react-to-do-kappa-jet.vercel.app/`
    },
    {
        id:3,
        logo:ecommerce,
        name:"Ecommerce(HTML_css_js)",
        proj:"this is an ecommerce website..",
        live:`https://ecommercebyjeet.netlify.app/`
    },
    {
        id:4,
        logo:milkApp,
        name:"Milk-Order-App(Reactjs)",
        proj:"this is a Milk_ordered_application..",
        live:'https://milk-order-app.vercel.app/'
    },
    {
        id:5,
        logo:amazon,
        name:"amazon-clone(HTML_css)",
        proj:"this is an amazon-clone website..",
        live:`https://abhijeetsamazonclone.netlify.app/`,
    },
   

    
   ]
  return (
    <div name="Projects" className='max-w-screen-2xl container mx-auto px-4  md:px-16 mt-8'>
    <h1 className='text-3xl font-bold mb-5 underline'>Projects</h1>
    <div className='grid grid-cols-1 md:grid-cols-4 my-5 bg-[#242424]'>
   {
        cardItem.map(({id,logo,name,proj,live})=>(
            <div className='md:w-[300px] md:h-[300px]  rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration:200 flex justify-center items-center flex-col py-3' key={id}>
                 <img src={logo} className='h-[150px] w-[200px] p-1 rounded-lg ' alt="" />
                 <div>
                    <div className='font-bold text-xl mb-3 px-1'>{name}</div>
                    <p className='px-2 text-grey '>{proj}</p>
                 </div>
                 <div className=' flex justify-around'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded mt-2'><a target="_blank" href={live}>live</a></button>
                    {/* <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>source code</button> */}
                
                 </div>
            </div>
        ))
    }
   </div>
    </div>
  )
}

export default Projects