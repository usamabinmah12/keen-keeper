import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl md:text-9xl font-bold text-white opacity-80">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-105 transition duration-300"
          >
            Go Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-500 text-white hover:bg-white hover:text-slate-900 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;