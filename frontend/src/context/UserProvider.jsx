import { useState, useEffect } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('lntUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to parse stored user:', err);
        localStorage.removeItem('lntUser');
      }
    }
    setLoading(false);
  }, []);

  // Refresh user from localStorage (e.g. after profile update)
  const refreshUser = () => {
    const storedUser = localStorage.getItem('lntUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to refresh user:', err);
        localStorage.removeItem('lntUser');
        setUser(null);
      }
    }
  };

  // Centralized logout
  const logoutUser = () => {
    localStorage.removeItem('lntUser');
    localStorage.removeItem('lntToken');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser, logoutUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;