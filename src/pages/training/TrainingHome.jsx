import React from 'react';
import { Link } from 'react-router-dom';
import TrainingHeader from '../../components/TrainingHeader';
import Footer from '../../components/Footer';

const TrainingHome = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <TrainingHeader />

      <header className="text-center py-24 px-5 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <h1 className="text-5xl font-bold mb-5">AI & Machine Learning Professional Program</h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto">Empowering Engineering Graduates in India to Build the Future with Artificial Intelligence</p>

        <div className="flex flex-wrap justify-center gap-10 my-10">
          <div className="text-center">
            <strong className="block text-2xl">6 Months</strong>
            <span className="text-sm opacity-90">Program Duration</span>
          </div>
          <div className="text-center">
            <strong className="block text-2xl">180 Hours</strong>
            <span className="text-sm opacity-90">Learning</span>
          </div>
          <div className="text-center">
            <strong className="block text-2xl">Hands-on</strong>
            <span className="text-sm opacity-90">Projects</span>
          </div>
          <div className="text-center">
            <strong className="block text-2xl">Live</strong>
            <span className="text-sm opacity-90">Instructor Sessions</span>
          </div>
        </div>

        <a href="https://forms.gle/pbP7s6Ta4yvAw73x6" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
          Reserve Free Webinar Seat
        </a>
      </header>

      <section className="py-20 px-5 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Learn Artificial Intelligence?</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Artificial Intelligence is transforming industries including banking,
          insurance, healthcare, retail and technology.
          This program combines programming, mathematics and machine learning
          to prepare engineers for the next generation of technology careers in India.
        </p>
      </section>

      <section className="py-20 px-5 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Course Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Python for AI</h3>
              <p className="text-gray-600">Learn Python programming, NumPy, Pandas and Matplotlib for AI development.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Machine Learning</h3>
              <p className="text-gray-600">Build supervised and unsupervised machine learning models.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Deep Learning</h3>
              <p className="text-gray-600">Understand neural networks, CNN, RNN and LSTM architectures.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Natural Language Processing</h3>
              <p className="text-gray-600">Develop applications using NLP techniques and text analytics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Tools & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'Jupyter Notebook', 'Google Colab', 'TensorFlow', 'Keras', 'Scikit-learn'].map((tool) => (
              <span key={tool} className="px-6 py-3 bg-white shadow-sm rounded-full text-blue-700 font-medium border border-blue-100">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Learning Outcomes</h2>
          <ul className="space-y-4">
            {[
              'Analyze real-world problems using machine learning models',
              'Develop AI and ML solutions using modern tools',
              'Build deep learning models for images and sequences',
              'Apply NLP techniques for text analytics'
            ].map((outcome, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-lg text-gray-700">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-5 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your AI Career Today</h2>
        <p className="text-xl mb-8 opacity-90">Join the ThoughtPlex India AI & Machine Learning Program</p>
        <a href="https://forms.gle/pbP7s6Ta4yvAw73x6" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
          Join Free AI Webinar
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingHome;
