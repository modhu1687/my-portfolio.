import React from 'react';
import modhu from '../../assets/images/modhu.png';
const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: '05+' },
    { label: 'Completed Projects', value: '80+' },
    { label: 'Happy Clients', value: '40+' }
  ];

  return (
    <section className="bg-[#111215] text-white py-20 px-6 sm:px-12 lg:px-24 w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#1c1d21] rounded-2xl overflow-hidden aspect-square border border-neutral-800">
              <img 
                src={modhu} 
                alt="About Profile" 
                className="w-full h-full object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.2em] text-orange-600 font-bold mb-4">
              My Biography
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
              Crafting digital experiences with <span className="text-orange-500">precision</span> and passion.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-xl">
              I am a dedicated UI/UX Designer and Frontend Developer based in Bangladesh. With over 5 years of experience, I specialize in building responsive, user-centric websites that blend aesthetic appeal with functional excellence.
            </p>

            <div className="grid grid-cols-3 gap-8 w-full mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-orange-600/20">
              Download CV
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;