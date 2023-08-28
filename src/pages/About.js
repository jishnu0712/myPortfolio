import { useContext } from "react";
import { UserContext } from "../context/context";
import { theme } from "../Theme/Theme";

const boxClass = "box mb-16 w-3/4 bg-gray-700 rounded-lg shadow-xl";
const boxHeaderClass = "box-header bg-gray-500 h-10 rounded-t-lg py-3 px-4";
const redButtonClass = "red rounded-full bg-red-500 h-4 w-4  mx-1";
const yellowButtonClass = "yellow rounded-full bg-yellow-500 h-4 w-4 mx-1";
const greenButtonClass = "green rounded-full bg-green-500 h-4 w-4 mx-1";
const boxContentTextClass = 'font-mono text-gray-200 text-2xl leading-relaxed tracking-wider';

function Button({ color }) {
    const buttonClass = `${color} rounded-full h-4 w-4 mx-1`;
    return <div className={buttonClass}></div>;
}

function Box({ children }) {
    return (
        <div className={`${boxClass}`}>
            <div className={boxHeaderClass}>
                <div className="buttons flex -ml-2">
                    <Button color={redButtonClass} />
                    <Button color={yellowButtonClass} />
                    <Button color={greenButtonClass} />
                </div>
            </div>
            <div className="box-content pb-16 p-8">
                {children}
            </div>
        </div>
    );
}

function About() {
    const { darkMode } = useContext(UserContext);
    return (
        <div className={`box-container py-16 flex-grow flex flex-col justify-evenly items-center ${darkMode ? theme['dark'] : ''}`}>
            <Box>
                <p className={boxContentTextClass}>
                    <span className='text-green-500'> jishnu_dev_roy $ </span>about jishnu<br />
                    <br />
                    <span className='text-green-500'>about jishnu(main) $ </span>Greetings, I’m Jishnu,
                    a MERN stack Developer. I am an energetic person,
                    an effective communicator, and a quick learner.
                    I have been part of some very good projects.
                    Currently looking for a MERN stack developer job.
                </p>
            </Box>
            <Box>
                <p className={boxContentTextClass}>
                    <span className='text-green-500'> jishnu_dev_roy $ </span>cd skills/tools<br />
                    <br />
                    <span className='text-green-500'>skills/tools (main) $</span> ls<br />
                    <span className='text-green-500'>Proficient With</span><br />
                    javascript<br />
                    React.js<br />
                    Node.js<br />
                    html5<br />
                    css3<br />
                    tailwind CSS<br />
                    git<br />
                    github<br />
                    bootstrap<br />
                </p>
            </Box>
            <Box>
                <p className={boxContentTextClass}>
                    <span className='text-green-500'> jishnu_dev_roy $ </span>cd hobbies/interests<br />
                    <br />
                    <span className='text-green-500'>hobbies/interests (main) $ </span><br />
                    📖reading<br />
                    🎭theater<br />
                    🎥movies<br />
                    🌶cooking<br />
                </p>
            </Box>
        </div>
    );
}

export default About;