import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function TestTailwind(): React.JSX.Element {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Tailwind Test</h2>
      <div className="flex gap-4 mb-4">
        <button className="btn-primary">Primary Button</button>
        <button className="px-4 py-2 bg-secondary text-white rounded">
          Secondary
        </button>
      </div>
      <div className="card">
        <p>This is a card with combined styles</p>
      </div>

      // Padding
      <p className="p-4">Padding all: p-4</p>
      <p className="px-4 py-2">Padding x & y: px-4 py-2</p>

      // Margin  
      <div className="mt-4 mb-2 mx-auto">Margin top/bottom: mt-4 mb-2 mx-auto</div>

      // Gaps
      <div className="flex gap-4">Gap between items: flex gap-4</div>

      // Flexbox

      <div className="flex justify-between items-center">flex justify-between items-center</div>
      <div className="flex flex-col md:flex-row">flex flex-col md:flex-row</div>

      // Responsive

      <div className="w-full md:w-1/2 lg:w-1/3">w-full md:w-1/2 lg:w-1/3</div>
      <p className="text-sm md:text-base lg:text-lg">text-sm md:text-base lg:text-lg</p>

    </div>
  );
}