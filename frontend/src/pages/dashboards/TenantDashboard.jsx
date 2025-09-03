import React from 'react';
import { FaHome, FaReceipt, FaCalendarAlt } from 'react-icons/fa';

const TenantDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Tenant Portal</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaHome className="text-indigo-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Current Residence</h2>
              <p className="text-xl font-bold text-indigo-600">Gwarinpa Estate</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaReceipt className="text-green-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Rent Paid</h2>
              <p className="text-xl font-bold text-green-600">₦250,000</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaCalendarAlt className="text-purple-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Next Due Date</h2>
              <p className="text-xl font-bold text-purple-600">Oct 1, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;