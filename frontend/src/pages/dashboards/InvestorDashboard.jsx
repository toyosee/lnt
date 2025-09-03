import React from 'react';
import {
  FaWallet,
  FaBuilding,
  FaChartLine,
  FaPlusCircle,
  FaCheckCircle,
  FaArrowUp,
  FaHome,
} from 'react-icons/fa';

const InvestorDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back, Investor</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
            <FaPlusCircle />
            Add Investment
          </button>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaWallet className="text-indigo-600 text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Total Portfolio Value</h2>
              <p className="text-2xl font-bold text-indigo-600">₦12,450,000</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaBuilding className="text-indigo-600 text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Active Properties</h2>
              <p className="text-2xl font-bold text-indigo-600">5</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaChartLine className="text-indigo-600 text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Monthly ROI</h2>
              <p className="text-2xl font-bold text-indigo-600">₦320,000</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              You received ₦120,000 from Lekki Heights (Aug 28)
            </li>
            <li className="flex items-center gap-2">
              <FaArrowUp className="text-blue-500" />
              ROI updated for Maitama Villas (Aug 25)
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-purple-500" />
              New property added: Gwarinpa Smart Estate (Aug 20)
            </li>
          </ul>
        </div>

        {/* Market Insights */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-indigo-100 p-4 rounded flex items-center gap-4">
              <FaChartLine className="text-indigo-600 text-xl" />
              <div>
                <h3 className="font-semibold text-gray-700">Abuja Rental Yield</h3>
                <p className="text-sm text-gray-600">
                  Average yield: <span className="font-bold">6.8%</span>
                </p>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded flex items-center gap-4">
              <FaArrowUp className="text-purple-600 text-xl" />
              <div>
                <h3 className="font-semibold text-gray-700">Top Performing Zone</h3>
                <p className="text-sm text-gray-600">
                  Guzape Phase II — <span className="font-bold">+12.4% YoY</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;