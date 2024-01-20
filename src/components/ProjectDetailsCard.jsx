import { useContext } from "react";
import { UserContext } from "../context/context";


export default function ProjectDetailsCard(project) {

    const { darkMode } = useContext(UserContext);

    // tailwind classes
    const portFolioBoxClass = `portfolio-box py-2 px-4 flex flex-col justify-center items-center 
    w-7/12 sm:w-5/12  2xl:w-1/4 border-2 border-gray-200`;
    const projectTitleClass = `title font-serif font-bold text-3xl tracking-widest mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`;
    const buttonClass = `py-2 px-4 ml-4 mb-4  border-2 border-gray-400
    rounded-full text-lg tracking-wider font-semibold shadow-lg hover:text-gray-500 ${darkMode ? 'text-gray-300' : ''}`;
    const projectDescriptionClass = `text-sm text-gray-600 mb-4`;


    const handleClick = (e) => {
        e.preventDefault()
        window.open(project[e.target.name], '_blank');
    }

    return (
        <div className={portFolioBoxClass}>
            {/* <img src={process.env.PUBLIC_URL + '/img/Untitled_design.png'} alt="" className="portfolio-img w-full" /> */}
            <p className={projectTitleClass}>{project.name}</p>

            <p className={projectDescriptionClass}>{project.description}</p>

            <div className="btn flex flex-wrap justify-center">
                <button
                    className={buttonClass}
                    name="live"
                    id="live"
                    onClick={handleClick}
                    disabled={project.live.length > 0 ? false : true}
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