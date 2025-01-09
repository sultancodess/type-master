import React from 'react';
import { Timer } from 'lucide-react';

interface StatsProps {
  wpm: number;
  accuracy: number;
  characterCount: number;
}

export default function Stats({ wpm, accuracy, characterCount }: StatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="bg-purple-50 p-4 rounded-lg">
        <Timer className="h-6 w-6 mx-auto mb-2 text-purple-600" />
        <p className="text-sm text-gray-500">WPM</p>
        <p className="text-2xl font-bold text-purple-600">{wpm || '--'}</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <div className="h-6 w-6 mx-auto mb-2 text-purple-600">%</div>
        <p className="text-sm text-gray-500">Accuracy</p>
        <p className="text-2xl font-bold text-purple-600">{accuracy}%</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <div className="h-6 w-6 mx-auto mb-2 text-purple-600">#</div>
        <p className="text-sm text-gray-500">Characters</p>
        <p className="text-2xl font-bold text-purple-600">{characterCount}</p>
      </div>
    </div>
  );
}