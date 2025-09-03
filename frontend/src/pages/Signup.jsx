import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';
import useUser from '../hooks/useUser';
import { registerUser, api } from '../api/api';

const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [role, setRole] = useState('agent');

  const handleSignup = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const accepted_terms = e.target.accepted_terms.checked;

    if (!email || !password || !role || !accepted_terms) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = await registerUser({ email, password, role, accepted_terms });
      const { user: newUser, token } = response.data;

      localStorage.setItem('lntToken', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(newUser);
      localStorage.setItem('lntUser', JSON.stringify(newUser));

      toast.success('Account created successfully!');
      navigate(newUser.role === 'admin' ? '/dashboards/admin' :
        newUser.role === 'tenant' ? '/dashboards/tenant' :
          newUser.role === 'landlord' ? '/dashboards/landlord' :
            newUser.role === 'agent' ? '/dashboards/agent' :
              newUser.role === 'investor' ? '/dashboards/investor' :
          '/login');
    } catch (err) {
      const rawError = err.response?.data?.error;
      const errorMessage =
        typeof rawError === 'string'
          ? rawError
          : err.message || 'Signup failed';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create an Account</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Who are you?</label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="agent">Agent</option>
              <option value="investor">Investor</option>
              <option value="landlord">Landlord</option>
              <option value="tenant">Tenant</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="accepted_terms"
              required
              className="mr-2 leading-tight"
            />
            <span className="text-sm">
              I accept the{' '}
              <Link to="/privacy-policy" className="text-blue-600 hover:underline">
                terms and conditions
              </Link>
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;