import React from 'react';

const Header = () => {
    return (
        <header className='border-2 shadow py-6 flex  justify-center select-none'>
        
        <div className="header-links-container  w-3/4  font-bold text-gray-900 
         flex flex-wrap justify-evenly items-center ">
          
          <p className="home cursor-pointer hover:border-b-4 hover:border-indigo-500">home</p>
          
          <p className="about-me cursor-pointer hover:border-b-4 hover:border-indigo-500">about me</p>
          
          <p className="name  text-3xl cursor-pointer hover:text-gray-500">jdroy</p>
          
          <p className="portfolio cursor-pointer hover:border-b-4 hover:border-indigo-500">portfolio</p>
          
          <div className="circle w-6 h-6 bg-gray-900 rounded-full cursor-pointer hover:shadow hover:shadow-cyan-300"></div>
        
        </div>
      </header>
    );
};

export default Header;