export default function ProjectDetailsCard({ name, description, git, live }) {
  return (
    <div className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {name}
      </h3>
      <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400 max-h-52 overflow-y-auto pr-2">
        {description.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0">&bull;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Live Demo
          </a>
        )}
        {git && (
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Source Code
          </a>
        )}
        {!live && !git && (
          <span className="text-sm text-gray-400 dark:text-gray-500 italic">
            Private project
          </span>
        )}
      </div>
    </div>
  );
}
