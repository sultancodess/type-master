import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a 
            href="https://github.com/sultancodess" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/sultan-alam436/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://www.instagram.com/sultan.codes/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} TypeBoost by Sultan.codes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}