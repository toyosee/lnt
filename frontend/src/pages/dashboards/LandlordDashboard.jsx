import React from 'react';
import { FaBuilding, FaMoneyBillWave, FaUserShield } from 'react-icons/fa';

const LandlordDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Landlord Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaBuilding className="text-indigo-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Properties Owned</h2>
              <p className="text-xl font-bold text-indigo-600">5</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaMoneyBillWave className="text-green-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Monthly Rent Income</h2>
              <p className="text-xl font-bold text-green-600">₦850,000</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaUserShield className="text-yellow-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Tenants Verified</h2>
              <p className="text-xl font-bold text-yellow-600">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;