import React from 'react';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.',
      icon: (
        <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Frontend Dev',
      description: 'Production-grade code with Tailwind CSS and Alpine.js. Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks.',
      icon: (
        <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Landing Pages',
      description: 'High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action from the first scroll.',
      icon: (
        <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#111215] text-white py-20 px-6 sm:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 text-left">
          <span className="text-xs uppercase tracking-widest text-orange-600 font-bold block mb-2">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-[#1c1d21] p-8 rounded-2xl border border-neutral-800/40 hover:border-neutral-700/60 transition-all duration-300 flex flex-col items-start"
            >
              <div className="bg-[#26272c] p-3 rounded-xl mb-6 flex items-center justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;