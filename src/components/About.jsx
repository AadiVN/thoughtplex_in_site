import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">About ThoughtPlex India</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6 text-center">
            ThoughtPlex is a premier software consultancy and architecture firm based in India,
            specializing in delivering enterprise-grade solutions that drive digital transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bullseye text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative software solutions that scale and adapt to their evolving needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-eye text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the trusted technology partner for businesses seeking excellence in software architecture and innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Quality, integrity, and client success drive everything we do. We believe in building lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
