import React from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-12">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 text-center animate-fade-in">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-red-100 rounded-full shadow-md">
            <LockClosedIcon className="h-10 w-10 text-red-500" />
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Access Denied</h1>
        
        {/* Message */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          You don’t have permission to view this page. <br />
          If you believe this is a mistake, please contact support.
        </p>
        
        {/* Action Button */}
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
