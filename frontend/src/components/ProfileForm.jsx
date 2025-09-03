import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { updateProfile } from '../api/api';
import toast from 'react-hot-toast';
import useUser from '../hooks/useUser';
import { Navigate } from 'react-router-dom';

const ProfileForm = () => {
  const { user, setUser, loading } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    kyc: '',
    // profile_picture: null, // ⛔️ Skipped for now
  });

  // const [preview, setPreview] = useState(null); // ⛔️ Skipped for now

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
        location: user.location || '',
        kyc: user.kyc || '',
        // profile_picture: null,
      });
      // setPreview(user.profile_picture || null);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData((prev) => ({ ...prev, profile_picture: file }));
  //     setPreview(URL.createObjectURL(file));
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== '' && value !== null) {
          payload.append(key, value);
        }
      });

      const { data } = await updateProfile(payload);
      localStorage.setItem('lntUser', JSON.stringify(data.user));
      setUser(data.user);
      toast.success('Profile updated!');
    } catch (err) {
      console.error('Update error:', err);
      toast.error(err?.response?.data?.message || 'Update failed');
    }
  };

  if (loading) return null;
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6"
        encType="multipart/form-data"
      >
        {/* Profile Picture Upload Skipped */}
        {/* <div className="flex items-center gap-4">
          {preview ? (
            <img
              src={preview}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border"
            />
          ) : (
            <FaUserCircle className="text-gray-400 text-5xl" />
          )}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Profile Picture</label>
            <input
              type="file"
              name="profile_picture"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 text-sm"
            />
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />
        </div>

        <textarea
          name="kyc"
          placeholder="KYC Info"
          value={formData.kyc}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;