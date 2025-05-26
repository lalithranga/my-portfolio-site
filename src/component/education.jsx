import React from 'react';

const EducationCards = () => {
  return (
    <div className="min-h-screen ">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-10 md:mb-10 lg:mb-12 bg-gradient-to-r from-[#54ebc3] to-green-600 bg-clip-text text-transparent">
        Educational Journey
      </h1>
      <p className="text-sm lg:text-lg text-center text-gray-400 mb-20">
        The following highlights key educational milestones and achievements throughout the learning path.
      </p>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

        {/* Mission Ready Card */}
        <div className="bg-black rounded-2xl p-4 md:p-6 lg:p-8 border border-white relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-400 group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
          <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm lg:text-base mb-3 md:mb-4 uppercase tracking-wider">
            Feb 2025 - May 2025
          </div>
          <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 leading-tight">
            Digital Technology Product Solution (NZQA Level 05)
          </h3>
          <div className="text-gray-300 text-sm md:text-base lg:text-lg uppercase tracking-wide mb-2 md:mb-3 font-medium">
            Mission Ready
          </div>
          <div className="text-gray-400 text-xs md:text-sm lg:text-base mb-4 md:mb-6 flex items-center gap-2">
            <span className="text-green-400">📍</span>
            Auckland, New Zealand
          </div>
          <div className="text-white font-semibold text-sm md:text-base lg:text-lg mb-3 md:mb-4 border-b-2 border-green-400 pb-2 inline-block">
            Program Overview:
          </div>
          <div className="text-gray-300 leading-relaxed text-xs md:text-sm lg:text-base mb-4 md:mb-6">
            Explored cloud-native development and AI integration through advanced full stack development practices. Built scalable web applications and deployed modern solutions using real-world technologies and methodologies.
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <span className="badge">Cloud Platforms</span>
            <span className="badge">AI Integration</span>
            <span className="badge">Full Stack Development</span>
            <span className="badge">Agile Development</span>
            <span className="badge">Modern Applications</span>
          </div>
        </div>

        {/* ICET Card */}
        <div className="bg-black rounded-2xl p-4 md:p-6 lg:p-8 border border-white relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-400 group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
          <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm lg:text-base mb-3 md:mb-4 uppercase tracking-wider">
            Jan 2024 - Jan 2025
          </div>
          <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 leading-tight">
            Diploma of Software Engineering
          </h3>
          <div className="text-gray-300 text-sm md:text-base lg:text-lg uppercase tracking-wide mb-2 md:mb-3 font-medium">
            Institute of Computer Engineering Technology (ICET)
          </div>
          <div className="text-gray-400 text-xs md:text-sm lg:text-base mb-4 md:mb-6 flex items-center gap-2">
            <span className="text-green-400">📍</span>
            Colombo, Sri Lanka
          </div>
          <div className="text-white font-semibold text-sm md:text-base lg:text-lg mb-3 md:mb-4 border-b-2 border-green-400 pb-2 inline-block">
            Program Content:
          </div>
          <div className="text-gray-300 leading-relaxed text-xs md:text-sm lg:text-base mb-4 md:mb-6">
            A 1-year remote program focused on full-stack development, agile methodologies, and modern software design. Gained practical experience through hands-on projects and creative software solutions.
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <span className="badge">Full-Stack Development</span>
            <span className="badge">Agile Practices</span>
            <span className="badge">Software Design</span>
            <span className="badge">Design Patterns</span>
            <span className="badge">Remote Learning</span>
          </div>
        </div>

        {/* University of Peradeniya Card */}
        <div className="bg-black rounded-2xl p-4 md:p-6 lg:p-8 border border-white relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-400 group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
          <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm lg:text-base mb-3 md:mb-4 uppercase tracking-wider">
            2010 - 2014
          </div>
          <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 leading-tight">
            Bachelor of Science
          </h3>
          <div className="text-gray-300 text-sm md:text-base lg:text-lg uppercase tracking-wide mb-2 md:mb-3 font-medium">
            University of Peradeniya
          </div>
          <div className="text-gray-400 text-xs md:text-sm lg:text-base mb-4 md:mb-6 flex items-center gap-2">
            <span className="text-green-400">📍</span>
            Sri Lanka
          </div>
          <div className="text-white font-semibold text-sm md:text-base lg:text-lg mb-3 md:mb-4 border-b-2 border-green-400 pb-2 inline-block">
            Program Focus:
          </div>
          <div className="text-gray-300 leading-relaxed text-xs md:text-sm lg:text-base mb-4 md:mb-6">
            During my time at the University of Peradeniya, I focused on using modern technology and smart management practices to improve agricultural productivity. I learned how to combine scientific knowledge with practical tools to solve real-world challenges in farming and resource management. This experience helped me develop a strong, hands-on approach to problem-solving, which I now apply in my work as a software developer.
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <span className="badge">Agricultural Innovation</span>
            <span className="badge">Problem Solving</span>
            <span className="badge">Technology & Science</span>
            <span className="badge">Productivity Improvement</span>
            <span className="badge">Smart Resource Management</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationCards;
