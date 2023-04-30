import React from 'react';

function Footer(props) {
  const date = new Date()
  return (
    <footer className='flex bg-gray-100 justify-center p-6 shadow select-none'>
      <p className='text-xs text-gray-400 '>Jishnu Dev Roy @ {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;