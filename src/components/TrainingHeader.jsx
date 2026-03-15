import React from 'react';
import { Link } from 'react-router-dom';

const TrainingHeader = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/training" className="text-2xl font-bold text-gray-800">
          ThoughtPlex Training
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/training" className="text-gray-600 hover:text-blue-600">Home</Link></li>
          <li><Link to="/training/curriculum" className="text-gray-600 hover:text-blue-600">Curriculum</Link></li>
          <li><Link to="/training/webinar" className="text-gray-600 hover:text-blue-600">Free Webinar</Link></li>
          <li><Link to="/" className="text-blue-600 font-semibold hover:text-blue-800">Back to TPL India</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default TrainingHeader;
