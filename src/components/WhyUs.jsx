import React from 'react';

const WhyUs = () => {
  const reasons = [
    {
      icon: 'fa-users',
      title: 'Expert Team',
      description: 'Experienced architects and consultants with proven track records in enterprise solutions.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Proven Results',
      description: 'Delivered successful projects across various industries and scales.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Innovation Focus',
      description: 'Stay ahead with cutting-edge technologies and best practices.'
    },
    {
      icon: 'fa-handshake',
      title: 'Client Partnership',
      description: 'Long-term partnerships built on trust, transparency, and mutual success.'
    },
    {
      icon: 'fa-award',
      title: 'Quality Assurance',
      description: 'Rigorous quality standards ensuring robust and reliable solutions.'
    },
    {
      icon: 'fa-clock',
      title: 'Timely Delivery',
      description: 'Commitment to deadlines without compromising on quality.'
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Why Choose Us</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card-hover bg-white p-6 rounded-lg shadow-md flex items-start"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className={`fas ${reason.icon} text-xl text-blue-600`}></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
