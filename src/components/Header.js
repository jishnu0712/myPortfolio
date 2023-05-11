import { React, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { UserContext } from '../context/context';
import { theme } from '../Theme/Theme';

const Header = () => {
  const myContext = useContext(UserContext)
  const { darkMode, setDarkMode } = myContext
 
  return (
    <header className={` shadow py-6 flex  justify-center select-none  ${darkMode ? theme['dark'] : ''}`}>
      <div className={`header-links-container  w-3/4  font-bold text-gray-900 flex flex-wrap justify-evenly items-center`} >
        <NavLink
          to="/"
          className={(isActive) => (isActive.isActive ? 'border-b-4 border-sky-400' : '')}
        >
          <p className="home cursor-pointer">home</p>
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
        {/* dark mode toggle */}
        <div className={`circle w-6 h-6 border-cyan-300 border-2  rounded-full cursor-pointer hover:shadow hover:shadow-cyan-300 ${darkMode ? 'bg-slate-300' : 'bg-gray-900'}`}
          onClick={ ()=>setDarkMode( prev => !prev ) }></div>
      </div>
    </header>
  );
};

export default Header;