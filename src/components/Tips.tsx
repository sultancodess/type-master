import React from 'react';
import { Lightbulb, ThumbsUp, Coffee, Focus } from 'lucide-react';

export default function Tips() {
  return (
    <section id="tips" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Typing Tips</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-purple-50 p-6 rounded-lg">
            <Lightbulb className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Proper Posture</h3>
            <p className="text-gray-600">
              Sit straight, keep your feet flat on the floor, and position your screen at eye level.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <ThumbsUp className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Home Row Position</h3>
            <p className="text-gray-600">
              Always return your fingers to the home row keys (ASDF JKL;) between keystrokes.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <Coffee className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Take Breaks</h3>
            <p className="text-gray-600">
              Practice in short bursts and take regular breaks to prevent fatigue and maintain focus.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <Focus className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Focus on Accuracy</h3>
            <p className="text-gray-600">
              Start slow and focus on accuracy. Speed will naturally improve with practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}