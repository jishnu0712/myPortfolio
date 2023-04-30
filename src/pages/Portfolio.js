import React from 'react';

const buttonClass = `py-2 px-4 ml-4 mb-4  border-2 border-gray-400
 rounded-full text-lg tracking-wider font-semibold shadow-lg hover:text-gray-500`;
const portFolioBoxClass = `portfolio-box py-2 px-4 flex flex-col justify-center items-center w-7/12 
 sm:w-5/12  2xl:w-1/4`;
const projectTitleClass = `title font-serif text-gray-900 font-bold text-3xl tracking-widest mb-8`;

function Portfolio() {
    return (
        <div className='portfolio-container flex flex-wrap justify-center items-center bg-white'>

            <div className={portFolioBoxClass}>
                <img src='.\img\Untitled_design.png' alt="" className="portfolio-img w-full" />
                <p className={projectTitleClass}>My Portfolio</p>
                <div className="btn flex flex-wrap justify-center">
                    <button className={buttonClass}>Live Demo</button>
                    <button className={buttonClass}>Source Code</button>
                </div>

            </div>

            <div className={portFolioBoxClass}>
                <img src='.\img\Untitled_design.png' alt="" className="portfolio-img w-full" />
                <p className={projectTitleClass}>My Portfolio</p>
                <div className="btn flex flex-wrap justify-center">
                    <button className={buttonClass}>Live Demo</button>
                    <button className={buttonClass}>Source Code</button>
                </div>

            </div>

            <div className={portFolioBoxClass}>
                <img src='.\img\Untitled_design.png' alt="" className="portfolio-img w-full" />
                <p className={projectTitleClass}>My Portfolio</p>
                <div className="btn flex flex-wrap justify-center">
                    <button className={buttonClass}>Live Demo</button>
                    <button className={buttonClass}>Source Code</button>
                </div>

            </div>

            <div className={portFolioBoxClass}>
                <img src='.\img\Untitled_design.png' alt="" className="portfolio-img w-full" />
                <p className={projectTitleClass}>My Portfolio</p>
                <div className="btn flex flex-wrap justify-center">
                    <button className={buttonClass}>Live Demo</button>
                    <button className={buttonClass}>Source Code</button>
                </div>

            </div>

            <div className={portFolioBoxClass}>
                <img src='.\img\Untitled_design.png' alt="" className="portfolio-img w-full" />
                <p className={projectTitleClass}>My Portfolio</p>
                <div className="btn flex flex-wrap justify-center">
                    <button className={buttonClass}>Live Demo</button>
                    <button className={buttonClass}>Source Code</button>
                </div>

            </div>

        </div>
    );
}

export default Portfolio;