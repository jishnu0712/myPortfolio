import { useContext } from "react";
import { UserContext } from "../context/context";
import Button from "./Button";


export default function ProjectDetailsCard(project) {

    const { darkMode } = useContext(UserContext);

    // tailwind classes
    const portFolioBoxClass = `portfolio-box py-2 px-4 flex flex-col justify-center items-center 
    w-7/12 sm:w-5/12  2xl:w-1/4 border-2 border-gray-200`;
    const projectTitleClass = `title text-sm font-bold  tracking-widest mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`;
    const projectDescriptionClass = `text-sm text-gray-600 mb-4 h-48 overflow-y-auto`;


    const handleClick = (e) => {
        e.preventDefault()
        window.open(project[e.target.name], '_blank');
    }
    const description = project.description.map((item,index) => <li key={index}>{item}</li>)

    return (
        <div className={portFolioBoxClass}>
            {/* <img src={process.env.PUBLIC_URL + '/img/Untitled_design.png'} alt="" className="portfolio-img w-full" /> */}
            <p className={projectTitleClass}>{project.name}</p>

            <ul className={projectDescriptionClass}>{description}</ul>

            <div className="btn flex flex-wrap justify-center">
                <Button
                    darkMode={darkMode}
                    name="live"
                    id="live"
                    onClick={handleClick}
                    disabled={!project.live.length}
                >
                    Open Live
                </Button>
                <Button
                    darkMode={darkMode}
                    name="git"
                    id="git"
                    onClick={handleClick}
                    disabled={!project.git.length}
                >
                    Source Code
                </Button>
            </div>
        </div>
    );
}