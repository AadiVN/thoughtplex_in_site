import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrainingHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/training" className="text-2xl font-bold text-gray-800">
          ThoughtPlex Training
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/training" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/training/curriculum" className="text-gray-600 hover:text-blue-600">
            Curriculum
          </Link>
          <Link to="/training/webinar" className="text-gray-600 hover:text-blue-600">
            Free Webinar
          </Link>
          <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800">
            Back to TPL India
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 px-6 py-4">
          <div className="flex flex-col space-y-3">
            <Link to="/training" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/training/curriculum" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Curriculum
            </Link>
            <Link to="/training/webinar" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Free Webinar
            </Link>
            <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800" onClick={() => setIsMobileMenuOpen(false)}>
              Back to TPL India
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TrainingHeader;
