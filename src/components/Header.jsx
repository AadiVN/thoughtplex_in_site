import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">ThoughtPlex</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="nav-link text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="nav-link text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="nav-link text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#why-us" onClick={(e) => scrollToSection(e, '#why-us')} className="nav-link text-gray-600 hover:text-blue-600">
              Why Us
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="nav-link text-gray-600 hover:text-blue-600">
              Contact
            </a>
            <Link to="/training" className="nav-link text-gray-600 hover:text-blue-600 font-semibold border-l pl-8 ml-4">
              Training
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3 bg-white">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                Home
              </a>
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                About
              </a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                Services
              </a>
              <a href="#why-us" onClick={(e) => scrollToSection(e, '#why-us')} className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                Why Us
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                Contact
              </a>
              <Link to="/training" className="block rounded-lg px-3 py-2 text-blue-600 font-semibold hover:bg-gray-50 hover:text-blue-800" onClick={() => setIsMobileMenuOpen(false)}>
                Training
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
