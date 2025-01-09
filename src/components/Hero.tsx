import React from 'react';
import { Keyboard } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Keyboard className="h-16 w-16 mx-auto text-purple-600 mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Master Your Typing Skills
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Improve your typing speed and accuracy with our interactive typing tests. Practice regularly and track your progress.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#practice" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                Start Typing Test
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}