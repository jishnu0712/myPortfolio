import React, { useContext } from 'react';
import { UserContext } from '../context/context';

const portFolioBoxClass = `portfolio-box py-2 px-4 flex flex-col justify-center items-center w-7/12 Asm:w-5/12  2xl:w-1/4`;
const projectTitleClass = `title font-serif text-gray-900 font-bold text-3xl tracking-widest mb-8`;

const projects = [
    {
        name: "Baadal",
        git: "https://github.com/jishnu0712/Baadal",
        live: ""
    },
    {
        name: "Quizzler",
        git: "google.com",
        live: ""
    },
    {
        name: "API",
        git: "",
        live: ""
    },
]


function PortfolioItem(project) {

    const { darkMode } = useContext(UserContext);

    const buttonClass = `py-2 px-4 ml-4 mb-4  border-2 border-gray-400
    rounded-full text-lg tracking-wider font-semibold shadow-lg hover:text-gray-500 ${darkMode ? 'text-gray-300' : ''}`;

    const handleClick = (e) => {
        e.preventDefault()
        window.open(project[e.target.name], '_blank');
    }

    return (
        <div className={portFolioBoxClass}>
            {/* <img src={process.env.PUBLIC_URL + '/img/Untitled_design.png'} alt="" className="portfolio-img w-full" />
            <p className={projectTitleClass}>My Portfolio</p> */}
            {project.name}
            <div className="btn flex flex-wrap justify-center">
                <button 
                    className={buttonClass} 
                    name="live" 
                    id="live" 
                    onClick={handleClick}
                >
                    Live Demo
                </button>
                <button 
                    className={buttonClass} 
                    name="git" 
                    id="git" 
                    onClick={handleClick}
                >
                    Source Code
                </button>
            </div>
        </div>
    );
}

function Portfolio() {
    const ProjectComponentList = projects.map(item => {
        return PortfolioItem(item)
    })
    const { darkMode } = useContext(UserContext);
    
    return (
        <div className={`portfolio-container flex flex-wrap justify-center items-center ${darkMode ? 'bg-gray-900' : ''}`}>
            {ProjectComponentList}
        </div>
    );
}

export default Portfolio;