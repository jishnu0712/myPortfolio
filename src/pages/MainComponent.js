import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEarthAsia, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const coffee = <FontAwesomeIcon icon={faCoffee} />
const asia = <FontAwesomeIcon icon={faEarthAsia} />
const email = <FontAwesomeIcon icon={faEnvelope} />

const MainComponent = () => {
    return (
        <main className=' flex-grow p-8 w-full flex flex-col justify-center items-center
        sm:flex-col lg:flex-row '>

            <div className="">
                <img src=".\img\WhatsApp Image 2022-06-05 at 9.23.01 PM.jpeg" alt=""
                    className=" img-circle w-48 h-48 sm:w-48 sm:h-48 lg:w-64 
            lg:h-64 rounded-full bg-blue-300 shadow-xl border-8 border-gray-200" />
            </div>

            <div className="intro m-16 select-none ">

                <h1 className="headline font-bold text-gray-900 text-4xl hover:text-indigo-700">Hi, I'm

                    <span className='text-pink-500 hover:text-pink-600'> Jishnu Dev</span> </h1>

                <h3 className="sub-headline font-bold text-gray-700 
                    text-xl text-left hover:text-indigo-700">I'm a Front-end Developer.</h3>

                <ul className="details text-gray-600 text-base mt-4 ">
                    
                    <div className="coffee hover:text-indigo-700 hover:font-bold">{coffee}<p
                     className='pl-4 inline-block'>fueled by coffee</p></div>
                    
                    <div className="location hover:text-indigo-700 hover:font-bold">{asia}<p 
                    className='pl-4 inline-block'>based in India</p></div>
                    
                    <div className="email hover:text-indigo-700 hover:font-bold select-all">{email}<p 
                    className='pl-4 inline-block'>jishnu.dev.roy@gmail.com</p></div>
                </ul>

                <div className="social-links">

                </div>
            </div>
        </main>
    );
};

export default MainComponent;