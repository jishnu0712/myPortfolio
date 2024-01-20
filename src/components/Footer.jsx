import React, { useContext } from 'react';
import { UserContext } from '../context/context';
import { theme } from '../Theme/Theme';

function Footer(props) {
  const myContext = useContext(UserContext)
  const { darkMode } = myContext
  const date = new Date()
  return (
    <footer className={`flex  justify-center p-6 shadow select-none ${darkMode ? theme['dark'] : 'bg-gray-100'}`}>
      <p className='text-xs text-gray-400 '>Jishnu Dev Roy @ {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;