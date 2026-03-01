import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const details = [
  { icon: faMugHot, text: 'Fueled by coffee' },
  { icon: faLocationDot, text: 'Whitefield, Bengaluru' },
  { icon: faEnvelope, text: 'jishnudevroy@gmail.com' },
];

const socials = [
  { href: 'https://github.com/jishnu0712', icon: faGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/jishnudevroy/', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'mailto:jishnudevroy@gmail.com', icon: faEnvelope, label: 'Email' },
];

const MainComponent = () => {
  return (
    <main className="flex-grow flex items-center justify-center px-6 py-16 lg:py-24">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <img
          src={import.meta.env.BASE_URL + 'img/myImg.jpeg'}
          alt="Jishnu Dev Roy"
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover ring-4 ring-indigo-500/30 dark:ring-indigo-400/30 shadow-2xl"
        />

        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Jishnu
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
            {import.meta.env.VITE_SUB_HEADLINE}
          </p>

          <ul className="mt-6 flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400">
            {details.map(item => (
              <li key={item.text} className="flex items-center gap-3 justify-center lg:justify-start">
                <FontAwesomeIcon icon={item.icon} className="text-indigo-500 dark:text-indigo-400 w-4" />
                {item.text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
            {socials.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
