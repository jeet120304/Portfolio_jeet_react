import React from 'react'

const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4  md:px-16 space-y-3'>
      <div>
      <h1 className='text-3xl font-bold mb-5 underline'>About</h1>
        <p >👋 Hi there! I'm Abhijeet gouda, a passionate web developer with a flair for crafting stunning and efficient websites,expertise in the <span className='text-red-xl'>MERN stack</span> ,I enjoy turning ideas into interactive and responsive web experiences that prioritize performance and usability. My goal is to become a great developer by building impactful and seamless user experiences.</p>
        <br />
        <br />
        <h1 className='text-purple-500 font-semibold text-xl'>Education  </h1>
        <br />
        <span>Bachelor of Computer Application(BCA), Bhanja College of Computer & Management, [2021-2024] </span>

        <br />
        <br />
        <h1 className='text-purple-500 font-semibold text-xl'>Skills & Expertise  </h1>
        <br />
        <span>Proficient in Javascript Experienced with MERN stack . Excellent problem-solving skills Effective communicator and collaborator</span>

        <br />
        <br />
        <h1 className='text-purple-500 font-semibold text-xl'>Proffesional experience </h1>
        <br />
        <span>MERN stack-intern, Qspider, [oct/2024-present] 
          <br />
          <br />
          <p>Currently pursuing a MERN stack internship at QSpiders Bhubaneswar, where I am actively involved in developing web applications. Gained hands-on experience with MongoDB, Express.js, Node.js, and JavaScript for building dynamic projects. Successfully built and deployed multiple projects, enhancing practical skills in frontend and backend development.</p></span>
        <br />
        <br />
        <h1 className='text-purple-500 font-semibold text-xl'>Mission statement </h1>
        <br />
        <span>My mission is to leverage my skills and creativity to deliver innovative Software solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.</span>
      </div>
    </div>
  )
}

export default About