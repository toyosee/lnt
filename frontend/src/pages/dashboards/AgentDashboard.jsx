import React from 'react';
import { FaClipboardList, FaHome, FaHandshake } from 'react-icons/fa';

const AgentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Agent Workspace</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaClipboardList className="text-indigo-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Listings Managed</h2>
              <p className="text-xl font-bold text-indigo-600">24</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaHome className="text-green-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Active Viewings</h2>
              <p className="text-xl font-bold text-green-600">8</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaHandshake className="text-purple-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Deals Closed</h2>
              <p className="text-xl font-bold text-purple-600">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;