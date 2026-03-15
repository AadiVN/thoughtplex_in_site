import React from 'react';
import TrainingHeader from '../../components/TrainingHeader';
import Footer from '../../components/Footer';

const TrainingWebinar = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      <TrainingHeader />

      <section className="py-16 px-5 bg-gradient-to-r from-blue-700 to-indigo-700 text-center text-white">
        <h1 className="text-4xl font-bold">Free AI Career Webinar</h1>
        <p className="mt-4 text-xl opacity-90">Learn how to start your career in Artificial Intelligence in India</p>
      </section>

      <section className="py-16 px-5 container mx-auto max-w-6xl flex-grow">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-blue-800">What You Will Learn</h2>
              <ul className="space-y-4">
                {[
                  'Overview of AI & Machine Learning',
                  'Career opportunities in AI within India',
                  'Real world ML projects',
                  'How engineers transition into AI roles'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Why Attend?</h3>
              <p className="text-gray-700">Our webinars are conducted by industry experts with years of experience in deploying AI solutions. Get your questions answered live.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Reserve Your Seat</h2>
            <div className="text-center py-8">
              <p className="text-gray-600 mb-6">Please fill out our secure registration form to book your spot.</p>
              <a 
                href="https://forms.gle/pbP7s6Ta4yvAw73x6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                Go to Registration Form
              </a>
              <p className="text-xs text-gray-500 mt-4">Opens in a new window</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingWebinar;
