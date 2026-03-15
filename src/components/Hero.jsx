import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Software Consultancy & Architecture
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Transforming Ideas into Scalable Solutions in India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
