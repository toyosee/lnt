import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserProfile } from '../api/api';
import { FaUser, FaEnvelope, FaPhone, FaUserShield } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const ViewProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await fetchUserProfile();
        setUser(profile);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-lg">Unable to load profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 mb-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <div className="flex flex-col items-center">
        <img
          src={user.profile_picture || 'https://randomuser.me/api/portraits/men/44.jpg'}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover mb-4 border border-gray-300"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaUser className="text-blue-500" />
          {user.name}
        </h2>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center text-gray-700">
          <FaEnvelope className="mr-2 text-indigo-500" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FaPhone className="mr-2 text-green-500" />
          <span>{user.phone || "N/A"}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <MdLocationOn className="mr-2 text-pink-500" />
          <span>{user.location || 'N/A'}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FaUserShield className="mr-2 text-yellow-500" />
          <span>{user.role || 'N/A'}</span>
        </div>
              {/*Add a button to redirect to update profile component */}
              <Link to="/profile">
                <button className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 rounded-lg">
                  Update Profile
                </button>
              </Link>
      </div>
    </div>
  );
};

export default ViewProfile;