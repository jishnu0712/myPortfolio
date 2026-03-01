const { VITE_NAME, VITE_ROLE, VITE_CAREER_START_DATE, VITE_ABOUT_DESCRIPTION, VITE_WHOAMI_TEXT, VITE_INTERESTS_TEXT, VITE_TECH_STACKS } = import.meta.env;

const skills = VITE_TECH_STACKS.split(', ');

const CAREER_START = new Date(VITE_CAREER_START_DATE);

function getYearsOfExperience() {
  const now = new Date();
  const diffMs = now - CAREER_START;
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(years * 10) / 10;
}

const hobbies = [
  { emoji: '\u{1F4D6}', name: 'Reading' },
  { emoji: '\u{1F3AD}', name: 'Theater' },
  { emoji: '\u{1F3A5}', name: 'Movies' },
  { emoji: '\u{1F336}\u{FE0F}', name: 'Cooking' },
  { emoji: '\u{1F97E}', name: 'Trekking' },
];

function About() {
  return (
    <main className="flex-grow px-6 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          About Me
        </h2>

        <div className="mt-8 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            Greetings! I&apos;m {VITE_NAME}, a {VITE_ROLE} with {getYearsOfExperience()} years
            of experience {VITE_ABOUT_DESCRIPTION}
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Skills &amp; Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Hobbies &amp; Interests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {hobbies.map(hobby => (
              <div
                key={hobby.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <span className="text-2xl">{hobby.emoji}</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {hobby.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-gray-700 dark:bg-gray-800 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="bg-gray-800 dark:bg-gray-900 p-6 font-mono text-sm text-gray-300 space-y-4">
            <div>
              <p>
                <span className="text-green-400">{VITE_NAME.toLowerCase()}@dev</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$</span> whoami
              </p>
              <p className="mt-1 text-gray-400">
                {VITE_WHOAMI_TEXT}
              </p>
            </div>
            <div>
              <p>
                <span className="text-green-400">{VITE_NAME.toLowerCase()}@dev</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$</span> cat interests.txt
              </p>
              <p className="mt-1 text-gray-400">
                {VITE_INTERESTS_TEXT}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
