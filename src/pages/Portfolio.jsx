import React, { useContext } from 'react';
import { UserContext } from '../context/context';
import ProjectDetailsCard from '../components/ProjectDetailsCard';

const projects = [
    {
        name: "Baadal",
        description: "This is a project that uses React",
        git: "https://github.com/jishnu0712/Baadal",
        live: ""
    },
    {
        name: "Quizzler",
        description: "This is a project that uses React",
        git: "https://github.com/jishnu0712/Quizzler.git",
        live: ""
    },
    {
        name: "API",
        description: "This is a project that uses React",
        git: "",
        live: ""
    },
]


function Portfolio() {
    const ProjectComponentList = projects.map(item => {
        return ProjectDetailsCard(item)
    })
    const { darkMode } = useContext(UserContext);

    return (
        <div className={`portfolio-container flex flex-wrap justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : ''}`}>
            {ProjectComponentList}
        </div>
    );
}

export default Portfolio;