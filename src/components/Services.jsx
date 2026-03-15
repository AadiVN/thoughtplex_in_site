import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-laptop-code',
      title: 'Software Architecture',
      description: 'Expert architecture design and consulting for scalable, maintainable enterprise applications.'
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Solutions',
      description: 'Cloud migration, infrastructure design, and optimization for AWS, Azure, and Google Cloud.'
    },
    {
      icon: 'fa-project-diagram',
      title: 'Microservices',
      description: 'Design and implementation of microservices architecture for modern, distributed systems.'
    },
    {
      icon: 'fa-digital-tachograph',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies and implementation for legacy systems.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Security & Compliance',
      description: 'Security architecture, compliance consulting, and implementation of best practices.'
    },
    {
      icon: 'fa-cogs',
      title: 'DevOps & CI/CD',
      description: 'DevOps consulting, CI/CD pipeline setup, and automation for faster delivery.'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${service.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
