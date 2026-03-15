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
          <div className="hidden md:flex space-x-8">
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
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="block text-gray-600 hover:text-blue-600 py-2">
                Home
              </a>
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="block text-gray-600 hover:text-blue-600 py-2">
                About
              </a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="block text-gray-600 hover:text-blue-600 py-2">
                Services
              </a>
              <a href="#why-us" onClick={(e) => scrollToSection(e, '#why-us')} className="block text-gray-600 hover:text-blue-600 py-2">
                Why Us
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block text-gray-600 hover:text-blue-600 py-2">
                Contact
              </a>
              <Link to="/training" className="block text-blue-600 font-semibold py-2">
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
