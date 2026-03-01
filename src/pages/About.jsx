const skills = import.meta.env.VITE_TECH_STACKS.split(', ');

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
            Greetings! I&apos;m Jishnu, a Backend Software Engineer with 3.8 years
            of experience building scalable systems handling high-volume
            transactions. I specialize in distributed services, crypto payments,
            PostgreSQL, Redis, and AWS. I&apos;ve worked across iGaming, Insurance,
            FinTech, and Health domains — always eager to take on new challenges.
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
                <span className="text-green-400">jishnu@dev</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$</span> whoami
              </p>
              <p className="mt-1 text-gray-400">
                Backend engineer who builds scalable, high-volume systems.
              </p>
            </div>
            <div>
              <p>
                <span className="text-green-400">jishnu@dev</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$</span> cat interests.txt
              </p>
              <p className="mt-1 text-gray-400">
                Node.js, PostgreSQL, Redis, AWS, distributed systems, and coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
