import ProjectDetailsCard from '../components/ProjectDetailsCard';
import projectsDetailsData from '../data/projects';
import SEO from '../components/SEO';

function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore projects by Jishnu Dev Roy — backend systems, distributed services, and full-stack applications."
        path="/portfolio"
      />
      <main className="flex-grow px-6 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Portfolio
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          A selection of projects I&apos;ve worked on.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsDetailsData.map(project => (
            <ProjectDetailsCard key={project.name} {...project} />
          ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Portfolio;
