import React, { useState } from 'react';
import { paragraphs } from '../data/paragraphs';
import { getRandomParagraph } from '../utils/testUtils';
import TypingTest from './TypingTest';

export default function PracticeArea() {
  const [selectedParagraph, setSelectedParagraph] = useState(paragraphs[0]);

  const handleNewTest = () => {
    const newParagraph = getRandomParagraph(paragraphs);
    setSelectedParagraph(newParagraph);
  };

  return (
    <section id="practice" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Practice Area</h2>
          <button
            onClick={handleNewTest}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            New Test
          </button>
        </div>
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paragraphs.map((para) => (
              <button
                key={para.id}
                onClick={() => setSelectedParagraph(para)}
                className={`p-4 rounded-lg text-left transition-colors ${
                  selectedParagraph.id === para.id
                    ? 'bg-purple-100 border-2 border-purple-500'
                    : 'bg-white border-2 border-transparent hover:border-purple-300'
                }`}
              >
                <p className="text-gray-700 line-clamp-2">{para.text}</p>
              </button>
            ))}
          </div>
        </div>
        <TypingTest initialText={selectedParagraph.text} />
      </div>
    </section>
  );
}