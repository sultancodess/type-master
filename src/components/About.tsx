import React from 'react';
import { Code, Keyboard, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About TypeBoost</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Development</h3>
              <p className="text-gray-600">
                Whether you're a beginner or a pro, TypeBoost adapts to your skill level and helps you become a typing master.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Keyboard className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practice Makes Perfect</h3>
              <p className="text-gray-600">
                Improve your typing speed and accuracy with our comprehensive testing system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p className="text-gray-600">
                Track your progress and watch your typing skills improve over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}