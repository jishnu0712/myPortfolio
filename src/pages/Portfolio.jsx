import React, { useContext } from 'react';
import { UserContext } from '../context/context';
import ProjectDetailsCard from '../components/ProjectDetailsCard';

import projectsDetailsData from '../data/projects';


function Portfolio() {
    const ProjectComponentList = projectsDetailsData.map(item => {
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