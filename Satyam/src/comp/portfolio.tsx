import React from 'react'
import { motion } from 'framer-motion';
import img from '../assets/imgage.png'
import RedoAnimText from "./text";
import pattern from '../assets/hero_pattern.jpg'
import round from '../assets/rounded_border.png'
import aboutme from '../assets/man-analysis-business-accounting-laptop-45719380.webp'
import SkillsCarousel from './SkillBar'
import CalendlyWidget from './CalendlyEmbed';
import Footer from './Footer';
import ProjectTile from './projects'

const portfolio: React.FC = () => {

  return (
    <div>
    <div id='Home' className='h-screen  w-full flex-col justify-center items-center bg-primary'>
      <div className='flex justify-center items-center h-screen w-full md:w-screen ' style={{ backgroundImage: `url(${pattern})` }}>

        <div className='flex flex-col w-full md:flex-col lg:flex-row justify-center items-center md:mt-[8%] lg:mt-[8%]'>

          <div className='flex-col justify-center flex md:w-1/2 items-center text-left mt-40 md:mt-0 lg:mt-0'>
            <h1 className='text-2xl md:text-4xl font-bold text-white flex text-left '>Hi , I'm </h1>
            <h1 className='text-4xl md:text-7xl font-Pacifico text-blue-500 mt-2 '>Satyam Shukla</h1>
            <h2 className='text-2xl md:text-4xl mt-8 font-extralight font-Madimi text-white'>a <RedoAnimText /></h2>

            <p className='hidden md:flex mt-16 text-white font-serif w-[70%] text-center'>👋 Hi, I'm Satyam Shukla — satyamofficial4916@gmail.com. Let's connect and bring ideas to life! 🚀✨
            </p>
            <div className='mt-16 text-white font-serif w-[70%] flex flex-row justify-evenly items-center'>
              <motion.button whileTap={{ scale: 0.85 }} onClick={() => { window.location.href = '#contact'; }} className='w-32 h-12 bg-blue-700 rounded-lg mt-2 p-2 '>Hire Me</motion.button>
              <button className='w-80 h-12  mr-6 mt-2 p-2 text-md md:text-xl text-blue-500'>VIEW MY PORTFOLIO</button>
            </div>
          </div>

          <div className='md:w-1/2 md:flex flex-col items-center '>

            <div className='absolute mt-20 h-[80%] ml-60 md:ml-80'>
              <div className=''>
                <div className='bg-gray-200 text-blue-500 md:h-24 md:w-40 h-14 w-28 md:text-xl text-md rounded-lg p-1 flex flex-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mt-2 lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                  <p className='ml-2 text-sm md:text-xl mt-2 text-black font-Madimi'>Designer & Developer</p>
                </div>
                <div className='bg-gray-200 text-blue-500 md:h-24 md:w-40 h-14 w-28 md:text-xl text-md rounded-lg p-1 mt-3 flex flex-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mt-2 lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                  <p className='ml-2 text-sm md:text-xl mt-2 text-black font-Madimi'>Team Oriented</p>
                </div>
                <div className='bg-gray-200 text-blue-500 md:h-24 md:w-40 h-14 w-28 md:text-xl text-md rounded-lg p-1 mt-3 flex flex-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mt-2 lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                  <p className='ml-2 text-sm md:text-xl mt-2 text-black font-Madimi'>Problem Solver</p>
                </div>
              </div>
            </div>
            <img src={round} alt="round" className='md:mr-32 md:ml-0 ml-12 md:mt-0 mt-6 absolute h-[250px] w-[180px] md:h-[550px] md:w-[350px]' />
            <img src={img} alt="Image" className='mr-32 rounded-full mt-10 border-4 border-black shadow-lg h-[250px] w-[180px] md:h-[450px] md:w-[350px] ml-20' />

          </div>
        </div>

        {/* <CalendlyWidget /> */}

        {/* <div className='fixed right-2 h-40 w-10 rounded-full bg-slate-200 shadow-white shadow-md flex flex-col justify-center items-center p-2 mr-4'>
          <svg onClick={() => { window.location.href = 'https://github.com/Satyam-G5'; }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y+1 hover:scale-105 mt-1 p-0.5 lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
          <svg onClick={() => { window.location.href = 'https://www.instagram.com/satyam_135/'; }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y+1 hover:scale-105 mt-1 p-0.5 lucide lucide-at-sign"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>
          <svg onClick={() => { window.location.href = 'https://github.com/Satyam-G5'; }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y+1 hover:scale-105 mt-1 p-0.5 lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          <svg onClick={() => { window.location.href = 'https://www.linkedin.com/in/satyam-shukla-28a417283/'; }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y+1 hover:scale-105 mt-1 p-0.5 lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
        </div> */}

      </div>
      <section id="about"  className='flex flex-col w-full md:flex-row justify-evenly items-center mt-24'>
        <div className='flex items-center md:w-1/2'>
          <motion.img
            src={aboutme}
            alt="AboutMe"
            className='h-4/5 w-4/5 rounded-lg ml-10'
            initial={{
              opacity: 0,
              x: -100 
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1 
              }
            }}
            viewport={{ once: true }} 
          />
        </div>
        <motion.div
          className='md:w-1/2 flex flex-col justify-start items-center'
          initial={{
            opacity: 0,
            x: 100
          }}
          whileInView={{
            opacity: 1,
            x: 0, 
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }} 
        >
          <h1 className='text-2xl text-blue-500 font-semibold font-Madimi mb-4 mt-6'>Who's this guy? </h1>
          <p className='w-2/3 text-xl mt-6 text-gray-600 font-serif'>👋 Hi, I'm Satyam Shukla — a Full Stack Developer who thrives on turning ideas into polished websites. From design to deployment, I love the entire journey of creating digital experiences.
            💻 My tech journey involves exploring diverse stacks and continuously learning. I've built several projects, always valuing practical application to enhance my skills.
            🌱 Open to new technologies, I enjoy collaborating with others and embracing innovation. Let's connect and bring ideas to life! 🚀✨</p>
          <div className='mt-10 grid md:grid-cols-2 grid-cols-1 gap-6 md:ml-2'>
            <div className='flex flex-col'><h1 className='text-lg font-bold font-sans'>NAME</h1><p className='font-serif font-thin text-md text-gray-600'>Satyam Shukla</p></div>
            <div className='flex flex-col md:ml-20'><h1 className='text-lg font-bold font-sans'>ROLE</h1><p className='font-serif font-thin text-md text-gray-600'>Developer</p></div>
            <div className='flex flex-col'><h1 className='text-lg font-bold font-sans'>EMAIL</h1><p className='font-serif font-thin text-md text-gray-600'>satyamofficial4916@gmail.com</p></div>
            <div className='flex flex-col md:ml-20'><h1 className='text-lg font-bold font-sans'>EMPLOYMENT</h1><p className='font-serif font-thin text-md text-gray-600'>Open</p></div>

          </div>
        </motion.div>
      </section>

      <div className='w-full flex flex-col md:flex-col justify-evenly items-center mt-24'>
        <h1 className='text-3xl text-blue-500 font-semibold font-Madimi mb-8 mt-6'>Let's see what I got :-)</h1>
        <SkillsCarousel />
      </div>
      <div className='mt-24 flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-blue-500 font-semibold font-Madimi mb-8 mt-6'>Projects</h1>
      <ProjectTile/>

      </div>
      <section id="contact" className='flex flex-col justify-center items-center h-max w-max'>
        <h1 className='text-2xl text-white font-semibold font-Madimi mb-4 mt-6'>Get in touch </h1>
        <div className='bg-black w-full md:w-screen'>
        <Footer />
        </div>
      </section>
    </div>
    </div>
  )
}

export default portfolio

