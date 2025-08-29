import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 via-pink-100 to-indigo-50 min-h-screen flex items-center justify-center px-6">
      <div className="text-center bg-white rounded-xl shadow-lg p-10 max-w-md w-full">
        <FontAwesomeIcon icon={faUserPlus} className="text-indigo-500 text-5xl mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Signup Module</h1>
        <p className="text-lg text-gray-600 mb-6">This feature is coming soon. Stay tuned!</p>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default Signup;