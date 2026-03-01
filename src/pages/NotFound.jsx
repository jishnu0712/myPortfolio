import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-6 py-24">
      <h1 className="text-8xl font-extrabold text-indigo-600 dark:text-indigo-400">
        404
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
        Page not found
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
      >
        Go Home
      </Link>
    </main>
  );
};

export default NotFound;
