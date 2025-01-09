import React, { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';
import { calculateWPM, calculateAccuracy } from '../utils/typingUtils';
import Stats from './Stats';

interface TypingTestProps {
  initialText: string;
}

export default function TypingTest({ initialText }: TypingTestProps) {
  const [text, setText] = useState(initialText);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState(100);
  const [isFinished, setIsFinished] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setText(initialText);
    setUserInput("");
    setStartTime(null);
    setAccuracy(100);
    setIsFinished(false);
    setWpm(0);
    setShowResults(false);
  }, [initialText]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setUserInput(value);

    if (!startTime && value.length === 1) {
      setStartTime(Date.now());
    }

    setAccuracy(calculateAccuracy(text, value));

    if (value === text) {
      setIsFinished(true);
      const timeElapsed = (Date.now() - (startTime || Date.now())) / 1000 / 60;
      setWpm(calculateWPM(text, timeElapsed));
    }
  };

  const handleComplete = () => {
    if (userInput.length > 0) {
      setIsFinished(true);
      const timeElapsed = (Date.now() - (startTime || Date.now())) / 1000 / 60;
      setWpm(calculateWPM(text, timeElapsed));
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setText(initialText);
    setUserInput("");
    setStartTime(null);
    setAccuracy(100);
    setIsFinished(false);
    setWpm(0);
    setShowResults(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6 p-4 bg-gray-50 rounded-md">
        <p className="text-lg text-gray-700 font-medium">{text}</p>
      </div>

      <textarea
        value={userInput}
        onChange={handleInput}
        disabled={isFinished}
        className="w-full p-4 border-2 border-gray-200 rounded-md focus:border-purple-500 focus:ring-purple-500 mb-6 h-32"
        placeholder="Start typing here..."
      />

      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handleComplete}
          disabled={isFinished || userInput.length === 0}
          className={`px-4 py-2 rounded-md ${
            isFinished || userInput.length === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          Complete Test
        </button>

        <button
          onClick={handleReset}
          className="flex items-center px-4 py-2 text-purple-600 hover:text-purple-700"
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
          Reset
        </button>
      </div>

      {showResults && (
        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Test Results</h3>
          <Stats 
            wpm={wpm}
            accuracy={accuracy}
            characterCount={userInput.length}
          />
        </div>
      )}

      {!showResults && (
        <Stats 
          wpm={wpm}
          accuracy={accuracy}
          characterCount={userInput.length}
        />
      )}
    </div>
  );
}