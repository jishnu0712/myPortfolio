import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEarthAsia, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/context';
import { theme } from '../Theme/Theme';

const coffee = <FontAwesomeIcon icon={faCoffee} />;
const asia = <FontAwesomeIcon icon={faEarthAsia} />;
const email = <FontAwesomeIcon icon={faEnvelope} />;

const MainComponent = () => {
    const { darkMode } = useContext(UserContext);

    const classNames = {
        container: `flex-grow p-8 w-full flex flex-col justify-center items-center sm:flex-col lg:flex-row ${darkMode ? theme['dark'] : ''}`,
        intro: `intro m-16 select-none ${darkMode ? 'text-white' : 'text-gray-900'}`,
        headline: `headline font-bold text-4xl tracking-widest hover:text-indigo-400 ${darkMode ? 'text-white' : 'text-gray-900'}`,
        gradientText: `text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? 'from-indigo-400 to-green-400' : 'from-indigo-400 to-indigo-700'}`,
        subHeadline: `sub-headline font-bold text-xl tracking-wider text-left hover:text-indigo-700 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`,
        listItem: `coffee hover:text-indigo-700 hover:font-bold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`,
    };

    return (
        <main className={classNames.container}>
            <img src={process.env.PUBLIC_URL + "/img/myImg.jpeg"} alt="profile cover" className="img-circle w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full bg-blue-300 shadow-xl border-8 border-gray-200" />
            <div className={classNames.intro}>
                <h1 className={classNames.headline}>
                    Hi, I'm <span className={classNames.gradientText}>Jishnu Dev</span>
                </h1>
                <h3 className={classNames.subHeadline}>I'm a Front-end Developer.</h3>
                <ul className={`details text-base font-mono mt-4 tracking-widest ${classNames.listItem}`}>
                    <li className={classNames.listItem}>{coffee}<p className={`pl-4 inline-block ${classNames.listItem}`}>fueled by coffee</p></li>
                    <li className={classNames.listItem}>{asia}<p className={`pl-4 inline-block ${classNames.listItem}`}>based in India</p></li>
                    <li className={classNames.listItem}>{email}<p className={`pl-4 inline-block ${classNames.listItem}`}>jishnu.dev.roy@gmail.com</p></li>
                </ul>
                <div className="social-links">
                    {/* social links to be added here */}
                </div>
            </div>
        </main>
    );
};

export default MainComponent;
