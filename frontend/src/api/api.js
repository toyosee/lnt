import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// Base URL setup
const BaseURL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: BaseURL,
  withCredentials: true,
});

// Interceptor for token validation
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('lntToken');
  if (token) {
    try {
      const { exp } = jwtDecode(token);
      const isExpired = Date.now() >= exp * 1000;
      if (isExpired) {
        localStorage.removeItem('lntToken');
        window.location.href = '/login';
        return Promise.reject(new Error('Token expired'));
      }
      config.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.error('Error decoding token:', error);
      localStorage.removeItem('lntToken');
      window.location.href = '/login';
      return Promise.reject(new Error('Invalid token'));
    }
  }
  return config;
});

// AUTHENTICATION MANAGER
export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.post('/users/login', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('lntToken', token);
    localStorage.setItem('lntUser', JSON.stringify(user));
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return response;
  } catch (error) {
    console.error('Login error:', error);
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      'Login failed';
    throw new Error(message);
  }
};

export const registerUser = async ({ email, password, role, accepted_terms }) => {
  try {
    const response = await api.post('/users/register', {
      email,
      password,
      role,
      accepted_terms
    });

    const { token } = response.data;
    localStorage.setItem('lntToken', token);

    return response;
  } catch (error) {
    console.error('Registration error:', error);
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      'Signup Failed';
    throw new Error(message);
  }
};

// ✅ Profile Update API
export const updateProfile = async (profileData) => {
    console.log(profileData)
  try {
    const response = await api.put('/users/update-profile', profileData, {
      headers: {
        // DO NOT set 'Content-Type' manually for FormData
        Authorization: `Bearer ${localStorage.getItem('lntToken')}`, // adjust if token is stored elsewhere
      },
    });

    const updatedUser = response.data.user;

    // If profile picture is included, you can handle it here later
    // Example:
    // const profilePicUrl = response.data.user.profile_picture;
    // Do something with profilePicUrl if needed

    localStorage.setItem('lntUser', JSON.stringify(updatedUser));

    return response;
  } catch (error) {
    console.error('Profile update error:', error);
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      'Profile update failed';
    throw new Error(message);
  }
};

// ✅ View Profile API
export const fetchUserProfile = async () => {
  try {
    const response = await api.get('/users/profile');
    return response.data.user;
  } catch (error) {
    console.error('Fetch profile error:', error);
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      'Failed to fetch profile';
    throw new Error(message);
  }
};