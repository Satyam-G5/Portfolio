import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className="w-screen h-24 fixed top-0 mb-10 bg-dark flex shadow-lg justify-between z-10 ">
      <div className=" font-bold flex flex-row  h-20 rounded-r-full w-1/2" >
        <span className=" text-white bg-clip-text text-2xl mt-8 ml-3 flex flex-col">
          <Link className='text-xl font-Playfair ml-3' to='/'>
            ssdev
          </Link>
          {/* <p className='text-sm mt-2 font-Playfair ml-2'>satyamofficial4916@gmail.com</p> */}
        </span>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex flex-col items-center mt-1 mr-2 md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-xl text-white p-5 flex flex-row hover:cursor-pointer hover:text-gray-100 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col rounded-md items-center w-36">
            <Link to="/home" className="text-xl  p-3 hover:cursor-pointer">
              DashBoard
            </Link>
            <Link to="/signIn" className="text-xl  p-3 hover:cursor-pointer">
              DashBoard
            </Link>
            <Link to="/About" className="text-xl  p-3 hover:cursor-pointer">
              About
            </Link>

            <Link to="/premium" className="text-xl p-3 hover:cursor-pointer">
              Premium
            </Link>
          </div>
        )}
      </div>


      {/* Desktop Menu */}
      <div className="hidden font-Playfair md:rounded-full md:h-16 md:flex md:flex-row md:justify-evenly items-center w-1/2 md:mt-4  ">

        <a href="#Home" className="text-lg text-white p-3 hover:cursor-pointer">
          Home
        </a>
        <a href="#projects" className="text-lg text-white p-3 hover:cursor-pointer">
          Projects
        </a>
        <a href="#skills" className="text-lg text-white p-3 hover:cursor-pointer">
          Skills
        </a>
        <a href="#contact" className="text-lg text-white p-3 hover:cursor-pointer ">
          Contact Me
        </a>

      </div>



      {/* <div className="mt-3.5 mr-2 justify-center">
        <Link to="/">
          <div  className="p-2 bg-white mr-4 rounded-lg shadow-lg hover:bg-failred hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y+1 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
          </div>
        </Link> 
        
        
      </div> */}
    </nav>
  );
}

export default Navbar;

