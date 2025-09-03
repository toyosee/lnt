import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginUser } from '../api/api';
import useUser from '../hooks/useUser';

// Dashboard route logic based on role
const getDashboardRoute = (role) => {
  switch (role) {
    case 'admin':
      return '/dashboards/admin';
    case 'tenant':
      return '/dashboards/tenant';
    case 'landlord':
      return '/dashboards/landlord';
    case 'agent':
      return '/dashboards/agent';
    case 'investor':
      return '/dashboards/investor';
    default:
      return '/';
  }
};

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }

    try {
      const response = await loginUser({ email, password });
      const { user, token } = response.data;

      if (user && token) {
        localStorage.setItem('lntUser', JSON.stringify(user));
        localStorage.setItem('lntToken', token);
        setUser(user);
        toast.success('Login successful!');
        navigate(getDashboardRoute(user.role));
      } else {
        toast.error('Invalid login response. Please try again.');
      }
    } catch (error) {
      const message =
        error.message ||
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Login failed';
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-12 pb-10">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-600 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;