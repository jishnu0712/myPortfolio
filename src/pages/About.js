const boxClass            = "box mb-16 w-3/4 bg-gray-900 rounded-lg shadow-xl";
const boxHeaderClass      = "box-header bg-gray-500 h-10 rounded-t-lg py-3 px-4";
const redButtonClass      = "red rounded-full bg-red-500 h-4 w-4  mx-1";
const yellowButtonClass   = "yellow rounded-full bg-yellow-500 h-4 w-4 mx-1";
const greenButtonClass    = "green rounded-full bg-green-500 h-4 w-4 mx-1";
const boxContentTextClass = 'font-mono text-gray-200 text-2xl leading-relaxed tracking-wider';

function About() {
    return (
        <div className='box-container my-16 flex-grow flex flex-col justify-evenly items-center bg-gray-100'>

            {/* intro Commandline */}
            <div className={boxClass}>
                <div className={boxHeaderClass}>
                    <div className="buttons flex -ml-2">
                        <div className={redButtonClass}></div>
                        <div className={yellowButtonClass}></div>
                        <div className={greenButtonClass}></div>
                    </div>
                </div>

                <div className="box-content pb-16 p-8">
                    <p className={boxContentTextClass}>
                        <span className='text-green-500'> jishnu_dev_roy $ </span>cat about jishnu<br />
                        <br />

                        <span className='text-green-500'>about jishnu(main) $ </span>Greetings, I’m Jishnu,
                        a Front-End Web Developer. I am an energetic person,
                        an effective communicator, and a quick learner.
                        I have been part of some very good web design projects.
                        Currently looking for a front-end developer job.
                    </p>
                </div>
            </div>
            {/* skills */}
            <div className={boxClass}>
                <div className={boxHeaderClass}>
                    <div className="buttons flex -ml-2">
                        <div className={redButtonClass}></div>
                        <div className={yellowButtonClass}></div>
                        <div className={greenButtonClass}></div>
                    </div>
                </div>

                <div className="box-content pb-16 p-8">
                    <p className={boxContentTextClass}>
                        <span className='text-green-500'> jishnu_dev_roy $ </span>cd skills/tools<br />
                        <br />

                        <span className='text-green-500'>skills/tools (main) $</span> ls<br />

                        <span className='text-green-500'>Proficient With</span><br />

                        javascript<br />
                        react<br />
                        html5<br />
                        css3<br />
                        tailwind CSS<br />
                        git<br />
                        github<br />
                        bootstrap<br />

                        <span className='text-green-500'>Exposed To</span><br />


                        nodejs<br />
                        c++<br />
                    </p>
                </div>
            </div>

            {/* interests */}

            <div className={boxClass}>
                <div className={boxHeaderClass}>
                    <div className="buttons flex -ml-2">
                        <div className={redButtonClass}></div>
                        <div className={yellowButtonClass}></div>
                        <div className={greenButtonClass}></div>
                    </div>
                </div>

                <div className="box-content pb-16 p-8">
                    <p className={boxContentTextClass}>
                        <span className='text-green-500'> jishnu_dev_roy $ </span>cd hobbies/interests<br />
                        <br />

                        <span className='text-green-500'>hobbies/interests (main) $ </span><br/>
                   
                        📖reading<br/>
                        🎭theater<br/>
                        🎥movies<br/>
                        🌶cooking<br/>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default About;