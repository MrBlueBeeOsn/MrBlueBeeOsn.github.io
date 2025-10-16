import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function TestTailwind(): React.JSX.Element {
  return (<>

  <main className="image image2">

    <div className="p-6 bg-red-500 text-white text-xl font-bold">
      🎯 Nếu thấy nền đỏ + padding là Tailwind hoạt động!
    </div>

    <div className="p-6 bg-green-500 text-white text-xl font-bold rounded-lg">
      ✅ Tailwind đã hoạt động!
    </div>

    <div className="p-6 bg-blue-500 text-white rounded-lg shadow-md">
      <p className="text-xl font-bold">✅ Tailwind đang hoạt động!</p>
      <p className="mt-2 text-blue-100">Nếu thấy styling này = thành công</p>
    </div>

    <div className="p-6">

      <h2 className="text-2xl font-bold text-primary mb-4">Tailwind Test</h2>

      <div className="flex gap-4 mb-4">

        <button className="btn-primary">Primary Button</button>
        <button className="px-4 py-2 bg-secondary text-white rounded">
          Secondary
        </button>

      </div>

      // Padding
      <p className="p-4 ">Padding all</p>
      <p className="px-4 py-2">Padding x & y</p>

      // Margin  
      <div className="mt-4 mb-2 mx-auto">Margin top/bottom</div>

      // Gaps
      <div className="flex gap-4">Gap between items</div>

      // Flexbox

      <div className="flex justify-between items-center">Flexbox</div>
      <div className="flex flex-col md:flex-row">Flexbox</div>

      // Responsive

      <div className="w-full md:w-1/2 lg:w-1/3">Responsive</div>
      <p className="text-sm md:text-base lg:text-lg">Responsive</p>

    </div>

  </main>
    
  </>);
}