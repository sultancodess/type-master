import React, { useState } from 'react';
import { Keyboard } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Keyboard className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-extrabold text-gray-900 tracking-wide">TypeBoost</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 transition duration-200 ease-in-out px-3 py-2 text-lg font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('practice')}
              className="text-gray-700 hover:text-purple-600 transition duration-200 ease-in-out px-3 py-2 text-lg font-medium"
            >
              Practice
            </button>
            <button
              onClick={() => scrollToSection('tips')}
              className="text-gray-700 hover:text-purple-600 transition duration-200 ease-in-out px-3 py-2 text-lg font-medium"
            >
              Tips
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 transition duration-200 ease-in-out px-3 py-2 text-lg font-medium"
            >
              About
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col items-center bg-white shadow-md py-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-purple-600 px-4 py-2 text-lg font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('practice')}
            className="text-gray-700 hover:text-purple-600 px-4 py-2 text-lg font-medium"
          >
            Practice
          </button>
          <button
            onClick={() => scrollToSection('tips')}
            className="text-gray-700 hover:text-purple-600 px-4 py-2 text-lg font-medium"
          >
            Tips
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-purple-600 px-4 py-2 text-lg font-medium"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
