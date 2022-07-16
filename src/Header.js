import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='border-2 shadow py-6 flex  justify-center select-none'>

      <div className="header-links-container  w-3/4  font-bold text-gray-900 
         flex flex-wrap justify-evenly items-center ">

        <NavLink
          to="/"
          className={(isActive) => (isActive.isActive ? 'border-b-4 border-sky-400' : '')}
        >
          <p className="home cursor-pointer ">home</p>
        </NavLink>

        <NavLink
          to="/about"
          className={(isActive) => (isActive.isActive ? 'border-b-4 border-sky-400' : '')}
        >
          <p className="about-me cursor-pointer ">
            about me
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="name  text-3xl cursor-pointer hover:text-gray-500">jdroy</p>
        </NavLink>

        <NavLink to="/portfolio"
          className={(isActive) => (isActive.isActive ? 'border-b-4 border-sky-400' : '')}
        >
          <p className="portfolio cursor-pointer">portfolio</p>
        </NavLink>


        <div className="circle w-6 h-6 bg-gray-900 rounded-full cursor-pointer hover:shadow hover:shadow-cyan-300"></div>

      </div>
    </header >
  );
};

export default Header;