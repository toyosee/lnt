import React from 'react';
import {
  FaUsers,
  FaClipboardCheck,
  FaHome,
  FaChartBar,
  FaShieldAlt,
} from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Admin Control Center</h1>
          <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
            View Logs
          </button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaUsers className="text-indigo-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Total Users</h2>
              <p className="text-xl font-bold text-indigo-600">1,248</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaClipboardCheck className="text-purple-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Pending KYC</h2>
              <p className="text-xl font-bold text-purple-600">37</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaHome className="text-green-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Listed Properties</h2>
              <p className="text-xl font-bold text-green-600">92</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <FaChartBar className="text-yellow-600 text-2xl" />
            <div>
              <h2 className="text-sm font-semibold text-gray-700">Monthly Activity</h2>
              <p className="text-xl font-bold text-yellow-600">+18%</p>
            </div>
          </div>
        </div>

        {/* KYC Verification Table */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">KYC Requests</h2>
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs uppercase bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Submitted</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">elijah@barterverse.ng</td>
                <td className="px-4 py-2">Investor</td>
                <td className="px-4 py-2">Sept 2, 2025</td>
                <td className="px-4 py-2 text-yellow-600 font-semibold">Pending</td>
                <td className="px-4 py-2">
                  <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
                    Verify
                  </button>
                </td>
              </tr>
              {/* More rows can be mapped here */}
            </tbody>
          </table>
        </div>

        {/* Security Section */}
        <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
          <FaShieldAlt className="text-red-600 text-2xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Security Alerts</h2>
            <p className="text-sm text-gray-600">2 suspicious login attempts flagged this week.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;