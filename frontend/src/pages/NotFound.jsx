import React from 'react';
import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-12">
      <div className="max-w-md w-full bg-gray-900 shadow-2xl rounded-2xl p-10 text-center border border-gray-700">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-500/10 p-4 rounded-full">
            <ExclamationTriangleIcon className="h-12 w-12 text-yellow-500" />
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-white mb-3 tracking-tight">404</h1>
        <h2 className="text-xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
        
        {/* Description */}
        <p className="text-gray-400 mb-8">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>
        
        {/* Action Button */}
        <Link
          to="/"
          className="inline-block bg-gray-900 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
