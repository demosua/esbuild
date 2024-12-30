import React from "react";
declare const chrome: any;

export default function App() {
  const openOptions = () => {
    chrome.runtime.openOptionsPage();
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Tailwind CSS is Working!
        </h1>
        <p className="text-gray-600">
          This is a simple component styled with Tailwind.
        </p>
      </div>
      <button
        onClick={openOptions}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Options
      </button>
    </div>
  );
}
