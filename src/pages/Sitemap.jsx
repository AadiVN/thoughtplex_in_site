import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">ThoughtPlex</span>
            </Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              <i className="fas fa-home mr-2"></i>Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Sitemap</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Main Navigation</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-home mr-2"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#about" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-info-circle mr-2"></i>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/#services" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-cogs mr-2"></i>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/#why-us" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-envelope mr-2"></i>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Pages */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Legal & Information</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-shield-alt mr-2"></i>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-file-contract mr-2"></i>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-sitemap mr-2"></i>
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Services</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/#services" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-laptop-code mr-2"></i>
                    Software Architecture
                  </Link>
                </li>
                <li>
                  <Link to="/#services" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-cloud mr-2"></i>
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/#services" className="text-blue-600 hover:text-blue-800 flex items-center">
                    <i className="fas fa-digital-tachograph mr-2"></i>
                    Digital Transformation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} ThoughtPlex India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Sitemap;
