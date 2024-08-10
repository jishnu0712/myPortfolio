import { Fragment, useContext } from "react";
import { UserContext } from "../context/context";
import { theme } from "../Theme/Theme";

import Box from "../components/Box";

const boxContentTextClass =
  "font-mono text-gray-200 text-2xl leading-relaxed tracking-wider";



function About() {
  const { darkMode } = useContext(UserContext);
  return (
    <div
      className={`box-container py-16 flex-grow flex flex-col justify-evenly items-center ${
        darkMode ? theme["dark"] : ""
      }`}
    >
      <Box>
        <p className={boxContentTextClass}>
          <span className="text-green-500"> jishnu_dev_roy $ </span>about jishnu
          <br />
          <br />
          <span className="text-green-500">about jishnu(main) $ </span>
          Greetings, I’m Jishnu, a MERN stack Developer. I am an energetic
          person, an effective communicator, and a quick learner. I have been
          part of some very good projects. Currently looking for a MERN stack
          developer job.
        </p>
      </Box>
      <Box>
        <p className={boxContentTextClass}>
          <span className="text-green-500"> jishnu_dev_roy $ </span>cd
          skills/tools
          <br />
          <br />
          <span className="text-green-500">skills/tools (main) $</span> ls
          <br />
          <span className="text-green-500">Proficient With</span>
          <br />
          {process.env.REACT_APP_techStacks.split(', ')?.map( e => <Fragment key={e}>{e}<br/></Fragment>)}
        </p>
      </Box>
      <Box>
        <p className={boxContentTextClass}>
          <span className="text-green-500"> jishnu_dev_roy $ </span>cd
          hobbies/interests
          <br />
          <br />
          <span className="text-green-500">hobbies/interests (main) $ </span>
          <br />
          📖reading
          <br />
          🎭theater
          <br />
          🎥movies
          <br />
          🌶cooking
          <br />
          🥾trekking
          <br />
        </p>
      </Box>
    </div>
  );
}

export default About;
