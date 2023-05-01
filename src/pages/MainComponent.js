import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEarthAsia, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const coffee = <FontAwesomeIcon icon={faCoffee} />
const asia   = <FontAwesomeIcon icon={faEarthAsia} />
const email  = <FontAwesomeIcon icon={faEnvelope} />

const MainComponent = () => {
    return (
        <main className='flex-grow p-8 w-full flex flex-col justify-center items-center sm:flex-col lg:flex-row '>

            <img src={ process.env.PUBLIC_URL + "/img/myImg.jpeg"} alt="profile cover" className=" img-circle w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full bg-blue-300 shadow-xl border-8 border-gray-200"/>

            <div className="intro m-16 select-none ">

                <h1 className="headline font-bold text-gray-900 text-4xl tracking-widest hover:text-indigo-400">Hi, I'm
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-green-400'> Jishnu Dev</span> 
                </h1>

                <h3 className="sub-headline font-bold text-gray-700 text-xl tracking-wider text-left hover:text-indigo-700">I'm a Front-end Developer.</h3>

                <ul className="details text-gray-600 text-base font-mono mt-4 tracking-widest">

                    <li className="coffee hover:text-indigo-700 hover:font-bold">{coffee}<p
                        className='pl-4 inline-block'>fueled by coffee</p></li>

                    <li className="location hover:text-indigo-700 hover:font-bold">{asia}<p
                        className='pl-4 inline-block'>based in India</p></li>

                    <li className="email hover:text-indigo-700 hover:font-bold select-all">{email}<p
                        className='pl-4 inline-block'>jishnu.dev.roy@gmail.com</p></li>
                </ul>

                <div className="social-links">

                </div>
            </div>
        </main>
    );
};

export default MainComponent;