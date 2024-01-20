import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/context';
import { theme } from '../Theme/Theme';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);

  const headerLinks = [
    { to: '/', text: 'home' },
    { to: '/about', text: 'about me' },
    { to: '/', text: 'jdroy', className: 'text-3xl cursor-pointer hover:text-gray-500' },
    { to: '/portfolio', text: 'portfolio' },
  ];

  return (
    <header className={`shadow py-6 flex justify-center select-none ${darkMode ? theme['dark'] : ''}`}>
      <div className={`header-links-container w-3/4 font-bold ${darkMode ? 'text-gray-300' : 'text-gray-900'}  flex flex-wrap justify-evenly items-center`}>
        {headerLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={isActive => (isActive.isActive ? 'border-b-4 border-sky-400' : '')}
          >
            <p className={link.className || 'cursor-pointer'}>{link.text}</p>
          </NavLink>
        ))}
        {/* dark mode toggle */}
        <div
          className={`circle w-6 h-6 border-cyan-300 border-2 rounded-full cursor-pointer hover:shadow hover:shadow-cyan-300 ${darkMode ? 'bg-slate-300' : 'bg-gray-900'
            }`}
          onClick={() => setDarkMode(prev => !prev)}
        ></div>
      </div>
    </header>
  );
};

export default Header;