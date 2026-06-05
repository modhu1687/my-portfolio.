import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      link: '#'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'UI/UX Design',
      link: '#'
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      category: 'Frontend Dev',
      link: '#'
    }
  ];

  return (
    <section className="bg-[#111215] text-white py-20 px-6 sm:px-12 lg:px-24 w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-orange-600 font-bold block mb-2">
              My Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <button className="mt-6 md:mt-0 text-orange-500 font-bold hover:text-orange-600 transition-colors duration-300 flex items-center gap-2">
            View All Projects 
            <span>&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a 
              href={project.link} 
              key={project.id} 
              className="group block bg-[#1c1d21] p-10 rounded-2xl border border-neutral-800/40 hover:border-neutral-700/60 transition-all duration-300 min-h-[250px] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              <div className="pt-6 flex items-center gap-2 text-orange-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Project Details
                <span>&rarr;</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;