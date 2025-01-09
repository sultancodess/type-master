import React from 'react';
import { Keyboard } from 'lucide-react';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Keyboard className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TypeMaster</span>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 px-3 py-2">Home</button>
            <button onClick={() => scrollToSection('practice')} className="text-gray-700 hover:text-purple-600 px-3 py-2">Practice</button>
            <button onClick={() => scrollToSection('tips')} className="text-gray-700 hover:text-purple-600 px-3 py-2">Tips</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 px-3 py-2">About</button>
          </div>
        </div>
      </div>
    </nav>
  );
}